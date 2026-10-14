// Fonte única de dados das expedições.
// Campos opcionais podem ser omitidos — a página se adapta.
//
// status: "ultimas-vagas" | "aberta" | "em-breve" | "esgotada"
// roteiro: [{ dia, data, local, titulo, texto, imagem, imagemAlt }]
// decisao: { titulo, tituloDestaque, tag, resumo, destaques,
//   precoMin, precoMax }

import lanternas2026Hero from "../assets/images/banner.webp";
import lanternasCard from "../assets/images/expedicoes/lanternas-card.webp";
import carnavalCard from "../assets/images/expedicoes/carnaval-card.webp";
import lencoisCard from "../assets/images/expedicoes/lencois-card.webp";
import filipinasFoto from "../assets/images/expedicoes/filipinas-card.webp";
import egitoFoto from "../assets/images/expedicoes/egito-card.webp";
import chinaFoto from "../assets/images/expedicoes/china-card.webp";

import bangkokKhaosan from "../assets/images/expedicoes/tailandia/bangkok-khaosan.webp";
import ayutthayaTemplos from "../assets/images/expedicoes/tailandia/ayutthaya-templos.webp";
import mercadoFlutuante from "../assets/images/expedicoes/tailandia/mercado-flutuante.webp";
import chiangMaiTemplo from "../assets/images/expedicoes/tailandia/chiang-mai-templo.webp";
import chiangRaiTemploBranco from "../assets/images/expedicoes/tailandia/chiang-rai-templo-branco.webp";
import santuarioElefantes from "../assets/images/expedicoes/tailandia/santuario-elefantes.webp";
import phiPhiVistaAerea from "../assets/images/expedicoes/tailandia/phi-phi-vista-aerea.webp";
import phiPhiLagoa from "../assets/images/expedicoes/tailandia/phi-phi-lagoa.webp";
import phiPhiLongTail from "../assets/images/expedicoes/tailandia/phi-phi-long-tail.webp";
import phiPhiEntardecer from "../assets/images/expedicoes/tailandia/phi-phi-entardecer.webp";
import aoNangEntardecer from "../assets/images/expedicoes/tailandia/ao-nang-entardecer.webp";
import railayBeach from "../assets/images/expedicoes/tailandia/railay-beach.webp";
import bangkokWatArun from "../assets/images/expedicoes/tailandia/bangkok-wat-arun.webp";
import bangkokAeroporto from "../assets/images/expedicoes/tailandia/bangkok-aeroporto.webp";
import chiangMaiFestivalLanternas from "../assets/images/expedicoes/tailandia/chiang-mai-festival-lanternas.webp";
import chiangMaiCulturaLocal from "../assets/images/expedicoes/tailandia/chiang-mai-cultura-local.webp";

import cebuChegada from "../assets/images/expedicoes/filipinas/cebu-chegada.webp";
import boholChocolateHillsTarsier from "../assets/images/expedicoes/filipinas/bohol-chocolate-hills-tarsier.webp";
import moalboalMar from "../assets/images/expedicoes/filipinas/moalboal-mar.webp";
import moalboalVidaMarinha from "../assets/images/expedicoes/filipinas/moalboal-vida-marinha.webp";
import moalboalVistaAerea from "../assets/images/expedicoes/filipinas/moalboal-vista-aerea.webp";
import vooElNido from "../assets/images/expedicoes/filipinas/voo-el-nido.webp";
import elNidoIlhas from "../assets/images/expedicoes/filipinas/el-nido-ilhas.webp";
import elNidoEntardecer from "../assets/images/expedicoes/filipinas/el-nido-entardecer.webp";
import cruzeiroElNidoCoron from "../assets/images/expedicoes/filipinas/cruzeiro-el-nido-coron.webp";
import cruzeiroDescanso from "../assets/images/expedicoes/filipinas/cruzeiro-descanso.webp";
import cruzeiroEntardecer from "../assets/images/expedicoes/filipinas/cruzeiro-entardecer.webp";
import coronPraia from "../assets/images/expedicoes/filipinas/coron-praia.webp";
import manilaEntardecer from "../assets/images/expedicoes/filipinas/manila-entardecer.webp";
import filipinasDespedida from "../assets/images/expedicoes/filipinas/filipinas-despedida.webp";

import saoLuisCentroHistorico from "../assets/images/expedicoes/lencois/sao-luis-centro-historico.webp";
import barreirinhasOrla from "../assets/images/expedicoes/lencois/barreirinhas-orla.webp";
import lencoisVilaRio from "../assets/images/expedicoes/lencois/lencois-vila-rio.webp";
import lencoisGrupoDunas from "../assets/images/expedicoes/lencois/lencois-grupo-dunas.webp";
import lencoisTravessiaDunas from "../assets/images/expedicoes/lencois/lencois-travessia-dunas.webp";
import lencoisCaminhadaLagoa from "../assets/images/expedicoes/lencois/lencois-caminhada-lagoa.webp";
import lencoisGrupoTravessia from "../assets/images/expedicoes/lencois/lencois-grupo-travessia.webp";
import maranhaoEstradaRetorno from "../assets/images/expedicoes/lencois/maranhao-estrada-retorno.webp";

import videoCarnaval from "../assets/videos/expedicoes/carnaval.mp4";
import videoLanternas from "../assets/videos/expedicoes/lanternas.mp4";
import videoLencois from "../assets/videos/expedicoes/lencois.mp4";
import videoFilipinas from "../assets/videos/expedicoes/filipinas.mp4";
import videoEgito from "../assets/videos/expedicoes/egito.mp4";
import videoChina from "../assets/videos/expedicoes/china.mp4";

export const WHATSAPP = "5513982026838";
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
      "Refeições e bebidas não mencionadas.",
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
      "Refeições e bebidas não mencionadas.",
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
        local: "Bangkok",
        imagem: bangkokKhaosan,
        imagemAlt: "Rua Khaosan Road iluminada à noite em Bangkok",
        titulo: "Chegada Tailândia",
        texto:
          "Transfer para hospedagem e, à noite, a energia vibrante da Khaosan Road espera por você!",
      },
      {
        dia: "02",
        data: "01/02",
        local: "Ayutthaya · Bangkok",
        imagem: ayutthayaTemplos,
        imagemAlt: "Templos e estátua de Buda em Ayutthaya",
        titulo: "História e Templos",
        texto:
          "Passeio para Ayutthaya e visita aos templos sagrados Wat Pho, Wat Arun e Grand Palace que revelam a alma cultural da Tailândia, terminando com um passeio de Tuk Tuk até a vibrante Chinatown de Bangkok!",
      },
      {
        dia: "03",
        data: "02/02",
        local: "Bangkok",
        imagem: mercadoFlutuante,
        imagemAlt: "Barcos e bancas em um mercado flutuante na Tailândia",
        titulo: "Mercados e Cultura",
        texto:
          'Passeio para os famosos mercados do trem e flutuante e à noite viva a energia da Soi Cowboy, cenário do filme "Se Beber, Não Case!"',
      },
      {
        dia: "04",
        data: "03/02",
        local: "Chiang Mai",
        imagem: chiangMaiTemplo,
        imagemAlt: "Templo dourado em Chiang Mai",
        titulo: "Viagem para o Norte",
        texto:
          "Voo para Chiang Mai, visita ao icônico Templo Doi Suthep e experiência com a autêntica culinária do norte da Tailândia!",
      },
      {
        dia: "05",
        data: "04/02",
        local: "Chiang Rai",
        imagem: chiangRaiTemploBranco,
        imagemAlt: "Templo Branco em Chiang Rai",
        titulo: "Cultura",
        texto:
          "Visita aos templos de Chiang Rai (White, Blue e Red Temple), Tribo das Mulheres Girafa, e à noite viva a experiência única do Night Bazar!",
      },
      {
        dia: "06",
        data: "05/02",
        local: "Chiang Mai",
        imagem: santuarioElefantes,
        imagemAlt: "Elefantes na água em um cenário de natureza",
        titulo: "Natureza",
        texto:
          "Uma manhã em um Santuário dos Elefantes, com alimentação e banho com os elefantes (sem montaria).",
      },
      {
        dia: "07",
        data: "06/02",
        local: "Krabi · Koh Phi Phi",
        imagem: phiPhiVistaAerea,
        imagemAlt: "Vista aérea das praias e barcos de Koh Phi Phi",
        titulo: "Rumo às ilhas",
        texto:
          "Voo para Krabi e barco até Koh Phi Phi, apresentação da ilha mais divertida da Tailândia, baldinho de bebida e noite livre!",
      },
      {
        dia: "08",
        data: "07/02",
        local: "Koh Phi Phi",
        imagem: phiPhiLagoa,
        imagemAlt: "Lagoa cercada por paredões rochosos em Koh Phi Phi",
        titulo: "Diversão na ilha",
        texto:
          "Manhã livre para relaxar e, à tarde, embarque no Barco Pirata, o passeio mais divertido de Phi Phi!",
      },
      {
        dia: "09",
        data: "08/02",
        local: "Koh Phi Phi",
        imagem: phiPhiLongTail,
        imagemAlt: "Barco Long Tail em águas turquesa entre paredões rochosos",
        titulo: "Long Tail",
        texto:
          "Manhã livre para relaxar na praia, tarde de passeio de Long Tail e noite livre para aproveitar tudo o que a ilha oferece!",
      },
      {
        dia: "10",
        data: "09/02",
        local: "Koh Phi Phi",
        imagem: phiPhiEntardecer,
        imagemAlt: "Barcos e luzes à beira-mar ao entardecer",
        titulo: "Koh Phi Phi é sua",
        texto:
          "Dia livre para explorar a ilha, view point (opcional) e, à noite, a famosa luta de Muay Thai!",
      },
      {
        dia: "11",
        data: "10/02",
        local: "Krabi · Ao Nang",
        imagem: aoNangEntardecer,
        imagemAlt: "Orla de Ao Nang ao entardecer",
        titulo: "Praia de Ao Nang",
        texto:
          "Barco para Krabi, relaxe com uma massagem na Praia de Ao Nang, aprecie o pôr do sol e aproveite a noite explorando as famosas lojinhas locais.",
      },
      {
        dia: "12",
        data: "11/02",
        local: "Railay · Ao Nang",
        imagem: railayBeach,
        imagemAlt: "Praia de Railay com falésias e vegetação",
        titulo: "Praia e Natureza",
        texto:
          "Dia incrível em Railey Beach e, à noite, tempo livre para explorar a vibe única de Ao Nang!",
      },
      {
        dia: "13",
        data: "12/02",
        local: "Bangkok",
        imagem: bangkokWatArun,
        imagemAlt: "Templo Wat Arun junto ao rio ao pôr do sol",
        titulo: "Retorno a Bangkok",
        texto:
          "Voo para Bangkok, tarde livre para compras no MBK Center e Central World!",
      },
      {
        dia: "14",
        data: "13/02",
        local: "Bangkok · Brasil",
        imagem: bangkokAeroporto,
        imagemAlt: "Área interna de um aeroporto em Bangkok",
        titulo: "Retorno Brasil",
        texto:
          "Retorno ao Brasil, mas com a certeza de que as memórias dessa viagem ficarão para sempre!",
      },
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
    duracao: "14 dias",
    duracaoDetalhe:
      "13 noites divididas em Cebu, Moalboal, El Nido, Coron e Manila.",
    rota: "Cebu · Bohol · Moalboal · El Nido · Coron · Manila",
    hospedagemResumo: "Hotéis 3★ e 4★ selecionados",
    status: "aberta",
    imagemCard: filipinasFoto,
    imagemHero: filipinasFoto,
    imagemHeroPosicao: "center 55%",
    resumo:
      "Será que o mar das Filipinas é mesmo tão azul quanto dizem? Dias de praias paradisíacas, ilhas incríveis e experiências que você vai levar para a vida.",
    descricao: [
      "Você já viu as fotos. Agora chegou a hora de descobrir se o mar das Filipinas é mesmo tudo isso.",
      "Águas cristalinas, praias paradisíacas, ilhas incríveis, o Sardine Run de Moalboal e os cenários impressionantes de El Nido.",
      "Tudo isso ao lado do Chico, que cuida da logística, dos detalhes e está com você em cada etapa da viagem.",
      "Você só precisa chegar, se entregar à experiência e viver as Filipinas de um jeito que você nunca imaginou.",
    ],
    inclusoTitulo: "Tudo resolvido antes mesmo de você chegar.",
    inclusoIntroducao: [
      "Sua viagem pelas Filipinas vai ser mais simples do que você imagina.",
      "Mesmo com outro idioma, diferentes ilhas, barcos, voos internos e toda a logística de uma viagem como essa, muita coisa já estará organizada antes da sua chegada.",
      "É aquele trabalho que você talvez nem perceba durante a viagem, justamente porque tudo estará acontecendo como deveria.",
    ],
    video: videoFilipinas,
    porqueExpedicao: {
      semGuia: [
        "Organizar voos, transfers e deslocamentos",
        "Montar o itinerário entre as cidades e ilhas",
        "Escolher o que realmente vale a pena conhecer",
        "Pesquisar fornecedores, preços e reservas",
        "Resolver imprevistos pelo caminho",
        "Se virar sozinho em um país com outro idioma e outra cultura",
      ],
      comChico: [
        "Mais de 70 roteiros já planejados pelo Chico",
        "Toda a logística organizada antes e durante a viagem",
        "Experiências escolhidas a dedo: cruzeiro, passeios de barco, tours e outras experiências",
        "Grupo pequeno e acompanhamento do Chico do início ao fim",
        "Suporte na escolha e compra da passagem aérea",
      ],
    },
    incluso: [
      {
        titulo: "Voos internos",
        itens: ["2 voos internos inclusos"],
      },
      {
        titulo: "Hospedagens",
        itens: [
          "13 noites divididas em Cebu, Moalboal, El Nido, Coron e Manila",
          "Hotéis 3★ e 4★ em todas as cidades, com café da manhã",
        ],
      },
      {
        titulo: "Transfers, traslados e barcos",
        itens: ["Todos os deslocamentos inclusos"],
      },
      {
        titulo: "Passeios",
        itens: [
          "Cruzeiro de 3 dias entre El Nido e Coron",
          "Tour em Bohol: Chocolate Hills e encontro com os tarsiers",
          "Sardine Run em Moalboal",
          "Island Hopping em El Nido e praias",
        ],
      },
      {
        titulo: "Experiências Chico",
        itens: [
          "Surpresas provando a culinária e iguarias filipinas",
          "Acompanhamento e suporte do Chico durante toda a viagem",
        ],
      },
    ],
    naoIncluso: [
      "Passagem aérea de ida e volta do Brasil para as Filipinas (com suporte do Chico na compra)",
      "Refeições e bebidas não mencionadas",
      "Hospedagens antes e depois da expedição",
      "Seguro viagem",
      "Chip de celular",
      "Outras despesas não mencionadas",
    ],
    obrigatorios: [
      "Passaporte válido com 6 meses de validade a partir da viagem e com espaço para carimbos",
      "Certificado internacional de vacina da febre amarela",
      "Seguro viagem",
    ],
    roteiro: [
      {
        dia: "01",
        data: "28/02",
        local: "Cebu",
        imagem: cebuChegada,
        imagemAlt: "Chegada com bagagem em um cenário tropical ao pôr do sol",
        titulo: "Chegada às Filipinas",
        texto: "Chegada, transfer para a hospedagem e descanso.",
      },
      {
        dia: "02",
        data: "01/03",
        local: "Bohol",
        imagem: boholChocolateHillsTarsier,
        imagemAlt: "Tarsier e paisagem das Chocolate Hills",
        titulo: "O primeiro encanto",
        texto:
          "Um dia para descobrir Bohol e conhecer de perto dois dos seus maiores tesouros.",
      },
      {
        dia: "03",
        data: "02/03",
        local: "Moalboal",
        imagem: moalboalMar,
        imagemAlt: "Mar cristalino junto à costa",
        titulo: "Chegando ao paraíso",
        texto:
          "Transfer para Moalboal e uma tarde leve para começar a entrar no clima das Filipinas.",
      },
      {
        dia: "04",
        data: "03/03",
        local: "Moalboal",
        imagem: moalboalVidaMarinha,
        imagemAlt: "Tartaruga e mergulhador em águas azuis",
        titulo: "A aventura começa aqui",
        texto:
          "Um encontro impressionante com a vida marinha e algumas das praias mais bonitas de Moalboal.",
      },
      {
        dia: "05",
        data: "04/03",
        local: "Moalboal",
        imagem: moalboalVistaAerea,
        imagemAlt: "Vista aérea de uma praia de águas turquesa",
        titulo: "Sem pressa",
        texto:
          "Um dia livre para explorar Moalboal no seu ritmo, descobrir novos cantinhos ou simplesmente aproveitar.",
      },
      {
        dia: "06",
        data: "05/03",
        local: "Cebu · El Nido",
        imagem: vooElNido,
        imagemAlt: "Vista de ilhas pela janela de um avião",
        titulo: "Mudando o cenário",
        texto:
          "Transfer para Cebu, voo para El Nido e uma noite para sentir a energia de uma das ilhas mais famosas das Filipinas.",
      },
      {
        dia: "07",
        data: "06/03",
        local: "El Nido",
        imagem: elNidoIlhas,
        imagemAlt: "Ilhas e águas azuis entre formações rochosas",
        titulo: "É azul mesmo?",
        texto:
          "Hoje você vai descobrir, de barco, se as fotos das Filipinas realmente fazem jus à fama.",
      },
      {
        dia: "08",
        data: "07/03",
        local: "El Nido",
        imagem: elNidoEntardecer,
        imagemAlt: "Pôr do sol à beira-mar",
        titulo: "Dia de ilha",
        texto:
          "Um dia livre para relaxar, curtir El Nido e aproveitar o paraíso sem pressa.",
      },
      {
        dia: "09",
        data: "08/03",
        local: "El Nido · Coron",
        imagem: cruzeiroElNidoCoron,
        imagemAlt: "Barco próximo a uma ilha de praia clara",
        titulo: "O grande momento",
        texto:
          "Começa uma das experiências mais especiais da expedição: três dias navegando entre ilhas, praias e cenários inacreditáveis.",
      },
      {
        dia: "10",
        data: "09/03",
        local: "El Nido · Coron",
        imagem: cruzeiroDescanso,
        imagemAlt: "Descanso em uma cabana junto ao mar",
        titulo: "Onde o tempo desacelera",
        texto:
          "Segundo dia de navegação, descobertas e momentos que dificilmente caberiam em um roteiro convencional.",
      },
      {
        dia: "11",
        data: "10/03",
        local: "El Nido · Coron",
        imagem: cruzeiroEntardecer,
        imagemAlt: "Barco no mar ao pôr do sol",
        titulo: "Até a última ilha",
        texto:
          "Último dia do cruzeiro. E pode ter certeza que ainda tem muita coisa bonita pelo caminho.",
      },
      {
        dia: "12",
        data: "11/03",
        local: "Coron",
        imagem: coronPraia,
        imagemAlt: "Praia com vegetação e formações rochosas",
        titulo: "Sem horário pra nada",
        texto:
          "Dia livre em Coron para explorar, descansar ou simplesmente aproveitar o ritmo tranquilo da ilha.",
      },
      {
        dia: "13",
        data: "12/03",
        local: "Manila",
        imagem: manilaEntardecer,
        imagemAlt: "Paisagem urbana à beira da água ao entardecer",
        titulo: "De volta a cidade",
        texto:
          "Voo para Manila e uma tarde livre para aproveitar a cidade, fazer compras ou simplesmente descansar.",
      },
      {
        dia: "14",
        data: "13/03",
        local: "Filipinas · Brasil",
        imagem: filipinasDespedida,
        imagemAlt: "Viajante em uma praia de águas cristalinas",
        titulo: "Até a próxima aventura",
        texto:
          "Hora de voltar para casa, levando na bagagem muito mais do que souvenirs. MEMÓRIAS!",
      },
    ],
    decisao: {
      titulo: "Pronto(a) para descobrir",
      tituloDestaque: "se o mar das Filipinas é mesmo tão azul quanto dizem?",
      tag: "Experiência completa",
      resumo:
        "Uma jornada pelas Filipinas entre praias paradisíacas, ilhas incríveis e experiências que você nunca vai esquecer. De Bohol a Moalboal, El Nido e Coron, com acompanhamento durante toda a viagem.",
      destaques: [
        "14 dias de expedição",
        "Hotéis selecionados com café da manhã",
        "Bohol, Chocolate Hills e encontro com os tarsiers",
        "Sardine Run em Moalboal",
        "Cruzeiro de 3 dias entre El Nido e Coron",
        "Island Hopping em El Nido",
        "2 voos domésticos",
        "Traslados, transfers e barcos",
        "Acompanhamento do Chico",
      ],
      precoMin: "R$ 14.000",
      precoMax: "R$ 17.000",
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
          "O traslado está incluso no dia 28/02, com horário a definir. E pode ficar tranquilo que o Chico estará à disposição desde a sua chegada para te orientar e ajudar no que for preciso, para você não se sentir sozinho em nenhum momento.",
      },
      DEPOIS_DA_MENSAGEM,
    ],
    mensagemWhatsApp:
      "Oi Chico! Quero saber mais sobre a expedição Filipinas 2027, de 28 de fevereiro a 13 de março.",
  },

  {
    slug: "trekking-lencois-maranhenses-2027",
    nome: "Trekking Lençóis Maranhenses",
    nomeCurto: "Lençóis Maranhenses",
    ano: 2027,
    destino: "Brasil",
    periodo: "14 a 21 de junho de 2027",
    duracao: "8 dias",
    duracaoDetalhe:
      "7 noites: 4 em hospedagens com quartos duplos ou triplos e 3 em redários nos pontos de apoio do trekking.",
    rota: "São Luís · Barreirinhas · Atins · Santo Amaro",
    hospedagemResumo: "Quartos duplos ou triplos e redários no trekking",
    status: "aberta",
    imagemCard: lencoisCard,
    imagemHero: lencoisCard,
    imagemHeroPosicao: "center 60%",
    resumo:
      "Quatro dias caminhando por um dos lugares mais impressionantes do Brasil. Dunas, lagoas cristalinas, paisagens que mudam a cada passo e uma experiência que você vai lembrar para sempre.",
    descricao: [
      "Já imaginou explorar os Lençóis Maranhenses a pé, atravessando dunas, mergulhando em lagoas cristalinas e descobrindo paisagens que mudam a cada trecho do caminho?",
      "De 14 a 21 de junho de 2027, vamos percorrer os Lençóis Maranhenses em uma expedição que passa por São Luís, Barreirinhas, Atins e Santo Amaro, incluindo o passeio pelo Rio Preguiças e quatro dias de trekking acompanhados por guia local especializado.",
      "Durante o trekking, a experiência é ainda mais imersiva: dormimos em redários nos pontos de apoio dos vilarejos, com café da manhã, almoço e jantar inclusos. Nas demais etapas, ficamos em hospedagens em quartos duplos ou triplos, sempre com café da manhã.",
      "Os dias de caminhada são longos, mas também são cheios de momentos para parar, respirar e mergulhar nas lagoas. É uma experiência para quem quer realmente caminhar pelos Lençóis e não apenas passar por eles.",
      "Os percursos exigem um pouco de preparo físico e disposição. O terceiro dia é o mais desafiador, com aproximadamente 18 km de caminhada, mas também faz parte do que torna essa experiência tão especial.",
    ],
    video: videoLencois,
    porqueExpedicao: PORQUE_LENCOIS,
    incluso: [
      {
        titulo: "Transfers e traslados",
        itens: [
          "Transfer de São Luís para Barreirinhas",
          "Barco de Barreirinhas para Atins",
          "Transfer de Santo Amaro para São Luís",
        ],
      },
      {
        titulo: "Hospedagens",
        itens: [
          "1 diária em São Luís com café da manhã",
          "1 diária em Barreirinhas com café da manhã",
          "1 diária em Atins com café da manhã",
          "1 diária em Santo Amaro com café da manhã",
          "Quartos duplos ou triplos nessas quatro etapas",
        ],
      },
      {
        titulo: "Hospedagens no trekking",
        itens: [
          "3 diárias em pontos de apoio nos vilarejos, em galpões com redário",
          "Café da manhã, almoço e jantar inclusos nessas diárias",
          "Bebidas à parte",
        ],
      },
      {
        titulo: "Passeios",
        itens: [
          "City tour em São Luís",
          "Passeio de barco pelo Rio Preguiças até Atins, explorando Vassouras, Mandacaru e Caburé",
          "4 dias de trekking com guia local especializado",
        ],
      },
    ],
    naoIncluso: [
      "Passagem aérea (com suporte do Chico na compra)",
      "Hospedagens antes e depois da expedição",
      "Refeições e bebidas não mencionadas.",
      "Outras despesas não mencionadas",
    ],
    roteiro: [
      {
        dia: "01",
        data: "14/06",
        local: "São Luís",
        imagem: saoLuisCentroHistorico,
        imagemAlt: "Rua do Centro Histórico de São Luís ao entardecer",
        imagemPosicao: "center bottom",
        titulo: "Chegando ao Maranhão",
        texto:
          "Chegada a São Luís, transfer para a hospedagem e, à noite, uma primeira volta pelo Centro Histórico para entrar no clima da viagem.",
      },
      {
        dia: "02",
        data: "15/06",
        local: "São Luís · Barreirinhas",
        imagem: barreirinhasOrla,
        imagemAlt: "Orla de Barreirinhas ao pôr do sol",
        imagemPosicao: "center bottom",
        titulo: "Conhecendo a ilha do Amor",
        texto:
          "Um passeio por São Luís antes de seguirmos rumo a Barreirinhas, onde a aventura pelos Lençóis começa a ganhar forma.",
      },
      {
        dia: "03",
        data: "16/06",
        local: "Rio Preguiças · Atins",
        imagem: lencoisVilaRio,
        imagemAlt: "Caminho entre casas e palmeiras junto a um rio",
        titulo: "O caminho até os Lençóis",
        texto:
          "Navegamos pelo Rio Preguiças, com paradas pelo caminho, até chegar a Atins. No fim do dia, um pôr do sol para marcar o início da nossa jornada.",
      },
      {
        dia: "04",
        data: "17/06",
        local: "Bandeira do Bonzinho · Baixa Grande",
        imagem: lencoisGrupoDunas,
        imagemAlt: "Grupo reunido nas dunas ao entardecer",
        imagemPosicao: "center 75%",
        titulo: "A jornada começa",
        texto:
          "É hora de colocar o pé na areia. Saímos de Bandeira do Bonzinho e caminhamos cerca de 10 km até Baixa Grande, nosso primeiro ponto de apoio.",
      },
      {
        dia: "05",
        data: "18/06",
        local: "Baixa Grande · Queimada dos Britos",
        imagem: lencoisTravessiaDunas,
        imagemAlt: "Grupo caminhando entre dunas e lagoas",
        titulo: "Agora estamos nos Lençóis",
        texto:
          "Deixamos Baixa Grande para trás e seguimos por mais 11 km até Queimada dos Britos, caminhando entre dunas e lagoas que parecem não ter fim.",
      },
      {
        dia: "06",
        data: "19/06",
        local: "Queimada dos Britos · Betânia",
        imagem: lencoisCaminhadaLagoa,
        imagemAlt: "Viajante caminhando perto de uma lagoa e das dunas",
        imagemPosicao: "center 75%",
        titulo: "O dia que vai testar seus limites",
        texto:
          "O trecho mais desafiador da jornada: cerca de 18 km entre Queimada dos Britos e Betânia. E, pelo caminho, sempre existe uma lagoa esperando para renovar as energias.",
      },
      {
        dia: "07",
        data: "20/06",
        local: "Betânia · Santo Amaro",
        imagem: lencoisGrupoTravessia,
        imagemAlt: "Grupo celebrando a travessia nas dunas",
        titulo: "A última travessia",
        texto:
          "Últimos 10 km até Santo Amaro. É hora de aproveitar cada passo, olhar ao redor e guardar na memória tudo o que os Lençóis nos entregaram pelo caminho.",
      },
      {
        dia: "08",
        data: "21/06",
        local: "Santo Amaro · São Luís",
        imagem: maranhaoEstradaRetorno,
        imagemAlt: "Estrada no Maranhão ao pôr do sol",
        titulo: "A conquista",
        texto:
          "Retorno de Santo Amaro para São Luís. A caminhada termina, mas fica a sensação de ter vivido os Lençóis de uma forma que poucos têm a oportunidade de experimentar.",
      },
    ],
    decisao: {
      titulo: "Pronto(a) para explorar",
      tituloDestaque: "os Lençóis Maranhenses na sua essência?",
      tag: "Trekking entre dunas e lagoas",
      resumo:
        "Uma expedição de 8 dias por São Luís, Barreirinhas, Atins e Santo Amaro, com passeio pelo Rio Preguiças, 4 dias de trekking e noites em redários nos vilarejos.",
      destaques: [
        "8 dias de expedição, de 14 a 21 de junho de 2027",
        "4 dias de trekking com guia local especializado",
        "4 diárias em quartos duplos ou triplos com café da manhã",
        "3 diárias em redários nos pontos de apoio",
        "Café da manhã, almoço e jantar nas diárias do trekking (bebidas à parte)",
        "City tour em São Luís",
        "Passeio pelo Rio Preguiças, com Vassouras, Mandacaru e Caburé",
        "Transfers São Luís–Barreirinhas e Santo Amaro–São Luís",
        "Barco de Barreirinhas para Atins",
      ],
      precoMin: "R$ 5.000",
      precoMax: "R$ 6.500",
    },
    dicas: [
      {
        titulo: "Itens pessoais",
        itens: [
          "Mochila de 35 litros para os itens essenciais",
          "Toalha de secagem rápida",
          "Trajes de banho",
          "Roupas leves de secagem rápida",
          "Óculos de sol",
          "Kit de primeiros socorros para cuidados simples",
          "Garrafa de água",
          "Lanterna (pode ser a do celular)",
          "Carregador portátil",
          "Canga",
          "Repelente",
          "Snacks",
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
          "Calçados para trilhas e meias",
          "Sapatilha aquática",
          "Chinelo para usar ao final das caminhadas",
          "Os calçados são opcionais: segundo o Chico, a maioria caminha descalça nas dunas",
        ],
      },
      {
        titulo: "Opcionais",
        itens: [
          "Shorts ou calça, caso prefira caminhar de roupa em vez de traje de banho",
          "Jaqueta impermeável para chuva ou noites mais frescas nos redários",
          "Dinheiro para as bebidas nos pontos de apoio: normalmente aceitam PIX, mas há cerca de 2 dias sem conexão",
        ],
      },
    ],
    faq: [
      PASSAGEM_AEREA,
      QUARTOS,
      {
        pergunta: "Como são as hospedagens?",
        resposta:
          "São 7 diárias: uma em São Luís, uma em Barreirinhas, uma em Atins e uma em Santo Amaro, em quartos duplos ou triplos com café da manhã. Durante o trekking, são 3 diárias em galpões com redário nos pontos de apoio dos vilarejos, com café da manhã, almoço e jantar inclusos. As bebidas são pagas à parte.",
      },
      {
        pergunta: "A areia é quente?",
        resposta:
          "Segundo o Chico, o grupo sai muito cedo e encontra a areia fria durante a caminhada. Ao chegar aos pontos de apoio, em alguns momentos, a areia pode estar mais quente.",
      },
      {
        pergunta: "É muito cansativo?",
        resposta:
          "São percursos longos, com diversas paradas para banho nas lagoas. É necessário preparo físico para realizar as caminhadas. O terceiro dia do trekking tem o maior percurso, com aproximadamente 18 km. Converse com o Chico para entender o ritmo da expedição antes de reservar.",
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
    periodo: "7 a 21 de novembro de 2027",
    duracao: "15 dias",
    duracaoDetalhe:
      "14 noites divididas em Bangkok, Chiang Mai, Koh Phi Phi e Krabi.",
    rota: "Bangkok · Chiang Mai · Koh Phi Phi · Krabi",
    hospedagemResumo: "Hospedagem 3★ e 4★ selecionada",
    status: "aberta",
    imagemCard: lanternasCard,
    imagemHero: lanternas2026Hero,
    imagemHeroPosicao: "center 30%",
    resumo:
      "Templos, ilhas e o céu de Chiang Mai iluminado por lanternas. Uma jornada de 15 dias para viver a Tailândia ao lado do Chico.",
    descricao: [
      "Imagine estar na Tailândia quando o céu de Chiang Mai se transforma em um mar de lanternas.",
      "Templos milenares, mercados flutuantes, encontros com elefantes, ilhas paradisíacas e uma das celebrações mais especiais do país.",
      "Tudo isso ao lado do Chico, que cuida da logística, dos detalhes e está com você em cada etapa da viagem.",
      "Você só precisa chegar, se entregar à experiência e viver a Tailândia de um jeito que nunca imaginou.",
    ],
    video: videoLanternas,
    porqueExpedicao: PORQUE_CARNAVAL,
    incluso: [
      {
        titulo: "Voos internos",
        itens: ["Os 3 trechos aéreos dentro da Tailândia"],
      },
      {
        titulo: "Hospedagens",
        itens: ["14 noites em hotéis 3★ e 4★ com café da manhã"],
      },
      {
        titulo: "Transfers e traslados",
        itens: [
          "Balsas, barcos e transportes terrestres entre as etapas da expedição",
        ],
      },
      {
        titulo: "Passeios",
        itens: [
          "Ayutthaya, Grand Palace, Wat Pho e Wat Arun",
          "Mercados do trem e flutuante",
          "Templos de Chiang Rai e Tribo das Mulheres Girafa",
          "Santuário de elefantes",
          "Passeios de Barco Pirata e Long Tail em Koh Phi Phi",
        ],
      },
      {
        titulo: "Experiência Festival das Lanternas",
        itens: ["Ingresso Premium para o Festival das Lanternas"],
      },
      {
        titulo: "Acompanhamento do Chico",
        itens: ["Acompanhamento e suporte do Chico durante toda a viagem"],
      },
    ],
    naoIncluso: [
      "Passagem aérea de ida e volta do Brasil para a Tailândia (com suporte do Chico na compra)",
      "Refeições e bebidas não mencionadas.",
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
        data: "07/11",
        local: "Bangkok",
        imagem: bangkokKhaosan,
        imagemAlt: "Rua Khaosan Road iluminada à noite em Bangkok",
        titulo: "Chegada Tailândia",
        texto:
          "Transfer para hospedagem e, à noite, a energia vibrante da Khaosan Road espera por você!",
      },
      {
        dia: "02",
        data: "08/11",
        local: "Ayutthaya · Bangkok",
        imagem: ayutthayaTemplos,
        imagemAlt: "Templos e estátua de Buda em Ayutthaya",
        titulo: "História e Templos",
        texto:
          "Passeio para Ayutthaya e visita aos templos sagrados Wat Pho, Wat Arun e Grand Palace que revelam a alma cultural da Tailândia, terminando com um passeio de Tuk Tuk até a vibrante Chinatown de Bangkok!",
      },
      {
        dia: "03",
        data: "09/11",
        local: "Bangkok",
        imagem: mercadoFlutuante,
        imagemAlt: "Barcos e bancas em um mercado flutuante na Tailândia",
        titulo: "Mercados e Cultura",
        texto:
          'Passeio para os famosos mercados do trem e flutuante e à noite viva a energia da Soi Cowboy, cenário do filme "Se Beber, Não Case!"',
      },
      {
        dia: "04",
        data: "10/11",
        local: "Chiang Mai",
        imagem: chiangMaiTemplo,
        imagemAlt: "Templo dourado em Chiang Mai",
        titulo: "Viagem para o Norte",
        texto:
          "Voo para Chiang Mai, visita ao icônico Templo Doi Suthep e experiência com a autêntica culinária do norte da Tailândia!",
      },
      {
        dia: "05",
        data: "11/11",
        local: "Chiang Rai",
        imagem: chiangRaiTemploBranco,
        imagemAlt: "Templo Branco em Chiang Rai",
        titulo: "Cultura",
        texto:
          "Visita aos templos de Chiang Rai (White, Blue e Red Temple), Tribo das Mulheres Girafa, e à noite viva a experiência única do Night Bazar!",
      },
      {
        dia: "06",
        data: "12/11",
        local: "Chiang Mai",
        imagem: santuarioElefantes,
        imagemAlt: "Elefantes na água em um cenário de natureza",
        titulo: "Natureza",
        texto:
          "Uma manhã em um Santuário dos Elefantes, com alimentação e banho com os elefantes (sem montaria).",
      },
      {
        dia: "07",
        data: "13/11",
        local: "Chiang Mai",
        imagem: chiangMaiFestivalLanternas,
        imagemAlt: "Festival das Lanternas em Chiang Mai",
        titulo: "Festival das Lanternas",
        texto:
          "O dia mais esperado, com a magia do Festival das Lanternas iluminando o céu!",
      },
      {
        dia: "08",
        data: "14/11",
        local: "Chiang Mai",
        imagem: chiangMaiCulturaLocal,
        imagemAlt: "Cultura local em Chiang Mai",
        titulo: "Cultura Local",
        texto: "Dia livre em Chiang Mai e festa de rua à noite!",
      },
      {
        dia: "09",
        data: "15/11",
        local: "Krabi · Koh Phi Phi",
        imagem: phiPhiVistaAerea,
        imagemAlt: "Vista aérea das praias e barcos de Koh Phi Phi",
        titulo: "Rumo às ilhas",
        texto:
          "Voo para Krabi e barco até Koh Phi Phi, apresentação da ilha mais divertida da Tailândia, baldinho de bebida e noite livre!",
      },
      {
        dia: "10",
        data: "16/11",
        local: "Koh Phi Phi",
        imagem: phiPhiLagoa,
        imagemAlt: "Lagoa cercada por paredões rochosos em Koh Phi Phi",
        titulo: "Diversão na ilha",
        texto:
          "Manhã livre para relaxar e, à tarde, embarque no Barco Pirata, o passeio mais divertido de Phi Phi!",
      },
      {
        dia: "11",
        data: "17/11",
        local: "Koh Phi Phi",
        imagem: phiPhiLongTail,
        imagemAlt: "Barco Long Tail em águas turquesa entre paredões rochosos",
        titulo: "Long Tail",
        texto:
          "Manhã livre para relaxar na praia, tarde de passeio de Long Tail e, à noite, a famosa luta de Muay Thai!",
      },
      {
        dia: "12",
        data: "18/11",
        local: "Krabi · Ao Nang",
        imagem: aoNangEntardecer,
        imagemAlt: "Orla de Ao Nang ao entardecer",
        titulo: "Praia de Ao Nang",
        texto:
          "Barco para Krabi, experiência relaxante na Praia de Ao Nang, com pôr do sol e noite explorando as famosas lojinhas locais.",
      },
      {
        dia: "13",
        data: "19/11",
        local: "Railay · Ao Nang",
        imagem: railayBeach,
        imagemAlt: "Praia de Railay com falésias e vegetação",
        titulo: "Praia e Natureza",
        texto:
          "Dia incrível em Railay Beach e, à noite, tempo livre para explorar a vibe única de Ao Nang!",
      },
      {
        dia: "14",
        data: "20/11",
        local: "Bangkok",
        imagem: bangkokWatArun,
        imagemAlt: "Templo Wat Arun junto ao rio ao pôr do sol",
        titulo: "Retorno a Bangkok",
        texto:
          "Voo para Bangkok, tarde livre para compras no MBK Center e Central World!",
      },
      {
        dia: "15",
        data: "21/11",
        local: "Bangkok · Brasil",
        imagem: bangkokAeroporto,
        imagemAlt: "Área interna de um aeroporto em Bangkok",
        titulo: "Retorno Brasil",
        texto:
          "Retorno ao Brasil, mas com a certeza de que as memórias dessa viagem ficarão para sempre!",
      },
    ],
    decisao: {
      titulo: "Pronto(a) para viver",
      tituloDestaque: "uma experiência que você nunca vai esquecer?",
      tag: "Experiência completa",
      resumo:
        "Uma jornada pelo melhor da Tailândia, passando por Bangkok, Chiang Mai, Koh Phi Phi e Krabi, com o Festival das Lanternas, templos, santuário de elefantes, passeios de barco pelas ilhas e acompanhamento do Chico durante toda a viagem.",
      destaques: [
        "15 dias de expedição",
        "14 noites em hotéis 3★ e 4★ com café da manhã",
        "Ingresso Premium para o Festival das Lanternas",
        "Templos em Chiang Rai (Templo Branco, Azul e Red Temple)",
        "Passeios de barco em Koh Phi Phi (Barco Pirata e Long Tail)",
        "3 voos domésticos",
        "Translados, transfers e barcos",
        "Ayutthaya, Grand Palace, Wat Pho e Wat Arun",
        "Santuário de elefantes",
        "Acompanhamento do Chico",
      ],
      precoMin: "R$ 16.000",
      precoMax: "R$ 19.000",
    },
    faq: [
      {
        pergunta: "Como faço com dinheiro?",
        resposta:
          "Leve um pouco em espécie (cerca de 500 dólares ou euros), mas os cartões de conta global vão te ajudar muito: Wise, Revolut, Nomad, entre outros.",
      },
      PASSAGEM_AEREA,
      QUARTOS,
      DEPOIS_DA_MENSAGEM,
    ],
    mensagemWhatsApp:
      "Oi Chico! Quero saber mais sobre a expedição Festival das Lanternas 2027, de 7 a 21 de novembro.",
  },

  {
    slug: "egito-2027",
    nome: "Egito",
    nomeCurto: "Egito",
    ano: 2027,
    destino: "Egito",
    periodo: "19 a 29 de setembro de 2027",
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
    periodo: "10 a 24 de outubro de 2027",
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
