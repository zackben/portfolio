export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/projets", label: "Projets" },
  { to: "/outils", label: "Outils" },
  { to: "/livre-dor", label: "Livre d'or" },
  { to: "/contact", label: "Contact" },
] as const;

export const PAGE_TITLES: Record<string, string> = {
  "/": "Zakaria Benaddi | Senior Front-end Developer",
  "/a-propos": "À propos | Zakaria Benaddi",
  "/projets": "Projets | Zakaria Benaddi",
  "/outils": "Outils | Zakaria Benaddi",
  "/livre-dor": "Livre d'or | Zakaria Benaddi",
  "/contact": "Contact | Zakaria Benaddi",
};
