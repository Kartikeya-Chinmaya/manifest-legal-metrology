const { scan } = require('../lib/groq');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  try {
    const listing = req.body?.listing;
    if (!listing || typeof listing !== 'string' || !listing.trim()) {
      res.status(400).json({ error: 'Missing "listing" text' });
      return;
    }
    const result = await scan(listing);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message || 'Internal error' });
  }
};
