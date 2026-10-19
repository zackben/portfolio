// Tout le contenu du site est ici : modifiez ce fichier, toutes les pages suivent.

export const profile = {
  firstName: "Zakaria",
  lastName: "Benaddi",
  fullName: "Zakaria Benaddi",
  role: "Senior front-end developer",
  tagline: "Les dés sont jetés",
  city: "Casablanca, Maroc",
  timeZone: "Africa/Casablanca",
  email: "zackben19@gmail.com",
  cv: "/BENADDI-CV.pdf",
  since: 2020,
  available: "Ouvert aux opportunités",
  links: {
    github: { url: "https://github.com/zackben", handle: "@zackben" },
    linkedin: {
      url: "https://ma.linkedin.com/in/zakaria-benaddi-820b22167",
      handle: "/in/zakaria-benaddi",
    },
    x: { url: "https://x.com/zackbenaddi", handle: "@zackbenaddi" },
    instagram: { url: "https://www.instagram.com/zack_benaddi/", handle: "@zack_benaddi" },
  },
};

export const bio = {
  intro: [
    "Salut, moi c'est Zakaria Benaddi, développeur front-end spécialisé en React. Mon parcours a commencé par une curiosité : comprendre ce qui se cache derrière l'écran. C'est vite devenu une vraie passion.",
    "Aujourd'hui je construis des parcours bancaires et d'assurance : ouverture de compte en ligne, e-banking, back-offices, souscription. Des écrans pleins de règles métier, que j'aime rendre simples pour ceux qui les utilisent tous les jours.",
  ],
  about: [
    "Je me concentre sur le front-end avec React et TypeScript, et je passe côté back avec Spring Boot ou Node.js quand le projet le demande. J'aime les interfaces fonctionnelles, mais surtout agréables à utiliser, avec un code propre et facile à maintenir.",
    "Quand je ne code pas, je joue aux jeux vidéo, je teste les nouvelles technos ou je voyage pour découvrir d'autres façons de voir. J'apprends en continu, avec une idée en tête : construire des choses que les gens aiment vraiment utiliser.",
  ],
};

export type Company = {
  id: string;
  name: string;
  fullName: string;
  role: string;
  start: string;
  end: string;
  world: number;
  highlights: string[];
  stack: string[];
};

export const companies: Company[] = [
  {
    id: "rma",
    name: "RMA",
    fullName: "RMA - Royale Marocaine d'Assurance",
    role: "Senior Software Engineer",
    start: "Avr. 2026",
    end: "Aujourd'hui",
    world: 4,
    highlights: [
      "Plateforme web pour les intermédiaires et agents d'assurance RMA : digitalisation et automatisation de la gestion des dossiers.",
      "Interfaces dynamiques et responsives, fonctionnalités métier avec calcul en temps réel et composants interactifs.",
      "API REST, logique métier et services back-end en Spring Boot / Java.",
      "Tests front-end avec React Testing Library, optimisation des performances, collaboration avec l'équipe UI/UX.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Spring Boot", "Java", "React Testing Library", "API REST"],
  },
  {
    id: "pca",
    name: "PCA",
    fullName: "PCA (Payment Centre for Africa)",
    role: "Front-end developer React",
    start: "Fév. 2022",
    end: "Mars 2026",
    world: 3,
    highlights: [
      "Parcours d'ouverture de compte 100 % en ligne dans l'app Pocket Bank (Jedeviensclient, Fulldigital).",
      "Interface e-banking de gestion de trésorerie : virements simples et multiples, transferts, cartes.",
      "Back-offices avec rôles sur mesure, workflows de validation et tableaux de bord KPI.",
    ],
    stack: ["React", "Redux", "React Query", "Vite", "styled-components", "Jest", "Cypress", "GitLab CI/CD", "Docker"],
  },
  {
    id: "eqdom",
    name: "EQDOM",
    fullName: "EQDOM",
    role: "Front-end developer React",
    start: "Mars 2021",
    end: "Janv. 2022",
    world: 2,
    highlights: [
      "Espace connecté qui automatise le traitement des dossiers de crédit.",
      "Score du client affiché en temps réel dans une interface interactive et animée.",
    ],
    stack: ["React", "React Query", "Zustand", "Animations CSS", "GitLab"],
  },
  {
    id: "sanlam",
    name: "SANLAM",
    fullName: "SANLAM Assurance",
    role: "Développeur full-stack JS / React Native",
    start: "2020",
    end: "Janv. 2021",
    world: 1,
    highlights: [
      "Nouveaux parcours d'assurance dans l'app mobile Saham, sur iOS et Android.",
      "App de couverture médicale des employés OCP : garanties, remboursements, prises en charge.",
      "Modernisation de la plateforme web Saham avec les équipes fonctionnelles et UX.",
    ],
    stack: ["React Native", "React", "Node.js", "TypeScript", "Express", "Redux", "Material-UI"],
  },
];

export const education = {
  degree: "Master Méthodes informatiques appliquées à la gestion",
  school: "EMSI",
  place: "Casablanca",
  year: "2019",
};

export type PreviewKind = "onboarding" | "transfer" | "dashboard" | "score" | "insurance" | "agent";

export type Project = {
  id: string;
  level: string;
  companyId: string;
  title: string;
  category: string;
  year: string;
  preview: PreviewKind;
  featured?: boolean;
  /** Version courte : cartes et écran de la console. */
  short: string;
};

export const projects: Project[] = [
  {
    id: "saham-mobile",
    level: "1-1",
    companyId: "sanlam",
    title: "App mobile Saham",
    category: "Assurance",
    year: "2020",
    preview: "insurance",
    short: "Nouveaux parcours d'assurance dans l'app iOS et Android, avec corrections et gains de performance.",
  },
  {
    id: "ocp",
    level: "1-2",
    companyId: "sanlam",
    title: "Couverture médicale OCP",
    category: "Assurance santé",
    year: "2020",
    preview: "insurance",
    short: "L'app des employés OCP : garanties, remboursements et demandes de prise en charge.",
  },
  {
    id: "saham-web",
    level: "1-3",
    companyId: "sanlam",
    title: "Plateforme web Saham",
    category: "Assurance",
    year: "2020",
    preview: "dashboard",
    short: "Souscription, remboursement et suivi des demandes, sur une interface modernisée.",
  },
  {
    id: "eqdom",
    level: "2-1",
    companyId: "eqdom",
    title: "Espace connecté EQDOM",
    category: "Crédit",
    year: "2021",
    preview: "score",
    short: "Traitement des dossiers de crédit automatisé, avec le score du client en temps réel.",
  },
  {
    id: "jedeviensclient",
    level: "3-1",
    companyId: "pca",
    title: "Jedeviensclient",
    category: "Banque digitale",
    year: "2022",
    preview: "onboarding",
    featured: true,
    short: "Ouverture de compte bancaire 100 % en ligne depuis l'app Pocket Bank, avec des packs exclusifs.",
  },
  {
    id: "ebanking",
    level: "3-2",
    companyId: "pca",
    title: "E-banking Cash Management",
    category: "E-banking",
    year: "2022",
    preview: "transfer",
    featured: true,
    short: "Virements simples et multiples, transferts entre comptes, pour particuliers et entreprises.",
  },
  {
    id: "backoffice",
    level: "3-3",
    companyId: "pca",
    title: "Back-office E-banking",
    category: "Back-office",
    year: "2022",
    preview: "dashboard",
    featured: true,
    short: "Rôles et droits sur mesure, workflows de validation et tableaux de bord KPI.",
  },
  {
    id: "canal-agence",
    level: "3-4",
    companyId: "pca",
    title: "Canal Agence",
    category: "Back-office",
    year: "2022",
    preview: "dashboard",
    short: "Ouverture de compte en agence pour particuliers, TPE et professions libérales.",
  },
  {
    id: "fulldigital",
    level: "3-5",
    companyId: "pca",
    title: "Fulldigital",
    category: "Banque digitale",
    year: "2022",
    preview: "onboarding",
    short: "Entrée en relation 100 % digitale, pour les particuliers et les Marocains du monde.",
  },
  {
    id: "rma-agents",
    level: "4-1",
    companyId: "rma",
    title: "Plateforme digitale RMA",
    category: "Assurance",
    year: "2026",
    preview: "agent",
    featured: true,
    short: "La plateforme des agents RMA : dossiers d'assurance automatisés et calcul de prime en temps réel.",
  },
];

export const companyById = (id: string) => companies.find((c) => c.id === id)!;

export const marqueeRows = [
  ["React", "TypeScript", "Next.js", "Redux", "React Query", "Vite", "Figma"],
  ["Spring Boot", "Node.js", "React Native", "Jest", "Cypress", "Docker", "Zustand"],
];

export type Tool = { name: string; desc: string; category: string; icon: string; color: string };

// `icon` correspond à une clé de components/ui/toolIcons.tsx
export const tools: { section: string; items: Tool[] }[] = [
  {
    section: "Logiciels",
    items: [
      { name: "VS Code", desc: "Éditeur principal", category: "Éditeur", icon: "vscode", color: "#2f9cf4" },
      { name: "IntelliJ IDEA", desc: "Projets Java et Spring", category: "IDE", icon: "intellij", color: "#fe2857" },
      { name: "Claude Code", desc: "Assistant de code", category: "IA", icon: "claude", color: "#d97757" },
      { name: "Postman", desc: "Tests d'API", category: "API", icon: "postman", color: "#ff6c37" },
      { name: "Swagger", desc: "Documentation d'API", category: "API", icon: "swagger", color: "#85ea2d" },
      { name: "Figma", desc: "Maquettes et handoff", category: "Design", icon: "figma", color: "#f24e1e" },
      { name: "GitLab", desc: "Code et CI/CD", category: "DevOps", icon: "gitlab", color: "#fc6d26" },
      { name: "Docker", desc: "Conteneurs", category: "DevOps", icon: "docker", color: "#2496ed" },
      { name: "Vercel", desc: "Déploiement front", category: "Hébergement", icon: "vercel", color: "#ffffff" },
      { name: "npm", desc: "Paquets JavaScript", category: "Outil", icon: "npm", color: "#cb3837" },
      { name: "Jira", desc: "Sprints et tickets", category: "Agile", icon: "jira", color: "#2684ff" },
      { name: "Trello", desc: "Tâches perso", category: "Tâches", icon: "trello", color: "#0079bf" },
      { name: "Slack", desc: "Échanges d'équipe", category: "Équipe", icon: "slack", color: "#e01e5a" },
      { name: "macOS", desc: "Système", category: "OS", icon: "macos", color: "#d6d6dc" },
    ],
  },
  {
    section: "Stack",
    items: [
      { name: "React", desc: "Interfaces", category: "Front", icon: "react", color: "#61dafb" },
      { name: "TypeScript", desc: "Typage", category: "Langage", icon: "typescript", color: "#3178c6" },
      { name: "Redux Toolkit", desc: "État global", category: "État", icon: "redux", color: "#764abc" },
      { name: "React Query", desc: "Données serveur", category: "Données", icon: "reactquery", color: "#ff4154" },
      { name: "Vite", desc: "Build et dev", category: "Outil", icon: "vite", color: "#a96bff" },
      { name: "Jest", desc: "Tests unitaires", category: "Tests", icon: "jest", color: "#c21325" },
      { name: "Cypress", desc: "Tests end-to-end", category: "Tests", icon: "cypress", color: "#69d3a7" },
      { name: "Node.js", desc: "Back quand il faut", category: "Back", icon: "node", color: "#5fa04e" },
    ],
  },
];

export const collaborate = [
  "Développement front-end",
  "Applications React",
  "Parcours bancaires",
  "Back-offices",
  "Applications mobiles",
  "Missions freelance",
  "Revue de code",
  "Projets open source",
];

export const lastPlayed = {
  title: "EA FC 26",
  mode: "Ultimate Team",
  note: "Mes soirées, entre deux mises en prod",
};

export const quote = {
  text: "Facta non verba.",
  translation: "Des actes, pas des mots.",
  author: "Proverbe latin",
};
