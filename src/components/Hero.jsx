import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { config } from "../data/config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden noise-grid"
    >
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/4 w-[560px] h-[560px] rounded-full bg-blue/20 blur-[140px]" />
        <div className="absolute top-1/3 right-0 w-[480px] h-[480px] rounded-full bg-purple/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1.3fr_0.9fr] gap-14 items-center">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="font-mono text-xs tracking-[0.2em] text-cyan uppercase mb-6"
          >
            // available for opportunities
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display font-semibold leading-[1.02] text-5xl sm:text-6xl lg:text-7xl tracking-tight"
          >
            Hello. I'm
            <br />
            <span className="text-gradient">{config.name}.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
          >
            {config.role} specializing in web development and cloud computing —
            {" "}{config.tagline.toLowerCase()}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="rounded-full bg-white text-black font-medium px-6 py-3 text-sm hover:bg-white/90 transition-colors"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollTo("resume")}
              className="rounded-full border border-line px-6 py-3 text-sm font-medium hover:border-cyan/50 hover:text-cyan transition-colors"
            >
              Download Resume
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full px-6 py-3 text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              Contact Me →
            </button>
          </motion.div>
        </div>

        {/* Signature element: product-style spec card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="card rounded-3xl p-6 glow-blue relative"
        >
          <div className="flex items-center justify-between font-mono text-xs text-muted mb-6">
            <span>SPEC_SHEET</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              LIVE
            </span>
          </div>
          <dl className="space-y-4 font-mono text-sm">
            {[
              ["MODEL", "IT Undergraduate, v3"],
              ["STACK", "React · Firebase · AWS"],
              ["FOCUS", "Web · Cloud · UI/UX"],
              ["STATUS", "Shipping consistently"],
              ["LOCATION", config.location],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-4 border-t border-line pt-3 first:border-t-0 first:pt-0">
                <dt className="text-muted">{k}</dt>
                <dd className="text-ink text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-ink"
        aria-label="Scroll to About"
      >
        <HiArrowDown />
      </motion.button>
    </section>
  );
}
