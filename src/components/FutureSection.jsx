import { motion } from "framer-motion";

export default function FutureSection({
  language,
}) {
  const available =
    language === "fi"
      ? [
          {
            title: "Smart Reader -pohja",
            text:
              "Rakennettu tukemaan selkeämpää kaavioiden lukemista ja keskittyneempää työskentelyä.",
          },

          {
            title: "Smart Numbering",
            text:
              "Numerointi ymmärtää kavennukset ja no-stitch-alueet.",
          },

          {
            title: "Omat värikartat",
            text:
              "Luo ja tallenna omia lanka- ja värikarttoja eri projekteihin.",
          },

          {
            title: "Master Repeat",
            text:
              "Rakenna toistuvia kuvioita nopeammin ja päivitä toistot yhdestä master-kuviosta.",
          },
        ]
      : [
          {
            title: "Smart Reader foundations",
            text:
              "Built to support cleaner chart reading and focused workflows.",
          },

          {
            title: "Smart Numbering",
            text:
              "Numbering that understands shaping and no-stitch areas.",
          },

          {
            title: "Custom color palettes",
            text:
              "Create and save your own yarn and color palettes for different projects.",
          },

          {
            title: "Master Repeat",
            text:
              "Build repeating motifs faster and update repeated sections from one master pattern.",
          },
        ];

  const upcoming =
    language === "fi"
      ? [
          {
            title: "Pilvipohjainen työtila",
            text:
              "Projektit mukana missä tahansa.",
          },

          {
            title:
              "Yhteistyö testineulojien kanssa",
            text:
              "Jaa kaavioita ja kerää palautetta helpommin.",
          },

          {
            title: "Yhdistetyt työnkulut",
            text:
              "Rakennettu moderniin neulesuunnitteluprosessiin.",
          },
        ]
      : [
          {
            title: "Cloud workspace",
            text:
              "Access your projects anywhere.",
          },

          {
            title: "Tester collaboration",
            text:
              "Share charts and collect feedback more easily.",
          },

          {
            title: "Connected workflows",
            text:
              "Built for modern pattern design workflows.",
          },
        ];

  return (
    <section className="future-section">
      <div className="future-container">
        <motion.div
          className="future-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            {language === "fi"
              ? "Rakennettu oikeisiin työnkulkuihin"
              : "Built for real workflows"}
          </span>

          <h2>
            {language === "fi"
              ? "Moderni työtila neulesuunnitteluun."
              : "Built for the way designers actually work."}
          </h2>

          <p>
            {language === "fi"
              ? "Studio Rowflow kehittyy moderniksi työtilaksi neulesuunnitteluun — älykkäämpään kaavioiden suunnitteluun, sujuvampaan työskentelyyn ja helpompaan yhteistyöhön."
              : "Studio Rowflow is evolving into a modern workspace for knitting pattern design — built around real workflows, smarter chart designing and smoother collaboration."}
          </p>
        </motion.div>

        <div className="future-columns">
          <div className="future-column">
            <div className="future-status available">
              ✓
              {language === "fi"
                ? " Saatavilla nyt"
                : " Available now"}
            </div>

            <div className="future-grid">
              {available.map((item) => (
                <div
                  key={item.title}
                  className="future-card"
                >
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="future-column">
            <div className="future-status upcoming">
              ◌
              {language === "fi"
                ? " Kehitteillä"
                : " In development"}
            </div>

            <div className="future-grid">
              {upcoming.map((item) => (
                <div
                  key={item.title}
                  className="future-card"
                >
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}