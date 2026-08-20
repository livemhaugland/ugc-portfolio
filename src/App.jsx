import React, { useEffect, useRef, useState } from "react";
import about from "./assets/about.png";
import fashion2 from "./assets/Fashion2.mp4";
import kookaiDress from "./assets/Kookaidress.mp4";
import beauty5 from "./assets/Beauty5.mp4";
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
import nakd1 from "./assets/NAKD1.mp4";
import nakd2 from "./assets/NAKD2.mp4";
import Mellelogo from "./assets/Mellelogo.png";
import NAKDlogo from "./assets/NAKDlogo.png";
import photo7 from "./assets/photo7.png";
import kookai from "./assets/Kookai.mp4";
import NAKDp1 from "./assets/NAKDp1.png";
import NAKDp2 from "./assets/NAKDp2.png";
import NAKDp3 from "./assets/NAKDp3.png";
import NAKDp5 from "./assets/NAKDp5.png";
import NAKDp6 from "./assets/NAKDp6.png";
import NAKDp7 from "./assets/NAKDp7.png";
import Melle from "./assets/Melle.png";
import Melle2 from "./assets/Melle2.png";
import Mellevid1 from "./assets/Mellevid1.mp4";
import Mellevid2 from "./assets/Mellevid2.mp4";
import kookaidressPoster from "./assets/Kookaidress-poster.jpg";
import nakd1Poster from "./assets/NAKD1-poster.jpg";
import fashion2Poster from "./assets/Fashion2-poster.jpg";
import nakd2Poster from "./assets/NAKD2-poster.jpg";
import fashion3Poster from "./assets/Fashion3-poster.jpg";
import beauty5Poster from "./assets/Beauty5-poster.jpg";
import beauty4Poster from "./assets/Beauty4-poster.jpg";
import mellevid2Poster from "./assets/Mellevid2-poster.jpg";
import hotel2Poster from "./assets/Hotel2-poster.jpg";
import mellevid1Poster from "./assets/Mellevid1-poster.jpg";
import NAKD21 from "./assets/NAKD21.png";
import NAKD22 from "./assets/NAKD22.png";
import NAKD23 from "./assets/NAKD23.png";
import NAKD24 from "./assets/NAKD24.png";
import NAKD25 from "./assets/NAKD25.png";
import NAKD26 from "./assets/NAKD26.png";







const categories = [
  { id: "fashion", title: "Fashion", desc: "Elevated styling" },
  { id: "beauty", title: "Beauty", desc: "Skin health, routines & soft glam" },
  { id: "wellness", title: "Wellness", desc: "Mindful living" },
];

const hotels = [
  { title: "Casona de Las Flores, Ondara, Spain", photos: [hotel11, hotel12, hotel13, hotel14, hotel15, hotel16, hotel17, hotel18, hotel19] },
  { title: "Helios Hotel, Almunecar, Spain", video: hotel2, videoPoster: hotel2Poster, photos: ["", hotel21, hotel22, hotel23, hotel24, hotel25, hotel26, hotel27, hotel28] },
];

// ── HERO VIDEO ──
// Vises i en mindre, innrammet boks på høyre side (ikke full høyde), spiller automatisk på repeat.
const heroVideo = kookaiDress;
const heroVideoPoster = kookaidressPoster;

// ── BRAND COLLABS ──
// Split-seksjoner (samme mønster som hero-seksjonen): tekst på én side, bilde/video-grid på den andre.
// "photos" kan utvides med flere bilder når som helst — gridet flyter automatisk (auto-flow).
const nakdCollab = {
  label: "Fashion Collaboration",
  title: "NA-KD",
  photos: [NAKDp1, NAKDp2, NAKDp3, NAKDp5, NAKDp6, NAKDp7, NAKD21, NAKD22, NAKD23, NAKD24, NAKD26, NAKD25],
  mediaSide: "left",
};

const melleCollab = {
  label: "Beauty Collaboration",
  title: "MELLE",
  photos: [Melle, Melle2, photo7],
  video: Mellevid1,
  videoPoster: mellevid1Poster,
  mediaSide: "left",
};

// ── BRANDS I'VE WORKED WITH ──
// Legg til flere merker etter hvert. "logo" kan være en importert logo-fil
// (samme måte som bildene over — legg filen i /assets og importer den øverst),
// eller la den stå tom ("") for en enkel tekst-basert plassholder.
const brands = [
  { name: "NA-KD", logo: NAKDlogo },
  { name: "Melle", logo: Mellelogo },
  { name: "", logo: "" },
  { name: "", logo: "" },
];

function BrandsSection({ brands }) {
  return (
    <section style={{ background: "#fff", padding: "4rem 3rem" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", textAlign: "center", marginBottom: "2.5rem" }}>
        Brands I've worked with
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "3.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        {brands.map((brand, i) =>
          brand.logo ? (
            <img
              key={i}
              src={brand.logo}
              alt={brand.name || `Brand ${i + 1}`}
              loading="lazy"
              decoding="async"
              style={{ height: "32px", width: "auto", objectFit: "contain", filter: "grayscale(100%)", opacity: 0.75 }}
            />
          ) : brand.name ? (
            <span
              key={i}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 400, letterSpacing: "0.03em", color: "#333" }}
            >
              {brand.name}
            </span>
          ) : (
            <div
              key={i}
              style={{
                width: "90px",
                height: "32px",
                border: "0.5px dashed #ccc",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#aaa",
              }}
            >
              Add logo
            </div>
          )
        )}
      </div>
    </section>
  );
}

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

/**
 * MasonryPhotoGrid
 * Uses CSS multi-column layout instead of CSS grid.
 * Each image keeps ITS OWN natural aspect ratio (no forced crop),
 * and the browser stacks them top-to-bottom within each column —
 * which is exactly what creates the asymmetric, Pinterest-style look.
 * Adding a wide/horizontal image later works automatically: it will
 * just take up less vertical space in its column than a tall one.
 */
function MasonryPhotoGrid({ photos, className }) {
  return (
    <div className={className} style={{ columnCount: 4, columnGap: "4px" }}>
      {photos.map((photo, i) => (
        <img
          key={i}
          src={photo}
          alt={`Photo ${i + 1}`}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            display: "block",
            marginBottom: "4px",
            breakInside: "avoid",
            WebkitColumnBreakInside: "avoid",
          }}
        />
      ))}
    </div>
  );
}

/**
 * AutoplayVideo — for the hero video.
 * Always visible on page load, so it just loads and plays immediately —
 * no IntersectionObserver needed (that was adding a small delay for no benefit here).
 * preload="none" is safe here despite autoplay: per spec, a muted autoplay
 * video still triggers its own load regardless of the preload hint, so
 * nothing extra downloads until the browser actually starts playback.
 * The poster covers the brief gap before that happens.
 */
function AutoplayVideo({ src, poster, style, className }) {
  return (
    <video
      src={src}
      poster={poster}
      preload="none"
      autoPlay
      muted
      loop
      playsInline
      className={className}
      style={style}
    />
  );
}

/**
 * ClickToPlayVideo — for every video EXCEPT the hero video.
 * Doesn't load anything until scrolled near view (network-friendly),
 * and shows a poster thumbnail behind the play-button overlay —
 * no playback, no sound, no bytes downloaded until the user actually
 * clicks it (preload="none").
 */
function ClickToPlayVideo({ src, poster, style }) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setIsInView(true)),
      { rootMargin: "200px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  return (
    <div ref={wrapperRef} style={{ position: "relative", width: "100%", height: "100%" }}>
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          preload="none"
          playsInline
          loop
          muted={!isPlaying}
          controls={isPlaying}
          onClick={() => !isPlaying && handlePlay()}
          style={{ ...style, cursor: isPlaying ? "default" : "pointer" }}
        />
      )}
      {!isPlaying && (
        <button
          onClick={handlePlay}
          aria-label="Play video"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.12)",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <span
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#111" style={{ marginLeft: "2px" }}>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

const SLOTS = 8;

const videos = {
  fashion: [kookaiDress, nakd1, fashion2, nakd2, fashion3, "", "", ""],
  beauty: [Mellevid2, beauty4, beauty5, "", "", "", "", ""],
  wellness: ["", "", "", "", "", "", "", ""],
};

// Poster-bilde (thumbnail) for hver video over — vises før play trykkes, samme rekkefølge som "videos".
const videoPosters = {
  fashion: [kookaidressPoster, nakd1Poster, fashion2Poster, nakd2Poster, fashion3Poster, "", "", ""],
  beauty: [mellevid2Poster, beauty4Poster, beauty5Poster, "", "", "", "", ""],
  wellness: ["", "", "", "", "", "", "", ""],
};

// Undertekst under hver video i portfolio-radene. Bytt ut med dine egne tekster.
const captions = {
  fashion: ["Kookai dress", "NA-KD collab", "Everyday styling", "NA-KD collab", "Fashion edit", "", "", ""],
  beauty: ["MELLE collab", "Product shots", "Product shots", "Get ready with me", "", "", "", ""],
  wellness: ["", "", "", "", "", "", "", ""],
};

function VideoRow({ category }) {
  const slots = Array.from({ length: SLOTS }, (_, i) => i);

  return (
    <div style={{ display: "flex", gap: "4px", overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", paddingBottom: "4px" }}>
      {slots.map((i) => (
        <div key={i} className="video-card" style={{ flex: "0 0 calc(25% - 9px)", minWidth: "calc(25% - 9px)", scrollSnapAlign: "start" }}>
          <div style={{ aspectRatio: "9/16", background: "#f7f6f4", overflow: "hidden" }}>
            {videos[category.id][i] ? (
              <ClickToPlayVideo
                src={videos[category.id][i]}
                poster={videoPosters[category.id][i]}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <div style={{ width: "32px", height: "32px", border: "0.5px solid #aaa", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontSize: "20px", lineHeight: 1 }}>+</div>
                <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#888" }}>Add video</span>
              </div>
            )}
          </div>
          {captions[category.id][i] ? (
            <p style={{ marginTop: "8px", fontSize: "12px", letterSpacing: "0.02em", color: "#555", textAlign: "center" }}>
              {captions[category.id][i]}
            </p>
          ) : null}
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
                <ClickToPlayVideo
                  src={hotel.video}
                  poster={hotel.videoPoster}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : photo ? (
                <img
                  src={photo}
                  alt={hotel.title}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
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

/**
 * BrandSplitSection
 * Same split layout as the hero section: a text column (label + brand
 * name) next to a media column. `mediaSide` controls which side the
 * media grid sits on — "right" (e.g. NA-KD) mirrors the hero's
 * text-left/media-right layout, "left" (e.g. MELLE) flips it.
 * The media grid is an auto-flow CSS grid (repeat(auto-fill, minmax(...)))
 * so `photos` can grow to any length without touching the layout —
 * cells just keep wrapping into new rows. If a `video` is passed, it's
 * shown as a large 2x2 ClickToPlayVideo cell (same play-button pattern
 * used everywhere else) among the photo cells.
 * Same large-image, minimal-gap treatment as the hero photo row.
 */
function BrandSplitSection({ label, title, photos, video, videoPoster, mediaSide }) {
  const textCol = (
    <div className="brand-text-col" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 4rem" }}>
      <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>
        {label}
      </p>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 3.6vw, 48px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "0.01em" }}>
        {title}
      </h3>
    </div>
  );

  const mediaCol = (
    <div className="brand-media-col" style={{ display: "flex", alignItems: "center" }}>
      <div className="brand-media-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gridAutoFlow: "dense", gap: "4px", width: "100%" }}>
        {video && (
          <div style={{ gridColumn: "span 2", gridRow: "span 2", aspectRatio: "3 / 4", overflow: "hidden", background: "#f7f6f4" }}>
            <ClickToPlayVideo src={video} poster={videoPoster} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}
        {photos.map((photo, i) => (
          <div key={i} style={{ aspectRatio: "3 / 4", overflow: "hidden", background: "#f7f6f4" }}>
            <img
              src={photo}
              alt={`${title} ${i + 1}`}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="brand-section" style={{ background: "#fff" }}>
      <div className="brand-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "420px" }}>
        {mediaSide === "left" ? (
          <>
            {mediaCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {mediaCol}
          </>
        )}
      </div>
    </section>
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
          .hero-split {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-text-col {
            padding: 2.5rem 1.25rem !important;
            text-align: center !important;
          }
          .hero-video-col {
            padding: 2rem 1.25rem !important;
            min-height: auto !important;
          }
          .brand-split {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .brand-text-col {
            padding: 2.5rem 1.25rem !important;
            text-align: center !important;
          }
          .brand-media-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .closing-photo-grid {
            column-count: 2 !important;
            column-gap: 6px !important;
            padding: 1.5rem 1.25rem 3rem !important;
          }
          .closing-photo-grid img {
            margin-bottom: 6px !important;
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

      {/* HERO — split 50/50: tekst venstre, mindre innrammet video høyre */}
      <section id="home" className="hero-section" style={{ paddingTop: "80px", background: "#f7f6f4" }}>
        <div className="hero-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "60vh" }}>
          <div className="hero-text-col" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "3rem 4rem", textAlign: "left" }}>
            <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "2rem" }}>
              UGC Content Creator
            </p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 72px)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "0.01em" }}>
              Live Marie Haugland
            </h1>
            <p style={{ marginTop: "2rem", fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "420px" }}>
              Norwegian creator, Instagram at heart. Photos, reels, stories — I know how to turn all three into a feed with a red thread and a feeling. My focus is fashion and beauty: the aesthetics, the details, the inspiration.
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

            {/* Tagline — bytt teksten under til hva du vil ha stå */}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(22px, 2.6vw, 34px)",
              lineHeight: 1.3,
              color: "#111",
              marginTop: "3.5rem",
              maxWidth: "380px",
            }}>
               Content that feels like home.<br />
            </p>
          </div>

          {/* Video-kolonne — mindre, innrammet video med bakgrunn rundt i stedet for full høyde */}
          <div className="hero-video-col" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", minHeight: "380px" }}>
            <div style={{ width: "100%", maxWidth: "460px", aspectRatio: "3 / 4", overflow: "hidden", background: "#e8e6e2" }}>
              <AutoplayVideo src={heroVideo} poster={heroVideoPoster} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <BrandsSection brands={brands} />

      {/* NAKD COLLAB */}
      <BrandSplitSection {...nakdCollab} />

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio-section" style={{ padding: "6rem 3rem 0", background: "#fff" }}>
        {categories.filter((cat) => cat.id === "fashion").map((cat) => (
          <div key={cat.id} style={{ maxWidth: "1300px", margin: "0 auto 5rem" }}>
            <div className="category-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "0.5px solid #f7f6f4" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300, letterSpacing: "0.02em" }}>{cat.title}</h3>
              <span style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>{cat.desc}</span>
            </div>
            <VideoRow category={cat} />
          </div>
        ))}
      </section>

      {/* MELLE COLLAB */}
      <BrandSplitSection {...melleCollab} />

      <section className="portfolio-section" style={{ padding: "5rem 3rem 6rem", background: "#fff" }}>
        {categories.filter((cat) => cat.id !== "fashion").map((cat) => (
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
          <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "640px", marginBottom: "2.5rem" }}>
            Content is often what tips the scale for me when choosing one hotel over another. I love capturing a stay from the guest's perspective — the small details, the light, the feeling of actually being there. That authenticity matters to me because it's exactly what I look for myself before booking somewhere.
          </p>
          {hotels.map((hotel) => (
            <HotelRow key={hotel.title} hotel={hotel} />
          ))}
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="about-section" style={{ background: "#fff", padding: "6rem 3rem 3rem" }}>
        <div className="about-grid" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "340px 1fr", gap: "5rem", alignItems: "center" }}>
          <img className="about-img" src={about} alt="About" loading="lazy" decoding="async" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
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