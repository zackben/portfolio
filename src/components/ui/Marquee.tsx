function Star() {
  return (
    <svg className="marquee-star" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.9 6.6L20.5 6l-3.6 6 3.6 6-6.6-2.6L12 22l-1.9-6.6L3.5 18l3.6-6-3.6-6 6.6 2.6z" />
    </svg>
  );
}

/** Bandes de technos qui défilent en continu, dans deux sens opposés. */
export default function Marquee({ rows }: { rows: string[][] }) {
  return (
    <section className="marquee" aria-label="Technologies">
      {rows.map((row, r) => (
        <div key={r} className={`marquee-row${r % 2 ? " is-reverse" : ""}`}>
          {/* Le contenu est doublé pour boucler sans saut. */}
          {[0, 1].map((copy) => (
            <div key={copy} className="marquee-track" aria-hidden={copy === 1}>
              {row.map((word) => (
                <span key={word} className="marquee-item">
                  {word}
                  <Star />
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
