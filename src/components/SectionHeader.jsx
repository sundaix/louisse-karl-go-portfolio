import Reveal from "./Reveal";

export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
      <Reveal>
        <p className="font-mono text-xs tracking-[0.2em] text-cyan uppercase mb-4">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-muted leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
