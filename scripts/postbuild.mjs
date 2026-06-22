/**
 * Post-build step for static hosting (GitHub Pages).
 *
 * GitHub Pages has no server-side routing, so a request for /about would 404.
 * The SPA `404.html` fallback makes the app *render* correctly in a browser,
 * but GitHub serves it with a real HTTP 404 status — which makes Googlebot
 * treat the page as "Not found" and refuse to index it.
 *
 * Fix: emit a real index.html for each route (e.g. dist/about/index.html) so
 * every URL returns a genuine 200. React Router then renders the matching page
 * from the URL. Keep `404.html` as the catch-all for unknown paths.
 *
 * Keep this list in sync with the <Route> paths in src/App.tsx.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const index = join(dist, 'index.html');

// Catch-all fallback for any path not pre-generated below.
copyFileSync(index, join(dist, '404.html'));

const routes = ['about', 'services', 'careers', 'contact'];
for (const route of routes) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(index, join(dir, 'index.html'));
}

console.log(`postbuild: wrote 404.html + 200 HTML for /${routes.join(', /')}`);
