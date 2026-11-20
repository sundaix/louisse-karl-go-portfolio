import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiFacebook, FiMapPin, FiSend } from "react-icons/fi";
import Reveal from "./Reveal";
import { config } from "../data/config";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl tracking-tight max-w-2xl">
            Let's build something together.
          </h2>
          <p className="mt-5 text-muted max-w-xl leading-relaxed">
            Have a project, an internship opening, or just a question about how
            something was built? I read every message.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 mt-14">
          <Reveal delay={0.05} className="space-y-4">
            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-4 card rounded-2xl p-5 hover:border-cyan/40 transition-colors"
            >
              <FiMail className="text-xl text-cyan shrink-0" />
              <div>
                <p className="text-sm text-muted">Email</p>
                <p className="text-sm">{config.email}</p>
              </div>
            </a>
            <a
              href={`https://github.com/${config.github}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 card rounded-2xl p-5 hover:border-cyan/40 transition-colors"
            >
              <FiGithub className="text-xl text-cyan shrink-0" />
              <div>
                <p className="text-sm text-muted">GitHub</p>
                <p className="text-sm">github.com/{config.github}</p>
              </div>
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 card rounded-2xl p-5 hover:border-cyan/40 transition-colors"
            >
              <FiLinkedin className="text-xl text-cyan shrink-0" />
              <div>
                <p className="text-sm text-muted">LinkedIn</p>
                <p className="text-sm">Connect on LinkedIn</p>
              </div>
            </a>
            {config.facebook && (
              <a
                href={config.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 card rounded-2xl p-5 hover:border-cyan/40 transition-colors"
              >
                <FiFacebook className="text-xl text-cyan shrink-0" />
                <div>
                  <p className="text-sm text-muted">Facebook</p>
                  <p className="text-sm">Message on Facebook</p>
                </div>
              </a>
            )}
            <div className="flex items-center gap-4 card rounded-2xl p-5">
              <FiMapPin className="text-xl text-cyan shrink-0" />
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="text-sm">{config.location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card rounded-2xl p-7 space-y-5">
              <div>
                <label className="text-xs font-mono text-muted uppercase tracking-wide">Name</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-sm outline-none focus:border-cyan/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted uppercase tracking-wide">Email</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-sm outline-none focus:border-cyan/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted uppercase tracking-wide">Message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full rounded-xl bg-white/[0.03] border border-line px-4 py-3 text-sm outline-none focus:border-cyan/50 transition-colors resize-none"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium px-6 py-3 text-sm hover:bg-white/90 transition-colors"
              >
                <FiSend /> {sent ? "Message noted — thank you" : "Send Message"}
              </button>
              {sent && (
                <p className="text-xs text-muted text-center">
                  This form is a front-end placeholder — connect it to a form
                  service or backend to receive submissions.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
