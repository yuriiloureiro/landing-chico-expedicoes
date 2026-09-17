import ScrollReveal from "./ScrollReveal";
import "./Depoimentos.css";

const depoimentos = [
  {
    nome: "Adriano Dantas",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "A expedição foi ótima a experiência de ter contratado alguém, eu ficaria totalmente perdido se fizesse por conta própria ou seguido algum roteiro furado de internet, fora sua paciência e bom humor pra atender todas as demandas do grupo, sempre falo isso quando alguém vem me perguntar sobre a minha viagem e sobre as fotos, sobre a experiência da Tailândia é algo mágico mesmo, um lugar maravilhoso, todos os lugares que passamos me deixou memórias e culturas incríveis.. a gente pensa que tá gastando dinheiro ou fazendo só mais uma viagem mas quando passa a gente vê que é um investimento e uma experiência que vai ficar marcado pra sempre na vida… eu amei tudo!",
  },
  {
    nome: "Lilian Campos",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "Chico! Eu gostei  muito da expedição na Tailândia. A energia do lugar, somada as paisagens lindas e o mar muito azul. Chiang Mai foi o ponto alto, com o Santuário de elefantes e Festival das Lanternas. Phi Phi é surreal. Valeu por todo o suporte antes e durante toda a viagem.",
  },
  {
    nome: "José Alcione",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "Bom dia meu querido Chico. Passando aqui para lhe agradecer e parabenizar por essa grande expedição de 2025 da Tailândia, onde pude conhecer o festival de lanternas, ter ido pra krabi e ter conhecido a ilha de koh phi phi, a railay beach, enfim, vários outros pontos turísticos da Tailândia, sendo guiado por você, e esse ano estarei de volta, esse ano to aí colcado com você de novo, parabéns e sucesso!",
  },
  {
    nome: "Virna Farias",
    expedicao: "Expedição Trekking Lençóis Maranhenses 2026",
    texto:
      "A viagem foi um sucesso! Teve mimos exclusivos e mais que especiais, comemoração do meu aniversário e muito cuidado e dedicação em todos os dias da expedição. Muito obrigada por tudo, @toporainomundo",
  },
];

function AspasIcone() {
  return (
    <svg
      viewBox="0 0 32 24"
      width="32"
      height="24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 3.6C9.2 5.2 7.2 8 7.2 11.6h6.4V24H0zm18.4 0V14.4c0-8 4.8-13.2 12.8-14.4l1.6 3.6c-5.2 1.6-7.2 4.4-7.2 8h6.4V24H18.4z" />
    </svg>
  );
}

function Card({ item }) {
  const inicial = item.nome.charAt(0);
  return (
    <div className="depoimento-card">
      <span className="depoimento-aspas">
        <AspasIcone />
      </span>
      <p className="depoimento-texto">{item.texto}</p>
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
      <ScrollReveal as="div" className="section-header">
        <p className="eyebrow">Quem já viveu</p>
        <h2 className="section-title">Não é só o que eu digo</h2>
      </ScrollReveal>

      <ScrollReveal as="div" className="depoimentos-track" y={16}>
        <div className="depoimentos-loop">
          {loop.map((item, i) => (
            <Card item={item} key={`${item.nome}-${i}`} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
