import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { linkWhatsApp } from "../data/expedicoes";
import "./Nav.css";

const links = [
  { href: "#expedicoes", label: "Expedições" },
  { href: "#sobre", label: "O Chico" },
  { href: "#experiencia", label: "A experiência" },
  { href: "#contato", label: "Contato" },
];

const WPP = linkWhatsApp(
  "Oi Chico! Vi o site e quero saber mais sobre as expedições.",
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}
    >
      <div className="container nav-inner">
        <a href="#inicio" className="nav-brand" onClick={handleClick}>
          <img src={logo} alt="Tô Por Aí no Mundo" width="60" height="60" />
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href="https://www.instagram.com/toporainomundo/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            aria-label="Instagram do Chico"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle
                cx="17.2"
                cy="6.8"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>
          <a
            href={WPP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary nav-cta"
          >
            Falar com o Chico
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav-mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={handleClick}>
            {l.label}
          </a>
        ))}
        <a
          href={WPP}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary nav-cta-mobile"
          onClick={handleClick}
        >
          Falar com o Chico
        </a>
      </div>
    </header>
  );
}
