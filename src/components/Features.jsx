import { motion } from "framer-motion";

export default function Features({
  language,
}) {
  const features =
    language === "fi"
      ? [
          {
            title: "Muotoiltavat kaaviot",
            text:
              "Rakenna kavennuksia, lisäyksiä ja no-stitch-alueita sisältäviä kaavioita selkeästi myös silloin, kun neuleen muoto muuttuu.",
          },

          {
            title: "Smart Numbering",
            text:
              "Seuraa kerroksia ja silmukkamääriä numeroinnilla, joka huomioi lisäykset, kavennukset ja no-stitch-alueet.",
          },

          {
            title: "Master Repeat",
            text:
              "Rakenna toistuvia kuvioita yhdestä master-kuviosta ja päivitä siihen perustuvia toistoja nopeasti.",
          },

          {
            title: "Sujuva suunnittelutyötila",
            text:
              "Pidä symbolit, värit, paletit, projektit ja työkalut samassa selainpohjaisessa työtilassa.",
          },
        ]
      : [
          {
            title: "Shaped charts",
            text:
              "Build charts with increases, decreases and no-stitch areas while keeping changing garment shapes clear.",
          },

          {
            title: "Smart Numbering",
            text:
              "Follow rows and stitch counts with numbering that understands increases, decreases and no-stitch areas.",
          },

          {
            title: "Master Repeat",
            text:
              "Build repeating motifs from one master pattern and update linked repeats more efficiently.",
          },

          {
            title: "A smoother design workspace",
            text:
              "Keep symbols, colors, palettes, projects and design tools together in one browser-based workspace.",
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
  ? "Suunnittele, kokeile ja viimeistele"
  : "Design, preview and refine in one workspace."}
          </h2>

          <p>
            {language === "fi"
              ? "Työkalut on rakennettu helpottamaan oikeita neulesuunnittelun tilanteita – ei vain ruutujen täyttämistä."
              : "Tools designed around real knitting design workflows — not just filling cells in a grid."}
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