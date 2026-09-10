import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { getExpedicao, linkWhatsApp, STATUS_LABEL } from "../data/expedicoes";
import Formulario from "../components/Formulario";
import FAQ from "../components/FAQ";
import LanternsRising from "../components/LanternsRising";
import "./ExpedicaoPage.css";

function Check() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="var(--gold)" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        fill="none"
        stroke="var(--dark-deeper)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke="#c9c4b9"
        strokeWidth="1.5"
      />
      <path
        d="M7 7l6 6M13 7l-6 6"
        stroke="#9a958a"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ListaGrupos({ grupos }) {
  return (
    <div className="exp-grupos">
      {grupos.map((g) => (
        <div className="exp-grupo" key={g.titulo}>
          <h3>{g.titulo}</h3>
          <ul>
            {g.itens.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function VideoChico({ videoId, formato = "vertical", nome }) {
  const [playing, setPlaying] = useState(false);
  const vertical = formato === "vertical";
  return (
    <div
      className={`exp-video ${vertical ? "exp-video--vertical" : "exp-video--horizontal"}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={`Chico apresenta: ${nome}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          className="exp-video-cover"
          onClick={() => setPlaying(true)}
          aria-label="Assistir ao vídeo do Chico sobre essa expedição"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
          }}
        >
          <span className="exp-video-play">
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default function ExpedicaoPage() {
  const { slug } = useParams();
  const exp = getExpedicao(slug);

  useSEO({
    title: exp ? `${exp.nome} ${exp.ano}` : "Expedição",
    description: exp?.resumo,
    image: exp?.imagemCard
      ? window.location.origin + exp.imagemCard
      : undefined,
    url: window.location.href,
  });

  if (!exp) return <Navigate to="/404" replace />;

  const emBreve = exp.status === "em-breve";
  const wpp = linkWhatsApp(
    exp.mensagemWhatsApp ||
      `Oi Chico! Quero entrar na lista de espera da expedição ${exp.nome} ${exp.ano}.`,
  );

  return (
    <article className="exp">
      {/* ---------- HERO ---------- */}
      <header className={`exp-hero ${emBreve ? "exp-hero--breve" : ""}`}>
        {exp.imagemHero && (
          <img
            src={exp.imagemHero}
            alt=""
            className="exp-hero-bg"
            style={{ objectPosition: exp.imagemHeroPosicao || "center" }}
          />
        )}
        <div className="exp-hero-overlay" />
        {emBreve && <LanternsRising count={8} />}

        <div className="container exp-hero-content">
          <Link to="/#expedicoes" className="exp-voltar">
            ← Todas as expedições
          </Link>
          <span className={`exp-status exp-status--${exp.status}`}>
            {STATUS_LABEL[exp.status]}
          </span>
          <h1 className="section-title exp-title">
            {exp.nome} <em>{exp.ano}</em>
          </h1>
          {exp.periodo && (
            <p className="exp-periodo">
              {exp.periodo}
              {exp.duracao && (
                <span className="exp-duracao">{exp.duracao}</span>
              )}
              {exp.periodoNota && (
                <span className="exp-periodo-nota">{exp.periodoNota}</span>
              )}
            </p>
          )}
          <p className="exp-resumo">{exp.resumo}</p>
          <div className="exp-hero-actions">
            <a
              href={wpp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {emBreve
                ? "Avisar no WhatsApp quando abrir"
                : "Falar com o Chico no WhatsApp"}
            </a>
            <a href="#contato" className="exp-link-form">
              {emBreve
                ? "ou deixar meu contato"
                : "ou deixar meu contato pra ele me chamar"}
            </a>
          </div>
        </div>
      </header>

      {/* ---------- EM BREVE: só formulário ---------- */}
      {emBreve ? (
        <section className="exp-secao exp-contato" id="contato">
          <div className="container exp-contato-grid">
            <div>
              <p className="eyebrow">Lista de espera</p>
              <h2 className="section-title exp-secao-titulo">
                O Chico está preparando essa expedição.
              </h2>
              <p className="exp-texto">
                Deixe seu contato e, assim que as datas fecharem, você recebe os
                detalhes antes de todo mundo. Quem está na lista tem prioridade
                nas vagas.
              </p>
            </div>
            <div className="exp-contato-form">
              <Formulario expedicao={exp} tipo="espera" />
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* ---------- SOBRE + VÍDEO ---------- */}
          <section className="exp-secao exp-sobre">
            <div className="container">
              <div className="exp-sobre-texto">
                <p className="eyebrow">A expedição</p>
                <h2 className="section-title exp-secao-titulo">
                  {exp.videoId
                    ? "O Chico explica como vai ser"
                    : "Como vai ser"}
                </h2>
              </div>
              {exp.videoId ? (
                <div className="exp-sobre-video">
                  <VideoChico
                    videoId={exp.videoId}
                    formato={exp.videoFormato}
                    nome={exp.nome}
                  />
                </div>
              ) : (
                exp.imagemSecundaria && (
                  <div className="exp-sobre-foto exp-sobre-foto--full">
                    <img src={exp.imagemSecundaria} alt="" loading="lazy" />
                  </div>
                )
              )}
            </div>
          </section>

          {/* ---------- INCLUSO / NÃO INCLUSO ---------- */}
          {(exp.incluso || exp.naoIncluso) && (
            <section className="exp-secao exp-incluso">
              <div className="container">
                {exp.incluso && (
                  <>
                    <div className="exp-secao-header">
                      <p className="eyebrow">O que está incluso</p>
                      <h2 className="section-title exp-secao-titulo">
                        Você só precisa aparecer
                      </h2>
                    </div>
                    <ListaGrupos grupos={exp.incluso} />
                  </>
                )}

                {exp.naoIncluso && (
                  <div className="exp-nao-incluso">
                    <h3>O que não está incluso</h3>
                    <ul>
                      {exp.naoIncluso.map((item) => (
                        <li key={item}>
                          <Cross />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ---------- OBRIGATÓRIOS ---------- */}
          {exp.obrigatorios && (
            <section className="exp-secao exp-obrigatorios">
              <div className="container exp-obrigatorios-inner">
                <div>
                  <p className="eyebrow">Antes de embarcar</p>
                  <h2 className="section-title exp-secao-titulo">
                    Itens obrigatórios
                  </h2>
                </div>
                <ul>
                  {exp.obrigatorios.map((item) => (
                    <li key={item}>
                      <Check />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* ---------- DICAS ---------- */}
          {exp.dicas && (
            <section className="exp-secao exp-dicas">
              <div className="container">
                <div className="exp-secao-header">
                  <p className="eyebrow">Dicas do Chico</p>
                  <h2 className="section-title exp-secao-titulo">
                    O que levar na mochila
                  </h2>
                </div>
                <ListaGrupos grupos={exp.dicas} />
              </div>
            </section>
          )}

          {/* ---------- FAQ ---------- */}
          {exp.faq && (
            <FAQ
              itens={exp.faq}
              eyebrow="Tá com dúvida?"
              titulo="O Chico responde"
            />
          )}

          {/* ---------- CONTATO ---------- */}
          <section className="exp-secao exp-contato" id="contato">
            <div className="container exp-contato-grid">
              <div>
                <p className="eyebrow">Vamos conversar?</p>
                <h2 className="section-title exp-secao-titulo">
                  Chame o Chico ou deixe seu contato.
                </h2>
                <p className="exp-texto">
                  O jeito mais rápido é o WhatsApp. Se preferir, preencha ao
                  lado e ele te chama pra marcar uma conversa rápida, sem
                  compromisso.
                </p>
                <a
                  href={wpp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Falar com o Chico no WhatsApp
                </a>
              </div>
              <div className="exp-contato-form">
                <Formulario expedicao={exp} tipo="contato" />
              </div>
            </div>
          </section>
        </>
      )}
    </article>
  );
}
