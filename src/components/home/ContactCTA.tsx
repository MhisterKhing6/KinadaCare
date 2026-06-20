import Button from '../ui/Button';
import { COMPANY } from '../../config/company';

export default function ContactCTA() {
  return (
    <section className="border-t border-line-warm bg-white">
      <div className="mx-auto max-w-[920px] px-6 py-20 text-center sm:px-8 md:py-28 lg:py-32">
        <h2 className="mb-5 font-display text-[34px] font-medium leading-[1.05] tracking-[-0.02em] text-ink [text-wrap:balance] md:text-5xl lg:text-[62px]">
          Let us help you care for the ones you love.
        </h2>
        <p className="mx-auto mb-9 max-w-[560px] text-[19px] leading-relaxed text-body">
          Reach out today and we’ll build a care plan tailored to your family’s needs.
        </p>
        <div className="flex flex-col flex-wrap justify-center gap-3.5 sm:flex-row">
          <Button to="/contact">Get in touch →</Button>
          <Button href={COMPANY.phoneHref} variant="secondary">
            Call {COMPANY.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
