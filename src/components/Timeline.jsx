import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { timeline } from "../data/timeline";

const statusColor = {
  done: "bg-cyan",
  current: "bg-blue",
  upcoming: "bg-purple",
  future: "bg-white/20",
};

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section id="journey" className="relative py-10 md:py-12">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="// journey"
          title="How I got here — and where it's going."
        />

        <div ref={ref} className="relative pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue via-purple to-cyan"
          />

          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.04} className="relative">
                <span
                  className={`absolute -left-[34px] top-1.5 w-3.5 h-3.5 rounded-full border-4 border-base ${statusColor[t.status]}`}
                />
                <p className="font-mono text-xs text-muted mb-1">{t.year}</p>
                <h3 className="font-display text-lg font-semibold">{t.title}</h3>
                <p className="text-muted text-sm mt-1 leading-relaxed">{t.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
