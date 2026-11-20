import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiVsco,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "../data/skills";

const iconMap = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFirebase,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiVsco,
  SiFigma,
  FaJava,
  FaAws,
};

function Icon({ name }) {
  const Cmp = iconMap[name];
  if (!Cmp) return null;
  return <Cmp className="text-xl" />;
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// toolkit"
          title="What I build with."
          description="Grouped by role, not by proficiency bars — because context matters more than a number out of ten."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.06}>
              <div className="card rounded-2xl p-6 h-full">
                <h3 className="font-display font-medium text-sm text-muted mb-5 uppercase tracking-wide">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-2.5 rounded-xl border border-line bg-white/[0.02] px-4 py-2.5 text-sm transition-all hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-white/[0.05]"
                    >
                      <span className="text-muted group-hover:text-cyan transition-colors">
                        <Icon name={item.icon} />
                      </span>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
