import Eyebrow from '../components/ui/Eyebrow';
import ContactForm from '../components/contact/ContactForm';
import { COMPANY } from '../config/company';
import { locations } from '../data';
import Seo from '../components/Seo';

export default function ContactPage() {
  return (
    <div className="animate-fade-up">
      <Seo
        title="Contact Us"
        description={`Get in touch with KinDa Care Home Health. Call ${COMPANY.phone} or send a message to discuss compassionate in-home care for your loved one across ${COMPANY.serviceArea}.`}
      />
      {/* Intro */}
      <section className="mx-auto max-w-container px-6 pb-7 pt-14 sm:px-8 md:pb-11 md:pt-24">
        <Eyebrow className="mb-5">Contact Us</Eyebrow>
        <h1 className="mb-5 max-w-[780px] font-display text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-ink [text-wrap:balance] md:text-5xl lg:text-[66px]">
          Let’s build the right care plan together.
        </h1>
        <p className="max-w-[620px] text-xl leading-relaxed text-body">
          Tell us a little about your needs and we’ll get back to you quickly. Prefer to talk? Call{' '}
          <a href={COMPANY.phoneHref} className="font-semibold text-brand-blue">
            {COMPANY.phone}
          </a>
          .
        </p>
      </section>

      {/* Form + contact info */}
      <section className="border-t border-line-warm bg-white">
        <div className="mx-auto grid max-w-container grid-cols-1 items-start gap-10 px-6 py-12 sm:px-8 md:py-20 lg:grid-cols-[1.25fr_0.85fr] lg:gap-[72px]">
          <ContactForm />

          <div className="flex flex-col gap-4">
            {locations.map((loc) => (
              <div key={loc.label} className="rounded-2xl border border-line bg-cream p-7">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
                  {loc.label}
                </div>
                <div className="mb-1 text-[17px] font-semibold leading-snug text-ink">
                  {loc.city}
                </div>
                <div className="text-[15px] leading-relaxed text-body-soft">{loc.line1}</div>
                <div className="text-[15px] leading-relaxed text-body-soft">{loc.line2}</div>
              </div>
            ))}

            <div className="rounded-2xl bg-brand-navy p-7 text-white">
              {[
                { label: 'Phone', value: COMPANY.phone, href: COMPANY.phoneHref },
                { label: 'Fax', value: COMPANY.fax },
                { label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { label: 'Hours', value: 'Mon–Fri 9–5' },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex justify-between gap-3.5 py-[9px] ${
                    i < arr.length - 1 ? 'border-b border-white/[0.12]' : ''
                  }`}
                >
                  <span className="text-[15px] text-[#9FB3D4]">{row.label}</span>
                  {row.href ? (
                    <a href={row.href} className="text-[15px] font-semibold text-white">
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-[15px] font-semibold text-white">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
