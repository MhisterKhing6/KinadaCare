import { COMPANY } from '../../config/company';
import { asset } from '../../lib/asset';

interface Props {
  /** Render wordmark in white (for dark surfaces). */
  light?: boolean;
  size?: 'sm' | 'md';
}

/** Round logo mark + stacked wordmark. */
export default function Logo({ light = false, size = 'md' }: Props) {
  const mark = size === 'sm' ? 'h-[46px] w-[46px]' : 'h-12 w-12';
  const markImg = size === 'sm' ? 'h-[38px] w-[38px]' : 'h-10 w-10';
  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ${mark} ${
          light ? '' : 'border border-line-nav shadow-card'
        }`}
      >
        <img
          src={asset('/assets/logo-mark.webp')}
          alt={`${COMPANY.name} logo`}
          className={`${markImg} object-contain`}
        />
      </span>
      <span className="flex flex-col items-start leading-none">
        <span
          className={`whitespace-nowrap font-display text-xl font-semibold tracking-[-0.01em] ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          {COMPANY.name}
        </span>
        <span
          className={`mt-1 text-[9px] font-semibold leading-none tracking-[0.24em] ${
            light ? 'text-brand-lime' : 'text-brand-green'
          }`}
        >
          {COMPANY.tagline}
        </span>
      </span>
    </span>
  );
}
