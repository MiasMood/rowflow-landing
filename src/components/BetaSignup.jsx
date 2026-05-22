import { motion } from "framer-motion";

export default function BetaSignup({ language }) {
  return (
    <section className="beta-section">
      <motion.div
        className="beta-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="section-label">Beta access</span>

        <h2>
          {language === "fi"
            ? "Liity ensimmäisten käyttäjien joukkoon."
            : "Join the first group of users."}
        </h2>

        <p>
          {language === "fi"
            ? "Saat kehityspäivityksiä, ennakkopääsyn beta-versioon ja mahdollisuuden vaikuttaa Studio Rowflow’n kehitykseen."
            : "Get development updates, early beta access and help shape the future of Studio Rowflow."}
        </p>

        <div className="beta-embed">
          <iframe
            width="540"
            height="305"
            src="https://895010ca.sibforms.com/serve/MUIFAK2yatVs9D6xICKvkaWi0Lq5glBicmKuRNUtPMXlXOQlFF21JOGuB4Ogw4k48vIJqz-FMv0A9OGy5WWcsvnkcDQxfZlnc2InY6RtWJdqYZKYYMSKZdajGMri8udq9lqaIJiDCV4aHlrKuhXFgRRfqkwTS8bdLu0bc6bZpZGBOY4wIPjpa6n4UaFGT3OapQHHLodyqM34mTmXhA=="
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "100%",
              border: "none",
            }}
          />
        </div>

        <div className="beta-note">
          {language === "fi"
            ? "Ei spämmäystä. Vain tärkeimmät päivitykset."
            : "No spam. Only important updates."}
        </div>
      </motion.div>
    </section>
  );
}