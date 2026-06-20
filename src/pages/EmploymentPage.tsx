import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Eyebrow from '../components/ui/Eyebrow';
import ImageSlot from '../components/ui/ImageSlot';
import { benefits, jobRoles } from '../data';
import Seo from '../components/Seo';

export default function EmploymentPage() {
  return (
    <div className="animate-fade-up">
      <Seo
        title="Careers: Join Our Care Team"
        description="Build a meaningful career with KinDa Care Home Health. We're hiring compassionate nurses, therapists, aides, and caregivers with flexible schedules and competitive pay across Texas."
      />
      {/* Hero */}
      <section className="mx-auto grid max-w-container-wide grid-cols-1 items-center gap-9 px-6 pb-12 pt-12 sm:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[72px] lg:px-12">
        <div>
          <Eyebrow className="mb-5">Careers at KinDa Care</Eyebrow>
          <h1 className="mb-6 font-display text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-ink [text-wrap:balance] md:text-5xl lg:text-[66px]">
            Do the work that matters, with a team that has your back.
          </h1>
          <p className="mb-8 max-w-[520px] text-[19px] leading-relaxed text-body">
            If you’re a caregiver who leads with compassion, we’d love to meet you. Flexible
            schedules, competitive pay, and genuinely meaningful work.
          </p>
          <Button to="/contact">Apply now →</Button>
        </div>
        <div className="relative h-[380px] overflow-hidden rounded-[22px] bg-[#EAF0E2] shadow-soft md:h-[clamp(380px,46vw,500px)]">
          <ImageSlot
            src="/assets/caregiver-team.png"
            alt="A KinDa Care nurse caring for a client"
            placeholder="Add a caregiver / team photo"
          />
        </div>
      </section>

      {/* Open roles */}
      <section className="border-t border-line-warm bg-white">
        <div className="mx-auto max-w-container px-6 py-16 sm:px-8 md:py-24 lg:py-[100px]">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
            <h2 className="font-display text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink md:text-[44px]">
              Open roles
            </h2>
            <div className="text-base text-body-soft">
              Don’t see your role?{' '}
              <Link to="/contact" className="font-semibold text-brand-blue">
                Reach out anyway →
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            {jobRoles.map((role) => (
              <div
                key={role.title}
                className="grid grid-cols-1 items-center gap-3.5 rounded-2xl border border-line bg-cream p-6 sm:grid-cols-[1.6fr_1fr_auto] sm:gap-5 sm:px-7"
              >
                <div>
                  <div className="mb-1.5 text-[19px] font-semibold leading-snug text-ink">
                    {role.title}
                  </div>
                  <div className="text-sm leading-snug text-body-soft">{role.blurb}</div>
                </div>
                <div className="text-sm font-medium text-brand-green">{role.type}</div>
                <Button to="/contact" variant="secondary" className="justify-self-start sm:justify-self-end !px-[22px] !py-[11px] !text-sm">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-container px-6 py-16 sm:px-8 md:py-24 lg:py-[104px]">
        <div className="mb-11 max-w-[600px]">
          <Eyebrow className="mb-5">Why join us</Eyebrow>
          <h2 className="font-display text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink [text-wrap:balance] md:text-[44px]">
            The support to do your best work.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-[18px] border border-line bg-white p-7 sm:p-8">
              <div className="mb-2.5 text-[17px] font-semibold leading-snug text-ink">
                {b.title}
              </div>
              <div className="text-[15px] leading-relaxed text-body-soft">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
