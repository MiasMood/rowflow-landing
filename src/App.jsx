import { useEffect, useState } from "react";

import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import FutureSection from "./components/FutureSection.jsx";
import BetaSignup from "./components/BetaSignup.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const isFinnish = language === "fi";

    document.documentElement.lang = isFinnish ? "fi" : "en";

    document.title = isFinnish
      ? "Studio Rowflow – neulekaavioeditori ja neulekaavioiden suunnittelu"
      : "Studio Rowflow – Knitting Chart Editor & Chart Design Tool";

    const description = isFinnish
      ? "Suunnittele omia neulekaavioita selaimessa Smart Numberingin, toistojen, Live Knit Preview’n ja muiden helppokäyttöisten työkalujen avulla."
      : "Design your own knitting charts online with Smart Numbering, repeats, Live Knit Preview and tools built for an easier creative workflow.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);
  }, [language]);

  return (
    <>
      <Hero
        language={language}
        setLanguage={setLanguage}
      />

      <Features language={language} />

      <FutureSection language={language} />

      <BetaSignup language={language} />

      <Footer language={language} />
    </>
  );
}