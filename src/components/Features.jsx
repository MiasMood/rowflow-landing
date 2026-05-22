import { motion } from "framer-motion";

export default function Features({
  language,
}) {
  const features =
    language === "fi"
      ? [
          {
            title: "No-stitch-alueet",
            text:
              "Poista ruudukkoa helposti halutuilta alueilta ja maalaa taustaa tarpeen mukaan.",
          },

          {
            title: "Smart Numbering",
            text:
              "Numerointi ymmärtää no-stitch-alueet ja laskee silmukat kerroksittain kavennukset ja lisäykset huomioiden.",
          },

          {
            title: "Värikartat",
            text:
              "Luo ja tallenna omia värikarttoja, jotta suosikkivärit ja projektikohtaiset paletit pysyvät tallessa.",
          },

          {
            title: "Master Repeat",
            text:
              "Rakenna toistuvia kuvioita nopeammin ja päivitä sama kuvio useaan kohtaan yhdestä paikasta.",
          },
        ]
      : [
          {
            title: "No-stitch areas",
            text:
              "Remove grid areas easily where needed and add background color when you want a cleaner chart shape.",
          },

          {
            title: "Smart Numbering",
            text:
              "Numbering understands no-stitch areas and calculates stitch counts row by row, including decreases and increases.",
          },

          {
            title: "Color palettes",
            text:
              "Create and save your own color palettes so favorite shades and project palettes stay organized.",
          },

          {
            title: "Master Repeat",
            text:
              "Build repeating motifs faster and update repeated sections from one master pattern.",
          },
        ];

  return (
    <section className="features-section">
      <div className="features-container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            {language === "fi"
              ? "Miksi Studio Rowflow?"
              : "Why Studio Rowflow?"}
          </span>

          <h2>
            {language === "fi"
              ? "Moderni työtila neulesuunnitteluun."
              : "A modern workspace for knitting chart design."}
          </h2>

          <p>
            {language === "fi"
              ? "Rakennettu nopeampaan, selkeämpään ja miellyttävämpään työskentelyyn."
              : "Built for faster, cleaner and more enjoyable workflows."}
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="feature-glow"></div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}