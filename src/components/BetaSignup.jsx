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

      <form
  className="beta-form"
  method="POST"
  action="https://895010ca.sibforms.com/serve/MUIFAK2yatVs9D6xICKvkaWi0Lq5glBicmKuRNUtPMXlXOQlFF21JOGuB4Ogw4k48vIJqz-FMv0A9OGy5WWcsvnkcDQxfZlnc2InY6RtWJdqYZKYYMSKZdajGMri8udq9lqaIJiDCV4aHlrKuhXFgRRfqkwTS8bdLu0bc6bZpZGBOY4wIPjpa6n4UaFGT3OapQHHLodyqM34mTmXhA=="
  target="_blank"
>
  <input
    type="email"
    name="EMAIL"
    required
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

  <input
    type="text"
    name="email_address_check"
    value=""
    className="input--hidden"
    readOnly
  />

  <input
    type="hidden"
    name="locale"
    value={language === "fi" ? "fi" : "en"}
  />
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