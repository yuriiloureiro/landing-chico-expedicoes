// Fonte única de dados das expedições.
// Para adicionar uma nova expedição, basta criar um objeto aqui.
// Campos opcionais podem ser omitidos — a página se adapta.
//
// status: "ultimas-vagas" | "aberta" | "em-breve" | "esgotada"
// video: vídeo de paisagem do destino, importado de src/assets/videos/expedicoes/.
//        Sem ele, a página usa VIDEO_PADRAO.
// videoFormato: "vertical" (Reels/Shorts) ou "horizontal"
// porqueExpedicao: { semGuia: [...], comChico: [...] } — comparação "por conta
//   própria vs com o Chico". Opcional — sem ele a seção não aparece na página.

import lanternas2026Hero from "../assets/images/banner.webp";
import lanternasCard from "../assets/images/expedicoes/lanternas-card.webp";
import carnavalCard from "../assets/images/expedicoes/carnaval-card.webp";
import lencoisCard from "../assets/images/expedicoes/lencois-card.webp";
import filipinasFoto from "../assets/images/expedicoes/filipinas-card.webp";
import egitoFoto from "../assets/images/expedicoes/egito-card.webp";
import chinaFoto from "../assets/images/expedicoes/china-card.webp";

import videoCarnaval from "../assets/videos/expedicoes/carnaval.mp4";
import videoLanternas from "../assets/videos/expedicoes/lanternas.mp4";
import videoLencois from "../assets/videos/expedicoes/lencois.mp4";
import videoFilipinas from "../assets/videos/expedicoes/filipinas.mp4";
import videoEgito from "../assets/videos/expedicoes/egito.mp4";
import videoChina from "../assets/videos/expedicoes/china.mp4";

export const WHATSAPP = "5513982026838";

// Vídeo usado como reserva em qualquer expedição futura que ainda não tenha
// seu próprio vídeo de paisagem cadastrado no campo `video` abaixo.
export const VIDEO_PADRAO = videoLanternas;
export const VIDEO_PADRAO_FORMATO = "horizontal";

export function linkWhatsApp(mensagem) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

const PASSAGEM_AEREA = {
  pergunta: "Como faço com a passagem de ida e volta?",
  resposta:
    "Sem problemas. Você conta com o suporte exclusivo do Chico, que há mais de 6 anos é especialista na compra de passagens aéreas e vai te ajudar a encontrar a melhor opção.",
};

const QUARTOS = {
  pergunta: "Mulher vai dividir quarto com homem?",
  resposta:
    "Não. Somente pessoas do mesmo sexo dividem quartos, com exceção de casais.",
};

const DEPOIS_DA_MENSAGEM = {
  pergunta: "Como funciona depois que eu mando mensagem?",
  resposta:
    "O Chico marca uma conversa rápida por chamada com você, tira todas as dúvidas, explica os detalhes da expedição e, se fizer sentido pros dois lados, já encaminha os próximos passos da reserva.",
};

const PORQUE_LANTERNAS = {
  semGuia: [
    "Descobrir sozinho os prazos certos de visto, vacina da febre amarela e formulário TDAC",
    "Encontrar o ponto certo pra ver as lanternas sem ficar preso no meio da multidão",
    "Se virar em transporte e comunicação numa cidade que não fala português",
    "Nenhum suporte se algo sair do combinado durante a viagem",
  ],
  comChico: [
    "O Chico cuida de toda a logística e avisa exatamente o que levar e quando",
    "Acesso aos melhores pontos pra viver o festival de pertinho, sem aperto",
    "Grupo pequeno, com gente que também topa essa experiência",
    "Acompanhamento do Chico do embarque ao desembarque",
  ],
};

const PORQUE_CARNAVAL = {
  semGuia: [
    "Organizar 3 voos internos, transfers e itinerário entre Bangkok, Chiang Mai e Krabi sozinho",
    "Não saber quais templos, mercados e passeios realmente valem a pena",
    "Risco de cair em armadilha de turista ou pagar mais caro sem perceber",
    "Nenhum suporte se algo sair do combinado durante a viagem",
  ],
  comChico: [
    "O Chico já criou mais de 50 roteiros pela Tailândia e resolve toda a logística",
    "Passeios selecionados a dedo: templos, ilhas, santuário de elefantes e mais",
    "Grupo pequeno e acompanhamento do Chico do início ao fim",
    "Suporte também na compra da passagem aérea",
  ],
};

const PORQUE_LENCOIS = {
  semGuia: [
    "Se aventurar sozinho no trekking sem guia local especializado",
    "Não saber onde ficar nos vilarejos ou como se planejar pros pontos de apoio sem rede",
    "Carregar peso e itens errados na mochila por falta de orientação",
    "Nenhum suporte em caso de imprevisto no meio da trilha",
  ],
  comChico: [
    "Guia local especializado acompanha os 4 dias de trekking",
    "Hospedagem e alimentação já organizadas em cada etapa do caminho",
    "Grupo pequeno, ritmo pensado pra quem tem preparo físico moderado",
    "Suporte do Chico do planejamento até a volta pra casa",
  ],
};

export const expedicoes = [
  {
    slug: "tailandia-festival-das-lanternas-2026",
    nome: "Tailândia — Festival das Lanternas",
    nomeCurto: "Festival das Lanternas",
    ano: 2026,
    destino: "Tailândia",
    periodo: "19 de novembro a 4 de dezembro de 2026",
    duracao: "16 dias",
    status: "esgotada",
    imagemCard: lanternasCard,
    imagemHero: lanternas2026Hero,
    imagemHeroPosicao: "center 30%",
    resumo:
      "O momento mais esperado do ano: o céu de Chiang Mai se enchendo de milhares de lanternas. Vagas esgotadas para a expedição deste ano.",
    descricao: [
      "Uma expedição guiada de perto pelo Chico, que já criou mais de 50 roteiros pela Tailândia. Templos, mercados, ilhas e o festival que arrepia até quem achava que já tinha visto de tudo.",
      "As vagas desta edição já esgotaram. Fale com o Chico pra entrar na lista de espera ou saber sobre a próxima.",
    ],
    video: videoLanternas,
    videoFormato: "horizontal",
    porqueExpedicao: PORQUE_LANTERNAS,
    incluso: [
      {
        titulo: "Voos internos",
        itens: ["Todos os trechos aéreos dentro da Tailândia"],
      },
      {
        titulo: "Hospedagens",
        itens: ["Diárias em hotéis, quarto duplo, com café da manhã"],
      },
      {
        titulo: "Transfers e traslados",
        itens: ["Balsas, barcos, lanchas e transportes terrestres"],
      },
      {
        titulo: "Passeios",
        itens: ["Experiências em Bangkok, Chiang Mai e nas ilhas do sul"],
      },
      {
        titulo: "Experiências Chico",
        itens: [
          "Surpresas ao longo da viagem",
          "Acompanhamento e suporte do Chico do primeiro ao último dia",
        ],
      },
    ],
    naoIncluso: [
      "Passagem aérea de ida e volta do Brasil para a Tailândia (com suporte do Chico na compra)",
      "Refeições e bebidas",
      "Hospedagens antes e depois da expedição",
      "Seguro viagem",
      "Chip de celular",
      "Outras despesas não mencionadas",
    ],
    obrigatorios: [
      "Passaporte válido e com espaço para carimbos",
      "Certificado internacional de vacina da febre amarela",
      "Formulário TDAC preenchido até 72h antes da chegada",
      "Seguro viagem",
    ],
    faq: [PASSAGEM_AEREA, QUARTOS, DEPOIS_DA_MENSAGEM],
    mensagemWhatsApp:
      "Oi Chico! Vi que a expedição do Festival das Lanternas 2026 está esgotada. Quero saber sobre a lista de espera ou a próxima edição.",
  },

  {
    slug: "tailandia-carnaval-2027",
    nome: "Tailândia — Carnaval",
    nomeCurto: "Tailândia no Carnaval",
    ano: 2027,
    destino: "Tailândia",
    periodo: "31 de janeiro a 13 de fevereiro de 2027",
    duracao: "14 dias",
    status: "aberta",
    imagemCard: carnavalCard,
    imagemHero: carnavalCard,
    imagemHeroPosicao: "center 40%",
    resumo:
      "E se o Carnaval de 2027 fosse na Tailândia? Dias de aventura, praias paradisíacas e experiências que você nunca vai esquecer.",
    descricao: [
      "Enquanto o Brasil está em folia, você vai estar entre templos, mercados flutuantes, santuário de elefantes e as águas mais azuis do sul da Tailândia.",
      "Tudo com o Chico ao seu lado: ele resolve a logística, abre portas e cuida dos detalhes pra que sua única preocupação seja viver cada momento.",
    ],
    video: videoCarnaval,
    videoFormato: "vertical",
    porqueExpedicao: PORQUE_CARNAVAL,
    incluso: [
      {
        titulo: "Voos internos",
        itens: ["Os 3 trechos aéreos dentro da Tailândia"],
      },
      {
        titulo: "Hospedagens",
        itens: [
          "13 diárias em hotéis, quarto duplo, com café da manhã incluso",
        ],
      },
      {
        titulo: "Transfers e traslados",
        itens: ["Balsas, barcos, lanchas e transportes terrestres"],
      },
      {
        titulo: "Passeios",
        itens: [
          "Templos, mercados, santuário de elefantes, tribos do norte e as ilhas do sul",
        ],
      },
      {
        titulo: "Experiências Chico",
        itens: [
          "Surpresas ao longo da viagem: de um tour curioso pelo 7-Eleven a uma massagem em frente à praia",
          "Acompanhamento e suporte do Chico durante toda a viagem",
        ],
      },
    ],
    naoIncluso: [
      "Passagem aérea de ida e volta do Brasil para a Tailândia (com suporte do Chico na compra)",
      "Refeições e bebidas",
      "Hospedagens antes e depois da expedição",
      "Seguro viagem",
      "Chip de celular",
      "Outras despesas não mencionadas",
    ],
    obrigatorios: [
      "Passaporte válido e com espaço para carimbos",
      "Certificado internacional de vacina da febre amarela",
      "Formulário TDAC preenchido até 72h antes da chegada",
      "Seguro viagem",
    ],
    faq: [
      {
        pergunta: "Como faço com dinheiro?",
        resposta:
          "Leve um pouco em espécie (cerca de 500 dólares ou euros), mas os cartões de conta global vão te ajudar muito: Wise, Inter Global, Revolut, Nomad, entre outros.",
      },
      PASSAGEM_AEREA,
      QUARTOS,
      {
        pergunta: "Vou chegar alguns dias antes. Terei traslado do aeroporto?",
        resposta:
          "O traslado incluso é somente no dia 31/01, com horário a definir. Mas o Chico te indica a melhor opção pra chegar ao hotel.",
      },
      DEPOIS_DA_MENSAGEM,
    ],
    mensagemWhatsApp:
      "Oi Chico! Quero saber mais sobre a expedição Tailândia Carnaval 2027.",
  },

  {
    slug: "filipinas-2027",
    nome: "Filipinas",
    nomeCurto: "Filipinas",
    ano: 2027,
    destino: "Filipinas",
    periodo: "28 de fevereiro a 13 de março de 2027",
    status: "em-breve",
    imagemCard: filipinasFoto,
    imagemHero: filipinasFoto,
    imagemHeroPosicao: "center 55%",
    resumo: "Entre na lista de espera e seja o primeiro a saber quando abrir.",
    video: videoFilipinas,
  },

  {
    slug: "trekking-lencois-maranhenses-2027",
    nome: "Trekking Lençóis Maranhenses",
    nomeCurto: "Lençóis Maranhenses",
    ano: 2027,
    destino: "Brasil",
    periodo: "14 a 21 de junho de 2027",
    duracao: "8 dias",
    status: "aberta",
    imagemCard: lencoisCard,
    imagemHero: lencoisCard,
    imagemHeroPosicao: "center 60%",
    resumo:
      "Já se imaginou explorando os Lençóis Maranhenses na sua essência? Dias caminhando entre dunas e lagoas, dormindo em redários nos vilarejos.",
    descricao: [
      "Quatro dias de trekking pelo coração dos Lençóis, com guia local especializado, paradas para banho nas lagoas e noites em pontos de apoio nos vilarejos. Antes e depois, São Luís, Barreirinhas, Atins e Santo Amaro.",
      "É uma experiência física, mas acessível: com um pouco de preparo, dá pra viver. O maior percurso é o do terceiro dia, com 17 km.",
    ],
    video: videoLencois,
    videoFormato: "vertical",
    porqueExpedicao: PORQUE_LENCOIS,
    incluso: [
      {
        titulo: "Transfers e traslados",
        itens: [
          "Todos os deslocamentos entre as etapas, incluindo o barco até Atins",
        ],
      },
      {
        titulo: "Hospedagens",
        itens: [
          "4 diárias em pousadas com café da manhã (quartos duplos ou triplos)",
          "3 diárias no trekking em pontos de apoio com redário, com café, almoço e janta (bebidas à parte)",
        ],
      },
      {
        titulo: "Passeios",
        itens: [
          "City tour em São Luís",
          "Passeio de barco pelo Rio Preguiças até Atins",
          "4 dias de trekking acompanhado de guia local especializado",
        ],
      },
    ],
    naoIncluso: [
      "Passagem aérea (com suporte do Chico na compra)",
      "Hospedagens antes e depois da expedição",
      "Refeições e bebidas não mencionadas",
      "Outras despesas não mencionadas",
    ],
    dicas: [
      {
        titulo: "Itens pessoais",
        itens: [
          "Mochila de 35 litros",
          "Toalha e roupas leves de secagem rápida",
          "Trajes de banho e canga",
          "Óculos de sol e repelente",
          "Kit de primeiros socorros simples",
          "Garrafa de água, snacks, lanterna e carregador portátil",
        ],
      },
      {
        titulo: "Proteção do sol",
        itens: [
          "Chapéu ou boné com aba",
          "Protetor solar e labial",
          "Camisa com proteção UV",
        ],
      },
      {
        titulo: "Calçados",
        itens: [
          "Calçados para trilha e meias",
          "Sapatilha aquática",
          "Chinelo pro final do dia",
          "Obs.: a maioria caminha descalça, a areia nas dunas é fria",
        ],
      },
      {
        titulo: "Opcionais",
        itens: [
          "Shorts ou calça, caso prefira caminhar de roupa",
          "Jaqueta impermeável pra chuva ou friozinho nos redários",
          "Dinheiro pras bebidas nos pontos de apoio (normalmente aceitam PIX, mas são 2 dias sem conexão)",
        ],
      },
    ],
    faq: [
      PASSAGEM_AEREA,
      QUARTOS,
      {
        pergunta: "A areia é quente?",
        resposta:
          "Não. Como o grupo sai muito cedo, a areia está sempre fria. Só ao chegar nos pontos de apoio é que, em alguns momentos, fica mais quente.",
      },
      {
        pergunta: "É muito cansativo?",
        resposta:
          "São percursos longos, mas com diversas paradas para banho nas lagoas. Com um pouco de preparo físico é possível realizar. O 3º dia é o de maior percurso, com 17 km.",
      },
      DEPOIS_DA_MENSAGEM,
    ],
    mensagemWhatsApp:
      "Oi Chico! Quero saber mais sobre o Trekking Lençóis Maranhenses 2027.",
  },

  {
    slug: "tailandia-festival-das-lanternas-2027",
    nome: "Tailândia — Festival das Lanternas",
    nomeCurto: "Festival das Lanternas",
    ano: 2027,
    destino: "Tailândia",
    periodo: "Novembro de 2027",
    periodoNota: "Datas exatas em breve",
    status: "aberta",
    imagemCard: lanternasCard,
    imagemHero: lanternas2026Hero,
    imagemHeroPosicao: "center 30%",
    resumo:
      "Alguns sonhos precisam de planejamento pra acontecer. Comece agora, vá pagando aos poucos e esteja sob um céu iluminado por milhares de lanternas em 2027.",
    descricao: [
      "A expedição mais especial do Chico, que já levou dois grupos pra ver o céu de Chiang Mai se encher de luz. Em 2027 ela volta, e quem começa a se planejar agora consegue pagar aos poucos até lá.",
      "Chame o Chico pra reservar sua vaga e receber os detalhes assim que as datas fecharem.",
    ],
    video: videoLanternas,
    videoFormato: "vertical",
    porqueExpedicao: PORQUE_LANTERNAS,
    faq: [PASSAGEM_AEREA, QUARTOS, DEPOIS_DA_MENSAGEM],
    mensagemWhatsApp:
      "Oi Chico! Quero garantir minha vaga no Festival das Lanternas 2027 e começar a me planejar.",
  },

  {
    slug: "egito-2027",
    nome: "Egito",
    nomeCurto: "Egito",
    ano: 2027,
    destino: "Egito",
    status: "em-breve",
    imagemCard: egitoFoto,
    imagemHero: egitoFoto,
    imagemHeroPosicao: "center 78%",
    resumo: "Entre na lista de espera e seja o primeiro a saber quando abrir.",
    video: videoEgito,
  },
  {
    slug: "china-2027",
    nome: "China",
    nomeCurto: "China",
    ano: 2027,
    destino: "China",
    status: "em-breve",
    imagemCard: chinaFoto,
    imagemHero: chinaFoto,
    imagemHeroPosicao: "center 45%",
    resumo: "Entre na lista de espera e seja o primeiro a saber quando abrir.",
    video: videoChina,
  },
];

export const STATUS_LABEL = {
  "ultimas-vagas": "Últimas vagas",
  aberta: "Vagas abertas",
  "em-breve": "Em breve",
  esgotada: "Esgotada",
};

export function getExpedicao(slug) {
  return expedicoes.find((e) => e.slug === slug);
}
