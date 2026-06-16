import React from "react";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import about from "./assets/about.png";

const categories = [
  { id: "beauty", title: "Beauty", desc: "Skin health, routines & soft glam" },
  { id: "fashion", title: "Fashion", desc: "Elevated styling" },
  { id: "wellness", title: "Wellness", desc: "Mindful living" },
  { id: "lifestyle", title: "Lifestyle", desc: "Everyday moments" },
];

const SLOTS = 8;

const vimeoVideos = {
  beauty: ["", "", "", "", "", "", "", ""],
  fashion: ["1201842774", "", "", "", "", "", "", ""],
  wellness: ["1201424640", "", "", "", "", "", "", ""],
  lifestyle: ["", "", "", "", "", "", "", ""],
};

function VideoRow({ category }) {
  const slots = Array.from({ length: SLOTS }, (_, i) => i);

  return (
    <div style={{ display: "flex", gap: "12px", overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", paddingBottom: "4px" }}>
      {slots.map((i) => (
        <div key={i} style={{ flex: "0 0 calc(25% - 9px)", minWidth: "calc(25% - 9px)", scrollSnapAlign: "start" }}>
          <div style={{ aspectRatio: "9/16", background: "#f7f6f4", overflow: "hidden" }}>
            {vimeoVideos[category.id][i] ? (
              <iframe
                src={`https://player.vimeo.com/video/${vimeoVideos[category.id][i]}?badge=0&byline=0&portrait=0&title=0&controls=0&autoplay=1&muted=1&loop=1`}
                style={{ width: "100%", height: "100%", border: "none" }}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", border: "0.5px solid #aaa", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontSize: "20px", lineHeight: 1 }}>+</div>
                <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#888" }}>Add video</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { display: none; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .header-inner {
            flex-direction: column;
            gap: 0.75rem;
            padding: 1rem 1.25rem !important;
          }
          .header-logo {
            font-size: 10px !important;
          }
          .header-nav {
            gap: 1.25rem !important;
          }
          .header-nav a {
            font-size: 10px !important;
          }
          .hero-section {
            padding-top: 90px !important;
          }
          .hero-inner {
            padding: 3rem 1.25rem 2rem !important;
          }
          .photo-grid {
            padding: 1.5rem 1.25rem 0 !important;
            gap: 6px !important;
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .video-card {
            flex: 0 0 calc(50% - 6px) !important;
            min-width: calc(50% - 6px) !important;
          }
          .portfolio-section {
            padding: 3rem 1.25rem !important;
          }
          .category-head {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
          }
          div[style*="calc(25% - 9px)"] {
            flex: 0 0 calc(50% - 6px) !important;
            min-width: calc(50% - 6px) !important;
          }
          .video-card {
            flex: 0 0 calc(50% - 6px) !important;
            min-width: calc(50% - 6px) !important;
          }
          .quote-band {
            padding: 3rem 1.25rem !important;
          }
          .about-section {
            padding: 3rem 1.25rem !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-img {
            max-width: 260px !important;
          }
          .footer-inner {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 3rem 1.25rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 0.5rem !important;
            padding: 3rem 1.25rem 0 !important;
          }
        }
      `}</style>

      {/* HEADER */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#fff", borderBottom: "0.5px solid #e8e6e2" }}>
        <div className="header-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 3rem" }}>
          <a href="#home" className="header-logo" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            UGC content creator
          </a>
          <nav className="header-nav" style={{ display: "flex", gap: "2.5rem" }}>
            {[["#home", "Home"], ["#portfolio", "Portfolio"], ["#about", "About"], ["mailto:livehau@gmail.com", "Contact"]].map(([href, label]) => (
              <a key={label} href={href} style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
              >{label}</a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero-section" style={{ paddingTop: "80px", background: "#f7f6f4" }}>
        <div className="hero-inner" style={{ textAlign: "center", padding: "5rem 2rem 3rem", maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "2rem" }}>
            UGC Content Creator
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "0.01em" }}>
            Live Marie Haugland
          </h1>
          <p style={{ marginTop: "2rem", fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "420px", marginLeft: "auto", marginRight: "auto" }}>
            Norwegian creator, currently living between Oslo and Barcelona. My content sits at the intersection of beauty, fashion, lifestyle and travel — always authentic, always intentional.
          </p>
          <a href="#portfolio" style={{ display: "inline-block", marginTop: "2.5rem", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", borderBottom: "0.5px solid #111", paddingBottom: "3px" }}>
            View work
          </a>
        </div>

        <div className="photo-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", padding: "2.5rem 2rem 0", maxWidth: "1300px", margin: "0 auto" }}>
          {[photo1, photo2, photo3, photo4].map((photo, i) => (
            <img key={i} src={photo} alt={`Photo ${i + 1}`} style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block" }} />
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio-section" style={{ padding: "6rem 3rem", background: "#fff" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>Selected work</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300 }}>Portfolio</h2>
        </div>

        {categories.map((cat) => (
          <div key={cat.id} style={{ maxWidth: "1300px", margin: "0 auto 5rem" }}>
            <div className="category-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "0.5px solid #f7f6f4" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300, letterSpacing: "0.02em" }}>{cat.title}</h3>
              <span style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>{cat.desc}</span>
            </div>
            <VideoRow category={cat} />
          </div>
        ))}
      </section>

      {/* QUOTE */}
      <div className="quote-band" style={{ background: "#f7f6f4", textAlign: "center", padding: "5rem 2rem" }}>
        <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.2, maxWidth: "700px", margin: "0 auto" }}>
          Content that connects brands<br />with real people.
        </blockquote>
      </div>

      {/* ABOUT */}
      <section id="about" className="about-section" style={{ background: "#fff", padding: "6rem 3rem" }}>
        <div className="about-grid" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "340px 1fr", gap: "5rem", alignItems: "center" }}>
          <img className="about-img" src={about} alt="About" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "2rem" }}>About me</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1, marginBottom: "2rem" }}>
              Creating with<br />intention.
            </h2>
            <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "440px", marginBottom: "1.2rem" }}>
              I'm a creator with a genuine interest in beauty, fashion, and lifestyle. I believe great content doesn't just look good — it creates a feeling.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "440px", marginBottom: "1.2rem" }}>
              Alongside creating, I'm studying Business Administration, which means I think about brand strategy and audience connection as seriously as I think about aesthetics. New ideas and creativity are what drive me forward.
            </p>
            <a href="mailto:livehau@gmail.com" style={{ display: "inline-block", marginTop: "1.5rem", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", borderBottom: "0.5px solid #111", paddingBottom: "3px" }}>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ background: "#f7f6f4" }}>
        <div className="footer-inner" style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem", padding: "5rem 3rem 0" }}>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>UGC Creator</p>
            <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#555", maxWidth: "240px" }}>Creating content that connects brands with real people.</p>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[["#home", "Home"], ["#portfolio", "Portfolio"], ["#about", "About"], ["mailto:livehau@gmail.com", "Contact"]].map(([href, label]) => (
                <a key={label} href={href} style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</a>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>Connect</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a href="https://instagram.com/livemhaugland" target="_blank" rel="noreferrer" style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Instagram</a>
              <a href="https://tiktok.com/@livemhaugland" target="_blank" rel="noreferrer" style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" }}>TikTok</a>
              <a href="mailto:livehau@gmail.com" style={{ fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ maxWidth: "1300px", margin: "0 auto", padding: "3rem 3rem 3rem", borderTop: "0.5px solid #e0ddd8", marginTop: "3rem", display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>© 2025 Live Marie Haugland</p>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>Oslo · Barcelona</p>
        </div>
      </footer>

    </div>
  );
}