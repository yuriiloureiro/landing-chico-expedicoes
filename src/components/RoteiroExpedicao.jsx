import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import "./RoteiroExpedicao.css";

const DIAS_INICIAIS = 6;

export default function RoteiroExpedicao({ expedicao }) {
  const [expandido, setExpandido] = useState(false);
  const roteiro = expedicao.roteiro || [];

  if (roteiro.length === 0) return null;

  const diasVisiveis = expandido ? roteiro : roteiro.slice(0, DIAS_INICIAIS);

  const temMaisDias = roteiro.length > DIAS_INICIAIS;

  return (
    <section className="roteiro-expedicao" id="roteiro">
      <div className="container">
        <ScrollReveal as="div" className="roteiro-expedicao-cabecalho">
          <div>
            <p className="eyebrow">Sua viagem, dia a dia</p>

            <h2>
              Você vive a experiência.
              <span>A gente cuida do resto.</span>
            </h2>

            <p className="roteiro-expedicao-intro">
              Conheça as experiências e os deslocamentos previstos para cada
              etapa da sua expedição.
            </p>
          </div>

          <div className="roteiro-expedicao-resumo">
            <span>{expedicao.nomeCurto || expedicao.nome}</span>
            <p>
              {roteiro.length} dias
              <span aria-hidden="true"> · </span>
              {expedicao.ano}
            </p>
          </div>
        </ScrollReveal>

        <div className="roteiro-expedicao-grid" id="roteiro-dias">
          {diasVisiveis.map((dia) => (
            <article className="roteiro-dia" key={dia.dia}>
              <div className="roteiro-dia-foto">
                {dia.imagem && (
                  <img
                    src={dia.imagem}
                    alt={dia.imagemAlt || ""}
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectPosition: dia.imagemPosicao || "center",
                    }}
                  />
                )}

                <div className="roteiro-dia-identificacao">
                  <span>Dia {dia.dia}</span>
                  <span>{dia.data}</span>
                </div>
              </div>

              <div className="roteiro-dia-conteudo">
                {dia.local && <p className="roteiro-dia-local">{dia.local}</p>}

                <h3>{dia.titulo}</h3>

                <p className="roteiro-dia-texto">{dia.texto}</p>
              </div>
            </article>
          ))}
        </div>

        {temMaisDias && (
          <div className="roteiro-expedicao-acoes">
            <p aria-live="polite">
              {expandido
                ? `Você está vendo os ${roteiro.length} dias da expedição.`
                : `Mostrando os primeiros ${DIAS_INICIAIS} de ${roteiro.length} dias.`}
            </p>

            <button
              type="button"
              className="roteiro-expedicao-botao"
              aria-expanded={expandido}
              aria-controls="roteiro-dias"
              onClick={() => setExpandido(true)}
              hidden={expandido}
            >
              Ver roteiro completo
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
