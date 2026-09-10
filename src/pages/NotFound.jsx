import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import "./NotFound.css";

export default function NotFound() {
  useSEO({ title: "Página não encontrada" });
  return (
    <section className="notfound">
      <div className="container">
        <p className="eyebrow">Erro 404</p>
        <h1 className="section-title">Essa página não está no roteiro.</h1>
        <p>O link pode ter mudado ou a expedição já fechou.</p>
        <Link to="/#expedicoes" className="btn-primary">
          Ver as expedições
        </Link>
      </div>
    </section>
  );
}
