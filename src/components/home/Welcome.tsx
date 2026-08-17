import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import ImageSlot from '../ui/ImageSlot';

export default function Welcome() {
  return (
    <section className="border-y border-line-warm bg-white">
      <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-6 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-[84px] lg:py-[110px]">
        <div className="relative h-[360px] overflow-hidden rounded-[22px] bg-[#EAF0E2] shadow-soft md:h-[clamp(360px,46vw,500px)]">
          <ImageSlot
            src="/assets/care-at-home.webp"
            alt="A KinDa Care caregiver sharing a warm moment with a client at home"
            placeholder="Add a warm photo of care at home"
          />
        </div>
        <div>
          <Eyebrow className="mb-5">Welcome to KinDa Care</Eyebrow>
          <h2 className="mb-6 font-display text-3xl font-medium leading-[1.08] tracking-[-0.015em] text-ink [text-wrap:balance] md:text-[48px]">
            Compassionate care at home.
          </h2>
          <p className="mb-[18px] text-[18px] leading-[1.7] text-body">
            KinDa Care Home Health provides a wide range of services tailored to each client, ensuring
            they receive the professional, kinder care they deserve while living comfortably at home.
          </p>
          <p className="mb-8 text-[18px] leading-[1.7] text-body">
            Choosing a reliable home health agency is a crucial step. Together, we build a care plan
            around your loved one’s unique needs so they keep their independence and stay an active
            part of your family.
          </p>
          <Button to="/about" variant="secondary">
            More about us →
          </Button>
        </div>
      </div>
    </section>
  );
}
