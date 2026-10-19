import type { ReactNode } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaSlack, FaXTwitter } from "react-icons/fa6";
import {
  SiClaude,
  SiCypress,
  SiDocker,
  SiFigma,
  SiGitlab,
  SiIntellijidea,
  SiJest,
  SiJira,
  SiMacos,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSwagger,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { profile } from "../../data/profile";

export const TOOL_ICONS: Record<string, ReactNode> = {
  vscode: <VscVscode />,
  intellij: <SiIntellijidea />,
  claude: <SiClaude />,
  postman: <SiPostman />,
  swagger: <SiSwagger />,
  figma: <SiFigma />,
  gitlab: <SiGitlab />,
  docker: <SiDocker />,
  vercel: <SiVercel />,
  npm: <SiNpm />,
  jira: <SiJira />,
  trello: <SiTrello />,
  slack: <FaSlack />,
  macos: <SiMacos />,
  react: <SiReact />,
  typescript: <SiTypescript />,
  redux: <SiRedux />,
  reactquery: <SiReactquery />,
  vite: <SiVite />,
  jest: <SiJest />,
  cypress: <SiCypress />,
  node: <SiNodedotjs />,
};

export const SOCIALS = [
  { id: "github", label: "GitHub", icon: <FaGithub />, color: "#24292f", ...profile.links.github },
  { id: "linkedin", label: "LinkedIn", icon: <FaLinkedinIn />, color: "#0a66c2", ...profile.links.linkedin },
  { id: "x", label: "X (Twitter)", icon: <FaXTwitter />, color: "#ffffff", ...profile.links.x },
  { id: "instagram", label: "Instagram", icon: <FaInstagram />, color: "#e1306c", ...profile.links.instagram },
];
