import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

/** Ouvre un projet dans la console de la page Projets. */
export function useOpenLevel() {
  const navigate = useNavigate();
  return useCallback(
    (id: string) => navigate("/projets", { state: { level: id, nonce: Date.now() } }),
    [navigate],
  );
}
