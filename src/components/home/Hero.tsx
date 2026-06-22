import Button from '../ui/Button';
import Eyebrow from '../ui/Eyebrow';
import { COMPANY } from '../../config/company';
import { asset } from '../../lib/asset';

const bannerUrl = asset('/assets/banner.png');

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-container-wide grid-cols-1 items-center gap-8 px-5 pb-9 pt-5 sm:gap-9 sm:px-8 md:gap-12 md:pb-16 md:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[72px] lg:px-12 lg:pb-[88px] lg:pt-[72px]">
      <div>
        <Eyebrow className="mb-[18px] animate-fade-up md:mb-[26px]">Home Health Care · Texas</Eyebrow>
        <h1
          className="mb-4 animate-fade-up font-display text-[33px] font-medium leading-[1.05] tracking-[-0.02em] text-ink [text-wrap:balance] sm:text-5xl sm:leading-[1.02] md:mb-[26px] lg:text-[74px]"
          style={{ animationDelay: '0.08s' }}
        >
          Bringing you compassionate, professional,{' '}
          <em className="italic text-brand-blue">kinder</em> care, at home.
        </h1>
        <p
          className="mb-6 max-w-[520px] animate-fade-up text-base leading-relaxed text-body md:mb-9 md:text-[19px]"
          style={{ animationDelay: '0.16s' }}
        >
          Compassionate, skilled care tailored to your loved one’s needs, so they can stay
          independent, comfortable, and part of the family.
        </p>
        <div
          className="flex animate-fade-up flex-col gap-3 sm:flex-row sm:flex-wrap [&>*]:w-full sm:[&>*]:w-auto"
          style={{ animationDelay: '0.24s' }}
        >
          <Button to="/contact">Request care →</Button>
          <Button href={COMPANY.phoneHref} variant="secondary">
            Call {COMPANY.phone}
          </Button>
        </div>
        <div
          className="mt-7 flex animate-fade-up flex-wrap items-center gap-x-[18px] gap-y-2 text-[13px] font-medium text-body-muted md:mt-[38px] md:text-sm"
          style={{ animationDelay: '0.32s' }}
        >
          <span>Licensed &amp; insured</span>
          <span className="text-[#C7CEC0]">•</span>
          <span>Skilled nurses &amp; therapists</span>
          <span className="text-[#C7CEC0]">•</span>
          <span>Serving Harris &amp; Montgomery County</span>
        </div>
      </div>

      <div className="relative animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
        <div className="absolute -inset-x-3.5 -bottom-[22px] -top-[18px] left-5 hidden rotate-[-3.5deg] rounded-[30px] bg-gradient-to-br from-brand-lime via-brand-sky to-[#1B3FA0] sm:block" />
        <div className="relative h-[clamp(320px,82vw,380px)] w-full overflow-hidden rounded-[20px] shadow-hero transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl sm:h-[clamp(420px,56vw,600px)] sm:rounded-3xl">
          <img
            src={bannerUrl}
            alt="A caregiver embracing a senior client outdoors"
            className="block h-full w-full animate-ken-burns object-cover object-[50%_28%]"
          />
        </div>
        <div className="absolute inset-x-3.5 bottom-3.5 animate-float rounded-2xl bg-white/95 p-3.5 shadow-float backdrop-blur-[6px] sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-[230px] sm:p-4">
          <div className="text-[15px] font-semibold leading-snug text-ink">
            Care plan built around you
          </div>
          <div className="mt-1 text-[13px] leading-snug text-body-muted">
            Personalized, one-on-one support.
          </div>
        </div>
      </div>
    </section>
  );
}
