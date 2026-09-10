import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ao trocar de rota: sobe pro topo. Se houver #hash, rola até a seção.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // pequeno delay pra garantir que a página renderizou
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
