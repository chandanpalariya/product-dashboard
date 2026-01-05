# Product Dashboard

A concise **React + Vite** frontend demo that displays and manages products using in-memory sample data.

live:https://project-dashboard123.netlify.app/

## Key Features ✅
- Toggle between **Table** and **Card** views
- Add / Edit products with client-side validation
- Pagination and debounced search

## Quick Start ⚡
1. Install dependencies

   ```bash
   npm install
   ```

2. Run development server

   ```bash
   npm run dev
   ```

3. Build for production

   ```bash
   npm run build
   ```

4. Preview build

   ```bash
   npm run preview
   ```

Open `http://localhost:5173` after starting the dev server.

## Project Highlights 🔍
- `src/components/` — UI components (`ProductTable`, `ProductCard`, `ProductForm`, `ViewToggle`, `Pagination`)
- `src/data/dummyProducts.js` — demo data
- `src/hooks/useDebounce.js` — debounce utility
- `src/utils/validators.js` — form validation helpers

## Notes 💡
- Demo uses in-memory data (resets on refresh). Add a backend or local persistence if needed.

## Contributing 🤝
Small PRs welcome. Open an issue to discuss larger changes.

---

*Short, focused README added — expand if you want more detail or a license.*



