import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { profile } from "../data/profile";

type AppContextValue = {
  paletteOpen: boolean;
  setPaletteOpen: (open: boolean | ((o: boolean) => boolean)) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  showToast: (text: string) => void;
  copyEmail: () => Promise<void>;
  toast: string | null;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<number>();

  const showToast = useCallback((text: string) => {
    setToast(text);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast("Email copié");
    } catch {
      showToast(`Copie impossible : ${profile.email}`);
    }
  }, [showToast]);

  const value = useMemo(
    () => ({ paletteOpen, setPaletteOpen, menuOpen, setMenuOpen, showToast, copyEmail, toast }),
    [paletteOpen, menuOpen, showToast, copyEmail, toast],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp doit être utilisé dans <AppProvider>");
  return ctx;
}
