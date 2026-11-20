import { FiDownload, FiFileText } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { config } from "../data/config";

export default function Resume() {
  return (
    <section id="resume" className="relative py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader eyebrow="// resume" title="The one-page version." />
        <Reveal>
          <div className="card rounded-3xl overflow-hidden">
            <div className="aspect-[8.5/6] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue/10 via-transparent to-purple/10">
              <FiFileText className="text-3xl text-muted" />
              <p className="text-muted text-sm">
                {config.resumeUrl ? "Resume preview" : "Add a resume PDF to /public and set resumeUrl in src/data/config.js"}
              </p>
            </div>
            <div className="border-t border-line p-6 flex justify-center">
              <a
                href={config.resumeUrl || "#"}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-6 py-3 text-sm hover:bg-white/90 transition-colors"
              >
                <FiDownload /> Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
