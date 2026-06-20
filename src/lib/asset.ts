/**
 * Resolve a path to a file in /public against the app's configured base URL
 * (e.g. "/KinadaCare/" on GitHub Pages). Use this for any image rendered at
 * runtime — Vite only rewrites asset paths in index.html and imported modules,
 * not string literals like `<img src="/assets/x.png">`.
 */
export const asset = (path: string) => {
  // Leave absolute URLs and data URIs untouched.
  if (/^(https?:|data:)/.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
};
