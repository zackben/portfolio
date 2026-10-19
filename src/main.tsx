import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@fontsource-variable/big-shoulders-display";
import "@fontsource-variable/outfit";
import "@fontsource-variable/pixelify-sans";
import "@fontsource/caveat/latin-400.css";
import "./styles/global.css";
import "./styles/layout.css";
import App from "./App";

// VITE_MEMORY_ROUTER=1 sert seulement à l'aperçu en un seul fichier ; le site utilise de vraies URL.
const Router = import.meta.env.VITE_MEMORY_ROUTER === "1" ? MemoryRouter : BrowserRouter;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
