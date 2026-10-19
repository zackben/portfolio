import { useEffect } from "react";
import { FiCommand } from "react-icons/fi";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import CommandPalette from "./components/layout/CommandPalette";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import SideMenu from "./components/layout/SideMenu";
import { AppProvider, useApp } from "./lib/app-context";
import { PAGE_TITLES } from "./lib/nav";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GuestbookPage from "./pages/GuestbookPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ToolsPage from "./pages/ToolsPage";

function Layout() {
  const { setPaletteOpen, toast } = useApp();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES["/"];
  }, [pathname]);

  return (
    <>
      <Loader />
      <button type="button" className="cmd-btn" aria-label="Navigation rapide (⌘K)" onClick={() => setPaletteOpen(true)}>
        <FiCommand aria-hidden="true" />
      </button>
      <SideMenu />

      <main id="main">
        <Outlet />
      </main>
      <Footer />

      <CommandPalette />
      <div className="toast-region" aria-live="polite">
        {toast && <p className="toast">{toast}</p>}
      </div>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="projets" element={<ProjectsPage />} />
          <Route path="outils" element={<ToolsPage />} />
          <Route path="livre-dor" element={<GuestbookPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AppProvider>
  );
}
