import Button from '../components/ui/Button';
import Eyebrow from '../components/ui/Eyebrow';
import FeatureCard from '../components/ui/FeatureCard';
import ImageSlot from '../components/ui/ImageSlot';
import { companyValues } from '../data';
import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <div className="animate-fade-up">
      <Seo
        title="About Us"
        description="Learn about KinDa Care Home Health and our mission to deliver compassionate, professional care that lets people live with dignity and independence in their own homes across Texas."
      />
      {/* Intro */}
      <section className="mx-auto max-w-container px-6 pb-10 pt-14 sm:px-8 md:pb-16 md:pt-24">
        <Eyebrow className="mb-5">About KinDa Care</Eyebrow>
        <h1 className="mb-6 max-w-[880px] font-display text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-ink [text-wrap:balance] md:text-6xl lg:text-[68px]">
          Care that keeps your loved ones independent and at home.
        </h1>
        <p className="max-w-[680px] text-xl leading-relaxed text-body">
          We believe choosing a home health agency is one of the most important decisions a family
          makes. That trust is something we earn every single day.
        </p>
      </section>

      {/* Mission */}
      <section className="border-y border-line-warm bg-white">
        <div className="mx-auto grid max-w-container grid-cols-1 items-center gap-10 px-6 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-20 lg:py-[100px]">
          <div className="relative h-[380px] overflow-hidden rounded-[22px] bg-[#EAF0E2] shadow-soft md:h-[clamp(380px,48vw,520px)]">
            <ImageSlot
              src="/assets/family.png"
              alt="A multi-generational family staying close and independent at home"
              placeholder="Add a team or care photo"
            />
          </div>
          <div>
            <h2 className="mb-6 font-display text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink [text-wrap:balance] md:text-[42px]">
              Our mission
            </h2>
            <p className="mb-[18px] text-[18px] leading-[1.75] text-body">
              KinDa Care Home Health exists to provide compassionate, professional care that helps
              our clients live comfortably at home with dignity.
            </p>
            <p className="text-[18px] leading-[1.75] text-body">
              We work alongside families to create care plans tailored to our clients' individual
              needs, protecting their independence while keeping them an active, cherished part of
              the family.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-container px-6 py-16 sm:px-8 md:py-24 lg:py-[104px]">
        <div className="mb-12 max-w-[600px]">
          <Eyebrow className="mb-5">What we stand for</Eyebrow>
          <h2 className="font-display text-[28px] font-medium leading-[1.1] tracking-[-0.015em] text-ink [text-wrap:balance] md:text-[44px]">
            Values that guide every visit.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((val) => (
            <FeatureCard key={val.num} num={val.num} title={val.title} desc={val.desc} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-[820px] px-6 py-16 text-center sm:px-8 md:py-24 lg:py-[110px]">
          <h2 className="mb-8 font-display text-3xl font-medium leading-[1.1] tracking-[-0.015em] text-white [text-wrap:balance] md:text-5xl lg:text-[52px]">
            Ready to talk about care for your family?
          </h2>
          <Button to="/contact">Contact us →</Button>
        </div>
      </section>
    </div>
  );
}
