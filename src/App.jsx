import { useRef } from "react";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import about from "./assets/about.png";

const categories = [
  { id: "beauty", title: "Beauty", desc: "Skin health, routines & soft glam" },
  { id: "fashion", title: "Fashion", desc: "Elevated styling" },
  { id: "wellness", title: "Wellness", desc: "Mindful living & healthy habits" },
  { id: "lifestyle", title: "Lifestyle", desc: "Everyday moments, calm & authentic" },
];

const SLOTS = 8;

function VideoRow({ category }) {
  const slots = Array.from({ length: SLOTS }, (_, i) => i);
  const inputRefs = useRef([]);
  const slotRefs = useRef([]);

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const slot = slotRefs.current[index];
    slot.innerHTML = "";
    const video = document.createElement("video");
    video.src = url;
    video.controls = true;
    video.muted = true;
    video.loop = true;
    video.style.cssText = "width:100%;height:100%;object-fit:cover;";
    slot.appendChild(video);
    slot.onclick = null;
    slot.style.cursor = "default";
  };

  return (
    <div style={{ display: "flex", gap: "12px", overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", paddingBottom: "4px" }}>
      {slots.map((i) => (
        <div key={i} style={{ flex: "0 0 calc(25% - 9px)", minWidth: "calc(25% - 9px)", scrollSnapAlign: "start" }}>
          <div
            ref={(el) => (slotRefs.current[i] = el)}
            onClick={() => inputRefs.current[i]?.click()}
            title="Klikk for å laste opp video"
            style={{ aspectRatio: "4/5", background: "#e8e5e0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", cursor: "pointer", overflow: "hidden", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ddd9d3")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#e8e5e0")}
          >
            <div style={{ width: "32px", height: "32px", border: "0.5px solid #aaa", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#888", fontSize: "20px", lineHeight: 1 }}>+</div>
            <span style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#888" }}>Add video</span>
          </div>
          <input
            type="file"
            accept="video/*"
            style={{ display: "none" }}
            ref={(el) => (inputRefs.current[i] = el)}
            onChange={(e) => handleFileChange(e, i)}
          />
          <p style={{ marginTop: "10px", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#888" }}>
            {category.title} {i + 1}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Jost:wght@300;400&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { display: none; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
      `}</style>

      {/* HEADER */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 3rem", borderBottom: "0.5px solid #e8e6e2" }}>
        <a href="#home" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Live Marie Haugland
        </a>
        <nav style={{ display: "flex", gap: "2.5rem" }}>
          {[["#home", "Home"], ["#portfolio", "Portfolio"], ["#about", "About"], ["mailto:livehau@gmail.com", "Contact"]].map(([href, label]) => (
            <a key={label} href={href} style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
            >{label}</a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section id="home" style={{ paddingTop: "80px", background: "#f7f6f4" }}>
        <div style={{ textAlign: "center", padding: "5rem 2rem 3rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "2rem" }}>
            UGC Content Creator
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(52px, 8vw, 110px)", fontWeight: 300, lineHeight: 1.0, letterSpacing: "0.01em" }}>
            Authentic Content.<br />
            <em>Real Impact.</em>
          </h1>
          <p style={{ marginTop: "2rem", fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "420px", marginLeft: "auto", marginRight: "auto" }}>
            I'm a 23-year-old creator from Norway, currently living between Oslo and Barcelona.
            My work sits at the intersection of beauty, fashion, lifestyle, and travel —
            industries I follow closely and genuinely love.
          </p>
          <a href="#portfolio" style={{ display: "inline-block", marginTop: "2.5rem", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", borderBottom: "0.5px solid #111", paddingBottom: "3px" }}>
            View work
          </a>
        </div>

        {/* Photo grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", padding: "2.5rem 2rem 0" }}>
          {[photo1, photo2, photo3, photo4].map((photo, i) => (
            <img key={i} src={photo} alt={`Photo ${i + 1}`} style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block" }} />
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: "6rem 3rem", background: "#fff" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "1.5rem" }}>Selected work</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300 }}>Portfolio</h2>
        </div>

        {categories.map((cat) => (
          <div key={cat.id} style={{ maxWidth: "1300px", margin: "0 auto 5rem" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "0.5px solid #e0ddd8" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 300, letterSpacing: "0.02em" }}>{cat.title}</h3>
              <span style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>{cat.desc}</span>
            </div>
            <VideoRow category={cat} />
          </div>
        ))}
      </section>

      {/* QUOTE */}
      <div style={{ background: "#f7f6f4", textAlign: "center", padding: "5rem 2rem" }}>
        <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.2, maxWidth: "700px", margin: "0 auto" }}>
          Content that connects brands<br />with real people.
        </blockquote>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ background: "#fff", padding: "6rem 3rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "340px 1fr", gap: "5rem", alignItems: "center" }}>
          <img src={about} alt="About" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover" }} />
          <div>
            <p style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#888", marginBottom: "2rem" }}>About me</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 300, lineHeight: 1.1, marginBottom: "2rem" }}>
              Creating with<br />intention.
            </h2>
            <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "440px", marginBottom: "1.2rem" }}>
              I'm a content creator based between Oslo and Barcelona, with a genuine passion
              for beauty, fashion, and lifestyle. I believe great content doesn't just look good —
              it feels real.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.9, color: "#555", maxWidth: "440px", marginBottom: "1.2rem" }}>
              Alongside creating, I'm studying Business Administration, which means I think about
              brand strategy and audience connection as seriously as I think about aesthetics.
              New ideas and creativity are what drive me forward.
            </p>
            <a href="mailto:livehau@gmail.com" style={{ display: "inline-block", marginTop: "1.5rem", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", borderBottom: "0.5px solid #111", paddingBottom: "3px" }}>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ background: "#f7f6f4", padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3rem" }}>
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
        <div style={{ maxWidth: "1300px", margin: "3rem auto 0", paddingTop: "2rem", borderTop: "0.5px solid #e0ddd8", display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>© 2025 Live Marie Haugland</p>
          <p style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>Oslo · Barcelona</p>
        </div>
      </footer>

    </div>
  );
}