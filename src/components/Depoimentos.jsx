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
      "Chico! Eu gostei  muito da expedição na Tailândia. A energia do lugar, somada as paisagens lindas e o mar muito azul. Chiang May foi o ponto alto, com o Santuário de elefantes e Festival das Lanternas. Acho que pode melhorar o hotel devido a localização. Phi Phi é surreal. Valeu por todo o suporte antes e durante toda a viagem. Como dica, eu trocarei a Bamboo Island por outra ilha menos lotada 😊",
  },
  {
    nome: "José Alcione",
    expedicao: "Festival das Lanternas 2025",
    texto:
      "Bom dia meu querido Chico. Passando aqui para lhe agradecer e parabenizar por essa grande expedição de 2025 da Tailândia, onde pude conhecer o festival de lanternas, ter ido pra krabi e ter conhecido a ilha de koh phi phi, a railay beach, enfim, vários outros pontos turísticos da Tailândia, sendo guiado por você, e esse ano estarei de volta, esse ano to aí colcado com você de novo, parabéns e sucesso!",
  },
  {
    nome: "Ariele Lúcio",
    expedicao: "Compra de passagens aéreas",
    texto:
      "Uma empresa maravilhosa, que preza respeito aos clientes! Atendimento excelente, uso com frequência e indico para todos os meus amigos. Chico é muito atencioso e prestativo, do início ao fim, dando todo suporte necessário, inclusive, já arcou com prejuízo por conta de erro da companhia aérea. Nessa ocasião, me deu respaldo completo e resolveu a situação de forma imediata! Uma empresa muito idônea, super indico e recomendo!!!! Nota milllll!!!! ❤️",
  },
  {
    nome: "Virna Farias",
    expedicao: "Expedição Trekking Lençóis Maranhenses 2026",
    texto:
      "A viagem foi um sucesso! Teve mimos exclusivos e mais que especiais, comemoração do meu aniversário e muito cuidado e dedicação em todos os dias da expedição. Muito obrigada por tudo, @toporainomundo",
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
