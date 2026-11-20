// To add a new project, copy an object below and fill in the fields.
// Set "placeholder: true" for empty slots reserved for future work.
export const projects = [
  {
    id: "crafts-and-crumbs",
    title: "Crafts & Crumbs",
    tagline: "A B2C café storefront prototype built with a small team.",
    description:
      "A static front-end prototype for a fictional café brand, built as a group project. Covers a full customer journey from landing page to a category-driven menu, product detail pages with allergen information, and a custom auto-scrolling product carousel.",
    image: "/projects/crafts-and-crumbs.svg",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    challenges:
      "Getting a drag-enabled carousel to distinguish a drag from a tap, and keeping the animation smooth across breakpoints without jank.",
    lessons:
      "Coordinating a shared Git repository across a team, and translating Figma mockups into pixel-accurate, responsive markup.",
    github: "https://github.com/sundaix/crafts-and-crumbs",
    demo: "",
    caseStudy: "",
    placeholder: false,
  },
  {
    id: "medlink-clinic",
    title: "MedLink Clinic",
    tagline: "A web-based scheduling system for a clinic environment.",
    description:
      "A database-driven appointment scheduling system built for an Advanced Database Systems course. In progress: entity-relationship design, a relational schema, and a clickable Figma prototype covering patient and staff scheduling flows.",
    image: "/projects/medlink-clinic.svg",
    tags: ["SQL", "Figma", "Database Design"],
    challenges:
      "Modeling the scheduling domain correctly — appointments, providers, and availability — instead of falling back on generic e-commerce structures.",
    lessons:
      "Starting from the ERD before the interface produces a much more defensible schema.",
    github: "",
    demo: "",
    caseStudy: "",
    placeholder: false,
  },
  {
    id: "placeholder-1",
    title: "Next Build",
    tagline: "Reserved for an upcoming project.",
    description: "",
    image: "",
    tags: [],
    challenges: "",
    lessons: "",
    github: "",
    demo: "",
    caseStudy: "",
    placeholder: true,
  },
];
