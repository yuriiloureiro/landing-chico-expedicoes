import { useState } from "react";
import { expedicoes, STATUS_LABEL } from "../data/expedicoes";
import ExpedicaoModal from "./ExpedicaoModal";
import "./Expedicoes.css";

function CardAberta({ e, onAbrir }) {
  return (
    <button
      className={`expedicao-card expedicao-card--${e.status}`}
      onClick={() => onAbrir(e)}
    >
      <div className="expedicao-img-wrap">
        <img src={e.imagemCard} alt="" loading="lazy" />
        <span className="expedicao-status">{STATUS_LABEL[e.status]}</span>
      </div>
      <div className="expedicao-info">
        <span className="expedicao-ano">{e.ano}</span>
        <h3>{e.nome}</h3>
        <p className="expedicao-periodo">{e.periodo}</p>
        <span className="expedicao-link">Ver detalhes</span>
      </div>
    </button>
  );
}

function CardEmBreve({ e, onAbrir }) {
  return (
    <button
      className="expedicao-card expedicao-card--em-breve"
      onClick={() => onAbrir(e)}
    >
      <div className="expedicao-img-wrap">
        <img
          src={e.imagemCard}
          alt=""
          loading="lazy"
          style={{ objectPosition: e.imagemHeroPosicao || "center" }}
        />
        <span className="expedicao-status expedicao-status--em-breve">
          {STATUS_LABEL[e.status]}
        </span>
      </div>
      <div className="expedicao-info">
        <span className="expedicao-ano">{e.ano}</span>
        <h3>{e.nome}</h3>
        <p className="expedicao-periodo">{e.resumo}</p>
        <span className="expedicao-link">Entrar na lista de espera</span>
      </div>
    </button>
  );
}

export default function Expedicoes() {
  const [selecionada, setSelecionada] = useState(null);
  const abertas = expedicoes.filter((e) => e.status !== "em-breve");
  const emBreve = expedicoes.filter((e) => e.status === "em-breve");

  return (
    <section className="expedicoes" id="expedicoes">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Próximas expedições</p>
          <h2 className="section-title">
            Escolha pra onde você vai com o Chico
          </h2>
        </div>

        <div className="expedicoes-grid">
          {abertas.map((e) => (
            <CardAberta e={e} key={e.slug} onAbrir={setSelecionada} />
          ))}
        </div>

        {emBreve.length > 0 && (
          <div className="expedicoes-breve">
            <p className="expedicoes-breve-titulo">Sendo preparadas pra 2027</p>
            <div className="expedicoes-grid expedicoes-grid--breve">
              {emBreve.map((e) => (
                <CardEmBreve e={e} key={e.slug} onAbrir={setSelecionada} />
              ))}
            </div>
          </div>
        )}

        <p className="expedicoes-nota">
          Os grupos são pequenos e as vagas são limitadas.
        </p>
      </div>

      {selecionada && (
        <ExpedicaoModal
          expedicao={selecionada}
          onClose={() => setSelecionada(null)}
        />
      )}
    </section>
  );
}
