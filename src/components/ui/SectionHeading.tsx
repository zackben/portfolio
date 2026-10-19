import type { ReactNode } from "react";

export default function SectionHeading({
  label,
  title,
  as: Tag = "h2",
  size = "large",
  id,
  children,
}: {
  label?: string;
  title: string;
  as?: "h1" | "h2";
  size?: "large" | "medium";
  id?: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      {label && <p className="label">{label}</p>}
      <Tag id={id} className={`big-title${size === "medium" ? " medium" : ""}`}>
        {title}
        <span className="dot" aria-hidden="true" />
      </Tag>
      {children}
    </div>
  );
}
