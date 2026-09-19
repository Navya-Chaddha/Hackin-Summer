# Hackin' Summer 2026 Website

This project is a static, responsive website for the Hackin' Summer 2026 hackathon. It is designed to be easily editable by event organizers without requiring extensive coding knowledge.

## How to Edit Content

All provisional and unconfirmed event details are stored in a single configuration file.

1. Open `config.js` in any text editor.
2. Modify the values inside the `window.HS_CONFIG` object.
3. Refresh the website in your browser to see the changes instantly.

### Editing Registration Links
Change the `registrationUrl` in `config.js`. When set to `null`, all buttons will automatically display "Registration opens soon".

### Editing Sections (Tracks, Mentors, Schedule)
Sections like Tracks, Mentors, and Schedule have a `visible: true` property. If you want to hide a section completely until you have final data, simply change it to `false`.

## Adding Assets (Images)
1. Ensure the `assets/` folder exists in the root directory.
2. Place the required images inside:
   - `mascot-one-blue.png`
   - `mascot-two-blue.png`
3. Update mentor, judge, and sponsor image paths in `config.js` to point to the correct files in the `assets/` folder.

## Development
This is a standard HTML/CSS/JS project. No build tools (like Node.js, npm, or Webpack) are strictly required. 
To view the site locally:
- You can simply double-click `index.html` in your file browser.
- Alternatively, run a simple local server (e.g., `python3 -m http.server`) for the best experience.
# Hackin-Summer
