import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { COMPANY } from '../config/company';
import Logo from './ui/Logo';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 h-[76px] border-b border-line-nav bg-cream/[0.86] backdrop-blur-[14px]">
        <div className="mx-auto flex h-full max-w-container-wide items-center justify-between gap-6 px-5 sm:px-8 lg:px-11">
          <Link to="/" className="flex-none" aria-label={`${COMPANY.name} home`}>
            <Logo />
          </Link>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-[46px] w-[46px] flex-none flex-col items-center justify-center gap-[5px] rounded-xl border border-[#E2E5DC] bg-white md:hidden"
          >
            <span className="block h-0.5 w-5 rounded bg-ink" />
            <span className="block h-0.5 w-5 rounded bg-ink" />
            <span className="block h-0.5 w-5 rounded bg-ink" />
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `py-2 text-[15px] font-medium leading-none transition-colors ${
                    isActive ? 'text-brand-blue' : 'text-ink hover:text-brand-blue'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-green px-[22px] py-[11px] text-sm font-semibold text-white shadow-cta-sm transition-colors hover:bg-brand-green-dark"
            >
              <span className="text-[15px]">☏</span>
              {COMPANY.phone}
            </a>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        {open && (
          <div className="absolute inset-x-0 top-[76px] flex animate-fade-up flex-col gap-1 border-b border-line-nav bg-cream/[0.98] px-6 pb-5 pt-3.5 shadow-float backdrop-blur-[14px] md:hidden">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `border-b border-line-warm py-3.5 text-[17px] font-medium ${
                    isActive ? 'text-brand-blue' : 'text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={COMPANY.phoneHref}
              className="mt-2.5 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-green px-[22px] py-3.5 text-base font-semibold text-white shadow-cta-sm"
            >
              <span>☏</span>
              {COMPANY.phone}
            </a>
          </div>
        )}
      </nav>
      {/* Spacer for the fixed nav */}
      <div className="h-[76px]" />
    </>
  );
}
