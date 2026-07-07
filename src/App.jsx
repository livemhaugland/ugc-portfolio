import React, { useEffect } from "react";
import heroPortrait from "./assets/hero-portrait.png";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import about from "./assets/about.png";
import wellness1 from "./assets/Wellness1.mp4";
import fashion2 from "./assets/Fashion2.mp4";
import kookaiDress from "./assets/Kookai dress.mp4";
import beauty1 from "./assets/Beauty1.mp4";
import beauty2 from "./assets/Beauty2.mp4";
import fashion3 from "./assets/Fashion3.mp4";
import beauty4 from "./assets/Beauty4.mp4";
import hotel11 from "./assets/Hotel11.png";
import hotel12 from "./assets/Hotel12.png";
import hotel13 from "./assets/Hotel13.png";
import hotel14 from "./assets/Hotel14.png";
import hotel15 from "./assets/Hotel15.png";
import hotel16 from "./assets/Hotel16.png";
import hotel17 from "./assets/Hotel17.png";
import hotel18 from "./assets/Hotel18.png";
import hotel19 from "./assets/Hotel19.png";
import hotel21 from "./assets/Hotel21.png";
import hotel22 from "./assets/Hotel22.png";
import hotel23 from "./assets/Hotel23.png";
import hotel24 from "./assets/Hotel24.png";
import hotel25 from "./assets/Hotel25.png";
import hotel26 from "./assets/Hotel26.png";
import hotel27 from "./assets/Hotel27.png";
import hotel28 from "./assets/Hotel28.png";
import hotel2 from "./assets/Hotel2.mp4";


const categories = [
  { id: "fashion", title: "Fashion", desc: "Elevated styling" },
  { id: "beauty", title: "Beauty", desc: "Skin health, routines & soft glam" },
  { id: "wellness", title: "Wellness & Lifestyle", desc: "Mindful living" },
];

const hotels = [
  { title: "Casona de Las Flores, Ondara, Spain", photos: [hotel11, hotel12, hotel13, hotel14, hotel15, hotel16, hotel17, hotel18, hotel19] },
  { title: "Helios Hotel, Almunecar, Spain", video: hotel2,photos: ["", hotel21, hotel22, hotel23, hotel24, hotel25, hotel26, hotel27, hotel28] },
  { title: "Hotel 3", photos: ["", "", "", "", "", "", "", "", ""] },
];

// Lim inn URL-ene til innleggene du vil vise (kopiert fra instagram.com)
const instagramPosts = [
  "https://www.instagram.com/p/DX2Rlisij2f/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

function InstagramEmbed({ url }) {
  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ background: "#FFF", border: 0, borderRadius: "3px", margin: 0, maxWidth: "360px", minWidth: "326px", width: "100%" }}
    />
  );
}

function InstagramFeed({ posts }) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [posts]);

  return (
    <div style={{ display: "flex", gap: "1.5rem", overflowX: "auto", marginTop: "2rem", paddingBottom: "0.5rem" }}>
      {posts.map((url) => (
        <InstagramEmbed key={url} url={url} />
      ))}
    </div>
  );
}

const SLOTS = 8;

const videos = {
  fashion: [kookaiDress, fashion2, fashion3, "", "", "", "", ""],
  beauty: [beauty2, beauty4, beauty1, "", "", "", "", ""],
  wellness: [wellness1, "", "", "", "", "", "", ""],
};

function VideoRow({ category }) {
  const slots = Array.from({ length: SLOTS }, (_, i) => i);

  return (
    <div style={{ display: "flex", gap: "12px", overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", paddingBottom: "4px" }}>
      {slots.map((i) => (
        <div key={i} style={{ flex: "0 0 calc(25% - 9px)", minWidth: "calc(25% - 9px)", scrollSnapAlign: "start" }}>
          <div style={{ aspectRatio: "9/16", background: "#f7f6f4", overflow: "hidden" }}>
            {videos[category.id][i] ? (
              <video
                src={videos[category.id][i]}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                autoPlay
                muted
                loop
                playsInline
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

function HotelRow({ hotel }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 300, letterSpacing: "0.01em", marginBottom: "1rem" }}>
        {hotel.title}
      </h4>
      <div className="hotel-grid" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "10px" }}>
        {hotel.photos.map((photo, i) => {
          const isBig = i === 0;
          return (
            <div
              key={i}
              className="hotel-photo"
              style={{
                gridColumn: isBig ? "span 2" : "span 1",
                gridRow: isBig ? "span 2" : "span 1",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                background: "#f7f6f4",
              }}
            >
              {isBig && hotel.video ? (
                <video
                  src={hotel.video}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : photo ? (
                <img src={photo} alt={hotel.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", border: "0.5px solid #aaa", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontSize: "20px", lineHeight: 1 }}>+</div>
                  <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#888" }}>Add photo</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 2h-3v13.2a2.9 2.9 0 1 1-2.1-2.79V9.3a6 6 0 1 0 5.1 5.93V8.2a7.5 7.5 0 0 0 4.5 1.5V6.6a4.5 4.5 0 0 1-4.5-4.5z" />
    </svg>
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
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding: 3rem 1.25rem 2rem !important;
          }
          .hero-inner > div {
            text-align: center !important;
          }
          .hero-inner img {
            max-width: 280px !important;
            margin: 0 auto !important;
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
        <div className="hero-inner" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "4rem", alignItems: "start", padding: "5rem 2rem 3rem", maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "2rem" }}>
              UGC Content Creator
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "0.01em" }}>
              Live Marie Haugland
            </h1>
            <p style={{ marginTop: "2rem", fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "420px" }}>
              Norwegian creator. My content sits at the intersection of beauty, fashion, lifestyle and travel — always authentic, always intentional.
              Alongside creating, I'm studying Business Administration, which means I think about brand strategy and audience connection as seriously as I think about aesthetics. New ideas and creativity are what drive me forward.
            </p>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
              <a href="https://instagram.com/livemhaugland" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ color: "#111", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
              >
                <InstagramIcon />
              </a>
              <a href="https://tiktok.com/@livemhaugland" target="_blank" rel="noreferrer" aria-label="TikTok" style={{ color: "#111", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
          <img src={heroPortrait} alt="Live Marie Haugland" style={{ width: "100%", aspectRatio: "3 / 5", objectFit: "cover", objectPosition: "top" }} />
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
        
       {/* HOTELS & TRAVEL */}
        <div style={{ maxWidth: "1300px", margin: "0 auto 5rem" }}>
          <div className="category-head hotels-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "0.5px solid #f7f6f4" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300, letterSpacing: "0.02em" }}>Hotels &amp; Travel</h3>
            <img src={about} alt="Live Marie Haugland" style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover" }} />
          </div>
          {hotels.map((hotel) => (
            <HotelRow key={hotel.title} hotel={hotel} />
          ))}
        </div>
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
              I'm a creator with a genuine interest in inspiring people and connecting them with brands that resonate with them. I believe great content doesn't just look good — it creates a feeling. If you like my take on creation, please get in touch — I would love to hear from you. XX.
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