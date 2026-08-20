// Minimal static file server + Groq proxy for the MANIFEST scanner.
// GROQ_API_KEY is read from .env.local (gitignored) and never sent to the browser.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 8787;
const GROQ_MODEL = 'openai/gpt-oss-120b';

function loadEnvLocal() {
  const envPath = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const val = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadEnvLocal();

const FIELDS = [
  { key: 'manufacturer', label: 'Manufacturer/packer' },
  { key: 'netQuantity', label: 'Net quantity' },
  { key: 'mrp', label: 'MRP' },
  { key: 'unitSalePrice', label: 'Unit sale price' },
  { key: 'mfgDate', label: 'Month & year of mfg' },
  { key: 'customerCare', label: 'Customer care contact' },
  { key: 'countryOfOrigin', label: 'Country of origin' }
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

function sendJSON(res, status, body) {
  const data = JSON.stringify(body);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(data) });
  res.end(data);
}

function extractJSON(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object found in model output');
  return JSON.parse(text.slice(start, end + 1));
}

async function callGroq(listing) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error('GROQ_API_KEY is not set. Add it to .env.local');

  const fieldList = FIELDS.map(f => `- ${f.key}: ${f.label}`).join('\n');
  const system = `You are a Legal Metrology (Packaged Commodities) Rules, 2011 compliance auditor for Indian e-commerce listings. Given a product listing's raw text, decide whether each of the following 7 mandatory declarations is actually present in the listing text, and extract its value verbatim when present.

Fields:
${fieldList}

Respond with ONLY a JSON object of this exact shape, no prose:
{
  "fields": {
    "manufacturer": { "found": boolean, "value": string|null },
    "netQuantity": { "found": boolean, "value": string|null },
    "mrp": { "found": boolean, "value": string|null },
    "unitSalePrice": { "found": boolean, "value": string|null },
    "mfgDate": { "found": boolean, "value": string|null },
    "customerCare": { "found": boolean, "value": string|null },
    "countryOfOrigin": { "found": boolean, "value": string|null }
  }
}

Be strict: only mark a field found if the listing text actually states it. Do not invent values.`;

  const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.1,
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: `LISTING TEXT:\n"""\n${listing}\n"""` }
      ]
    })
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    throw new Error(`Groq API error ${resp.status}: ${errText.slice(0, 300)}`);
  }

  const data = await resp.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('Groq API returned no content');
  const parsed = extractJSON(content);

  return FIELDS.map(f => {
    const entry = parsed.fields?.[f.key] || {};
    return { key: f.key, label: f.label, found: !!entry.found, value: entry.found ? (entry.value || null) : null };
  });
}

function readBody(req, limit = 200_000) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) { reject(new Error('Payload too large')); req.destroy(); return; }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.method === 'POST' && req.url === '/api/scan') {
      const body = await readBody(req);
      let listing;
      try { listing = JSON.parse(body).listing; } catch { return sendJSON(res, 400, { error: 'Invalid JSON body' }); }
      if (!listing || typeof listing !== 'string' || !listing.trim()) {
        return sendJSON(res, 400, { error: 'Missing "listing" text' });
      }
      const fields = await callGroq(listing.trim().slice(0, 8000));
      const missing = fields.filter(f => !f.found).length;
      return sendJSON(res, 200, {
        caseId: `${4400 + Math.floor(Math.random() * 400)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
        generatedAt: new Date().toISOString(),
        fields,
        missing,
        compliant: missing === 0
      });
    }

    // Static file serving
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/') urlPath = '/app.html';
    const filePath = path.normalize(path.join(ROOT, urlPath));
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end('Forbidden'); }
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) { res.writeHead(404); return res.end('Not found'); }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } catch (err) {
    sendJSON(res, 500, { error: err.message || 'Internal error' });
  }
});

server.listen(PORT, () => {
  console.log(`MANIFEST running at http://localhost:${PORT}`);
});
