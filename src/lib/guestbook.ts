// Livre d'or : stocké dans le navigateur (localStorage).
// Pour que les notes soient visibles par tous, remplacez ces deux fonctions par des appels
// à une base partagée (Supabase, Firebase, Vercel KV...). Le reste de la page ne change pas.

export type Note = { id: string; name: string; message: string; date: string };

const KEY = "zb-guestbook";

export function loadNotes(): Note[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveNotes(notes: Note[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(notes));
  } catch {
    /* stockage indisponible : la note reste affichée pour cette visite */
  }
}
