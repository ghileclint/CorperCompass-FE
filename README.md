# Vendors Feature — CorperCompass-FE

Implements the Vendors list, search results, empty-search state, and
vendor profile screens from the "Corper Compass MVP" Figma, built to
match what's actually in `ghileclint/CorperCompass-FE`.

## What I verified directly from your repo before building

- **Stack**: Vite + React 19, plain JavaScript (`package.json` — no
  TypeScript compiler, no Tailwind CSS dependency).
- **Routing**: `react-router-dom` v7 is a dependency, so pages use
  `useNavigate`, `useParams`, `useSearchParams` rather than local state.
- **Icons**: `react-icons` is a dependency, so components use `react-icons/fi`
  (and `react-icons/fa` for WhatsApp) instead of emoji.
- **Folder convention**: feature-based, so this lives under
  `src/features/explore/vendors/` per your README's documented structure,
  with shared mock data in `src/data/`.
- **Styling**: since there's no Tailwind, every component uses a CSS
  Module (`Component.module.css`) — Vite supports this out of the box,
  no extra config needed.

## What I could NOT verify (GitHub blocked automated access to it)

- The actual **`Button`** and **`Navbar`** shared components in
  `src/components/` — I could see from your commit history that they
  exist ("created the navbar and button shared component"), but
  couldn't read their source or prop signatures. I left `TODO` comments
  in the code at every spot a shared component should replace a raw
  `<button>`/`<header>` — search this feature folder for `TODO` before
  opening a PR and swap them in.
- Real image assets — placeholder paths like
  `/images/vendors/mama-titi-1.jpg` are used; export the real assets
  from Figma and update `src/data/vendors.js`.
- Your exact brand hex values — I used `#14532d` (a dark green) reading
  off the screenshot; check Figma's actual color styles and adjust the
  CSS modules if it's off.

## Files

```
src/data/vendors.js                                    mock fixtures — ONLY used by src/api
src/api/vendors.api.js                                  ← the one file to edit when the real API is ready
src/features/explore/vendors/
  components/
    VendorCard.jsx / .module.css
    SearchBar.jsx / .module.css
    EmptySearchState.jsx / .module.css
    ShareModal.jsx / .module.css
  pages/
    VendorsListPage.jsx / .module.css      fetches via fetchVendors()
    SearchResultsPage.jsx                  fetches via searchVendors()
    VendorProfilePage.jsx / .module.css    fetches via fetchVendorById() + fetchMoreVendors()
  vendors.routes.jsx                route entries to merge into your router
.env.example                        copy to .env.local once you have a real API URL
```

### How the "no hardcode" data flow works

Pages never import `src/data/vendors.js` directly. They call functions
from `src/api/vendors.api.js` (`fetchVendors`, `searchVendors`,
`fetchVendorById`, `fetchMoreVendors`) inside a `useEffect`, with real
loading/error states. Right now those functions just resolve the mock
fixtures after a fake delay — **when you get the real API, you only
edit `src/api/vendors.api.js`** (uncomment the `fetch(...)` calls shown
in the TODO comments, set `VITE_API_BASE_URL` in `.env.local`). No page
or component needs to change.

## Before opening a PR

1. **Pull the latest `develop` branch first** (per your README's branch
   strategy — `main` is production, `develop` is the integration branch).
   Branch your feature off `develop`, not `main`.
2. Merge the `<Route>` entries from `vendors.routes.jsx` into wherever
   your `<Routes>` tree actually lives (likely `App.jsx`).
3. Search for `TODO` comments and swap in the real `Button`/`Navbar`.
4. Replace placeholder image paths with real assets.
5. Run `npm run lint` — your repo has ESLint configured
   (`eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`) and CI
   or reviewers will likely check this.

## What NOT to commit

Your repo's existing `.gitignore` should already cover `node_modules/`
and build output — don't touch that file. Just make sure you never
personally add:

- `.env` / `.env.local` — API keys, secrets
- Personal Figma export tokens
- Debug/console.log-heavy code — clean up before pushing

## Pushing to the team repo

```bash
# 1. Clone (skip if you already have it)
git clone https://github.com/ghileclint/CorperCompass-FE.git
cd CorperCompass-FE

# 2. Make sure you're branching off develop, per the team's branch strategy
git fetch origin
git checkout develop
git pull origin develop

# 3. Create your feature branch
git checkout -b feature/vendors-explore

# 4. Copy these files into the matching paths in the real repo
cp -r src/data/vendors.js <repo>/src/data/
cp -r src/features/explore/vendors <repo>/src/features/explore/

# 5. Install deps and sanity-check locally
npm install
npm run dev
npm run lint

# 6. Stage, commit, push
git add .
git commit -m "feat: implement vendors list, search, and profile screens"
git push origin feature/vendors-explore

# 7. Open a Pull Request targeting `develop` (not `main`) — per the
#    team's documented Git Workflow. Let a teammate review before merging.
```
