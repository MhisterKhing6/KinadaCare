interface Props {
  children: React.ReactNode;
  /** Use light styling (lime) on dark surfaces. */
  light?: boolean;
  className?: string;
}

/** Small uppercase eyebrow label with a leading dot. */
export default function Eyebrow({ children, light = false, className = '' }: Props) {
  const color = light ? 'text-brand-lime' : 'text-brand-green';
  const dot = light ? 'bg-brand-lime' : 'bg-brand-green';
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase leading-none tracking-[0.16em] ${color} ${className}`}
    >
      <span className={`h-[7px] w-[7px] rounded-full ${dot}`} />
      {children}
    </div>
  );
}
