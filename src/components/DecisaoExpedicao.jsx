import ScrollReveal from "./ScrollReveal";
import "./DecisaoExpedicao.css";

export default function DecisaoExpedicao({ expedicao }) {
  const decisao = expedicao.decisao;

  if (!decisao) return null;

  const nome = expedicao.nomeCurto || expedicao.nome;
  const periodo = expedicao.periodo || expedicao.periodoNota;

  return (
    <section className="decisao-expedicao" id="decisao">
      <div className="container">
        <div className="decisao-expedicao-grid">
          <ScrollReveal as="div" className="decisao-expedicao-conteudo">
            <p className="decisao-expedicao-eyebrow">Sua próxima viagem</p>

            <h2>
              {decisao.titulo} <em>{decisao.tituloDestaque}</em>
            </h2>

            <div className="decisao-expedicao-identidade">
              <p>
                {nome} <span>{expedicao.ano}</span>
              </p>

              {periodo && (
                <span className="decisao-expedicao-periodo">{periodo}</span>
              )}
            </div>

            <p className="decisao-expedicao-resumo">{decisao.resumo}</p>
          </ScrollReveal>

          <ScrollReveal
            as="div"
            delay={0.1}
            className="decisao-expedicao-investimento"
          >
            <p className="decisao-expedicao-preco-label">
              Faixa de investimento
            </p>

            <p className="decisao-expedicao-preco">
              <span>{decisao.precoMin}</span>
              <span className="decisao-expedicao-preco-conector">a</span>
              <span>{decisao.precoMax}</span>
            </p>

            {expedicao.duracao && (
              <p className="decisao-expedicao-duracao">
                {expedicao.duracao} de expedição
              </p>
            )}

            <a href="#formulario" className="decisao-expedicao-botao">
              Reservar minha vaga
              <span aria-hidden="true">↗</span>
            </a>

            <p className="decisao-expedicao-proximo-passo">
              Preencha o formulário para conversar com o Chico sobre os detalhes
              e os próximos passos da reserva.
            </p>

            <div className="decisao-expedicao-disponibilidade">
              <span aria-hidden="true" />
              Grupos reduzidos · Vagas limitadas
            </div>
          </ScrollReveal>
        </div>

        {decisao.destaques?.length > 0 && (
          <div className="decisao-expedicao-destaques">
            <p className="decisao-expedicao-destaques-label">
              Faz parte da experiência
            </p>

            <ul>
              {decisao.destaques.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">↗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
