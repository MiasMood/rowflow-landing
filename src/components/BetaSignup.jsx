import { motion } from "framer-motion";

export default function BetaSignup({
  language,
}) {
  return (
    <section className="beta-section">
      <motion.div
        className="beta-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="section-label">
          Beta access
        </span>

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

        <form className="beta-form">
          <input
            type="email"
            placeholder={
              language === "fi"
                ? "Sähköpostiosoite"
                : "Email address"
            }
          />

          <button type="submit">
            {language === "fi"
              ? "Liity beta-listalle"
              : "Join the beta"}
          </button>
        </form>

        <div className="beta-note">
          {language === "fi"
            ? "Ei spämmäystä. Vain tärkeimmät päivitykset."
            : "No spam. Only important updates."}
        </div>
      </motion.div>
    </section>
  );
}