# Bakkerij Gevaert website

One-page site for Bakkerij Gevaert, Polderstraat 55, 8301 Heist-aan-Zee. Designed and built by Tuur Mattheeuws (graphic designer, works on Mac). Talk to Tuur in Dutch (Flemish).

## Writing rules
- Never use the em-dash character in any text (site copy, comments, answers to Tuur).
- Site copy is Dutch (nl-BE). Place name is always written "Heist-aan-Zee".
- Do not invent products, prices or facts about the bakery. Ask Tuur.

## Stack (deliberate choice)
- Static site: `index.html` + Tailwind CSS (CLI) + a little vanilla JS. No framework.
- Next.js was considered and rejected: one page, rarely changes, owners are not technical, static hosting means nothing to maintain or break. Only revisit if the site grows (product pages, order form, multiple languages, webshop).
- Tailwind v3.4.16. Config in `tailwind.config.js`, source CSS (fonts + small custom classes) in `input.css`, output in `css/site.css` (committed, minified).

## Commands
```bash
npm i -D tailwindcss@3.4.16                                   # once
npx tailwindcss -i input.css -o css/site.css --watch          # while editing
npx tailwindcss -i input.css -o css/site.css --minify         # before publishing
python3 -m http.server 3000                                   # preview on http://localhost:3000
```
Open `index.html?demo` to preview the vacation banner.
Always rebuild `css/site.css` after adding new Tailwind classes, otherwise they have no effect.

## Brand (from the huisstijlgids)
Colors (Tailwind tokens):
- `bordeaux` #7A232C (primary), `bordeaux-dark` #5E1A21 (footer)
- `roze` #DBA5A5 (primary, light pink), `roze-light` #F6E6E6 (tint)
- `donkerroze` #B15F67 (secondary, accents only, not for small text)
- `beige` #E2B881 (secondary), `beige-light` #F8EEE0 (section background)
- `ink` #3A1517 (body text), white

Fonts:
- Headings: Shantell Sans Bouncy, medium (500) italic. Class `font-hand` (sets italic, weight 500, BNCE axis 50). Self-hosted in `fonts/`.
- Secondary / body: Adonis (Adobe Fonts). Not available here, so Alegreya (400/500/700, self-hosted) is a temporary stand-in. To switch: add the Adobe Fonts web kit `<link>` and change `fontFamily.serif` in `tailwind.config.js` to `['adonis-web', ...]`.

## Logos and illustrations (`img/`)
Original SVGs live on Tuur's Mac in "Huisstijil - Bakkerij Gevaert/SVG". Rules from Tuur:
- Colored logos may be recolored freely.
- The white Visser files (`Wit_Visser*.svg`) are specifically drawn inverted for dark backgrounds. Never recolor or modify them; use them as-is.

Files in use:
- `woordmerk-enkel-wit.svg`: wordmark "Gevaert" only, white (recolored from Rood_Woordmerk - Enkel). Hero.
- `woordmerk-totaal-wit.svg`: wordmark + "Sinds 1931 / Uw warme bakker", white. Footer.
- `visser-wit.svg`: original Wit_Visser.svg (the baker with peel and basket). Section 4, on bordeaux.
- `visser-haak.svg`: Rood_Visser - haak recolored #7A232C (Visser fishing). Vacation banner, on pink.
- `icoon.svg`: the G icon. Favicon.
The mascot is called "de Visser".

## Page structure (approved by Tuur, section by section)
1. Hero: full-bleed night photo of the shop window (`etalage.webp`) with bordeaux overlay, only the white wordmark (Woordmerk - Enkel), two buttons: "Bel om te bestellen" (tel:) and "Openingsuren" (#bezoek). No navigation bar, no info strip below the hero (both removed on purpose).
2. Over ons: photo of Jan and Severine left with a "Jan & Severine" label, text right, stats row (1931 / 3de generatie / 2000). Text (approved):
   - "In de Polderstraat in Heist-aan-Zee wordt al drie generaties lang ambachtelijk gebakken."
   - "Wat in 1931 begon bij de familie De Grauwe en later werd voortgezet door de familie Gevaert, is vandaag nog altijd een begrip voor vers brood en lekkers."
   - "Sinds 2000 staan Jan Gevaert en zijn vrouw Severine Allegaert aan het roer, en elke ochtend staan ze klaar voor de hongerige Heistenaar."
3. "Vers. Warm. Ambachtelijk.": beige-light section, heading left, short text + arrow buttons right, horizontal scroll-snap photo gallery. Keep as is.
4. "Iets speciaals nodig? / bel ons even" (lowercase b, no period): built to Tuur's design at 2000 x 771. Section uses `aspect-[2000/771]` on desktop and all positions in % / vw so the composition scales. Text block at left 23.4%; bold body text; small white pill button "Bestel hier" with phone icon (tel:). The Visser at left 46.8%, height 124% of the section, top 0: some space above the peel, legs cut off at the bottom by `overflow-hidden`. On mobile: centered text, Visser below, also cut off at the bottom.
5. Openingsuren table (today's row highlighted in bordeaux via JS) + address card with "Route plannen" (Google Maps link) and phone.
6. Footer: total wordmark, address line, copyright.
Design version 1 was preferred over a later version with a nav bar, primary building logo in the hero and product cards. Do not reintroduce those without asking.

## Practical info
- Phone: 050 51 12 68 (link `tel:+3250511268`)
- Opening hours: Mon, Tue, Fri, Sat, Sun 06:30 to 19:00. Wednesday and Thursday closed. Note under the table: hours may differ on holidays.
- Hours appear twice: in the HTML table and in `OPEN_DAGEN` in the script. Keep both in sync.

## Vacation banner
The owners (Jan and Severine) are not technical and must be able to set a holiday notice without Tuur and without a CMS.
- Source: a Google Sheet published as CSV (File > Share > Publish to web > CSV). Columns: `Van | Tot en met | Bericht` (Bericht optional). Dates as d/m/yyyy or yyyy-mm-dd. Template: `vakantie-sjabloon.csv`.
- Paste the published CSV link in `VAKANTIE_SHEET` at the top of the script in `index.html` (currently empty, so no banner).
- Behaviour: banner appears `BANNER_DAGEN_VOORAF` (14) days before the holiday ("Let op: van ... tot en met ... zijn we met vakantie."), during the holiday it says when they reopen (skips Wednesday/Thursday), and disappears automatically afterwards. A filled-in Bericht overrides the default text.
- Google Business Profile was considered: the Places API only returns special hours for the next 7 days and needs an API key + server, so it is not used for the banner. Possible later: pull regular hours from Google Business Profile if the site moves to a server setup.

## Photos
- Originals (152 photos, 2048 px, Z62_8239 to Z62_8410) are on Tuur's drive `/Volumes/Tuur/Gevaert`. Site uses WebP exports at max 1800 px, quality 74.
- In use: etalage (8361), jan-severine (8320), toonbank (8259), manden (8266), broodjes (8374), kastjes (8304), rekken (8261), plus koeken, donut, jan, severine, confituur (added by Tuur as JPG, converted to WebP the same way).
- Do not use photos where customers are recognizable.

## Open items
- Replace Alegreya with Adonis via Adobe Fonts.
- Responsive images (`srcset`), meta/Open Graph tags + share image, `LocalBusiness` structured data (address, hours, phone), full favicon set.
- Create the Google Sheet for the owners and fill in `VAKANTIE_SHEET`.
- Hosting: static (Netlify, Cloudflare Pages, GitHub Pages or the hosting of their domain).
- The huisstijlgids PDF still has template leftovers: "Business Name: Smederij (JC 'T verzet)" and the primary color labelled "Groen/Blauw".
