import { useState } from "react";
import "./FAQ.css";

const perguntas = [
  {
    pergunta: "É seguro viajar dessa forma?",
    resposta:
      "Sim. O Chico já guiou expedições anteriores pela Tailândia e todo o planejamento prioriza segurança, logística e suporte local especializado durante todos os dias.",
  },
  {
    pergunta: "Posso ir sozinho(a)?",
    resposta:
      "Com certeza, a maioria das pessoas que participa vai sozinha, e é justamente aí que costumam nascer as conexões mais fortes do grupo ao longo da jornada.",
  },
  {
    pergunta: "Qual a idade média dos participantes?",
    resposta:
      "O grupo costuma reunir pessoas de diferentes idades, geralmente entre 30 e 70 anos. Mais do que a idade, o que une o grupo é o espírito aventureiro e a vontade de viver algo fora do comum.",
  },
  {
    pergunta: "Como funciona depois que eu mando mensagem?",
    resposta:
      "O Chico marca uma conversa rápida por chamada com você, tira todas as dúvidas, explica os detalhes da expedição e, se fizer sentido pros dois lados, já encaminha os próximos passos da reserva.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((current) => (current === i ? -1 : i));

  return (
    <section className="faq">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="section-title">
            Tudo o que você precisa saber antes de chamar o Chico
          </h2>
        </div>

        <div className="faq-list">
          {perguntas.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                key={item.pergunta}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  {item.pergunta}
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div className="faq-answer">
                  <p>{item.resposta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
