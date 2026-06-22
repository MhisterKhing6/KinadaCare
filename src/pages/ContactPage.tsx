import Eyebrow from '../components/ui/Eyebrow';
import Button from '../components/ui/Button';
import { COMPANY } from '../config/company';
import { locations } from '../data';
import Seo from '../components/Seo';

/* Inline icons keep the page self-contained (no icon dependency). */
const PhoneIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 4.5 4.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

const ClockIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const PinIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const steps = [
  {
    num: '01',
    title: 'Reach out',
    desc: 'Call or email us with your questions — no pressure, no obligation.',
  },
  {
    num: '02',
    title: 'We listen',
    desc: 'We take time to understand your loved one’s needs and your goals.',
  },
  {
    num: '03',
    title: 'We build a plan',
    desc: 'Together we shape the right care plan and next steps for your family.',
  },
];

export default function ContactPage() {
  return (
    <div className="animate-fade-up">
      <Seo
        title="Contact Us"
        description={`Get in touch with KinDa Care Home Health. Call ${COMPANY.phone} or email ${COMPANY.email} to discuss compassionate in-home care for your loved one across ${COMPANY.serviceArea}.`}
      />

      {/* Intro */}
      <section className="mx-auto max-w-container px-6 pb-7 pt-14 sm:px-8 md:pb-11 md:pt-24">
        <Eyebrow className="mb-5">Contact Us</Eyebrow>
        <h1 className="mb-5 max-w-[780px] font-display text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-ink [text-wrap:balance] md:text-5xl lg:text-[66px]">
          We’d love to hear from you.
        </h1>
        <p className="max-w-[620px] text-xl leading-relaxed text-body">
          Have a question or ready to get started? Reach out by phone or email and a member of our
          care team will get back to you quickly — usually within one business day.
        </p>
      </section>

      {/* Primary contact cards */}
      <section className="border-t border-line-warm bg-white">
        <div className="mx-auto grid max-w-container grid-cols-1 gap-6 px-6 py-12 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-8">
          {/* Call */}
          <div className="flex flex-col rounded-[22px] border border-line bg-cream p-8 md:p-10">
            <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <PhoneIcon className="h-7 w-7" />
            </span>
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-green">
              Call us
            </div>
            <a
              href={COMPANY.phoneHref}
              className="font-display text-3xl font-medium tracking-[-0.01em] text-ink transition-colors hover:text-brand-blue md:text-[34px]"
            >
              {COMPANY.phone}
            </a>
            <p className="mb-7 mt-3 text-[15px] leading-relaxed text-body-soft">
              Speak directly with our team, {COMPANY.hours}.
            </p>
            <div className="mt-auto">
              <Button href={COMPANY.phoneHref} variant="primary">
                Call now →
              </Button>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col rounded-[22px] border border-line bg-cream p-8 md:p-10">
            <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
              <MailIcon className="h-7 w-7" />
            </span>
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-green">
              Email us
            </div>
            <a
              href={`mailto:${COMPANY.email}`}
              className="break-words font-display text-2xl font-medium tracking-[-0.01em] text-ink transition-colors hover:text-brand-blue md:text-[28px]"
            >
              {COMPANY.email}
            </a>
            <p className="mb-7 mt-3 text-[15px] leading-relaxed text-body-soft">
              Send us the details and we’ll reply within one business day.
            </p>
            <div className="mt-auto">
              <Button href={`mailto:${COMPANY.email}`} variant="secondary">
                Send an email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Details + office */}
      <section className="border-t border-line-warm">
        <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-6 px-6 py-12 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-8">
          {/* Quick details */}
          <div className="rounded-[22px] bg-brand-navy p-8 text-white md:p-10">
            <div className="mb-6 flex items-center gap-3 text-[#9FB3D4]">
              <ClockIcon className="h-5 w-5" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                At a glance
              </span>
            </div>
            {[
              { label: 'Phone', value: COMPANY.phone, href: COMPANY.phoneHref },
              { label: 'Fax', value: COMPANY.fax },
              { label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { label: 'Hours', value: COMPANY.hours },
              { label: 'Service area', value: COMPANY.serviceArea },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                className={`flex justify-between gap-4 py-3 ${
                  i < arr.length - 1 ? 'border-b border-white/[0.12]' : ''
                }`}
              >
                <span className="shrink-0 text-[15px] text-[#9FB3D4]">{row.label}</span>
                {row.href ? (
                  <a
                    href={row.href}
                    className="break-words text-right text-[15px] font-semibold text-white transition-colors hover:text-brand-lime"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="text-right text-[15px] font-semibold text-white">
                    {row.value}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Office locations */}
          <div className="flex flex-col gap-6">
            {locations.map((loc) => (
              <div key={loc.label} className="rounded-[22px] border border-line bg-cream p-8 md:p-10">
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <PinIcon className="h-6 w-6" />
                </span>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-green">
                  {loc.label}
                </div>
                <div className="mb-1 text-lg font-semibold leading-snug text-ink">{loc.city}</div>
                <div className="text-[15px] leading-relaxed text-body-soft">{loc.line1}</div>
                <div className="text-[15px] leading-relaxed text-body-soft">{loc.line2}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-t border-line-warm bg-white">
        <div className="mx-auto max-w-container px-6 py-14 sm:px-8 md:py-24">
          <div className="mb-10 max-w-[640px] md:mb-14">
            <Eyebrow className="mb-5">What to expect</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.015em] text-ink [text-wrap:balance] md:text-[44px]">
              Getting started is simple.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-8">
            {steps.map((step) => (
              <div key={step.num}>
                <div className="mb-4 font-display text-2xl font-medium text-brand-green">
                  {step.num}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line-warm">
        <div className="mx-auto max-w-container px-6 py-14 sm:px-8 md:py-20">
          <div className="rounded-[26px] bg-brand-navy px-8 py-12 text-center md:px-12 md:py-16">
            <h2 className="mx-auto mb-4 max-w-[620px] font-display text-3xl font-medium leading-[1.1] tracking-[-0.015em] text-white [text-wrap:balance] md:text-[40px]">
              Ready to talk about care for your loved one?
            </h2>
            <p className="mx-auto mb-8 max-w-[520px] text-[17px] leading-relaxed text-[#B9C6DA]">
              We’re here to answer your questions and help you take the next step with confidence.
            </p>
            <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Button href={COMPANY.phoneHref} variant="primary">
                Call {COMPANY.phone}
              </Button>
              <Button href={`mailto:${COMPANY.email}`} variant="secondary">
                Email us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
