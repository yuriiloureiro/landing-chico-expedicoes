import chico from "../assets/images/chico-perfil.webp";
import "./Historia.css";

export default function Historia() {
  return (
    <section className="historia" id="sobre">
      <div className="container historia-grid">
        <div className="historia-img-wrap">
          <img
            src={chico}
            alt="Chico em Maya Bay, na Tailândia"
            className="historia-img"
          />
          <span className="historia-signature">Chico Castilho</span>
        </div>
        <div className="historia-text">
          <p className="eyebrow historia-eyebrow">Quem te leva</p>
          <h2 className="section-title historia-title">
            Não é um roteiro pronto. É alguém que já viveu cada parte dele.
          </h2>
          <p>
            Chico largou a rotina de escritório pra viver como nômade digital e
            a Tailândia virou o país que ele mais retornou, mais estudou e mais
            amou. De lá pra cá já são mais de 100 roteiros criados, um Instagram
            com mais de 25 mil pessoas acompanhando cada expedição, e uma
            certeza: viagem boa não é sobre o destino, é sobre ter alguém de
            confiança guiando o caminho.
          </p>
          <p>
            Nas expedições, ele não fica só de longe organizando — ele está
            junto, todos os dias, resolvendo o que aparece e criando os momentos
            que não têm como planejar.
          </p>
        </div>
      </div>
    </section>
  );
}
