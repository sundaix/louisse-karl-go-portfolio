import { FiAward, FiPlus } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// credentials"
          title="Certifications."
          description="Reserved slots — drop a certificate image into /public/certificates and update src/data/certificates.js."
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {certificates.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <div className="card rounded-2xl aspect-[3/4] flex flex-col items-center justify-center gap-3 text-center p-4 border-dashed hover:border-cyan/40 transition-colors">
                {c.placeholder ? (
                  <FiPlus className="text-xl text-muted" />
                ) : (
                  <FiAward className="text-xl text-cyan" />
                )}
                <div>
                  <p className="font-mono text-[11px] text-muted uppercase tracking-wide">{c.issuer}</p>
                  <p className="text-sm mt-1">{c.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
