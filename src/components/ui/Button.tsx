import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'accent';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
}

interface AnchorProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
  to?: never;
  href?: never;
}

type Props = LinkProps | AnchorProps | ButtonProps;

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-[transform,background-color,border-color] duration-150 ease-out';

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-green px-8 py-4 text-base text-white shadow-cta hover:-translate-y-0.5 hover:bg-brand-green-dark',
  secondary:
    'border-[1.5px] border-line-input bg-white px-7 py-4 text-base text-ink hover:border-ink',
  accent:
    'bg-brand-green px-6 py-3.5 text-[15px] text-white shadow-cta hover:bg-brand-green-dark',
};

/** Brand button that renders as a router Link, an anchor, or a native button. */
export default function Button(props: Props) {
  const { children, variant = 'primary', className = '' } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {children}
      </Link>
    );
  }
  if ('href' in props && props.href) {
    return (
      <a href={props.href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={props.type ?? 'button'} onClick={props.onClick} className={cls}>
      {children}
    </button>
  );
}
