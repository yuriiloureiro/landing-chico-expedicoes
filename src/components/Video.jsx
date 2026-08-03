import { useState } from "react";
import "./Video.css";

const VIDEO_ID = "8wPcimhfuOU";
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export default function Video() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="video-section" id="video">
      <div className="container video-inner">
        <div className="section-header">
          <p className="eyebrow">Antes de decidir, conheça o Chico</p>
          <h2 className="section-title">
            Assista e sinta como é viajar com ele
          </h2>
        </div>
        <div className="video-frame">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
              title="Apresentação do Chico Castilho"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="video-cover"
              onClick={() => setPlaying(true)}
              aria-label="Assistir ao vídeo do Chico"
              style={{ backgroundImage: `url(${THUMBNAIL})` }}
            >
              <span className="video-play-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
