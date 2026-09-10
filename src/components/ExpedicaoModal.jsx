import { useEffect } from "react";
import { linkWhatsApp, STATUS_LABEL } from "../data/expedicoes";
import Formulario from "./Formulario";
import "./ExpedicaoModal.css";

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      aria-hidden="true"
      className="modal-icon"
    >
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
    <svg
      viewBox="0 0 20 20"
      width="18"
      height="18"
      aria-hidden="true"
      className="modal-icon"
    >
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

function Grupos({ grupos }) {
  return (
    <div className="modal-grupos">
      {grupos.map((g) => (
        <div className="modal-grupo" key={g.titulo}>
          <h4>{g.titulo}</h4>
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

export default function ExpedicaoModal({ expedicao, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!expedicao) return null;

  const emBreve = expedicao.status === "em-breve";
  const wpp = linkWhatsApp(
    expedicao.mensagemWhatsApp ||
      `Oi Chico! Quero saber mais sobre a expedição ${expedicao.nome} ${expedicao.ano}.`,
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-label={`${expedicao.nome} ${expedicao.ano}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          ×
        </button>

        {expedicao.imagemHero && (
          <div className="modal-hero">
            <img
              src={expedicao.imagemHero}
              alt=""
              style={{
                objectPosition: expedicao.imagemHeroPosicao || "center",
              }}
            />
            <div className="modal-hero-overlay" />
            <div className="modal-hero-content">
              <span
                className={`modal-status modal-status--${expedicao.status}`}
              >
                {STATUS_LABEL[expedicao.status]}
              </span>
              <h2 id="modal-titulo">
                {expedicao.nome} <em>{expedicao.ano}</em>
              </h2>
              {expedicao.periodo && (
                <p className="modal-periodo">
                  {expedicao.periodo}
                  {expedicao.duracao && <span>{expedicao.duracao}</span>}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="modal-body">
          {!expedicao.imagemHero && (
            <>
              <span
                className={`modal-status modal-status--${expedicao.status} modal-status--solo`}
              >
                {STATUS_LABEL[expedicao.status]}
              </span>
              <h2 className="modal-titulo-solo">
                {expedicao.nome} <em>{expedicao.ano}</em>
              </h2>
            </>
          )}

          <p className="modal-resumo">{expedicao.resumo}</p>

          {expedicao.descricao?.map((p) => (
            <p className="modal-texto" key={p}>
              {p}
            </p>
          ))}

          {!emBreve && (
            <p className="modal-nota">
              O roteiro completo e os valores são apresentados pelo Chico numa
              conversa rápida por chamada, sem compromisso.
            </p>
          )}

          {expedicao.incluso && (
            <div className="modal-secao">
              <h3>O que está incluso</h3>
              <Grupos grupos={expedicao.incluso} />
            </div>
          )}

          {expedicao.naoIncluso && (
            <div className="modal-secao">
              <h3>O que não está incluso</h3>
              <ul className="modal-lista-simples">
                {expedicao.naoIncluso.map((item) => (
                  <li key={item}>
                    <Cross />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {expedicao.obrigatorios && (
            <div className="modal-secao">
              <h3>Itens obrigatórios</h3>
              <ul className="modal-lista-simples">
                {expedicao.obrigatorios.map((item) => (
                  <li key={item}>
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {expedicao.dicas && (
            <div className="modal-secao">
              <h3>O que levar na mochila</h3>
              <Grupos grupos={expedicao.dicas} />
            </div>
          )}

          {expedicao.faq && (
            <div className="modal-secao">
              <h3>Tá com dúvida?</h3>
              <div className="modal-faq">
                {expedicao.faq.map((item) => (
                  <div className="modal-faq-item" key={item.pergunta}>
                    <p className="modal-faq-pergunta">{item.pergunta}</p>
                    <p className="modal-faq-resposta">{item.resposta}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {emBreve && (
            <div className="modal-secao">
              <h3>Entrar na lista de espera</h3>
              <Formulario expedicao={expedicao} tipo="espera" />
            </div>
          )}
        </div>

        {!emBreve && (
          <div className="modal-footer">
            <a
              href={wpp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary modal-cta"
            >
              Falar com o Chico no WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
