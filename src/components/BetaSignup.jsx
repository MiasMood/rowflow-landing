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
        <span className="section-label">
          {language === "fi"
            ? "Julkinen demo tulossa"
            : "Public demo coming soon"}
        </span>

        <h2>
          {language === "fi"
            ? "Tilaa ilmoitus, kun demo avautuu."
            : "Get notified when the demo launches."}
        </h2>

        <p>
          {language === "fi"
            ? "Saat sähköpostin, kun Studio Rowflow’n julkinen demo on kokeiltavissa. Beta-testaus järjestetään erikseen kutsusta valitulle testaajaryhmälle."
            : "Get an email when the public Studio Rowflow demo is ready to try. Beta testing will be handled separately with an invite-only tester group."}
        </p>

        <form
          id="waitlist"
          className="beta-form"
          method="POST"
          action={
            language === "fi"
              ? "https://895010ca.sibforms.com/serve/MUIFABTJtFeV4RDbGvnugza8yH0F-zDeR4jP54gAZDvWdnHut9fYMTzk9xhZqqqqxFBVdSQB5DYUJgNMH7A8gYSygtvANcdKps16mtAWeOrWBeMwc47_6yYZfM4oy90C9tOOxjhk92TejGxJMlTYsWvWnml34SHygm_gZv9oL158_b-HCtbVi6Vou5Ac8jJzRw_sf21YuTTf7GvtLg=="
              : "https://895010ca.sibforms.com/serve/MUIFAK2yatVs9D6xICKvkaWi0Lq5glBicmKuRNUtPMXlXOQlFF21JOGuB4Ogw4k48vIJqz-FMv0A9OGy5WWcsvnkcDQxfZlnc2InY6RtWJdqYZKYYMSKZdajGMri8udq9lqaIJiDCV4aHlrKuhXFgRRfqkwTS8bdLu0bc6bZpZGBOY4wIPjpa6n4UaFGT3OapQHHLodyqM34mTmXhA=="
          }
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

          <input
            type="hidden"
            name="LANGUAGE"
            value={language}
          />

          <button type="submit">
            {language === "fi"
              ? "Ilmoita, kun demo avautuu"
              : "Notify me when the demo launches"}
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