import { useMemo } from 'react';
import './LanternsRising.css';

// Signature visual element: small paper lanterns drifting upward.
// count controls density.
function Lantern({ style }) {
  return (
    <svg className="lantern" style={style} viewBox="0 0 24 32" width="24" height="32" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="5" ry="2" fill="var(--gold)" opacity="0.9" />
      <rect x="7" y="6" width="10" height="18" rx="3" fill="var(--gold-soft)" opacity="0.85" />
      <ellipse cx="12" cy="26" rx="5" ry="2" fill="var(--gold)" opacity="0.9" />
      <circle cx="12" cy="15" r="3" fill="#FFF3D6" opacity="0.9" />
    </svg>
  );
}

// Gerador pseudo-aleatório determinístico: mesma sequência a cada render,
// então as lanternas não "pulam" de lugar quando o componente re-renderiza.
function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function LanternsRising({ count = 8, className = '' }) {
  const lanterns = useMemo(() => {
    const rand = seeded(count * 7 + 13);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: (i / count) * 100 + rand() * (100 / count) * 0.6,
      delay: -(rand() * 18),
      duration: 16 + rand() * 10,
      scale: 0.6 + rand() * 0.7,
    }));
  }, [count]);

  return (
    <div className={`lanterns-rising ${className}`} aria-hidden="true">
      {lanterns.map((l) => (
        <Lantern
          key={l.id}
          style={{
            left: `${l.left}%`,
            animationDelay: `${l.delay}s`,
            animationDuration: `${l.duration}s`,
            transform: `scale(${l.scale})`,
          }}
        />
      ))}
    </div>
  );
}
