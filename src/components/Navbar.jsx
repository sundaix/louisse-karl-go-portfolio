import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "certificates", label: "Certificates" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass border border-line" : "border border-transparent"
          }`}
        >
          <button
            onClick={() => handleClick("home")}
            className="font-display font-semibold tracking-tight text-lg"
          >
            LK<span className="text-gradient">.</span>Go
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className={`relative px-3 py-2 text-sm rounded-full transition-colors ${
                  active === s.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/6 border border-line"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleClick("contact")}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium hover:border-cyan/50 hover:text-cyan transition-colors"
          >
            Contact
          </button>

          <button
            className="md:hidden text-xl"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 rounded-2xl glass border border-line p-3 flex flex-col gap-1"
            >
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleClick(s.id)}
                  className={`text-left px-3 py-2.5 rounded-xl text-sm ${
                    active === s.id ? "bg-white/6 text-ink" : "text-muted"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
