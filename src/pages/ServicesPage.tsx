import Button from '../components/ui/Button';
import Eyebrow from '../components/ui/Eyebrow';
import { serviceCategories } from '../data';
import Seo from '../components/Seo';

export default function ServicesPage() {
  return (
    <div className="animate-fade-up">
      <Seo
        title="Home Health Services"
        description="Explore KinDa Care's comprehensive home health services: skilled nursing, therapy, personal care, and more, tailored to each client across Harris & Montgomery County, Texas."
      />
      {/* Intro */}
      <section className="mx-auto max-w-container px-6 pb-7 pt-14 sm:px-8 md:pb-12 md:pt-24">
        <Eyebrow className="mb-5">Our Services</Eyebrow>
        <h1 className="mb-6 max-w-[860px] font-display text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-ink [text-wrap:balance] md:text-6xl lg:text-[68px]">
          Comprehensive home health, tailored to you.
        </h1>
        <p className="max-w-[660px] text-xl leading-relaxed text-body">
          From skilled nursing to therapy, complex care and everyday support. We bring the right care
          to your door.
        </p>
      </section>

      {/* Category sections */}
      <div className="border-t border-line-warm">
        {serviceCategories.map((cat) => (
          <section key={cat.num} className="border-b border-line-warm bg-white">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-6 py-12 sm:px-8 md:py-20 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16">
              <div>
                <div className="mb-3.5 font-display text-2xl font-medium text-brand-lime">
                  {cat.num}
                </div>
                <h2 className="mb-3.5 font-display text-2xl font-medium leading-tight tracking-[-0.01em] text-ink [text-wrap:balance] md:text-[34px]">
                  {cat.title}
                </h2>
                <p className="text-base leading-relaxed text-body-soft">{cat.blurb}</p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {cat.items.map((svc) => (
                  <div
                    key={svc.name}
                    className="rounded-[14px] border border-line bg-cream p-6"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand-green/[0.14] text-xs font-bold text-brand-green-dark">
                        ✓
                      </span>
                      <div>
                        <div className="mb-1.5 text-base font-semibold leading-snug text-ink">
                          {svc.name}
                        </div>
                        <div className="text-sm leading-relaxed text-body-soft">{svc.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-[820px] px-6 py-16 text-center sm:px-8 md:py-24 lg:py-[110px]">
          <h2 className="mb-5 font-display text-3xl font-medium leading-[1.1] tracking-[-0.015em] text-white [text-wrap:balance] md:text-5xl lg:text-[52px]">
            Not sure which care is right?
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] text-[18px] leading-relaxed text-[#C2CFE2]">
            Tell us about your situation and we’ll guide you to the right plan.
          </p>
          <Button to="/contact">Talk to our team →</Button>
        </div>
      </section>
    </div>
  );
}
