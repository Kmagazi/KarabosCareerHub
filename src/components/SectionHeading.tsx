type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-2xl mb-14 sm:mb-16 ${alignClass}`}>
      <div
        className={`inline-flex items-center gap-2 mb-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="w-8 h-px bg-navy-300 dark:bg-navy-600" />
        <p className="font-semibold tracking-wide uppercase text-xs sm:text-sm text-navy-500 dark:text-navy-300">
          {eyebrow}
        </p>
        <span className="w-8 h-px bg-navy-300 dark:bg-navy-600" />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-navy-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-navy-500 dark:text-navy-300">
          {description}
        </p>
      )}
    </div>
  );
}
