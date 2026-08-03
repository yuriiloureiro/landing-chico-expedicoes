import "./Depoimentos.css";

const depoimentos = [
  {
    nome: "Marina Prado",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "Fui sozinha e voltei com uma família. O Chico cuida de cada detalhe e ainda te deixa livre pra viver o momento.",
  },
  {
    nome: "Roberto Salles",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "Aos 52 anos, achei que essa fase de aventura já tinha passado. Essa expedição me provou o contrário.",
  },
  {
    nome: "Cláudia Ferrer",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "Segurança, organização e um roteiro que realmente foge do óbvio. Não troco essa experiência por nenhum pacote de agência.",
  },
  {
    nome: "André Vilaça",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "O momento das lanternas subindo é indescritível. E ter o Chico do lado, explicando cada detalhe, fez toda diferença.",
  },
  {
    nome: "Patrícia Nogueira",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "Já viajei o mundo sozinha várias vezes, mas essa foi a primeira vez que senti que estava sendo cuidada de verdade.",
  },
];

function Card({ item }) {
  const inicial = item.nome.charAt(0);
  return (
    <div className="depoimento-card">
      <p className="depoimento-texto">“{item.texto}”</p>
      <div className="depoimento-autor">
        <span className="depoimento-avatar">{inicial}</span>
        <div>
          <span className="depoimento-nome">{item.nome}</span>
          <span className="depoimento-expedicao">{item.expedicao}</span>
        </div>
      </div>
    </div>
  );
}

export default function Depoimentos() {
  const loop = [...depoimentos, ...depoimentos];

  return (
    <section className="depoimentos">
      <div className="section-header">
        <p className="eyebrow">Quem já viveu</p>
        <h2 className="section-title">Não é só o que eu digo</h2>
      </div>

      <div className="depoimentos-track">
        <div className="depoimentos-loop">
          {loop.map((item, i) => (
            <Card item={item} key={`${item.nome}-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
