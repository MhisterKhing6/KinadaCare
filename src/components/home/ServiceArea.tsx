import Eyebrow from '../ui/Eyebrow';
import Section from '../ui/Section';
import { locations } from '../../data';

export default function ServiceArea() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Eyebrow className="mb-5">Service Area</Eyebrow>
          <h2 className="mb-[18px] font-display text-3xl font-medium leading-[1.08] tracking-[-0.015em] text-ink [text-wrap:balance] md:text-[46px]">
            Proudly serving Texas families.
          </h2>
          <p className="text-[18px] leading-[1.7] text-body">
            Proudly serving families across Harris and Montgomery County. Not sure if we reach you?
            Give us a call. We’re happy to help.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.label} className="rounded-[18px] border border-line bg-white p-[30px]">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-brand-green">
                {loc.label}
              </div>
              <div className="mb-1.5 text-[18px] font-semibold leading-snug text-ink">
                {loc.city}
              </div>
              <div className="text-[15px] leading-relaxed text-body-soft">{loc.line1}</div>
              <div className="text-[15px] leading-relaxed text-body-soft">{loc.line2}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
