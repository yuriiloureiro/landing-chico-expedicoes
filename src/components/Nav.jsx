import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo-horizontal.png";
import { expedicoes } from "../data/expedicoes";
import "./Nav.css";

const linksHome = [
  { href: "#expedicoes", label: "Expedições" },
  { href: "#sobre", label: "O Chico" },
  { href: "#experiencia", label: "A experiência" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const naHome = pathname === "/";
  const handleClick = () => setOpen(false);

  const matchExpedicao = pathname.match(/^\/expedicoes\/(.+)$/);
  const expedicaoAtual = matchExpedicao
    ? expedicoes.find((e) => e.slug === matchExpedicao[1])
    : null;

  const linksExpedicao = expedicaoAtual
    ? [
        expedicaoAtual.incluso && { href: "#incluso", label: "Incluso" },
        expedicaoAtual.roteiro && { href: "#roteiro", label: "Roteiro" },
        expedicaoAtual.precoFaixa && { href: "#decisao", label: "Decisão" },
        expedicaoAtual.porqueExpedicao && {
          href: "#porque",
          label: "Por quê?",
        },
        expedicaoAtual.faq && {
          href: "#chico-responde",
          label: "O Chico responde",
        },
        { href: "#depoimentos", label: "Depoimentos" },
      ].filter(Boolean)
    : null;

  const links = linksExpedicao || linksHome;
  const ancoraNaMesmaPagina = naHome || Boolean(expedicaoAtual);

  function renderLink(l, onClick) {
    if (ancoraNaMesmaPagina) {
      return (
        <a key={l.href} href={l.href} onClick={onClick}>
          {l.label}
        </a>
      );
    }
    return (
      <Link key={l.href} to={`/${l.href}`} onClick={onClick}>
        {l.label}
      </Link>
    );
  }

  return (
    <header className="nav">
      <div className={`nav-pill ${open ? "nav-pill--open" : ""}`}>
        {naHome ? (
          <a href="#inicio" className="nav-brand" onClick={handleClick}>
            <img src={logo} alt="Você Por Aí no Mundo" height="48" />
          </a>
        ) : (
          <Link to="/" className="nav-brand" onClick={handleClick}>
            <img src={logo} alt="Você Por Aí no Mundo" height="48" />
          </Link>
        )}

        <nav className="nav-links">
          {links.map((l) => renderLink(l, handleClick))}
        </nav>

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

      {open && (
        <div className="nav-mobile">
          {links.map((l) => renderLink(l, handleClick))}
        </div>
      )}
    </header>
  );
}
