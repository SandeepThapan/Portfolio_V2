import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-[2.6rem]">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-soft">{description}</p>
      )}
    </Reveal>
  );
}
