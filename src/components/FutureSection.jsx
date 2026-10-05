import { motion } from "framer-motion";

export default function FutureSection({
  language,
}) {
  const available =
    language === "fi"
      ? [
          {
            title: "Live Knit Preview",
            text:
              "Näe kaaviosi neulepintana jo suunnitteluvaiheessa ja toista kuviota vaaka- ja pystysuunnassa.",
          },

          {
            title: "Smart Numbering",
            text:
              "Numerointi huomioi kavennukset, lisäykset ja no-stitch-alueet sekä laskee silmukkamäärät kerroksittain.",
          },

          {
            title: "No-stitch-alueet",
            text:
              "Poista ruudukkoa helposti halutuilta alueilta ja rakenna kaavio selkeästi tarpeen mukaan.",
          },

          {
            title: "Master Repeat",
            text:
              "Rakenna toistuvia kuvioita nopeammin ja päivitä toistot yhdestä master-kuviosta.",
          },

          {
            title: "Smart Reader",
            text:
              "Korosta yksi kerros kerrallaan ja keskity kaavion lukemiseen ilman ylimääräistä hälyä.",
          },

          {
            title: "Pilvitallennus",
            text:
              "Tallenna projektit käyttäjäkohtaisesti ja jatka työskentelyä myöhemmin samalta tililtä.",
          },
        ]
      : [
          {
            title: "Live Knit Preview",
            text:
              "See your chart as a knitted surface and repeat the pattern horizontally and vertically while you design.",
          },

          {
            title: "Smart Numbering",
            text:
              "Numbering understands decreases, increases and no-stitch areas and calculates stitch counts row by row.",
          },

          {
            title: "No-stitch areas",
            text:
              "Remove grid areas easily where needed and keep your chart structure clear.",
          },

          {
            title: "Master Repeat",
            text:
              "Build repeating motifs faster and update repeated sections from one master pattern.",
          },

          {
            title: "Smart Reader",
            text:
              "Highlight one row at a time and stay focused while reading your chart.",
          },

          {
            title: "Cloud saving",
            text:
              "Save projects to your account and continue working later from the same workspace.",
          },
        ];

  const upcoming =
    language === "fi"
      ? [
          {
            title: "Testineulojien palaute",
            text:
              "Kehitystä jatketaan yhdessä testineulojien kanssa, jotta editori vastaa mahdollisimman hyvin oikeisiin käyttötarpeisiin.",
          },

          {
            title: "Ohjeen taitto",
            text:
              "Tavoitteena on yhdistää kaaviot, selitteet, tekstit ja muu ohjesisältö myöhemmin samaan selkeään taittotyökaluun.",
          },

          {
            title: "Englanninkielinen editori",
            text:
              "Studio Rowflow kehitetään ensin suomeksi. Englanninkielinen editori ja käyttöliittymä ovat tulossa myöhemmin.",
          },

          {
            title: "Julkinen demo",
            text:
              "Rajattu selainversio, jossa Studio Rowflow’ta voi kokeilla ilman käyttäjätiliä.",
          },
        ]
      : [
          {
            title: "Tester feedback",
            text:
              "Development will continue together with test knitters so the editor can better support real-world workflows.",
          },

          {
            title: "Pattern layout",
            text:
              "The long-term goal is to bring charts, legends, text and other pattern content into one clear layout workflow.",
          },

          {
            title: "English editor",
            text:
              "Studio Rowflow is currently being developed in Finnish. A full English editor and interface will follow.",
          },

          {
            title: "Public demo",
            text:
              "A limited browser-based version for trying Studio Rowflow without creating an account.",
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
              ? "Työkalut suunnittelun tueksi"
              : "Tools built for design"}
          </span>

          <h2>
            {language === "fi"
              ? "Suunnittele, tarkista ja viimeistele samassa työtilassa."
              : "Design, preview and refine in one workspace."}
          </h2>

          <p>
            {language === "fi"
              ? "Studio Rowflow yhdistää kaavion rakentamisen, toistot, numeroinnin ja esikatselun yhdeksi sujuvaksi työnkuluksi."
              : "Studio Rowflow brings chart building, repeats, numbering and visual preview into one focused workflow."}
          </p>

          <p className="future-device-note">
            {language === "fi"
              ? "Studio Rowflow on suunniteltu ensisijaisesti tietokoneelle ja tabletille, jotta kaikki työkalut, kaavionäkymät ja esikatselut pääsevät kunnolla oikeuksiinsa."
              : "Studio Rowflow is designed primarily for desktop and tablet use, so its tools, chart views and previews have enough space to work at their best."}
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