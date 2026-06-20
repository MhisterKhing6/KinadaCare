import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Background variant. */
  surface?: 'cream' | 'white' | 'navy';
  /** Adds top + bottom hairline borders (for white bands). */
  bordered?: boolean;
  className?: string;
  /** Inner container width. */
  width?: 'container' | 'container-wide' | 'narrow';
  id?: string;
}

const surfaces = {
  cream: 'bg-cream',
  white: 'bg-white',
  navy: 'bg-brand-navy text-white',
};

const widths = {
  container: 'max-w-container',
  'container-wide': 'max-w-container-wide',
  narrow: 'max-w-[920px]',
};

/** Full-width section band with a centered, padded inner container. */
export default function Section({
  children,
  surface = 'cream',
  bordered = false,
  className = '',
  width = 'container',
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`${surfaces[surface]} ${
        bordered ? 'border-y border-line-warm' : ''
      } ${className}`}
    >
      <div
        className={`mx-auto ${widths[width]} px-6 py-16 sm:px-8 md:py-24 lg:py-[110px]`}
      >
        {children}
      </div>
    </section>
  );
}
