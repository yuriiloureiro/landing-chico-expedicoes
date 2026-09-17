import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { expedicoes, STATUS_LABEL, VIDEO_PADRAO } from "../data/expedicoes";
import Formulario from "../components/Formulario";
import FAQ from "../components/FAQ";
import ScrollReveal from "../components/ScrollReveal";
import RedesSociais from "../components/RedesSociais";
import NotFound from "./NotFound";
import "./ExpedicaoPage.css";

const ACCENTS = ["accent-gold", "accent-dark", "accent-coral"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      className="pagina-icon"
    >
      <circle cx="10" cy="10" r="10" fill="currentColor" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        fill="none"
        stroke="var(--white)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      className="pagina-icon"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M7 7l6 6M13 7l-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Grupos({ grupos }) {
  return (
    <div className="pagina-cards-grid">
      {grupos.map((g, i) => (
        <ScrollReveal
          as="div"
          key={g.titulo}
          delay={(i % 3) * 0.1}
          className="pagina-card"
        >
          <div className="pagina-card-header">
            <span
              className={`pagina-card-icone ${ACCENTS[i % ACCENTS.length]}`}
            >
              <Check />
            </span>
            <h4>{g.titulo}</h4>
          </div>
          <ul>
            {g.itens.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      ))}
    </div>
  );
}

function NaoInclusoCard({ itens }) {
  return (
    <div className="pagina-card pagina-card--escuro">
      <div className="pagina-card-header">
        <span className="pagina-card-icone pagina-card-icone--claro">
          <Cross />
        </span>
        <h4>Não incluso na expedição</h4>
      </div>
      <div className="pagina-chips">
        {itens.map((item) => (
          <span className="pagina-chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ObrigatoriosCard({ itens }) {
  return (
    <div className="pagina-card pagina-checklist">
      {itens.map((item) => (
        <div className="pagina-checklist-item" key={item}>
          <span className="pagina-card-icone accent-gold">
            <Check />
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function ExpedicaoPage() {
  const { slug } = useParams();
  const expedicao = expedicoes.find((e) => e.slug === slug);

  if (!expedicao) return <NotFound />;

  const emBreve = expedicao.status === "em-breve";
  const esgotada = expedicao.status === "esgotada";
  const video = expedicao.video || VIDEO_PADRAO;
  const nomeExibicao = expedicao.nomeCurto || expedicao.nome;

  const fichaItems = [
    { label: "Destino", valor: expedicao.destino },
    { label: "Ano", valor: expedicao.ano },
    { label: "Duração", valor: expedicao.duracao },
    { label: "Quando", valor: expedicao.periodo || expedicao.periodoNota },
  ].filter((item) => item.valor);

  const formularioTitulo = emBreve
    ? "Entrar na lista de espera"
    : esgotada
      ? "Quero saber sobre a próxima edição"
      : "Quero garantir minha vaga";

  const formularioSubtitulo = emBreve
    ? "Seja o primeiro a saber quando essa expedição abrir."
    : esgotada
      ? "Deixe seus dados e o Chico te avisa assim que abrir uma nova turma."
      : "Preencha seus dados e o Chico entra em contato pra alinhar os próximos passos.";

  const temNaoIncluso = Boolean(expedicao.naoIncluso);
  const temObrigatorios = Boolean(expedicao.obrigatorios);
  const temColunaDupla = temNaoIncluso && temObrigatorios;

  return (
    <div className="pagina-expedicao">
      <section className="pagina-hero">
        <video
          className={`pagina-hero-bg${esgotada ? " pagina-hero-bg--esgotada" : ""}`}
          src={video}
          poster={expedicao.imagemHero}
          style={{ objectPosition: expedicao.imagemHeroPosicao || "center" }}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pagina-hero-overlay" />

        {esgotada && <span className="pagina-carimbo">Esgotado</span>}

        <div className="container pagina-hero-content">
          {(expedicao.periodo || expedicao.periodoNota) && (
            <motion.p
              className="pagina-hero-eyebrow"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              {expedicao.periodo || expedicao.periodoNota}
            </motion.p>
          )}

          <motion.h1
            className="pagina-hero-titulo"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
          >
            <em>Expedição</em>
            <span className="pagina-hero-nome">{nomeExibicao}</span>
            <span className="pagina-hero-ano">{expedicao.ano}</span>
          </motion.h1>

          <motion.span
            className="pagina-divisor"
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
          />

          {expedicao.resumo && (
            <motion.p
              className="pagina-hero-subtitulo"
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
            >
              {expedicao.resumo}
            </motion.p>
          )}
        </div>
      </section>

      {fichaItems.length > 0 && (
        <ScrollReveal as="div" className="container pagina-ficha-wrap">
          <div className="pagina-ficha">
            {fichaItems.map((item) => (
              <div className="pagina-ficha-item" key={item.label}>
                <span className="pagina-ficha-label">{item.label}</span>
                <span className="pagina-ficha-valor">{item.valor}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      )}

      {expedicao.descricao && (
        <section className="pagina-bloco">
          <div className="container">
            <ScrollReveal as="div" className="pagina-prosa">
              {expedicao.descricao.map((p) => (
                <p className="pagina-texto" key={p}>
                  {p}
                </p>
              ))}

              {!emBreve && (
                <p className="pagina-nota">
                  O roteiro completo e os valores são apresentados pelo Chico
                  numa conversa rápida por chamada, sem compromisso.
                </p>
              )}
            </ScrollReveal>
          </div>
        </section>
      )}

      {expedicao.porqueExpedicao && (
        <section className="pagina-bloco pagina-bloco--bg">
          <div className="container">
            <div className="pagina-porque-container">
              <ScrollReveal as="div" className="pagina-porque-header">
                <p className="eyebrow">Por que expedição</p>
                <h2>
                  Por que viver {nomeExibicao} <em>em formato de expedição?</em>
                </h2>
              </ScrollReveal>

              <div className="pagina-porque-grid">
                <ScrollReveal
                  as="div"
                  className="pagina-porque-card pagina-porque-card--negativo"
                >
                  <span className="pagina-porque-tag">Por conta própria</span>
                  <h3>Você resolve tudo</h3>
                  <ul>
                    {expedicao.porqueExpedicao.semGuia.map((item) => (
                      <li key={item}>
                        <Cross />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
                <ScrollReveal
                  as="div"
                  delay={0.12}
                  className="pagina-porque-card pagina-porque-card--positivo"
                >
                  <span className="pagina-porque-tag">Com o Chico</span>
                  <h3>Você só precisa embarcar</h3>
                  <ul>
                    {expedicao.porqueExpedicao.comChico.map((item) => (
                      <li key={item}>
                        <Check />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      )}

      {expedicao.incluso && (
        <section className="pagina-bloco">
          <div className="container">
            <ScrollReveal as="h2" className="pagina-secao-titulo">
              O que está incluso
            </ScrollReveal>
            <Grupos grupos={expedicao.incluso} />
          </div>
        </section>
      )}

      {(temNaoIncluso || temObrigatorios) && (
        <section className="pagina-bloco pagina-bloco--bg">
          <div className="container">
            <div
              className={`pagina-duas-colunas${temColunaDupla ? "" : " pagina-duas-colunas--unica"}`}
            >
              {temNaoIncluso && (
                <ScrollReveal as="div" className="pagina-coluna">
                  <h2 className="pagina-secao-titulo pagina-secao-titulo--esquerda">
                    O que não está incluso
                  </h2>
                  <NaoInclusoCard itens={expedicao.naoIncluso} />
                </ScrollReveal>
              )}
              {temObrigatorios && (
                <ScrollReveal as="div" delay={0.1} className="pagina-coluna">
                  <h2 className="pagina-secao-titulo pagina-secao-titulo--esquerda">
                    Itens obrigatórios
                  </h2>
                  <ObrigatoriosCard itens={expedicao.obrigatorios} />
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>
      )}

      {expedicao.dicas && (
        <section className="pagina-bloco">
          <div className="container">
            <ScrollReveal as="h2" className="pagina-secao-titulo">
              O que levar na mochila
            </ScrollReveal>
            <Grupos grupos={expedicao.dicas} />
          </div>
        </section>
      )}

      {expedicao.faq && (
        <FAQ itens={expedicao.faq} eyebrow="Dúvidas" titulo="Tá com dúvida?" />
      )}

      <section className="pagina-formulario-wrap">
        <div className="container pagina-formulario-inner">
          <ScrollReveal as="div">
            <p className="eyebrow">Seu próximo passo</p>
            <h2 className="pagina-formulario-titulo">{formularioTitulo}</h2>
            <span className="pagina-divisor" />
            <p className="pagina-formulario-sub">{formularioSubtitulo}</p>
          </ScrollReveal>

          <ScrollReveal
            as="div"
            delay={0.15}
            className="pagina-formulario-card"
          >
            <Formulario
              expedicao={expedicao}
              tipo={emBreve ? "espera" : "contato"}
            />
          </ScrollReveal>
        </div>
      </section>

      <RedesSociais />
    </div>
  );
}
