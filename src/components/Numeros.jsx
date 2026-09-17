import { Fragment, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import "./Numeros.css";

const numeros = [
  { numero: 25, sufixo: " mil+", label: "pessoas acompanhando cada expedição" },
  { numero: 5, sufixo: "+", label: "anos vivendo como nômade pelo mundo" },
  { numero: 50, sufixo: "+", label: "roteiros internacionais criados" },
];

function NumeroAnimado({ numero, sufixo }) {
  const ref = useRef(null);
  const emVista = useInView(ref, { once: true, amount: 0.6 });
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!emVista) return;
    const duracao = 1400;
    const inicio = performance.now();

    function passo(agora) {
      const progresso = Math.min((agora - inicio) / duracao, 1);
      const facilitado = 1 - Math.pow(1 - progresso, 3);
      setValor(Math.round(facilitado * numero));
      if (progresso < 1) requestAnimationFrame(passo);
    }

    requestAnimationFrame(passo);
  }, [emVista, numero]);

  return (
    <span className="numero-valor" ref={ref}>
      {valor}
      {sufixo}
    </span>
  );
}

export default function Numeros() {
  return (
    <section className="numeros">
      <div className="container numeros-grid">
        {numeros.map((n, i) => (
          <Fragment key={n.label}>
            {i > 0 && <div className="numero-divisor" aria-hidden="true" />}
            <div className="numero-item">
              <NumeroAnimado numero={n.numero} sufixo={n.sufixo} />
              <span className="numero-label">{n.label}</span>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
