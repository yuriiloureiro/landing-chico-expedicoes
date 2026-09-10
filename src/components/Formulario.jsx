import { useState } from "react";
import "./Formulario.css";

const KEY = import.meta.env.VITE_WEB3FORMS_KEY;

// Um formulário só, dois modos:
//   tipo="contato"  → "Quero saber mais"  (expedição aberta)
//   tipo="espera"   → lista de espera     (expedição em breve)
export default function Formulario({ expedicao, tipo = "contato" }) {
  const [estado, setEstado] = useState("idle"); // idle | enviando | ok | erro
  const espera = tipo === "espera";

  async function enviar(e) {
    e.preventDefault();
    if (!KEY) {
      setEstado("erro");
      return;
    }
    setEstado("enviando");
    const dados = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: KEY,
          subject: `${espera ? "Lista de espera" : "Contato"}: ${expedicao.nome} ${expedicao.ano}`,
          from_name: "Site Tô Por Aí no Mundo",
          expedicao: `${expedicao.nome} ${expedicao.ano}`,
          tipo: espera ? "lista de espera" : "contato",
          ...dados,
        }),
      });
      const json = await r.json();
      setEstado(json.success ? "ok" : "erro");
    } catch {
      setEstado("erro");
    }
  }

  if (estado === "ok") {
    return (
      <div className="form-ok" role="status">
        <strong>{espera ? "Você está na lista." : "Mensagem enviada."}</strong>
        <p>
          {espera
            ? "Assim que a expedição abrir, o Chico avisa você primeiro."
            : "O Chico vai te chamar pra marcar uma conversa rápida."}
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={enviar}>
      <input type="checkbox" name="botcheck" className="form-honeypot" tabIndex="-1" autoComplete="off" />

      <label className="form-field">
        <span>Seu nome</span>
        <input name="nome" type="text" required autoComplete="name" />
      </label>

      <div className="form-row">
        <label className="form-field">
          <span>WhatsApp</span>
          <input name="whatsapp" type="tel" required autoComplete="tel" placeholder="(DDD) 9 0000-0000" />
        </label>
        <label className="form-field">
          <span>E-mail</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      {!espera && (
        <label className="form-field">
          <span>O que você quer saber? (opcional)</span>
          <textarea name="mensagem" rows="3" />
        </label>
      )}

      <button type="submit" className="btn-primary form-btn" disabled={estado === "enviando"}>
        {estado === "enviando"
          ? "Enviando…"
          : espera
            ? "Entrar na lista de espera"
            : "Quero que o Chico me chame"}
      </button>

      {estado === "erro" && (
        <p className="form-erro" role="alert">
          Não foi possível enviar agora. Tente de novo ou chame o Chico direto no WhatsApp.
        </p>
      )}
    </form>
  );
}
