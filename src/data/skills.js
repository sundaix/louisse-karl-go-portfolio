// Add new skills by appending to the relevant category array.
export const skillCategories = [
  {
    id: "languages",
    label: "Programming Languages",
    items: [
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Java", icon: "FaJava" },
      { name: "SQL", icon: "SiMysql" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "SiReact" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Bootstrap", icon: "SiBootstrap" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Firebase", icon: "SiFirebase" },
      { name: "Node.js", icon: "SiNodedotjs" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    items: [
      { name: "AWS", icon: "FaAws" },
      { name: "Firebase", icon: "SiFirebase" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "VS Code", icon: "SiVsco" },
      { name: "Figma", icon: "SiFigma" },
    ],
  },
];
