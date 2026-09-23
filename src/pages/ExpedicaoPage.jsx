import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { expedicoes, STATUS_LABEL, VIDEO_PADRAO } from "../data/expedicoes";
import Formulario from "../components/Formulario";
import FAQ from "../components/FAQ";
import ScrollReveal from "../components/ScrollReveal";
import Depoimentos from "../components/Depoimentos";
import RedesSociais from "../components/RedesSociais";
import NotFound from "./NotFound";
import "./ExpedicaoPage.css";

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

function IconeExpedicao() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}

function IconePlane() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 15.5l19-8.5-8.5 19-2-8.5-8.5-2z" />
    </svg>
  );
}

function IconeHotel() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M7 21v-6h4v6M13 21v-6h4v6" />
    </svg>
  );
}

function IconeVan() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 16V8a1 1 0 0 1 1-1h11l4 4v5" />
      <path d="M3 16h16" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
    </svg>
  );
}

function IconeMapa() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function IconeEstrela() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l2.4 5.4 5.8.6-4.4 3.9 1.3 5.7L12 15.9l-5.1 2.7 1.3-5.7-4.4-3.9 5.8-.6L12 3z" />
    </svg>
  );
}

function IconeMochila() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 8V6a5 5 0 0 1 10 0v2" />
      <path d="M5 8h14v13H5z" />
      <path d="M9 12h6" />
    </svg>
  );
}

function IconeSol() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8" />
    </svg>
  );
}

function IconeTenis() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 17c0-2 1.5-3 3-4l4-3c1-.7 2-1 3-1l6 2c1 .3 2 1.2 2 2.5V17H3z" />
      <path d="M3 17v2h15v-2" />
    </svg>
  );
}

function IconeLista() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="var(--white)"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M4 6h.01M4 12h.01M4 18h.01" />
    </svg>
  );
}

function iconePara(titulo) {
  const t = titulo.toLowerCase();
  if (t.includes("voo")) return IconePlane;
  if (t.includes("hosped")) return IconeHotel;
  if (t.includes("transfer") || t.includes("traslado")) return IconeVan;
  if (t.includes("passeio")) return IconeMapa;
  if (t.includes("experiênc") || t.includes("chico")) return IconeEstrela;
  if (t.includes("pessoa")) return IconeMochila;
  if (t.includes("sol")) return IconeSol;
  if (t.includes("calçado")) return IconeTenis;
  if (t.includes("opcional")) return IconeLista;
  return Check;
}

function Grupos({ grupos, aninhado }) {
  return (
    <div
      className={`pagina-cards-grid${aninhado ? " pagina-cards-grid--aninhado" : ""}`}
    >
      {grupos.map((g, i) => {
        const IconeCard = iconePara(g.titulo);
        return (
          <ScrollReveal
            as="div"
            key={g.titulo}
            delay={(i % 3) * 0.08}
            className={`pagina-card${aninhado ? " pagina-card--aninhado" : ""}`}
          >
            <div className="pagina-card-header">
              <span className="pagina-card-icone accent-gold">
                <IconeCard />
              </span>
              <h4>{g.titulo}</h4>
            </div>
            {g.itens.length === 1 ? (
              <p className="pagina-card-texto-unico">{g.itens[0]}</p>
            ) : (
              <ul>
                {g.itens.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </ScrollReveal>
        );
      })}
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

  const temMeta = Boolean(expedicao.rota || expedicao.hospedagemResumo);

  const formularioTitulo = emBreve
    ? "Entrar na lista de espera"
    : esgotada
      ? "Quero saber sobre a próxima edição"
      : "Quero garantir minha vaga";

  const formularioSubtitulo = emBreve
    ? "Seja o primeiro a saber quando essa expedição abrir."
    : esgotada
      ? "Deixe seus dados e o Chico te avisa assim que abrir uma nova turma."
      : "Preencha seus dados e o Chico entra em contato pra alinhar os próximos\u00A0passos.";

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

      {expedicao.incluso && (
        <section className="pagina-bloco" id="incluso">
          <div className="container">
            <ScrollReveal as="div" className="pagina-incluso-intro">
              <p className="eyebrow">Tudo resolvido antes do embarque</p>
              <h2>Tudo resolvido antes mesmo de você embarcar.</h2>
              <p>
                Sua viagem por {expedicao.destino} vai ser mais simples do que
                você imagina.
              </p>
              <p>
                Mesmo com outro idioma, cultura diferente e toda a logística de
                uma viagem como essa, muita coisa já estará organizada antes da
                sua chegada.
              </p>
              <p>
                É aquele trabalho que você talvez nem perceba durante a viagem,
                justamente porque tudo estará acontecendo como deveria.
              </p>
            </ScrollReveal>

            <ScrollReveal as="div" delay={0.1} className="pagina-incluso-card">
              {temMeta && (
                <div className="pagina-incluso-meta">
                  <div className="pagina-incluso-meta-esquerda">
                    <span className="pagina-incluso-meta-icone">
                      <IconeExpedicao />
                    </span>
                    <div>
                      <span className="pagina-incluso-meta-eyebrow">
                        Expedição
                      </span>
                      <span className="pagina-incluso-meta-destino">
                        {expedicao.destino}
                      </span>
                    </div>
                  </div>
                  <div className="pagina-incluso-meta-direita">
                    {[expedicao.rota, expedicao.hospedagemResumo]
                      .filter(Boolean)
                      .join("  ·  ")}
                  </div>
                </div>
              )}

              {expedicao.duracaoDetalhe ? (
                <div className="pagina-incluso-destaque">
                  <div className="pagina-duracao-card">
                    <img src={expedicao.imagemHero} alt="" />
                    <div className="pagina-duracao-overlay" />
                    <div className="pagina-duracao-conteudo">
                      <span className="pagina-duracao-eyebrow">
                        A expedição
                      </span>
                      <span className="pagina-duracao-numero">
                        {expedicao.duracao?.match(/\d+/)?.[0]}
                        <em>dias</em>
                      </span>
                      <p>{expedicao.duracaoDetalhe}</p>
                    </div>
                  </div>
                  <Grupos grupos={expedicao.incluso} aninhado />
                </div>
              ) : (
                <Grupos grupos={expedicao.incluso} aninhado />
              )}
            </ScrollReveal>
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

      {expedicao.roteiro && (
        <section className="pagina-bloco" id="roteiro">
          <div className="container">
            <ScrollReveal as="div" className="pagina-incluso-intro">
              <p className="eyebrow">Tudo pensado para você</p>
              <h2>
                Você vive a experiência.
                <span className="pagina-roteiro-leve">
                  A gente cuida do resto.
                </span>
              </h2>
              <p>
                {expedicao.destino} é uma viagem de muitos cenários,
                deslocamentos e experiências.
              </p>
              <p>
                Por isso, cuidamos da logística e dos principais detalhes com
                antecedência.
              </p>
              <p>
                Você embarca tranquilo e encontra uma viagem que já está pronta
                para ser vivida.
              </p>
            </ScrollReveal>

            <div className="pagina-roteiro-grid">
              {expedicao.roteiro.map((dia, i) => (
                <ScrollReveal
                  as="div"
                  key={dia.dia}
                  delay={(i % 2) * 0.08}
                  className="pagina-card pagina-roteiro-card"
                >
                  <div className="pagina-roteiro-card-topo">
                    <span className="pagina-roteiro-numero">{dia.dia}</span>
                    <span className="pagina-roteiro-data">{dia.data}</span>
                  </div>
                  <h4>{dia.titulo}</h4>
                  <p className="pagina-roteiro-texto">{dia.texto}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {expedicao.decisao && (
        <section className="pagina-bloco pagina-decisao-wrap" id="decisao">
          <div className="container">
            <ScrollReveal as="div" className="pagina-decisao-header">
              <p className="eyebrow">A decisão</p>
              <h2>
                {expedicao.decisao.titulo}{" "}
                <em>{expedicao.decisao.tituloDestaque}</em>
              </h2>
              {(expedicao.periodo || expedicao.periodoNota) && (
                <p className="pagina-decisao-periodo">
                  {expedicao.periodo || expedicao.periodoNota}
                </p>
              )}
            </ScrollReveal>

            <ScrollReveal as="div" delay={0.1} className="pagina-decisao-card">
              <div className="pagina-decisao-topo">
                <span className="pagina-decisao-tag">
                  <span className="pagina-decisao-tag-numero">#1</span>
                  {expedicao.decisao.tag}
                </span>
                {expedicao.duracao && (
                  <span className="pagina-decisao-duracao">
                    {expedicao.duracao}
                  </span>
                )}
              </div>

              <p className="pagina-decisao-eyebrow-interna">Expedição</p>
              <h3 className="pagina-decisao-nome">
                {nomeExibicao} <span>{expedicao.ano}</span>
              </h3>
              <p className="pagina-decisao-resumo">
                {expedicao.decisao.resumo}
              </p>

              <ul className="pagina-decisao-destaques">
                {expedicao.decisao.destaques.map((item) => (
                  <li key={item}>
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pagina-decisao-preco-wrap">
                <span className="pagina-decisao-preco-label">
                  Faixa de investimento
                </span>
                <span className="pagina-decisao-preco">
                  {expedicao.decisao.precoMin} <em>—</em>{" "}
                  {expedicao.decisao.precoMax}
                </span>
              </div>

              <a
                href="#formulario"
                className="btn-hero-pill pagina-decisao-btn"
              >
                Reservar minha vaga
                <span className="btn-hero-pill-arrow">→</span>
              </a>

              <p className="pagina-decisao-rodape">
                ★ Grupos reduzidos · Vagas limitadas ★
              </p>
            </ScrollReveal>
          </div>
        </section>
      )}

      {expedicao.porqueExpedicao && (
        <section className="pagina-bloco pagina-bloco--bg" id="porque">
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
                  <h3>A viagem também vira trabalho</h3>
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
                  <h3>A viagem deixa de ser trabalho</h3>
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
        <FAQ
          itens={expedicao.faq}
          eyebrow="Dúvidas"
          titulo="Tá com dúvida?"
          subtitulo="O Chico responde!"
          id="chico-responde"
        />
      )}

      <Depoimentos id="depoimentos" />

      <section className="pagina-formulario-wrap" id="formulario">
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
