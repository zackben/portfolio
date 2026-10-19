import { useState, type FormEvent } from "react";
import { FiArrowRight, FiEdit3 } from "react-icons/fi";
import SectionHeading from "../components/ui/SectionHeading";
import { loadNotes, saveNotes, type Note } from "../lib/guestbook";
import { useApp } from "../lib/app-context";
import "../styles/pages.css";

const MAX = 280;
const HUES = [152, 260, 330, 30, 200, 0];

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

const hueFor = (name: string) => HUES[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % HUES.length];

export default function GuestbookPage() {
  const { showToast } = useApp();
  const [notes, setNotes] = useState<Note[]>(loadNotes);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const valid = name.trim().length > 1 && message.trim().length > 1;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const note: Note = {
      id: `${Date.now()}`,
      name: name.trim().slice(0, 40),
      message: message.trim().slice(0, MAX),
      date: new Date().toISOString(),
    };
    const next = [note, ...notes];
    setNotes(next);
    saveNotes(next);
    setMessage("");
    showToast("Note épinglée, merci !");
  };

  const fmt = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="page">
      <section className="wrap narrow">
        <SectionHeading as="h1" label="Mur de la communauté" title="Livre d'or">
          <p className="lead">Laissez une trace : un mot, un conseil ou juste un bonjour. Chaque note est un petit bout de votre passage ici.</p>
        </SectionHeading>

        <p className="notes-count">
          {notes.length} {notes.length > 1 ? "notes épinglées" : "note épinglée"}
        </p>

        <div className="notes-grid">
          <form className="card note-form" onSubmit={submit}>
            <div className="note-form-head">
              <span className="note-pen" aria-hidden="true">
                <FiEdit3 />
              </span>
              <div>
                <p className="note-form-title">Laisser une note</p>
                <p className="note-form-sub">Elle s'affiche tout de suite sur le mur</p>
              </div>
            </div>
            <label className="sr-only" htmlFor="gb-name">
              Votre nom
            </label>
            <input
              id="gb-name"
              className="field"
              placeholder="Votre nom"
              value={name}
              maxLength={40}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
            <label className="sr-only" htmlFor="gb-message">
              Votre message
            </label>
            <textarea
              id="gb-message"
              className="field"
              placeholder="Écrivez quelque chose de sympa…"
              rows={4}
              value={message}
              maxLength={MAX}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="note-form-foot">
              <span className="counter">
                {message.length}/{MAX}
              </span>
              <button type="submit" className="sign-btn" disabled={!valid}>
                Signer <FiArrowRight aria-hidden="true" />
              </button>
            </div>
          </form>

          {notes.length === 0 && (
            <div className="card note empty">
              <span className="note-quote" aria-hidden="true">
                “
              </span>
              <p>Le mur est encore vide. Soyez la première personne à signer !</p>
            </div>
          )}

          {notes.map((n) => (
            <article key={n.id} className="card note">
              <span className="note-quote" aria-hidden="true">
                “
              </span>
              <p className="note-msg">{n.message}</p>
              <div className="note-foot">
                <span className="note-avatar" style={{ color: `hsl(${hueFor(n.name)} 80% 70%)`, background: `hsl(${hueFor(n.name)} 60% 25% / 0.5)` }}>
                  {initials(n.name)}
                </span>
                <span className="note-name">{n.name}</span>
                <time className="note-date" dateTime={n.date}>
                  {fmt.format(new Date(n.date))}
                </time>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
