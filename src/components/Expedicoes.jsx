import { Link } from "react-router-dom";
import { expedicoes, STATUS_LABEL } from "../data/expedicoes";
import ScrollReveal from "./ScrollReveal";
import "./Expedicoes.css";

const LINK_LABEL = {
  esgotada: "Entrar na comunidade",
  "em-breve": "Entrar na lista de espera",
};

function Card({ e }) {
  const esgotada = e.status === "esgotada";

  return (
    <Link
      to={`/expedicoes/${e.slug}`}
      className={`expedicao-card expedicao-card--${e.status}`}
    >
      <div className="expedicao-img-wrap">
        <img
          src={e.imagemCard}
          alt=""
          loading="lazy"
          style={
            e.imagemHeroPosicao
              ? { objectPosition: e.imagemHeroPosicao }
              : undefined
          }
        />
        <span className={`expedicao-status expedicao-status--${e.status}`}>
          {STATUS_LABEL[e.status]}
        </span>
        {esgotada && <span className="expedicao-carimbo">Esgotado</span>}
      </div>
      <div className="expedicao-info">
        <span className="expedicao-ano">{e.ano}</span>
        <h3>{e.nome}</h3>
        <p className="expedicao-periodo">{e.periodo || e.resumo}</p>
        <span className="expedicao-link">
          {LINK_LABEL[e.status] || "Ver detalhes"}
        </span>
      </div>
    </Link>
  );
}

export default function Expedicoes() {
  return (
    <section className="expedicoes" id="expedicoes">
      <div className="container">
        <ScrollReveal as="div" className="section-header">
          <p className="eyebrow">Próximas expedições</p>
          <h2 className="section-title">
            Escolha pra onde você vai com o Chico
          </h2>
        </ScrollReveal>

        <div className="expedicoes-grid">
          {expedicoes.map((e, i) => (
            <ScrollReveal as="div" key={e.slug} delay={(i % 3) * 0.1}>
              <Card e={e} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal as="p" className="expedicoes-nota">
          Os grupos são pequenos e as vagas são limitadas.
        </ScrollReveal>
      </div>
    </section>
  );
}
