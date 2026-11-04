# Sai Kiran & Keerthana — Wedding Invitation Website

A responsive traditional South Indian wedding invitation made with HTML, CSS and JavaScript.

## Open in VS Code
1. Extract this ZIP.
2. Open the extracted `sai_kiran_keerthana_wedding` folder in VS Code.
3. Open `index.html` in a browser, or install the VS Code extension **Live Server**, right-click `index.html`, and choose **Open with Live Server**.

## Personalise it
- Names/date/address: edit the text in `index.html`.
- Wedding time for countdown: edit `weddingDate` near the top of `script.js`. It currently uses 9:00 AM IST as a placeholder because the muhurtham time was not provided.
- Event timings: update the four event cards in `index.html`. Haldi, Sangeet and Reception currently say “Details to be announced” — replace them when confirmed.
- Photos: copy your own photos into `images/` and change each `.gallery-tile` in `index.html` to an image tile. Example:
  `<div class="gallery-tile" style="background-image:url('images/couple.jpg')"><span>Our favourite moment</span></div>`
  For a better crop, add `background-size:cover;background-position:center;` to that element's style.
- Music: add an MP3 file named exactly `wedding-music.mp3` inside the `music/` folder. The site has a play/pause button. It does not autoplay because most browsers block autoplay with sound until a visitor interacts.

## Publish free with GitHub Pages
1. Create/sign in to GitHub.
2. Create a new **Public** repository, e.g. `sai-kiran-keerthana-wedding`.
3. Upload the contents of this folder (index.html, style.css, script.js, images folder, music folder).
4. In the repository open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main**, folder **/(root)**, then Save.
7. Wait for GitHub Pages to publish. Your site URL will look like:
   `https://YOUR-GITHUB-USERNAME.github.io/sai-kiran-keerthana-wedding/`

## Notes
- The Google Maps embed and directions link use a place-name search for the venue. Verify the exact pin before sharing with guests.
- Compress large photos before uploading so the site loads quickly on mobile.
- The site is static; no database or paid hosting is required.
