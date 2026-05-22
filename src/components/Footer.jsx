export default function Footer({
  language,
}) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Studio Rowflow</h3>

          <p>
            {language === "fi"
              ? "Moderni neulekaavioeditori suunnittelijoille."
              : "A modern knitting chart editor for designers."}
          </p>
        </div>

        <div className="footer-links">
          <a href="https://www.tiktok.com/@studio.rowflow" target="_blank" rel="noreferrer">
  TikTok
</a>

<a href="https://www.instagram.com/studio_rowflow" target="_blank" rel="noreferrer">
  Instagram
</a>

        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Studio Rowflow
      </div>
    </footer>
  );
}