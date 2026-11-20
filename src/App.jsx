import { useEffect, useState } from "react";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import GitHubSection from "./components/GitHubSection";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[100] bg-base flex items-center justify-center">
          <span className="font-display text-xl font-semibold tracking-tight animate-pulse">
            LK<span className="text-gradient">.</span>Go
          </span>
        </div>
      )}
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Timeline />
        <Certificates />
        <Experience />
        <GitHubSection />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
