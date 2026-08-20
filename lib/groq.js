const GROQ_MODEL = 'openai/gpt-oss-120b';

const FIELDS = [
  { key: 'manufacturer', label: 'Manufacturer/packer' },
  { key: 'netQuantity', label: 'Net quantity' },
  { key: 'mrp', label: 'MRP' },
  { key: 'unitSalePrice', label: 'Unit sale price' },
  { key: 'mfgDate', label: 'Month & year of mfg' },
  { key: 'customerCare', label: 'Customer care contact' },
  { key: 'countryOfOrigin', label: 'Country of origin' }
];

function extractJSON(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object found in model output');
  return JSON.parse(text.slice(start, end + 1));
}

async function callGroq(listing) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error('GROQ_API_KEY is not set');

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

async function scan(listing) {
  const fields = await callGroq(listing.trim().slice(0, 8000));
  const missing = fields.filter(f => !f.found).length;
  return {
    caseId: `${4400 + Math.floor(Math.random() * 400)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
    generatedAt: new Date().toISOString(),
    fields,
    missing,
    compliant: missing === 0
  };
}

module.exports = { FIELDS, callGroq, scan };
