import ScrollReveal from "./ScrollReveal";
import FormularioContato from "./FormularioContato";
import "./ContatoFinal.css";

export default function ContatoFinal() {
  return (
    <section className="contato-final" id="contato">
      <div className="container contato-final-inner">
        <ScrollReveal as="div" className="contato-final-header">
          <p className="eyebrow">Vamos conversar?</p>
          <h2 className="section-title">
            Pronto pra colocar a mochila nas costas?
          </h2>
          <p className="contato-final-sub">
            Preencha seus dados e o Chico entra em contato pra te ajudar a
            escolher a próxima expedição.
          </p>
        </ScrollReveal>

        <ScrollReveal as="div" delay={0.15} className="contato-final-card">
          <FormularioContato />
        </ScrollReveal>
      </div>
    </section>
  );
}
