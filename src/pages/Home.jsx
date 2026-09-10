import useSEO from "../hooks/useSEO";
import Hero from "../components/Hero";
import Historia from "../components/Historia";
import Expedicoes from "../components/Expedicoes";
import Experiencia from "../components/Experiencia";
import Galeria from "../components/Galeria";
import Depoimentos from "../components/Depoimentos";
import Numeros from "../components/Numeros";
import FAQ from "../components/FAQ";
import CTAFinal from "../components/CTAFinal";

export default function Home() {
  useSEO({
    title: "Expedições guiadas pelo Chico Castilho",
    description:
      "Expedições em grupo pela Tailândia, Lençóis Maranhenses e outros destinos, guiadas de perto pelo Chico Castilho. Veja as próximas datas e fale com ele.",
    url: window.location.origin + "/",
  });

  return (
    <>
      <Hero />
      <Expedicoes />
      <Historia />
      <Experiencia />
      <Galeria />
      <Depoimentos />
      <Numeros />
      <FAQ />
      <CTAFinal />
    </>
  );
}
