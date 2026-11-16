// All page content lives here. Edit this file, then run ./build.sh.

export const profile = {
  name: "Muhammed Suhail",
  role: "Software Developer",
  company: "Allied Enterprises Qatar",
  location: "Doha, Qatar",
  email: "muhammedsuhailkm2003@gmail.com",
  phone: "+974 7065 6922",
  phoneHref: "tel:+97470656922",
  linkedin: "https://www.linkedin.com/in/muhammedsuhailkm",
  github: "https://github.com/muhammedsuhailkm",
  cv: "./CV-MuhammedSuhail.pdf",
  formEndpoint: "https://formspree.io/f/meepyzwd",
  stack: ["Node.js", ".NET", "Next.js", "MSSQL", "MongoDB"],
}

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export const skills = [
  {
    group: "Backend development",
    note: "API design, debugging, scalable backend solutions",
    items: [".NET", "C#", "Node.js", "Express.js", "FastAPI", "Python", "C"],
  },
  {
    group: "Database management",
    note: "Schema design, queries, data modeling",
    items: ["SQL", "MySQL", "MSSQL", "MongoDB"],
  },
  {
    group: "Frontend",
    note: "Dashboards and responsive interfaces for the systems I build",
    items: ["Next.js", "React"],
  },
  {
    group: "Deployment & automation",
    note: "Workflow automation and containerization",
    items: ["CI/CD", "Docker", "Cloud"],
  },
  {
    group: "Project & communication",
    note: "Keeping work visible and stakeholders aligned",
    items: ["Agile coordination", "Stakeholder management", "Documentation"],
  },
]

export const jobs = [
  {
    when: "May 2026 – Present",
    live: true,
    title: "Software Developer",
    org: "Allied Enterprises Qatar · Doha",
    points: [
      "Develop and maintain ERP modules using Next.js and MSSQL.",
      "Create customized reports and integrate payroll systems using .NET.",
      "Build REST APIs for seamless third-party system integration.",
    ],
  },
  {
    when: "Sept 2025 – Dec 2025",
    live: false,
    title: "Software Development Intern",
    org: "Noviindus Technologies",
    points: [
      "Designed, developed, and tested software solutions by applying programming principles and industry best practices.",
      "Collaborated with cross-functional teams to analyze requirements, debug issues, and implement efficient software features.",
      "Took part in code reviews, software testing, and documentation to improve application quality, reliability, and maintainability.",
    ],
  },
  {
    when: "May 2024 – Aug 2024",
    live: false,
    title: "IT Project Management Intern",
    org: "IBM SkillsBuild · Online",
    points: [
      "Learned IT project management fundamentals, including Agile, planning, and risk management.",
      "Applied tools for task tracking, scheduling, and team coordination.",
      "Gained skills in requirement analysis, documentation, and stakeholder communication.",
    ],
  },
]

export const projects = [
  {
    name: "Hulool CRM",
    kind: "Full-stack CRM · In production",
    text: "A CRM for Hulool Travel Agency that manages customers, bookings, and services. Responsive UI over a RESTful backend, deployed for production use.",
    flow: ["Next.js", "REST API", "MongoDB"],
    image: "./assets/img/hulool-crm.webp",
    alt: "Hulool CRM customer list with status filters and destination tags",
    link: "https://github.com/muhammedsuhailkm/crm-saas",
  },
  {
    name: "Hulool Website",
    kind: "Business website",
    text: "The public site for Hulool, built with server-side rendering and optimized routing for fast loads and search visibility, from reusable UI components.",
    flow: ["Next.js", "SSR", "SEO"],
    image: "./assets/img/hulool-website.webp",
    alt: "Hulool travel website home page with the headline Explore beyond the ordinary",
    link: "https://github.com/muhammedsuhailkm/hulool-website",
  },
  {
    name: "SmartCareer Recommendation System",
    kind: "Machine learning · Web app",
    text: "A machine learning model analyzes a user's skills and recommends careers. Career datasets and NLP techniques map profiles to suitable job roles, shown in dynamic dashboards.",
    flow: ["React", "Node.js", "ML + NLP model"],
    image: null,
    alt: "",
    link: null,
  },
  {
    name: "LandVista",
    kind: "Marketplace · Web app",
    text: "Puts land buyers and sellers in direct contact, with the Google Maps API showing exactly where each property sits.",
    flow: ["React.js", "Node.js", "MySQL", "Google Maps API"],
    image: null,
    alt: "",
    link: null,
  },
]

export const education = [
  {
    title: "B.Tech in Computer Science",
    sub: "APJ Abdul Kalam Technological University · College of Engineering, Thalassery",
    score: "7.5",
    scoreNote: "Final-semester SGPA · First class",
  },
  {
    title: "Higher Secondary Education",
    sub: "First class with distinction",
    score: "9.6",
    scoreNote: "CGPA",
  },
  {
    title: "Secondary School Education",
    sub: "First class with distinction",
    score: "9.2",
    scoreNote: "CGPA",
  },
]

export const certifications = [
  {
    title: "Developing Back-End Apps with Node.js and Express",
    sub: "IBM · Coursera",
    href: "https://coursera.org/share/cee3a2777958281f58de0ac8a2844e97",
  },
  {
    title: "Node.js & MongoDB: Developing Back-end Database Applications",
    sub: "IBM · Coursera",
    href: "https://coursera.org/share/e7c7c77e1b4444fe8fa140dd6392c2be",
  },
  {
    title: "Developing Front-End Apps with React",
    sub: "IBM · Coursera",
    href: "https://coursera.org/share/bace2a4b7e82c96700bddccdf0169972",
  },
]
