# MANIFEST — Design System

MANIFEST is a Legal Metrology e-commerce compliance scanner. It scans product listings and physical
products and flags declarations that the law requires but the pack or page does not carry —
manufacturer and packer, net quantity, retail sale price, month and year of manufacture, consumer
care details, country of origin.

The audience is an inspector, a compliance officer or a marketplace trust-and-safety team. The
product's job is to state, without softening, what is missing and which rule requires it. Every
design decision below serves that: the interface should read like a government case file that was
filled in on a factory floor.

## Products in this system

| Surface | Status | Where |
| --- | --- | --- |
| Scanner console (web app) | Built — 5 screens, interactive | `ui_kits/scanner/` |
| Marketing site | Not supplied | — |
| Mobile field app | Not supplied | — |

Only one product surface was described in the brief. Nothing else was invented.

## Sources given

- `uploads/Screenshot 2026-08-18 095059.png` — burnt-wood alphabet reference (a watermarked
  Shutterstock comp). Used as a **colour and character reference only**; the watermarked stock image
  is not shipped. The burnt fill in `assets/textures/burnt-wood.jpg` was generated to match the
  reference's palette (sampled: `#F09030`, `#D87818`, `#C07830`, `#A85818`, char `#5A2E0E`), grain
  direction, char cracks and ash flecks.
- `uploads/Screenshot 2026-08-18 095235.png` — scratched-metal reference. This one is shipped: it is
  mirror-tiled into a seamless plate and slightly cooled/darkened as
  `assets/textures/metal-plate.jpg` (light) and `metal-plate-dark.jpg` (rail/dark surfaces).
- Written brief: company description, accent colours (Case Red `#B23A2E`, Verified Green `#2E6E4E`,
  Pending Amber `#B8862F`), type direction (Archivo Black / IBM Plex Mono / IBM Plex Sans), mood
  ("industrial, official, forensic audit; no gradients, no glossy SaaS look, no rounded bubbly UI").

No codebase, Figma file or slide deck was provided. No logo file was provided — see **Logo** below.
If you have access to any of those, hand them over and this system should be re-derived from them.

## Type substitutions — please confirm

No font binaries were supplied. All three faces load from Google Fonts (`tokens/fonts.css`):

- **Archivo Black** — display/headline. This is the face named in the brief.
- **IBM Plex Mono** — data, codes, labels.
- **IBM Plex Sans** — body copy.

If MANIFEST has licensed brand faces (or a specific Archivo Black weight file), send the files and
`tokens/fonts.css` should be switched to local `@font-face` rules.

## Logo

**There is no MANIFEST logo in the supplied material, and none was drawn.** The wordmark *is* the
mark: `MANIFEST` set in Archivo Black uppercase over a wide-tracked IBM Plex Mono subline
("LEGAL METROLOGY AUDIT"), with a 2px rule between them. See `components/brand/Wordmark.jsx`.
Do not add a symbol, seal, badge or monogram. If a real mark exists, drop the SVG into `assets/` and
update `Wordmark`.

---

# CONTENT FUNDAMENTALS

**Voice.** An inspector writing a record that a court might read. Flat, specific, unhedged. It never
apologises, never congratulates, never sells.

**Person.** Third person and impersonal for findings — the subject is the listing, the pack, the
seller, never the reader. No "we", no "you" in findings. Second person appears only in operational
instruction to the seller in a served notice ("The seller is required to correct…" is preferred even
there). System messages address the terminal, not a friend.

- Yes: `Listing declares "1 pack". No net weight or volume in standard units.`
- Yes: `Net quantity absent · Rule 6(1)(d)`
- No: `Oops! We couldn't find the net quantity 😕`
- No: `Great job — you're all set!`

**Casing.** Three registers, applied strictly:
1. **UPPERCASE** — every UI label, button, tab, badge, table header, code, stamp and headline.
2. **Sentence case** — body sentences, findings prose, notes, help text.
3. **Verbatim** — extracted values are reproduced exactly as found on the pack or listing, including
   their own casing and punctuation, in mono. Never re-case evidence.

**Verdict vocabulary is fixed.** `COMPLIANT` / `VIOLATION` / `UNDER REVIEW` / `NOT APPLICABLE` /
`QUEUED`. A missing value prints `ABSENT` in Case Red — not "N/A", not "—", not "missing".

**Every finding cites its rule.** A statement without a citation is not a finding. Format:
`Rule 6(1)(d)` in prose, `R-6(1)(d)` in tight UI space.

**Numbers and units.** Always as declared: `500 g`, `1 L`, `₹ 249.00`, `11/2025`. Tabular numerals,
mono, no thousands abbreviations ("1102 cases", never "1.1k"). Dates in the field are
`18 AUG 2026 09:52` — day, uppercase month, year, 24-hour clock.

**Labels are nouns, buttons are verbs.** `NET QUANTITY`, `RETAIL SALE PRICE` (labels);
`RUN SCAN`, `RAISE VIOLATION`, `SERVE TO SELLER`, `CLEAR` (actions). Buttons are one to three words.

**Length.** Findings are one or two sentences. Panel intros do not exist. There is no marketing copy
inside the product. Empty states state the fact and stop: `NO CASES IN THIS FILTER`.

**Emoji: never.** Not in UI, not in copy, not in docs. No exclamation marks. No em-dash asides in
product copy. Unicode is used only where it is a real unit or symbol (`₹`, `×`, `→`, `·`).

**Codes are part of the voice.** Cases (`4471-B`), exhibits (`EXH-03`), forms (`FORM 27`), rule sets
(`R-6(1) PACKAGED`), terminals (`OFFICE 04`), cameras (`CAM 02`). Reference numbers make the product
feel accountable; use real-looking, consistent ones.

---

# VISUAL FOUNDATIONS

## The two textures

These are the identity. They are literal photographic/generated textures, not effects.

1. **Scratched metal plate** (`--texture-metal`, `.mf-plate`) is the background of every screen,
   full-bleed, repeating (`1162px 852px` seamless tile, mirror-generated from the reference).
   Dark surfaces — rails, camera frames, the sign-in panel — use `--texture-metal-dark`
   (`.mf-plate-dark`), the same plate at ~30% luminance. The plate is never blurred, never tinted a
   hue, never faded into a gradient, and never replaced by a flat fill "for performance".
2. **Burnt wood** (`--texture-burn`) fills display type only, clipped with `background-clip: text`,
   then roughened by an SVG `feTurbulence` + `feDisplacementMap` filter so letter edges are charred
   and uneven rather than vector-clean (`assets/mf-burn-edge.js` injects the filter;
   `components/brand/BurnHeading.jsx` does it for React). It is never a background, never behind
   body copy, never on a button.

**No gradients anywhere.** No glass, no glow, no bloom, no gloss, no bevel-and-emboss except the
literal 1px punched inset on fields.

## Colour

Ink `#131110` for type and every border — warm near-black, never pure `#000`. Steel neutrals
(`#4E4B47` → `#EFEDE9`) for surfaces, sampled off the plate. Docket paper (`#E8E4DC` → `#C4BEB2`) for
report/print surfaces.

Three accents, and their meaning is the whole point: **Case Red `#B23A2E`** = violation/fail,
**Verified Green `#2E6E4E`** = compliant/pass, **Pending Amber `#B8862F`** = partial/under review.
Amber also serves as the focus colour. Each has a dark and a light shade on the same hue, plus a 14%
wash for row tints (the wash is deliberately weak so plate grain still reads through). **No fourth
accent, no new hues, no colour used decoratively.** If a thing is red it failed.

Roughly: one accent per row, at most two accent regions per screen, everything else steel and ink.

## Type

- **Display** — Archivo Black, uppercase always, `line-height: 0.92`, `letter-spacing: -0.01em`,
  88/64/44/32/24/18px. Burnt fill. One display headline per view.
- **Data** — IBM Plex Mono, `letter-spacing: 0.02em`, tabular numerals, 20/15/13/11px. Every machine
  value: SKUs, quantities, prices, dates, rule codes, table cells.
- **Body** — IBM Plex Sans, 17/15/13/11px, `line-height: 1.5`. Findings prose and help text only.
- **Stamped label** — IBM Plex Mono 11px / 600 / `0.16em` / uppercase. Every field label, button,
  tab, header. Section headings in rails go to 9px / `0.24em`.

Body copy is the *rarest* register in this product. If a screen is mostly Plex Sans, something is
wrong.

## Layout

12–16px gutters, 16px panel padding (24px for dialogs and dockets), 38px ledger rows, 2px-rooted
spacing scale (2/4/6/8/12/16/20/24/32/40/56/80). Content max width 1280px; the rail is a fixed 216px
and does not collapse. Controls come in exactly three heights: 26 / 34 / 44px.

Layouts are rectangular grids that meet at hard edges — panels butt against each other, tables run
full-bleed inside their panel (`<Panel flush>`), nothing floats or centres itself in whitespace.
Fixed elements: the dark rail (left), the 52px top bar with a 2px ink bottom border, and dialogs
centred over an ink veil.

## Borders, corners, cards

`border-radius: 0` everywhere. `--radius-0` exists only so nobody has to invent a value.

Default border is 1px `--ink-900`; 2px for dialogs and top-bar baselines; a 4px ink slab where an
edge needs weight. Dividers are **perforated** (1px dashed ink) as the house style — the tear-line
off a docket — with dotted leaders (1px dotted steel) between a label and its value, and plain steel
hairlines between table rows.

A card in MANIFEST is a `Panel`: square, 1px ink border, optional solid-ink header bar with an
uppercase mono title and a dimmed code, and a hard offset shadow. There is no soft-shadow floating
card anywhere in the system, and no "rounded box with a coloured left border" — the one coloured
left edge that does exist (`Notice`) is a 4px slab on a fully bordered box.

## Shadow

Two mechanisms only:
- **Hard offset** — `2px 2px 0` / `4px 4px 0` / `7px 7px 0` at ~30% ink opacity: a plate resting on a
  plate. No blur radius, ever.
- **Punched inset** — `--shadow-punch` on fields and meters, so inputs read as recesses stamped into
  the plate.

No ambient shadow, no layered elevation ramp, no coloured shadow.

## Motion

Mechanical and short: 60ms press, 110ms hover/focus/toggle, 160ms panel and row state, 260ms view
swap and scan sweep, all on `cubic-bezier(.2,0,.3,1)`. Scan-log readouts step
(`steps(3,end)`). Nothing bounces, nothing eases in from below, nothing fades in over 400ms, nothing
loops decoratively. The one long movement in the product is the scan reticle sweep, and it is linear
because it represents a mechanism.

## Interaction states

- **Hover** — the offset shadow *lengthens* (2px → 5px) and the fill darkens one step
  (`--ink-900` → `--ink-700`, steel one stop up). Rows take a 5.5% ink wash. Never lighten, never
  scale up.
- **Press** — shadow collapses to 1px and the element translates `1px, 1px`: it is being stamped.
  No scale-down.
- **Focus** — a 1px inset Pending Amber ring plus an ink border. Never an outer glow, never a
  browser-default halo.
- **Selected** — solid ink block (tabs, rail rows use Case Red), or a 22% amber wash on a table row.
- **Disabled** — steel-300 fill, steel-500 border and text, no shadow, `not-allowed`. Disabled
  things are visibly dead metal, not faded.

## Transparency and blur

Blur is not used. Transparency is used in exactly three places: accent washes at 14% for row tints,
ink at 5.5–10% for hover, and the 62% ink dialog veil. Nothing else is translucent — no frosted
panels, no scrims over imagery.

## Imagery

Every image is evidence. Photographs run through `EvidenceSlot`: `grayscale(0.35) contrast(1.06)` so
the palette stays cool-grey and the accents remain the only saturated things on screen; a 1px frame
tinted by verdict; 2px corner crosshairs; an ink exhibit-code tab bottom-left. When there is no
image, the slot shows a 45° hatched placeholder that says what belongs there — MANIFEST never
invents or decorates with imagery, and there is no illustration system.

---

# ICONOGRAPHY

**No icon assets were supplied with the brand.** Icons come from **Lucide** (CDN, pinned
`lucide@0.544.0`), rendered through `components/core/Icon.jsx`. **This is a flagged substitution** —
if MANIFEST has its own glyph set, drop the SVGs or the icon font into `assets/icons/` and rewrite
`Icon` to read from it.

Rules of use:

- **Stroke weight 1.75** (heavier than Lucide's 2px-at-24 default appearance at small sizes), square
  caps and joins as shipped. Sizes: 11–15px inline, 15–18px in controls, 20–24px maximum.
- **Monochrome, always.** Icons take `currentColor` or one semantic token. Never two-tone, never
  filled shapes, never a coloured icon on a coloured chip.
- **Utility only.** Icons label actions and verdicts; they never decorate a headline, sit in an empty
  state as a mascot, or appear at hero size.
- **Fixed verdict glyphs**, so the mapping is learnable: `triangle-alert` = violation,
  `check` = compliant, `clock` = under review, `minus` = not applicable, `scan-line` = queued/scan,
  `shield-check` = cleared, `camera` = physical capture, `stamp` = raise/serve, `printer` = docket,
  `file-text` = notice, `book-marked` = rule book, `sliders-horizontal` = settings.
- **Emoji: never.** **Unicode as icon: only** `₹ × → ·` and similar real symbols in text runs.
- **No hand-drawn SVG.** If a needed glyph does not exist in Lucide, use a mono text code in a `Tag`
  instead (e.g. `R-18`) rather than drawing one.

---

# INDEX

## Root
- `readme.md` — this file: brand context, content and visual foundations, iconography, index.
- `SKILL.md` — Agent Skills front-matter so this folder works as a portable design skill.
- `styles.css` — the only entry point consumers link; `@import`s every token file.
- `thumbnail.html` — homepage tile for the system.
- `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json` — generated. Do not edit.

## Tokens (`tokens/`)
`fonts.css` (Google Fonts import) · `colors.css` · `typography.css` · `spacing.css` · `borders.css` ·
`elevation.css` · `texture.css` · `motion.css` · `utilities.css` (`.mf-body`, `.mf-plate`,
`.mf-plate-dark`, `.mf-burn`, `.mf-label`, `.mf-data`, `.mf-rule`, link colours).

## Assets (`assets/`)
- `textures/metal-plate.jpg` — seamless scratched plate (light), 1162×852.
- `textures/metal-plate-dark.jpg` — same plate for dark surfaces.
- `textures/burnt-wood.jpg` — burnt-wood fill for display type, 1600×560.
- `mf-burn-edge.js` — injects the SVG turbulence filter that roughens burnt letter edges.
- No logo file (none supplied). No icon files (Lucide from CDN).

## Components (`components/`)
23 primitives, grouped by concern. Each has `<Name>.jsx`, `<Name>.d.ts` and `<Name>.prompt.md`, and
each directory carries one `@dsCard` HTML.

- **brand/** — `Wordmark`, `BurnHeading`
- **core/** — `Button`, `IconButton`, `Icon`, `Tag`, `Panel`, `Rule`
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio`, `Toggle`
- **status/** — `StatusBadge`, `Stamp`, `ScoreMeter`, `Notice`
- **data/** — `FieldRow`, `DataTable`, `EvidenceSlot`
- **navigation/** — `Tabs`, `SidebarNav`
- **overlay/** — `Dialog`

**Intentional additions** (no source defined a component inventory, so this is an authored set sized
to the product): `Icon` exists as a thin Lucide wrapper so glyph substitution is centralised;
`BurnHeading`, `Stamp`, `FieldRow`, `ScoreMeter` and `EvidenceSlot` exist because the burnt headline,
the rubber stamp, the declaration row, the segmented score and the framed exhibit are the brand's
specific mechanics and would otherwise be re-invented per screen.

## Foundation cards (`guidelines/`)
20 specimen cards feeding the Design System tab — Colors (accents, accent shades, steel, ink, paper,
washes), Type (burnt display, display scale, mono data, body sans, stamped labels), Spacing (scale,
control heights, row rhythm), Brand (plate, burnt texture, borders & rules, elevation, motion,
interaction states).

## UI kit (`ui_kits/scanner/`)
`index.html` (interactive click-through) · `LoginScreen.jsx` · `AppShell.jsx` · `ScanQueue.jsx` ·
`CaseFile.jsx` · `ScannerCapture.jsx` · `NoticeDocket.jsx` · `Placeholder.jsx` · `data.js` ·
`README.md`. See that README for the flow.

## Not built
No slide template was supplied, so there are no sample slides. No marketing site or mobile surface
was described, so neither was built.
