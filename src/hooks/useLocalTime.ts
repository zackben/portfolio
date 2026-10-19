import { useEffect, useState } from "react";

/** Heure courante dans un fuseau donné, mise à jour chaque minute. */
export function useLocalTime(timeZone: string) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit", timeZone }).format(now);
  const hour = Number(new Intl.DateTimeFormat("en-GB", { hour: "numeric", hour12: false, timeZone }).format(now));
  const offset =
    new Intl.DateTimeFormat("en-GB", { timeZone, timeZoneName: "shortOffset" })
      .formatToParts(now)
      .find((p) => p.type === "timeZoneName")?.value ?? "";

  return { time, hour, offset };
}

export function greetingFor(hour: number) {
  if (hour >= 5 && hour < 12) return "Bonjour";
  if (hour >= 12 && hour < 18) return "Bon après-midi";
  return "Bonsoir";
}
