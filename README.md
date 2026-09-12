# The Football Argument

A football argument about the people who built the clubs you love.

Thirty clubs. The presidents, coaches, and players who made them what they are today.

## Tech stack

- **TanStack Start** (React Router + SSR)
- **Vite 8** + **Nitro** (Netlify preset)
- **Tailwind CSS 4**
- **Better Auth** + **PGLite** (local-first / edge-friendly DB)
- PWA-ready

## Local development

```bash
npm install
npm run dev
```

App runs at http://localhost:8080

```bash
npm run build
npm run preview
```

## Deploy to Netlify

This project is configured for **Netlify** via Nitro (`preset: "netlify"`).

### Option 1 — Connect the GitHub repo (recommended)

1. Push this repo to GitHub (already done if you followed the setup).
2. Go to [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Select the GitHub repository.
4. Build settings (usually auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist` (or whatever Nitro emits — check build output)
5. Deploy.

### Option 2 — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Environment variables

If you enable auth or external services, add the required env vars in the Netlify UI under **Site settings → Environment variables**.

## License

Private / personal project.
