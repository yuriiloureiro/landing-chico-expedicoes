import { motion } from "framer-motion";
import banner from "../assets/images/banner.webp";
import heroVideo from "../assets/hero-video.mp4";
import "./Hero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <video
        className="hero-bg"
        src={heroVideo}
        poster={banner}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <motion.span
          className="hero-badge"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          Você por aí no Mundo Viagens
        </motion.span>

        <motion.h1
          className="section-title hero-title"
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
        >
          Solte o que te prende.
          <br />O mundo está esperando.
        </motion.h1>

        <motion.div
          className="hero-actions"
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
        >
          <a className="btn-hero-pill" href="#expedicoes">
            Ver as próximas expedições
            <span className="btn-hero-pill-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
