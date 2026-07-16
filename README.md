# Felix Hausiku — Portfolio

Next.js 15 (App Router) + Tailwind CSS. Dark "ledger/terminal" theme — the
scrolling strip under the hero is real data: your IEEE DOI, patent number,
deployed Monad contract address, and live project URLs.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (matches your existing stack)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo → Deploy.
   No environment variables are needed; it's a static content site.
3. Point your domain (or a `felix.<something>` subdomain) at the Vercel project
   from your Vercel dashboard's Domains tab.

## Editing content

Everything is in `app/page.js`:
- `ledgerEntries` — the scrolling ticker strip
- `systems` — your project cards (Predator Bot, Nexus OS, DHRWAS, Soroban)
- `experience` — work history
- `skillGroups` — skills grid

Update the arrays at the top of the file; the layout re-renders automatically.

## Notes

- Phone number is intentionally left off the public site — email only. Add it
  back in `app/page.js` (footer section) if you want it public.
- Colors/fonts are defined in `tailwind.config.js` (`ink`, `panel`, `line`,
  `cyan`, `amber`, `paper`, `mute`) and `app/layout.js` (Space Grotesk +
  JetBrains Mono via next/font).
