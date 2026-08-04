import "./styles/global.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Historia from "./components/Historia";
import Experiencia from "./components/Experiencia";
import Expedicoes from "./components/Expedicoes";
import Galeria from "./components/Galeria";
import Depoimentos from "./components/Depoimentos";
import Numeros from "./components/Numeros";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Historia />
      <Experiencia />
      <Expedicoes />
      <Galeria />
      <Depoimentos />
      <Numeros />
      <FAQ />
      <CTAFinal />
      <Footer />
    </div>
  );
}
