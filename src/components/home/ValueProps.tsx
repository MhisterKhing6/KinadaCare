import Eyebrow from '../ui/Eyebrow';
import FeatureCard from '../ui/FeatureCard';
import Section from '../ui/Section';
import { valueProps } from '../../data';

export default function ValueProps() {
  return (
    <Section>
      <div className="mb-10 max-w-[640px] md:mb-[52px]">
        <Eyebrow className="mb-5">Why families choose us</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-[1.08] tracking-[-0.015em] text-ink [text-wrap:balance] md:text-[48px]">
          Care you can trust, attention they deserve.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((vp) => (
          <FeatureCard key={vp.num} num={vp.num} title={vp.title} desc={vp.desc} />
        ))}
      </div>
    </Section>
  );
}
