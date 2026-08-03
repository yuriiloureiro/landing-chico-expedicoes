import './LanternsRising.css';

// Signature visual element: small paper lanterns drifting upward.
// count controls density, tone lets us adapt brightness for light/dark sections.
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

export default function LanternsRising({ count = 8, className = '' }) {
  const lanterns = Array.from({ length: count }, (_, i) => {
    const left = (i / count) * 100 + Math.random() * (100 / count) * 0.6;
    const delay = -(Math.random() * 18);
    const duration = 16 + Math.random() * 10;
    const scale = 0.6 + Math.random() * 0.7;
    return { left, delay, duration, scale, id: i };
  });

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
