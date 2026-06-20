import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY } from '../config/company';

interface Props {
  /** Page-specific title. Appended with the brand unless `titleOverride` is set. */
  title: string;
  description: string;
  /** Use the title verbatim (e.g. for the homepage) instead of appending the brand. */
  titleOverride?: boolean;
  /** Social-share image path; defaults to the brand banner. */
  image?: string;
  /** Hint search engines not to index this page. */
  noIndex?: boolean;
}

const BRAND = `${COMPANY.name} Home Health`;

/** Create or update a <meta> tag matched by name or property. */
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Create or update a <link rel="..."> tag. */
function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Headless SEO helper. Renders nothing; keeps the document <head> in sync with
 * the current route — title, description, canonical, and Open Graph / Twitter
 * tags — so each page is shareable and indexable in this single-page app.
 */
export default function Seo({ title, description, titleOverride, image, noIndex }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = titleOverride ? title : `${title} | ${BRAND}`;
    const canonical = `${COMPANY.url}${pathname === '/' ? '' : pathname}`;
    const ogImage = `${COMPANY.url}${image ?? COMPANY.ogImage}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow');
    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', BRAND);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);
  }, [title, description, titleOverride, image, noIndex, pathname]);

  return null;
}
