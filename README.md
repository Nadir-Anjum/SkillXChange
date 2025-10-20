# SkillXChange Landing (Vite + React + Tailwind)

A one-page, deploy-ready site for SkillXChange.

## Local dev
```bash
npm i
npm run dev
```
Open http://localhost:5173

## Deploy to GitHub Pages
1. Create a repo on GitHub (suggested: `skillxchange-landing`).
2. Push this project:
```bash
git init
git add .
git commit -m "init: SkillXChange landing"
git branch -M main
git remote add origin https://github.com/<YOUR-USER>/<YOUR-REPO>.git
git push -u origin main
```
3. Enable Pages
   - Settings → Pages → Source: **GitHub Actions**

4. The included workflow builds and publishes automatically to Pages. Your site will be live at:
   - `https://<YOUR-USER>.github.io/<YOUR-REPO>/`

If you fork or rename the repo later, the workflow autodetects the `base` path via env.
