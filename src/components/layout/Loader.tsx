import { useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

// "Bonjour" dans plusieurs langues, avec l'arabe et l'amazigh pour Casablanca.
const WORDS = ["Bonjour", "Hello", "مرحبا", "Azul", "Hola", "Olá", "Ciao", "Hallo", "こんにちは", "Bonjour"];
const KEY = "zb-hello-seen";

function alreadySeen() {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

/** Écran d'accueil : "Bonjour" dans plusieurs langues, puis le rideau se lève. Une fois par session. */
export default function Loader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => !reduced && !alreadySeen());
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!visible) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    if (!visible || leaving) return;
    const last = index === WORDS.length - 1;
    const delay = index === 0 ? 800 : last ? 500 : 170;
    const t = window.setTimeout(() => (last ? setLeaving(true) : setIndex((i) => i + 1)), delay);
    return () => window.clearTimeout(t);
  }, [index, leaving, visible]);

  useEffect(() => {
    if (!leaving) return;
    const t = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* ignoré */
      }
    }, 900);
    return () => window.clearTimeout(t);
  }, [leaving]);

  if (!visible) return null;

  return (
    <div className={`loader${leaving ? " is-leaving" : ""}`} onClick={() => setLeaving(true)} aria-hidden="true">
      <p className="loader-word" key={index} lang={index === 2 ? "ar" : index === 8 ? "ja" : undefined}>
        <span className="loader-dot" />
        {WORDS[index]}
      </p>
      <svg className="loader-curve" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path d="M0 0 Q500 100 1000 0 L1000 0 L0 0 Z" />
      </svg>
    </div>
  );
}
