import type { ReactNode } from 'react';

interface Props {
  num: string;
  title: string;
  desc: ReactNode;
}

/** Compact feature/value card with a gradient number badge. */
export default function FeatureCard({ num, title, desc }: Props) {
  return (
    <div className="rounded-[18px] border border-line bg-white p-7 sm:p-8">
      <div className="mb-[22px] flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-gradient-to-br from-brand-lime to-brand-blue font-display text-lg font-semibold text-white">
        {num}
      </div>
      <div className="mb-2.5 text-[19px] font-semibold leading-snug text-ink">{title}</div>
      <div className="text-[15px] leading-relaxed text-body-soft">{desc}</div>
    </div>
  );
}
