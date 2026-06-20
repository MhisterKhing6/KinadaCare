import { useState, type FormEvent } from 'react';
import { COMPANY } from '../../config/company';

const CARE_TYPES = [
  'Skilled nursing',
  'Therapy & rehabilitation',
  'Infusion & complex care',
  'Personal & support services',
  'Not sure yet',
];

const fieldBase =
  'w-full rounded-[11px] border border-line-input bg-cream px-4 py-3.5 text-base text-ink outline-none transition-colors focus:border-brand-blue focus:bg-white';
const labelBase = 'flex flex-col gap-2 text-sm font-semibold text-ink';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your backend / email service of choice.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[18px] border border-[#CFE3AE] bg-[#F1F7E8] p-10 sm:p-11">
        <div className="mb-[22px] flex h-[54px] w-[54px] items-center justify-center rounded-full bg-brand-green text-2xl font-bold text-white">
          ✓
        </div>
        <h3 className="mb-3 font-display text-[28px] font-medium leading-snug text-ink">
          Thank you. Message received.
        </h3>
        <p className="text-[17px] leading-relaxed text-body">
          Our care team will reach out shortly. Need to speak with someone now? Call{' '}
          <a href={COMPANY.phoneHref} className="font-semibold text-brand-blue">
            {COMPANY.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
        <label className={labelBase}>
          Full name
          <input required type="text" placeholder="Jane Doe" className={fieldBase} />
        </label>
        <label className={labelBase}>
          Phone
          <input required type="tel" placeholder="(000) 000-0000" className={fieldBase} />
        </label>
      </div>
      <label className={labelBase}>
        Email
        <input type="email" placeholder="you@email.com" className={fieldBase} />
      </label>
      <label className={labelBase}>
        Type of care needed
        <select className={fieldBase} defaultValue={CARE_TYPES[0]}>
          {CARE_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className={labelBase}>
        How can we help?
        <textarea
          rows={4}
          placeholder="Tell us about your loved one's needs..."
          className={`${fieldBase} resize-y leading-relaxed`}
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-brand-green px-[34px] py-4 text-base font-semibold text-white shadow-cta transition-[transform,background-color] duration-150 ease-out hover:-translate-y-0.5 hover:bg-brand-green-dark"
      >
        Send message →
      </button>
    </form>
  );
}
