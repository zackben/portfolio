import { companies, education } from "../../data/profile";
import SectionHeading from "../ui/SectionHeading";

export default function ExperienceTable() {
  const rows = [
    ...companies.map((c) => ({ id: c.id, role: c.role, org: c.name, when: `${c.start} – ${c.end}` })),
    { id: "edu", role: education.degree, org: education.school, when: education.year },
  ];

  return (
    <section className="wrap section" aria-labelledby="xp-title">
      <SectionHeading id="xp-title" title="Expérience" />
      <ol className="xp-table">
        {rows.map((r, i) => (
          <li key={r.id}>
            <span className="xp-index">{i + 1}</span>
            <span className="xp-role">{r.role}</span>
            <span className="xp-org">{r.org}</span>
            <span className="xp-when">( {r.when} )</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
