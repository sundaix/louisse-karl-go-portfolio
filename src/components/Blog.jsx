import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { posts } from "../data/blog";

export default function Blog() {
  return (
    <section id="blog" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="// writing"
          title="Notes, coming soon."
          description="A space reserved for technical write-ups as projects ship."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.06}>
              <div className={`card rounded-2xl p-6 h-full flex flex-col justify-between ${post.placeholder ? "border-dashed opacity-60" : ""}`}>
                <div>
                  <h3 className="font-display font-semibold">{post.title}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{post.excerpt}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-muted mt-6">
                  {post.date || "Not yet published"} <FiArrowUpRight />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
