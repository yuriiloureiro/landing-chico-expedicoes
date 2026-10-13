import { useEffect, useRef, useState } from "react";
import { linkWhatsApp } from "../data/expedicoes";
import { getFormularioExpedicao } from "../data/formulariosExpedicoes";
import "./Formulario.css";

function FormularioWhatsApp({ expedicao, configuracao, espera }) {
  const { perguntas, periodo } = configuracao;
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState({});
  const tituloRef = useRef(null);
  const deveFocarRef = useRef(false);

  const pergunta = perguntas[etapa];
  const ultimaEtapa = etapa === perguntas.length - 1;
  const respostaAtual = respostas[pergunta.id];
  const completo = perguntas.every((item) => respostas[item.id]);
  const progresso = ((etapa + 1) / perguntas.length) * 100;
  const avisoId = `form-exp-aviso-${expedicao.slug}`;

  const textoBotao = espera
    ? "Quero receber os detalhes"
    : "Conversar com o Chico";

  useEffect(() => {
    if (deveFocarRef.current) {
      tituloRef.current?.focus({ preventScroll: true });
      deveFocarRef.current = false;
    }
  }, [etapa]);

  function mudarEtapa(proximaEtapa) {
    deveFocarRef.current = true;
    setEtapa(proximaEtapa);
  }

  function selecionarResposta(valor) {
    setRespostas((atuais) => ({
      ...atuais,
      [pergunta.id]: valor,
    }));
  }

  function continuar(event) {
    event.preventDefault();

    if (!respostaAtual || ultimaEtapa) return;

    mudarEtapa(etapa + 1);
  }

  const mensagem = [
    `Oi, Chico! Tenho interesse na expedição ${expedicao.nome} ${expedicao.ano}.`,
    "",
    ...(espera
      ? [
          "Vi que essa expedição está em breve e gostaria de receber os detalhes.",
          "",
        ]
      : []),
    `Período: ${periodo}`,
    "",
    "Estas são minhas respostas:",
    "",
    ...perguntas.map(
      (item, indice) =>
        `${indice + 1}. ${item.titulo}\n${respostas[item.id] || ""}`,
    ),
    "",
    "Gostaria de conversar sobre os próximos passos.",
  ].join("\n");

  return (
    <form className="form-exp" onSubmit={continuar}>
      <div className="form-exp-progresso">
        <div className="form-exp-progresso-topo">
          <span aria-live="polite" aria-atomic="true">
            Etapa {etapa + 1} de {perguntas.length}
          </span>

          <span>Seu próximo destino começa aqui</span>
        </div>

        <div
          className="form-exp-barra"
          role="progressbar"
          aria-label="Progresso do formulário"
          aria-valuemin={1}
          aria-valuemax={perguntas.length}
          aria-valuenow={etapa + 1}
          aria-valuetext={`Etapa ${etapa + 1} de ${perguntas.length}`}
        >
          <span style={{ width: `${progresso}%` }} />
        </div>
      </div>

      <fieldset className="form-exp-pergunta" key={pergunta.id}>
        <legend>
          <span className="form-exp-titulo" ref={tituloRef} tabIndex={-1}>
            {pergunta.titulo}
          </span>
        </legend>

        <p className="form-exp-ajuda">Selecione uma opção para continuar.</p>

        <div className="form-exp-opcoes">
          {pergunta.opcoes.map((opcao) => (
            <label
              className={`form-exp-opcao ${
                respostaAtual === opcao ? "form-exp-opcao--selecionada" : ""
              }`}
              key={opcao}
            >
              <input
                type="radio"
                name={pergunta.id}
                value={opcao}
                checked={respostaAtual === opcao}
                onChange={() => selecionarResposta(opcao)}
                required
              />

              <span>{opcao}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-exp-acoes">
        <button
          type="button"
          className="form-exp-voltar"
          disabled={etapa === 0}
          onClick={() => mudarEtapa(etapa - 1)}
        >
          <span aria-hidden="true">←</span>
          Voltar
        </button>

        {ultimaEtapa && completo ? (
          <a
            className="form-exp-continuar"
            href={linkWhatsApp(mensagem)}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby={avisoId}
          >
            {textoBotao}
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <button
            type="submit"
            className="form-exp-continuar"
            disabled={!respostaAtual || ultimaEtapa}
          >
            {ultimaEtapa ? textoBotao : "Continuar"}
            <span aria-hidden="true">{ultimaEtapa ? "↗" : "→"}</span>
          </button>
        )}
      </div>

      <p className="form-exp-aviso" id={avisoId}>
        {ultimaEtapa
          ? espera
            ? "O WhatsApp abrirá com suas respostas. Toque em Enviar para encaminhá-las ao Chico e conversar sobre essa expedição."
            : "O WhatsApp abrirá com suas respostas. Toque em Enviar para encaminhá-las ao Chico. Isso ainda não confirma sua reserva."
          : "Suas respostas ajudam o Chico a entender seu perfil e orientar os próximos passos."}
      </p>
    </form>
  );
}

function ContatoDireto({ expedicao }) {
  const esgotada = expedicao.status === "esgotada";

  const mensagem =
    expedicao.mensagemWhatsApp ||
    `Oi, Chico! Quero saber mais sobre a expedição ${expedicao.nome} ${expedicao.ano}.`;

  return (
    <div className="form-exp">
      <p className="form-exp-ajuda">
        {esgotada
          ? "Essa edição está esgotada. Converse com o Chico sobre a lista de espera ou uma próxima edição."
          : "Converse com o Chico para conhecer os detalhes dessa expedição."}
      </p>

      <div className="form-exp-acoes">
        <a
          className="form-exp-continuar"
          href={linkWhatsApp(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {esgotada
            ? "Quero saber sobre a próxima edição"
            : "Conversar com o Chico"}

          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <p className="form-exp-aviso">
        O WhatsApp abrirá com uma mensagem pronta. Toque em Enviar para iniciar
        a conversa.
      </p>
    </div>
  );
}

export default function Formulario({ expedicao, tipo = "contato" }) {
  const configuracao = getFormularioExpedicao(expedicao);
  const espera = tipo === "espera" || expedicao.status === "em-breve";
  const esgotada = expedicao.status === "esgotada";

  if (!configuracao || esgotada) {
    return <ContatoDireto expedicao={expedicao} />;
  }

  return (
    <FormularioWhatsApp
      key={`${expedicao.slug}-${tipo}-${expedicao.status}`}
      expedicao={expedicao}
      configuracao={configuracao}
      espera={espera}
    />
  );
}
