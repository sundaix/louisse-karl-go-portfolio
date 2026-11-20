import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="// experience"
          title="Where I've put in the work."
        />
        <div className="space-y-4">
          {experience.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.06}>
              <div className={`card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 ${e.placeholder ? "border-dashed opacity-60" : ""}`}>
                <div className="sm:w-32 shrink-0">
                  <span className="font-mono text-[11px] rounded-full border border-line px-3 py-1 text-muted">
                    {e.type}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="font-display font-semibold">{e.role}</h3>
                    <span className="font-mono text-xs text-muted">{e.period || "—"}</span>
                  </div>
                  <p className="text-cyan text-sm mt-0.5">{e.org}</p>
                  {e.description && <p className="text-muted text-sm mt-2 leading-relaxed">{e.description}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
