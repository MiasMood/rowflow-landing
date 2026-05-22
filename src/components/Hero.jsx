import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import editorPreview from "../assets/editor-preview.png";
import { translations } from "../locales/translations";

export default function Hero({
  language,
  setLanguage,
}) {
    const t = translations[language];
  return (
    <section className="hero-section">
      <div className="hero-background-glow"></div>

      <div className="hero-content">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={logo} alt="Studio Rowflow" className="hero-logo" />

<div className="language-switch">
  <button
    className={language === "fi" ? "active-language" : ""}
    onClick={() => setLanguage("fi")}
  >
    FI
  </button>

  <button
    className={language === "en" ? "active-language" : ""}
    onClick={() => setLanguage("en")}
  >
    EN
  </button>
</div>

          <div className="hero-badge">
            {t.badge}
          </div>

          <h1>
            {t.heading
  .split("\n")
  .map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
          </h1>

          <p className="hero-description">
            {t.description}
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              {t.primaryButton}
            </button>

            <div className="social-links">
 <a href="https://www.tiktok.com/@studio.rowflow" target="_blank" rel="noreferrer">
  TikTok
</a>

<a href="https://www.instagram.com/studio_rowflow" target="_blank" rel="noreferrer">
  Instagram
</a>

  <a href="#">
    Instagram
  </a>
</div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="editor-preview">
            <div className="editor-topbar">
              <div className="editor-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="editor-title">
                Studio Rowflow
              </div>
            </div>

            <img
  src={editorPreview}
  alt="Studio Rowflow editor preview"
  className="editor-image"
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}