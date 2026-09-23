import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import "./FAQ.css";

const perguntasGerais = [
  {
    pergunta: "É seguro viajar dessa forma?",
    resposta:
      "Sim. O Chico já guiou várias expedições e todo o planejamento prioriza segurança, logística e suporte local especializado durante todos os dias.",
  },
  {
    pergunta: "Posso ir sozinho(a)?",
    resposta:
      "Com certeza. A maioria das pessoas que participa vai sozinha, e é justamente aí que costumam nascer as conexões mais fortes do grupo.",
  },
  {
    pergunta: "Qual a idade média dos participantes?",
    resposta:
      "O grupo costuma reunir pessoas de diferentes idades, geralmente entre 30 e 70 anos. Mais do que a idade, o que une o grupo é o espírito aventureiro e a vontade de viver algo fora do comum.",
  },
  {
    pergunta: "Por que o roteiro e o valor não estão no site?",
    resposta:
      "Porque cada expedição é apresentada pelo Chico numa conversa rápida por chamada. Assim ele explica o roteiro completo, os valores e as formas de pagamento, e tira suas dúvidas na hora.",
  },
  {
    pergunta: "Como funciona depois que eu mando mensagem?",
    resposta:
      "O Chico marca uma conversa rápida por chamada com você, tira todas as dúvidas, explica os detalhes da expedição e, se fizer sentido pros dois lados, já encaminha os próximos passos da reserva.",
  },
];

// Sem props → FAQ geral da home. Com `itens` → FAQ específico de uma expedição.
export default function FAQ({
  itens = perguntasGerais,
  eyebrow = "Dúvidas frequentes",
  titulo = "Tudo o que você precisa saber antes de chamar o Chico",
  subtitulo,
  id,
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex((current) => (current === i ? -1 : i));

  return (
    <section className="faq" id={id}>
      <div className="container faq-grid">
        <ScrollReveal as="div" className="faq-header">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{titulo}</h2>
          {subtitulo && <p className="faq-subtitulo">{subtitulo}</p>}
        </ScrollReveal>

        <div className="faq-list">
          {itens.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal
                as="div"
                key={item.pergunta}
                delay={i * 0.06}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
