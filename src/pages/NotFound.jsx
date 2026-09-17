import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">Ops</p>
      <h1 className="section-title">Essa página não existe</h1>
      <p>A expedição ou o endereço que você procurou não foi encontrado.</p>
      <Link to="/" className="btn-primary">
        Voltar para o início
      </Link>
    </section>
  );
}
