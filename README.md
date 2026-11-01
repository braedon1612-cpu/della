# A birthday surprise for Dellareese ♡

A personal 38th birthday gift from Braedon & Jadine, celebrating 2 November 2026. A static, mobile-first website with a surprise reveal, live lifetime counters, a letter, photo galleries and lightbox, interactive cake, 30-second heart game, 38 wishes, and a final gift.

## Run locally

Install Node.js 22 or newer. There are **no dependencies to install**, API keys, backend or paid services.

```sh
npm run dev
# Open http://127.0.0.1:4173
npm test
npm run build
```

If npm is unavailable, run `node scripts/serve.mjs`, `node --test tests/*.test.mjs`, and `node scripts/build.mjs` directly. The production site is written to `dist/`. The source can also be served by any static HTTP server.

## Personalise

Edit `config.js`. It contains the name, senders, birth date/time, celebration date/number, messages, 38 reasons, photos and music settings. Her original birth time is unknown: midnight in Africa/Johannesburg is assumed and disclosed on the page. Calendar age and completed months are calendar based; weeks through seconds are elapsed time. South Africa uses UTC+02:00 with no daylight saving during this lifetime. If adapting this project to another timezone, update the conversion in `time.js` too.

The celebration is intentionally for her 38th birthday; the lifetime counter always displays her actual current age, even before or after that date. The countdown changes at local midnight on the birthday and the following day.

## Add photos

1. Save appropriately sized photos in `public/photos/` (recommended WebP or JPEG, about 1200px wide, under 300KB).
2. Update a photo in `config.js`, for example:
   `{src:'public/photos/mum.webp',caption:'A moment to treasure',alt:'Dellareese smiling in the garden',group:'memories'}`.
3. Set `group:'family'` for the family gallery. The first gallery photo is featured. Add more entries as desired.
4. Blank paths show clearly labelled decorative placeholders; no family photographs are fabricated. Broken images gracefully return to a placeholder. Added photos open in a keyboard-accessible fullscreen viewer with arrows, Escape and mobile swipe.

## Optional music

Add a licensed audio file at `public/music/birthday.mp3`, then enable `music.enabled` in `config.js`. Playback is attempted only after the opening button is pressed. A visible music button allows pause/play. Missing audio never blocks the experience. Music is off by default.

## Publish free with GitHub Pages

1. Create a **public** GitHub repository named `machine-birthday-surprise`. The website contains personal birthday details, so only upload photographs you want publicly accessible.
2. From this folder:

```sh
git init -b main
git add .
git commit -m "Build Dellareese's birthday surprise"
git remote add origin https://github.com/YOUR-USERNAME/machine-birthday-surprise.git
git push -u origin main
```

3. On GitHub open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Open **Actions → Deploy birthday surprise**. If the first run happened before Pages was enabled, choose **Run workflow**.
5. Once the deployment succeeds, the link is `https://YOUR-USERNAME.github.io/machine-birthday-surprise/`.

All asset URLs are relative (`./` implicitly), so the project repository base path works without a Vite base setting. The included workflow runs date tests, builds, uploads `dist`, and deploys automatically on every push to `main`. Do not commit `dist` or deploy the source to a separate branch.

Open the live link on a phone, then use **Share the love** or paste it into WhatsApp. The share button uses native sharing when available, with a WhatsApp link as fallback. Do not share a localhost address.

## Design and accessibility

Blush, ivory and champagne tones; decorative CSS artwork; optional Google Fonts with system serif/sans fallbacks; no external JavaScript dependencies. Keyboard controls, labelled buttons, native modal focus handling, touch targets, reduced motion, lazy-loaded real photos and responsive layouts are included. The heart game is optional; no microphone or personal information is needed. Photo placeholders become interactive only once real paths are configured.
