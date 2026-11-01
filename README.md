# A birthday surprise for Dellareese ♡

## Dellareese’s Little Corner of Happiness — version 2

The original birthday experience remains intact. The journal was removed at your request; Daily Blessings and encrypted Future Letters remain. Previously stored journal records are left untouched on the device, but the journal interface no longer appears. At the end of it, two permanent tools provide a place to keep memories and return for encouragement. Follow the opening-screen shortcut, use the navigation link, or bookmark the deployed address with `#happiness`. “Make this my starting place” saves a preference in this browser so future visits skip the birthday reveal. “Celebrate again” still returns to the birthday greeting.

### Daily Blessings

`blessings.js` contains 365 distinct original messages: encouragement, gratitude, affirmations and gentle prayers, without scripture quotations. A deterministic 365-day cycle follows the South African calendar, including leap days; consecutive days always get different messages. It repeats after 365 days, rather than skipping or duplicating a leap-day blessing. The page checks for midnight changes every second and when it becomes visible again. Save favourites to IndexedDB, remove them, copy a message, or open a WhatsApp sharing link. Sharing opens a composer; it does not send automatically. The browser may require opening this website directly in Safari or Chrome rather than inside WhatsApp.

### Encrypted letters to a future self

Write one or more letters, each with a title, future opening date, password and confirmation. The default is 2 November 2027 (her 39th birthday); after that date passes, the default moves to tomorrow. A long memorable passphrase is encouraged. Unsealed letters remain only in the open page; they are not saved as plaintext drafts. Leaving with unfinished writing triggers a browser warning when supported.

Web Crypto derives a non-extractable 256-bit AES-GCM key from the password using PBKDF2-HMAC-SHA-256. Each letter receives a fresh cryptographic 16-byte salt and 12-byte IV. A local calibration targets roughly 500ms, bounded between 600,000 and 1,500,000 iterations. The key and password are never persisted. The authenticated data binds the envelope ID, title, creation date, opening date and iteration count to the ciphertext. Modified ciphertext or bound metadata fails authentication.

IndexedDB stores ciphertext and envelope metadata, including whether the letter has been opened before. The letter stays encrypted at rest even after opening. On or after its opening date in Africa/Johannesburg, enter the password to read it; Close and lock removes readable content from the page. Reading does not replace the encrypted copy. Before that date, the normal interface provides only a sealed envelope and countdown.

**The date is a user-interface promise, not a security boundary.** A changed device clock or modified client code can bypass it. Encryption provides confidentiality, dependent on the chosen password. This is not a claim that the entire website or the journal is password-protected. HTTPS is required in production; localhost is also supported by Web Crypto. No private content, password or key is sent to GitHub or a server.

Export encrypted letters produces a JSON backup containing only encrypted letters and visible envelope metadata. Import validates and restores these records, including on another device. Matching IDs are replaced only after confirmation. The original password is still required. Forgotten passwords cannot be reset or recovered, and lost data cannot be restored automatically. Titles and dates are not secret, so avoid sensitive details in titles.

### Local storage and privacy

All personal records live in IndexedDB database `dellareese-happiness`, with separate `journal`, `letters`, `favourites` and `settings` stores. Nothing is committed to the repository. Journal contents and drafts are readable in local browser storage. Anyone using that browser profile may access them. Private browsing, browser data clearing, device changes, storage eviction and browser restrictions can remove or isolate data. Closing a normal browser session usually preserves data, but no static site can guarantee it indefinitely: export regular backups. Changing the hosting origin will require importing backups. Other sites hosted under the same origin can access that origin’s storage; use a trusted GitHub account and hosting origin. No analytics, tracking or private-data network APIs are included. Optional Google Fonts still load public font files.

### Upgrade validation

Run `node --test tests/*.test.mjs` and `node scripts/build.mjs`. Tests cover original birthday calculations, 365 unique messages, midnight and leap-day rotation, opening-day boundaries, password policy, correct and wrong passwords, authenticated tamper rejection, unique salts/IVs, encrypted JSON restoration and malformed imports. Browser checks use disposable sample records to verify draft recovery, journal saving/editing/search, reopening persistence, favourites and letter sealing/export. No real personal writing is needed for testing.

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

1. Create a **public** GitHub repository named `della`. The website contains personal birthday details, so only upload photographs you want publicly accessible.
2. From this folder:

```sh
git init -b main
git add .
git commit -m "Build Dellareese's birthday surprise"
git remote add origin https://github.com/YOUR-USERNAME/della.git
git push -u origin main
```

3. On GitHub open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Open **Actions → Deploy birthday surprise**. If the first run happened before Pages was enabled, choose **Run workflow**.
5. Once the deployment succeeds, the link is `https://YOUR-USERNAME.github.io/della/`.

All asset URLs are relative (`./` implicitly), so the project repository base path works without a Vite base setting. The included workflow runs date tests, builds, uploads `dist`, and deploys automatically on every push to `main`. Do not commit `dist` or deploy the source to a separate branch.

Open the live link on a phone, then use **Share the love** or paste it into WhatsApp. The share button uses native sharing when available, with a WhatsApp link as fallback. Do not share a localhost address.

## Design and accessibility

Blush, ivory and champagne tones; decorative CSS artwork; optional Google Fonts with system serif/sans fallbacks; no external JavaScript dependencies. Keyboard controls, labelled buttons, native modal focus handling, touch targets, reduced motion, lazy-loaded real photos and responsive layouts are included. The heart game is optional; no microphone or personal information is needed. Photo placeholders become interactive only once real paths are configured.
