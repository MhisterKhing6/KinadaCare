import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';

export default function EmploymentBanner() {
  return (
    <section className="mx-auto max-w-container px-6 pb-16 sm:px-8 md:pb-24 lg:pb-[104px]">
      <div className="grid grid-cols-1 items-center gap-9 overflow-hidden rounded-[26px] bg-gradient-to-br from-brand-blue to-brand-navy p-11 sm:p-12 md:p-[72px] lg:grid-cols-[1.4fr_0.9fr]">
        <div>
          <Eyebrow light className="mb-5">
            We’re hiring
          </Eyebrow>
          <h2 className="mb-4 font-display text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-white [text-wrap:balance] md:text-[44px]">
            Join a care team that feels like family.
          </h2>
          <p className="max-w-[520px] text-[17px] leading-relaxed text-[#C2CFE2]">
            Nurses, therapists, aides and caregivers. Build a meaningful career with flexible
            schedules and a team that has your back.
          </p>
        </div>
        <div className="flex lg:justify-end">
          <Button to="/careers">Employment →</Button>
        </div>
      </div>
    </section>
  );
}
