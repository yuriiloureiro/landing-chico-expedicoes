import { useEffect } from "react";
import "./styles/global.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ComoFunciona from "./components/ComoFunciona";
import Expedicoes from "./components/Expedicoes";
import SemPreocupacao from "./components/SemPreocupacao";
import Historia from "./components/Historia";
import Experiencia from "./components/Experiencia";
import Galeria from "./components/Galeria";
import Depoimentos from "./components/Depoimentos";
import Numeros from "./components/Numeros";
import FAQ from "./components/FAQ";
import ContatoFinal from "./components/ContatoFinal";
import RedesSociais from "./components/RedesSociais";
import Footer from "./components/Footer";
import ExpedicaoPage from "./pages/ExpedicaoPage";
import NotFound from "./pages/NotFound";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, [hash]);

  return (
    <>
      <Hero />
      <ComoFunciona />
      <Expedicoes />
      <SemPreocupacao />
      <Historia />
      <Experiencia />
      <Galeria />
      <Depoimentos />
      <Numeros />
      <FAQ />
      <ContatoFinal />
      <RedesSociais />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expedicoes/:slug" element={<ExpedicaoPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
