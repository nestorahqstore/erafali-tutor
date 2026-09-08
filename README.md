# Eraf Ali — Tutor Website

A static, responsive personal tutoring website (HTML + CSS + vanilla JS, no build tools, no backend).

## Folder structure

```
erafali-tutor/
├── index.html      ← all page content
├── style.css       ← all styling
├── script.js       ← nav menu, testimonial tabs, footer year
├── assets/         ← put images / audio / video files here (empty for now)
└── README.md
```

## 1. Run it locally

You don't need any special setup — it's a plain static site.

**Option A — just open it**
Double-click `index.html` (or right-click → Open with your browser).

**Option B — local server (recommended, avoids any browser file-access quirks)**
If you have Python installed, open a terminal in the project folder and run:
```
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

## 2. Deploy for free with GitHub Pages

1. Create a free GitHub account at https://github.com if you don't have one.
2. Create a **new repository**, e.g. named `erafali-tutor` (public).
3. Upload these files to the repository (via the GitHub website "Add file → Upload files", or `git push`):
   - `index.html`
   - `style.css`
   - `script.js`
   - the `assets` folder (and anything you add inside it)
   - `README.md` (optional, not required for the site to work)
4. In the repository, go to **Settings → Pages**.
5. Under "Build and deployment", set **Source** to `Deploy from a branch`.
6. Choose branch `main` and folder `/ (root)`, then **Save**.
7. Wait a minute, then GitHub will give you a live URL such as:
   `https://YOUR-USERNAME.github.io/erafali-tutor/`

That's it — the site is live and free, with no server to maintain.

## 3. How to update things

### WhatsApp number
Search the project for `917017723136` (found in `index.html` in the nav button, hero, and contact section) and replace it with your number in international format, no `+` or spaces, e.g. `91XXXXXXXXXX`.
The pre-filled message text sits right after `?text=` in each link — edit the URL-encoded text if you want to change the wording.

### Preply profile URL
Search `index.html` for `https://preply.com/en/tutor/8498526` and replace every occurrence with your Preply profile link.

### YouTube channel URL
Search `index.html` for `https://www.youtube.com/channel/UCl8zbj46ng4LZFF8iQOPYBQ` and replace every occurrence with your channel link.

### Testimonials
Open `index.html` and find the comment block:
```html
<!-- ============================================================
     TESTIMONIAL DATA — EDIT HERE
     ============================================================ -->
```
It sits right before the testimonials section and explains exactly how to:
- add a **written** testimonial (duplicate a `.testimonial-card` block)
- add a **video** testimonial (duplicate a `.video-card` block, add a YouTube `<iframe>` embed)
- add an **audio** testimonial (duplicate an `.audio-card` block, add an `<audio>` tag pointing to a file in `assets/`)

Never invent or add fake testimonials — only real student feedback.

### Google Form link ("Share Your Experience" button)
Search `index.html` for:
```html
<a class="btn btn-primary" href="https://forms.google.com/" ...>Share Your Experience</a>
```
Replace `https://forms.google.com/` with your real Google Form URL (e.g. `https://forms.gle/xxxxxxxx`).

### Subjects taught
The subjects live inside the `<section class="section subjects" id="subjects">` block in `index.html`, organised into four cards: **School Mathematics**, **Core Mathematics**, **Advanced Mathematics**, **Programming**. Add or remove `<li>` items inside each card's `<ul class="tag-list">` to change what's listed.

## 4. Which files to upload to GitHub

Upload the entire folder contents:
- `index.html`
- `style.css`
- `script.js`
- `assets/` (even if currently empty, it's where you'll drop future photos, audio, and video files)

No paid dependencies, no API keys, no backend, and no database are required — the site is 100% static and free to host.
