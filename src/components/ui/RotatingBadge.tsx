import { useEffect, useRef } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/** Badge circulaire qui tourne en continu et ralentit au survol. */
export default function RotatingBadge({ text }: { text: string }) {
  const ringRef = useRef<SVGGElement>(null);
  const hover = useRef(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    let angle = 0;
    let speed = 1;
    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      const target = hover.current ? 0.18 : 1;
      speed += (target - speed) * Math.min(1, dt / 220);
      angle = (angle + speed * dt * 0.03) % 360; // ~12 s par tour à pleine vitesse
      ringRef.current?.setAttribute("transform", `rotate(${angle} 100 100)`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  const label = `${text} ✦ `.repeat(2).toUpperCase();

  return (
    <div
      className="badge"
      onPointerEnter={() => (hover.current = true)}
      onPointerLeave={() => (hover.current = false)}
      role="img"
      aria-label={text}
    >
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <g ref={ringRef}>
          <text>
            <textPath href="#badge-circle" textLength="462" lengthAdjust="spacing">
              {label}
            </textPath>
          </text>
        </g>
        <circle cx="100" cy="100" r="9" className="badge-core" />
      </svg>
    </div>
  );
}
