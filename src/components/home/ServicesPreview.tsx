import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import { serviceCategories } from '../../data';

export default function ServicesPreview() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-container px-6 py-16 sm:px-8 md:py-24 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-[52px]">
          <div className="max-w-[640px]">
            <Eyebrow light className="mb-5">
              Our Services
            </Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.015em] text-white [text-wrap:balance] md:text-[48px]">
              A full spectrum of home health care.
            </h2>
          </div>
          <Button to="/services" variant="accent">
            View all services →
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat) => (
            <div
              key={cat.num}
              className="rounded-[18px] border border-white/[0.12] bg-white/[0.05] p-8"
            >
              <div className="mb-3.5 flex items-baseline gap-3.5">
                <span className="font-display text-[22px] font-medium text-brand-lime">
                  {cat.num}
                </span>
                <span className="text-[21px] font-semibold leading-tight text-white">
                  {cat.title}
                </span>
              </div>
              <p className="mb-5 text-[15px] leading-relaxed text-[#B9C6DA]">{cat.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {cat.preview.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-brand-lime/30 bg-brand-lime/[0.13] px-3.5 py-1.5 text-[13px] font-medium text-[#cfe6a3]"
                  >
                    {chip}
                  </span>
                ))}
                <span className="px-3.5 py-1.5 text-[13px] font-medium text-[#7E8FA8]">
                  +{cat.more} more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
