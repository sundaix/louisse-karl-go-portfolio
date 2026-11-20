import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { value: 3, suffix: "+", label: "Years learning programming" },
  { value: 10, suffix: "+", label: "Projects built" },
  { value: 5, suffix: "+", label: "Technologies learned" },
  { value: 100, suffix: "%", label: "Passion for learning" },
];

export default function Stats() {
  return (
    <section className="relative py-20 border-y border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
              <p className="font-display text-4xl sm:text-5xl font-semibold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
