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
  fax: '(833) 206-2293',
  email: 'info@kindacarellc.com',
  hours: 'Mon–Fri 9:00am–5:00pm',
  serviceArea: 'Harris & Montgomery County, Texas',
  /** Public site origin — update to the real domain when it goes live. */
  url: 'https://www.kindacarellc.com',
  /** Default social-share image (Open Graph / Twitter). */
  ogImage: '/assets/banner.png',
} as const;
