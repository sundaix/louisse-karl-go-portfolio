import { FiGithub, FiExternalLink, FiFileText, FiPlus } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
  if (project.placeholder) {
    return (
      <Reveal delay={index * 0.08}>
        <div className="card rounded-3xl p-10 h-full min-h-[280px] flex flex-col items-center justify-center text-center border-dashed">
          <FiPlus className="text-2xl text-muted mb-3" />
          <p className="font-display text-lg text-muted">{project.title}</p>
          <p className="text-sm text-muted/70 mt-1">Add your next project to src/data/projects.js</p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 0.08}>
      <div className="card rounded-3xl overflow-hidden group h-full flex flex-col transition-transform hover:-translate-y-1">
        <div className="relative aspect-video bg-gradient-to-br from-blue/15 via-surface to-purple/15 flex items-center justify-center border-b border-line">
          <span className="font-display text-2xl text-white/15">{project.title}</span>
        </div>
        <div className="p-7 flex flex-col flex-1">
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <p className="text-cyan text-sm mt-1">{project.tagline}</p>
          <p className="text-muted text-sm mt-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((t) => (
              <span key={t} className="font-mono text-[11px] rounded-full border border-line px-3 py-1 text-muted">
                {t}
              </span>
            ))}
          </div>

          {(project.challenges || project.lessons) && (
            <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
              {project.challenges && (
                <div>
                  <p className="font-mono text-[11px] text-muted uppercase tracking-wide mb-1">Challenges</p>
                  <p className="text-muted leading-relaxed">{project.challenges}</p>
                </div>
              )}
              {project.lessons && (
                <div>
                  <p className="font-mono text-[11px] text-muted uppercase tracking-wide mb-1">Lessons</p>
                  <p className="text-muted leading-relaxed">{project.lessons}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-3 mt-auto pt-6">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-full border border-line px-4 py-2 hover:border-cyan/50 hover:text-cyan transition-colors">
                <FiGithub /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-full border border-line px-4 py-2 hover:border-cyan/50 hover:text-cyan transition-colors">
                <FiExternalLink /> Live Demo
              </a>
            )}
            {project.caseStudy && (
              <a href={project.caseStudy} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm rounded-full border border-line px-4 py-2 hover:border-cyan/50 hover:text-cyan transition-colors">
                <FiFileText /> Case Study
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// featured work"
          title="Projects worth showing."
          description="A growing set of builds — from front-end prototypes to database-backed systems."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
