const DISPONIBILIDADE = [
  "Sim, consigo viajar nesse período",
  "Ainda não tenho certeza",
  "Não, mas quero saber de próximas datas",
];

const COMPANHIA = [
  "Sozinho(a)",
  "Com meu parceiro(a)",
  "Com minha família",
  "Com amigos",
];

const EXPERIENCIA_INTERNACIONAL = [
  "Será minha primeira viagem internacional",
  "Já fiz algumas viagens internacionais",
  "Sou um viajante experiente",
];

const EXPERIENCIA_GRUPO = [
  "Sim, e gosto desse tipo de experiência",
  "Já participei, mas seria minha primeira experiência nesse formato",
  "Nunca participei de uma viagem em grupo",
];

const INVESTIMENTO = [
  "Estou preparado(a) para esse investimento",
  "Quero entender melhor o que está incluído",
  "Neste momento, está acima do que posso investir",
];

const DECISAO = [
  "Quero decidir o quanto antes",
  "Pretendo decidir nos próximos meses",
  "Ainda estou pesquisando e conhecendo a proposta",
];

const CONFIGURACOES = {
  "tailandia-carnaval-2027": {
    titulo: "Pronto(a) para conhecer a Tailândia no Carnaval?",
  },
  "filipinas-2027": {
    titulo: "Pronto(a) para ver se o mar das Filipinas é tão azul assim?",
  },
  "trekking-lencois-maranhenses-2027": {
    titulo: "Pronto(a) para conhecer os Lençóis Maranhenses na essência?",
    experienciaEmGrupo: true,
  },
  "tailandia-festival-das-lanternas-2027": {
    titulo:
      "Pronto(a) para conhecer a Tailândia no Festival das Lanternas de pertinho?",
  },
  "egito-2027": {
    titulo: "Pronto(a) para conhecer o Egito, berço da humanidade?",
    periodo: "19 a 29 de setembro de 2027",
    precoMin: "R$ 16.000",
    precoMax: "R$ 19.000",
  },
  "china-2027": {
    titulo: "Pronto(a) para conhecer a China e se surpreender?",
    periodo: "10 a 24 de outubro de 2027",
    precoMin: "R$ 16.000",
    precoMax: "R$ 19.000",
  },
};

export function getFormularioExpedicao(expedicao) {
  const configuracao = CONFIGURACOES[expedicao.slug];

  if (!configuracao) return null;

  const periodo = expedicao.periodo || configuracao.periodo;
  const precoMin = expedicao.decisao?.precoMin || configuracao.precoMin;
  const precoMax = expedicao.decisao?.precoMax || configuracao.precoMax;

  return {
    titulo: configuracao.titulo,
    periodo,
    perguntas: [
      {
        id: "disponibilidade",
        titulo: `A expedição acontece de ${periodo}. Você tem disponibilidade para viajar nesse período?`,
        opcoes: DISPONIBILIDADE,
      },
      {
        id: "companhia",
        titulo: "Como você pretende viajar?",
        opcoes: COMPANHIA,
      },
      {
        id: "experiencia",
        titulo: configuracao.experienciaEmGrupo
          ? "Você já participou de uma viagem em grupo?"
          : "Qual é o seu perfil de viajante?",
        opcoes: configuracao.experienciaEmGrupo
          ? EXPERIENCIA_GRUPO
          : EXPERIENCIA_INTERNACIONAL,
      },
      {
        id: "investimento",
        titulo: `O investimento da expedição fica entre ${precoMin} e ${precoMax}. Como esse investimento se encaixa para você hoje?`,
        opcoes: INVESTIMENTO,
      },
      {
        id: "decisao",
        titulo: "Quando você pretende tomar sua decisão?",
        opcoes: DECISAO,
      },
    ],
  };
}
