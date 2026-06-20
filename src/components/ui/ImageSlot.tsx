interface Props {
  /** Optional image URL. When omitted, a labelled placeholder is shown. */
  src?: string;
  alt?: string;
  placeholder?: string;
  className?: string;
}

/**
 * Image holder for editorial photo spots. Drop in a `src` to show the real
 * photo; otherwise it renders a soft branded placeholder so layouts never
 * collapse during content handoff.
 */
export default function ImageSlot({
  src,
  alt = '',
  placeholder = 'Add a photo',
  className = '',
}: Props) {
  if (src) {
    return <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-[#EAF0E2] p-6 text-center ${className}`}
    >
      <span className="max-w-[220px] text-sm font-medium leading-relaxed text-brand-green">
        {placeholder}
      </span>
    </div>
  );
}
