# MANIFEST — Legal Metrology Compliance Scanner

UI mockups for **MANIFEST**, a Legal Metrology e-commerce compliance scanner — plus a working demo (`app.html` + `server.js`) that runs the same four-screen flow against a real LLM.

## Running the working demo

The demo calls the Groq API to extract the 7 mandatory declarations from pasted listing text and render a real verdict.

1. Create a `.env.local` file in the project root (gitignored) with your key:
   ```
   GROQ_API_KEY=your_key_here
   ```
2. Start the server:
   ```
   npm start
   ```
3. Open `http://localhost:8787` in a browser, paste a product listing's text, and click **Run scan**.

The server (`server.js`) is the only thing that reads `GROQ_API_KEY` — it proxies the Groq call and the key never reaches the browser. `.env.local` is gitignored and must never be committed.

## Screens

Four screens make up the flow:

1. **Intake** — bring in a product listing for review
2. **Scanning** — the scanner analyzing the listing against Legal Metrology rules
3. **Verdict / Violations** — result screen showing detected compliance violations
4. **Verdict / Compliant** — result screen confirming the listing passes compliance checks

## Viewing the static mockups

Open **`MANIFEST Flow.dc.html`** in a browser to see all four screens together (fixed sample data, no live API calls).

Individual design components are also broken out into their own files:

- `MANIFEST Hero.dc.html`
- `MANIFEST Mockups.dc.html`
- `MANIFEST Scanning.dc.html`
- `MANIFEST Verdict.dc.html`
- `MANIFEST-Flow-standalone.html` — a self-contained standalone build of the full flow

## Design system

Shared tokens, styles, and assets used across the mockups live under `_ds/`.
