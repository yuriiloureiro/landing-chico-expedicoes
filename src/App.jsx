import "./styles/global.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Expedicoes from "./components/Expedicoes";
import Historia from "./components/Historia";
import Experiencia from "./components/Experiencia";
import Galeria from "./components/Galeria";
import Depoimentos from "./components/Depoimentos";
import Numeros from "./components/Numeros";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import WhatsAppFlutuante from "./components/WhatsAppFlutuante";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Expedicoes />
      <Historia />
      <Experiencia />
      <Galeria />
      <Depoimentos />
      <Numeros />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFlutuante />
    </div>
  );
}
