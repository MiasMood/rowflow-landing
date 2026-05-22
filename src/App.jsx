import { useState } from "react";

import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import FutureSection from "./components/FutureSection.jsx";
import BetaSignup from "./components/BetaSignup.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [language, setLanguage] = useState("en");

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