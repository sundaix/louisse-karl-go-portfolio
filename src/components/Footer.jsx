import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { config } from "../data/config";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-line py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display font-semibold">
              LK<span className="text-gradient">.</span>Go
            </p>
            <p className="text-sm text-muted mt-1 max-w-xs">
              "Every project is a rough draft of a better one."
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={`https://github.com/${config.github}`} target="_blank" rel="noreferrer" className="text-muted hover:text-cyan transition-colors">
              <FiGithub />
            </a>
            <a href={config.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-cyan transition-colors">
              <FiLinkedin />
            </a>
            <a href={`mailto:${config.email}`} className="text-muted hover:text-cyan transition-colors">
              <FiMail />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-10 font-mono">
          © {new Date().getFullYear()} {config.name}. Built from scratch.
        </p>
      </div>
    </footer>
  );
}
