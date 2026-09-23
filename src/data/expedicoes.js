// Fonte única de dados das expedições.
// Para adicionar uma nova expedição, basta criar um objeto aqui.
// Campos opcionais podem ser omitidos — a página se adapta.
//
// status: "ultimas-vagas" | "aberta" | "em-breve" | "esgotada"
// video: vídeo de paisagem do destino, importado de src/assets/videos/expedicoes/.
//        Sem ele, a página usa VIDEO_PADRAO.
// porqueExpedicao: { semGuia: [...], comChico: [...] } — comparação "por conta
//   própria vs com o Chico". Opcional — sem ele a seção não aparece na página.
// duracaoDetalhe / rota / hospedagemResumo: dados extras exibidos no card
//   unificado da seção "Incluso" (ficha + destaque de dias). Opcionais.
// roteiro: [{ dia, data, titulo, texto }] — dia a dia da expedição. Opcional;
//   sem ele a seção "Roteiro" não aparece nem o link dela no menu.
// decisao: { titulo, tituloDestaque, tag, resumo, destaques[], precoMin,
//   precoMax } — seção final de investimento. Opcional; sem ele a seção
//   "Decisão" não aparece nem o link dela no menu.

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
    "O Chico marca uma conversa rápida de uns 15 minutos por chamada com você, tira todas as dúvidas, explica os detalhes da expedição e, se fizer sentido pros dois lados, já encaminha os próximos passos da reserva.",
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
      "Passaporte válido com 6 meses de validade a partir da viagem e com espaço para carimbos",
      "Certificado internacional de vacina da febre amarela",
      "Formulário TDAC preenchido até 72h antes da chegada",
      "Seguro viagem",
    ],
    roteiro: [
      {
        dia: "01",
        data: "31/01",
        titulo: "Chegada Tailândia",
        texto:
          "Transfer para hospedagem e, à noite, a energia vibrante da Khaosan Road espera por você!",
      },
      {
        dia: "02",
        data: "01/02",
        titulo: "História e Templos",
        texto:
          "Passeio para Ayutthaya e visita aos templos sagrados Wat Pho, Wat Arun e Grand Palace que revelam a alma cultural da Tailândia, terminando com um passeio de Tuk Tuk até a vibrante Chinatown de Bangkok!",
      },
      {
        dia: "03",
        data: "02/02",
        titulo: "Mercados e Cultura",
        texto:
          'Passeio para os famosos mercados do trem e flutuante e à noite viva a energia da Soi Cowboy, cenário do filme "Se Beber, Não Case!"',
      },
      {
        dia: "04",
        data: "03/02",
        titulo: "Viagem para o Norte",
        texto:
          "Voo para Chiang Mai, visita ao icônico Templo Doi Suthep e experiência com a autêntica culinária do norte da Tailândia!",
      },
      {
        dia: "05",
        data: "04/02",
        titulo: "Cultura",
        texto:
          "Visita aos templos de Chiang Rai (White, Blue e Red Temple), Tribo das Mulheres Girafa, e à noite viva a experiência única do Night Bazar!",
      },
      {
        dia: "06",
        data: "05/02",
        titulo: "Natureza",
        texto:
          "Uma manhã em um Santuário dos Elefantes, com alimentação e banho com os elefantes (sem montaria).",
      },
      {
        dia: "07",
        data: "06/02",
        titulo: "Rumo às ilhas",
        texto:
          "Voo para Krabi e barco até Koh Phi Phi, apresentação da ilha mais divertida da Tailândia, baldinho de bebida e noite livre!",
      },
      {
        dia: "08",
        data: "07/02",
        titulo: "Diversão na ilha",
        texto:
          "Manhã livre para relaxar e, à tarde, embarque no Barco Pirata, o passeio mais divertido de Phi Phi!",
      },
      {
        dia: "09",
        data: "08/02",
        titulo: "Long Tail",
        texto:
          "Manhã livre para relaxar na praia, tarde de passeio de Long Tail e noite livre para aproveitar tudo o que a ilha oferece!",
      },
      {
        dia: "10",
        data: "09/02",
        titulo: "Koh Phi Phi é sua",
        texto:
          "Dia livre para explorar a ilha, view point (opcional) e, à noite, a famosa luta de Muay Thai!",
      },
      {
        dia: "11",
        data: "10/02",
        titulo: "Praia de Ao Nang",
        texto:
          "Barco para Krabi, relaxe com uma massagem na Praia de Ao Nang, aprecie o pôr do sol e aproveite a noite explorando as famosas lojinhas locais.",
      },
      {
        dia: "12",
        data: "11/02",
        titulo: "Praia e Natureza",
        texto:
          "Dia incrível em Railey Beach e, à noite, tempo livre para explorar a vibe única de Ao Nang!",
      },
      {
        dia: "13",
        data: "12/02",
        titulo: "Retorno a Bangkok",
        texto:
          "Voo para Bangkok, tarde livre para compras no MBK Center e Central World!",
      },
      {
        dia: "14",
        data: "13/02",
        titulo: "Retorno Brasil",
        texto:
          "Retorno ao Brasil, mas com a certeza de que as memórias dessa viagem ficarão para sempre!",
      },
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
    duracaoDetalhe:
      "13 noites divididas em Bangkok, Chiang Mai, Koh Phi Phi e Krabi.",
    rota: "Bangkok · Chiang Mai · Koh Phi Phi · Krabi",
    hospedagemResumo: "Hospedagem 3★ e 4★ selecionada",
    status: "aberta",
    imagemCard: carnavalCard,
    imagemHero: carnavalCard,
    imagemHeroPosicao: "center 40%",
    resumo:
      "E se o Carnaval de 2027 fosse na Tailândia? Dias de aventura, praias paradisíacas e experiências que você nunca vai esquecer.",
    descricao: [
      "Enquanto o Brasil celebra o Carnaval nas ruas, você vai viver uma experiência do outro lado do mundo.",
      "Templos milenares, mercados flutuantes, encontros com elefantes e as águas cristalinas do sul da Tailândia.",
      "Tudo isso ao lado do Chico, que cuida da logística, dos detalhes e está com você em cada etapa da viagem.",
      "Você só precisa chegar, se entregar à experiência e viver a Tailândia de um jeito que nunca imaginou.",
    ],
    video: videoCarnaval,
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
      "Passaporte válido com 6 meses de validade a partir da viagem e com espaço para carimbos",
      "Certificado internacional de vacina da febre amarela",
      "Formulário TDAC preenchido até 72h antes da chegada",
      "Seguro viagem",
    ],
    decisao: {
      titulo: "Pronto(a) para viver",
      tituloDestaque: "o Carnaval mais diferentão da sua vida?",
      tag: "Experiência completa",
      resumo:
        "O Carnaval mais diferentão que você vai viver na Tailândia, passando por Bangkok, Chiang Mai, Koh Phi Phi e Krabi, com os principais templos, santuário de elefantes, passeios de barco pelas ilhas e acompanhamento 100% durante toda a viagem.",
      destaques: [
        "14 dias de expedição",
        "Hotéis 3★ e 4★ com café da manhã",
        "Templos em Chiang Rai (Templo Branco, Azul e Red Temple)",
        "Passeios de barco em Koh Phi Phi (barco pirata e Long Tail)",
        "3 voos domésticos",
        "Translados, transfers e barcos",
        "Ayutthaya, Grand Palace, Wat Pho, Wat Arun",
        "Santuário de elefantes",
        "Acompanhamento do Chico",
      ],
      precoMin: "R$ 16.000",
      precoMax: "R$ 18.000",
    },
    faq: [
      {
        pergunta: "Como faço com dinheiro?",
        resposta:
          "Leve um pouco em espécie (cerca de 500 dólares ou euros), mas os cartões de conta global vão te ajudar muito: Wise, Revolut, Nomad, entre outros.",
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
