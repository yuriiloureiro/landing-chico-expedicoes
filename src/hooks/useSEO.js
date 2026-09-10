import { useEffect } from "react";

const SITE = "Tô Por Aí no Mundo";

function setMeta(selector, attr, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, value] = attr;
    el.setAttribute(key, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Atualiza título, description e Open Graph de cada página.
export default function useSEO({ title, description, image, url }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE}` : SITE;
    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', ["name", "description"], description);
      setMeta('meta[property="og:description"]', ["property", "og:description"], description);
    }
    setMeta('meta[property="og:title"]', ["property", "og:title"], fullTitle);
    if (image) setMeta('meta[property="og:image"]', ["property", "og:image"], image);
    if (url) setMeta('meta[property="og:url"]', ["property", "og:url"], url);
  }, [title, description, image, url]);
}
