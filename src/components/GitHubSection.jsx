import { useEffect, useState } from "react";
import { FiGithub, FiStar, FiGitBranch } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { config } from "../data/config";

export default function GitHubSection() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${config.github}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub request failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled) {
          setRepos(Array.isArray(data) ? data : []);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="relative py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// open source"
          title="Straight from GitHub."
          description={`Pulled live from github.com/${config.github}.`}
        />

        {status === "loading" && (
          <div className="grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="card rounded-2xl p-6 h-32 animate-pulse" />
            ))}
          </div>
        )}

        {status === "error" && (
          <div className="card rounded-2xl p-8 text-center text-muted">
            Couldn't load repositories right now.{" "}
            <a
              href={`https://github.com/${config.github}`}
              target="_blank"
              rel="noreferrer"
              className="text-cyan"
            >
              View the profile directly →
            </a>
          </div>
        )}

        {status === "ready" && (
          <div className="grid md:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <Reveal key={repo.id} delay={i * 0.06}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="card rounded-2xl p-6 flex flex-col h-full hover:border-cyan/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <FiGithub className="text-lg text-muted" />
                    {repo.language && (
                      <span className="font-mono text-[11px] text-muted">{repo.language}</span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold mt-4 truncate">{repo.name}</h3>
                  <p className="text-sm text-muted mt-2 line-clamp-2 flex-1">
                    {repo.description || "No description yet."}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-muted font-mono">
                    <span className="flex items-center gap-1">
                      <FiStar /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiGitBranch /> {repo.forks_count}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
            {repos.length === 0 && (
              <p className="text-muted col-span-full text-center">No public repositories found yet.</p>
            )}
          </div>
        )}

        <Reveal delay={0.2} className="text-center mt-10">
          <a
            href={`https://github.com/${config.github}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm rounded-full border border-line px-5 py-2.5 hover:border-cyan/50 hover:text-cyan transition-colors"
          >
            <FiGithub /> View full profile
          </a>
        </Reveal>
      </div>
    </section>
  );
}
