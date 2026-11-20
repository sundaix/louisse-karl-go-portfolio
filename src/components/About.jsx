import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { config } from "../data/config";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// why me"
          title="Curious by default, deliberate by habit."
        />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue/25 via-transparent to-purple/25" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-7xl font-semibold text-white/10">LKG</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 glass border-t border-line">
                <p className="font-mono text-xs text-muted">Photo placeholder — swap in /public</p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <Reveal>
              <p>
                I'm {config.name}, a {config.role.toLowerCase()} who treats every
                assignment as a chance to ship something a little more polished
                than it needed to be. What draws me to software is the same
                thing that draws me to a well-run kitchen or a well-built
                bridge: a lot of invisible decisions add up to something that
                just works.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                I spend most of my time in web development and cloud
                computing, but the constant across everything I build is
                attention to the details a user actually feels — spacing,
                response time, the difference between an interface that
                merely functions and one that feels considered.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Outside of coursework, I keep a running list of small
                problems worth solving, and treat continuous learning as the
                actual job description — not a bullet point on a resume.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  ["Currently", "3rd Year BSIT"],
                  ["Focused on", "Web & Cloud"],
                  ["Approach", "Ship, then refine"],
                  ["Driven by", "Real problems"],
                ].map(([k, v]) => (
                  <div key={k} className="card rounded-xl px-4 py-3">
                    <p className="font-mono text-[11px] text-muted uppercase tracking-wide">{k}</p>
                    <p className="text-ink text-sm mt-1">{v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
