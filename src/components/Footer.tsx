import { Link } from 'react-router-dom';
import { COMPANY } from '../config/company';
import { asset } from '../lib/asset';
import { locations } from '../data';

const EXPLORE = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-[#B9C6DA]">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-9 px-6 pb-10 pt-16 sm:grid-cols-2 sm:px-8 md:pt-20 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-14 lg:pt-[88px]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full bg-white">
              <img
                src={asset('/assets/logo-mark.webp')}
                alt={`${COMPANY.name} logo`}
                className="h-[38px] w-[38px] object-contain"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-xl font-semibold text-white">{COMPANY.name}</span>
              <span className="mt-1 text-[9px] font-semibold tracking-[0.24em] text-brand-lime">
                {COMPANY.tagline}
              </span>
            </span>
          </div>
          <p className="max-w-[320px] text-[15px] leading-relaxed text-[#8FA0BC]">
            Bringing you compassionate, professional, kinder care.
          </p>
        </div>

        <div>
          <div className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
            Explore
          </div>
          <div className="flex flex-col items-start gap-[11px]">
            {EXPLORE.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[15px] text-[#B9C6DA] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
            Contact
          </div>
          <div className="flex flex-col gap-[11px] text-[15px] text-[#B9C6DA]">
            <a href={COMPANY.phoneHref} className="transition-colors hover:text-white">
              {COMPANY.phone}
            </a>
            <span>Fax {COMPANY.fax}</span>
            <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-white">
              {COMPANY.email}
            </a>
            <span>{COMPANY.hours}</span>
          </div>
        </div>

        <div>
          <div className="mb-[18px] text-[13px] font-semibold uppercase tracking-[0.1em] text-white">
            Offices
          </div>
          <div className="flex flex-col gap-4">
            {locations.map((loc) => (
              <div key={loc.label} className="text-[15px] leading-relaxed text-[#B9C6DA]">
                {loc.line1}
                <br />
                {loc.line2}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-container flex-wrap justify-between gap-2.5 px-6 py-[22px] text-sm text-[#7186A5] sm:px-8">
          <span>
            © {new Date().getFullYear()} {COMPANY.fullName}. All rights reserved.
          </span>
          <span>Compassionate home health care · {COMPANY.serviceArea}</span>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-container px-6 py-3.5 text-center text-[13px] text-[#7186A5] sm:px-8">
            Created by{' '}
            <a
              href="https://mhisterkhing6.github.io/personalportfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#B9C6DA] transition-colors hover:text-white"
            >
              KB Empire
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
