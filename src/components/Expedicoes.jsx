import lanterna from "../assets/images/chico-expedicao-tailandia.webp";
import ilhas from "../assets/images/banner2.webp";
import "./Expedicoes.css";

const WPP = "https://wa.me/5513982026838";

const datas = [
  {
    nome: "Festival das Lanternas 2026",
    periodo: "19 de novembro a 04 de dezembro",
    img: lanterna,
    msg: "Oi Chico! Quero saber mais sobre a expedição do Festival das Lanternas 2026.",
  },
  {
    nome: "Réveillon das Lanternas",
    periodo: "28 de dezembro a 12 de janeiro",
    img: ilhas,
    msg: "Oi Chico! Quero saber mais sobre a expedição do Réveillon das Lanternas.",
  },
];

export default function Expedicoes() {
  return (
    <section className="expedicoes" id="expedicoes">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Próximas expedições</p>
          <h2 className="section-title">Duas datas. Uma decisão.</h2>
        </div>
        <div className="expedicoes-grid">
          {datas.map((d) => (
            <div className="expedicao-card" key={d.nome}>
              <div className="expedicao-img-wrap">
                <img src={d.img} alt={d.nome} />
              </div>
              <div className="expedicao-info">
                <h3>{d.nome}</h3>
                <p className="expedicao-periodo">{d.periodo}</p>
                <a
                  className="btn-primary expedicao-btn"
                  href={`${WPP}?text=${encodeURIComponent(d.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero essa data
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="expedicoes-nota">VAGAS LIMITADAS</p>
      </div>
    </section>
  );
}
