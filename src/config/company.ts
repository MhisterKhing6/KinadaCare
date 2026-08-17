/**
 * Central business / contact constants for KinDa Care Home Health.
 * Update these in one place to propagate across the whole site.
 */
export const COMPANY = {
  name: 'KinDa Care',
  fullName: 'KinDa Care Home Health LLC',
  tagline: 'HOME HEALTH',
  phone: '(832) 521-8590',
  phoneHref: 'tel:8325218590',
  fax: '(713) 405-2317',
  email: 'kindacarehc@gmail.com',
  hours: 'Mon–Fri 9:00am–5:00pm',
  serviceArea: 'Harris & Montgomery County, Texas',
  /** Public site origin — update to the real domain when it goes live. */
  url: 'https://www.kindacarehc.com',
  /**
   * Default social-share image (Open Graph / Twitter). Intentionally PNG, not
   * WebP: several share crawlers (WhatsApp, LinkedIn) still fail to render a
   * WebP preview. The in-page hero uses banner.webp.
   */
  ogImage: '/assets/banner.png',
} as const;
