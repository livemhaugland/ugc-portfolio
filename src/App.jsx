import React from "react";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import about from "./assets/about.png";
import font from "./assets/PinyonScript-Regular.ttf";



const photos = [photo1, photo2, photo3, photo4];

const videoRows = [
  {
    title: "Beauty",
    text: "Skin health, routines and soft glam.",
  },
  {
    title: "Fashion",
    text: "Elevated styling.",
  },
  {
    title: "Lifestyle",
    text: "Everyday moments that feel calm and authentic.",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: "Times New Roman, serif" }}>
      <header className="fixed top-0 z-50 flex w-full flex-col items-center gap-5 bg-white px-6 py-6 md:flex-row md:justify-between md:px-14 md:py-8">
        <a href="#top" className="text-sm uppercase tracking-[0.18em]">
          UGC content creator
        </a>

        <nav className="flex flex-wrap justify-center gap-5 text-[11px] uppercase tracking-[0.18em] md:gap-10 md:text-sm">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="mailto:livehau@gmail.com">Contact</a>
        </nav>
      </header>

              <section className="min-h-[55vh] bg-[#f7f6f4] px-6 pt-36 pb-16 text-center flex flex-col items-center">
          <p className="text-[25px] leading-tight tracking-[0.04em] md:text-[56px]">
            Live Marie Haugland
          </p>
              <p className="mt-8 max-w-[450px] center-text text-base leading-7">
              I'm a 23-year-old creator from Norway, currently living between Oslo and Barcelona. 
              <br />
              My work sits at the intersection of beauty, fashion, lifestyle, and travel — industries I follow closely and genuinely love.
            </p>
            <br />


          <div className="mt-14 grid grid-cols-4 gap-3 md:gap-5">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                className="h-[180px] w-full object-cover md:h-[520px]"
              />
            ))}
          </div>
        </section>

      <main id="top">
        <section className="flex items-center justify-center bg-[#f7f6f4] px-8 py-4 text-center md:px-14 min-h-[35vh]">
          <div className="flex flex-col justify-center bg-[#f7f6f4] px-10 py-12 md:px-24">
            

            <a href="#portfolio" className="mt-8 inline-block border-b border-black pb-1 text-xs uppercase tracking-[0.16em]">
              View work
            </a>
          </div>
        </section>





        <section id="portfolio" className="px-8 py-4 md:px-14">
          <p className="mb-16 text-center text-xs uppercase tracking-[0.22em]">
          </p>

          <div className="mx-auto flex max-w-[1700px] flex-col gap-18">
            {videoRows.map((row) => (
              <section key={row.title}>
                <div className="mb-8 flex items-end justify-between">
                  <div>
                    <h2 className="text-[42px] uppercase tracking-[0.04em]">
                      {row.title}
                    </h2>
                    <p className="mt-3 text-base text-black/60">{row.text}</p>
                  </div>
                </div>

                <div className="flex gap-5 overflow-x-auto pb-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item}>
                      <div className="aspect-[4/5] min-w-[260px] bg-[#d5d0c8]">
                        Video
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-[0.16em]">
                        Campaign {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

        <section id="about" className="px-8 py-12 md:px-14">
          <div className="mx-auto grid max-w-[1200px] items-center gap-16 md:grid-cols-[320px_1fr]">
            <div className="overflow-hidden">
              <img src={about} alt="About" className="aspect-[4/5] w-full object-cover" />
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.16em]">About me</p>

              <p cclassName="mt-8 max-w-[390px] text-base leading-7">
                Alongside creating, I'm studying Business Administration, which means I think about brand strategy and audience connection as seriously as I think about aesthetics.
              </p>

              <p className="mt-8 max-w-[390px] text-base leading-7">
                I love creating content, and believe that I have a good eye for it as well. New ideas and creativity are what drive me, and I always want to push myself to create better.
              </p>

              <a href="mailto:livehau@gmail.com" className="mt-10 inline-block border-b border-black pb-1 text-xs uppercase tracking-[0.16em]">
                Get in touch
              </a>
            </div>
          </div>
        </section>

      <footer id="contact" className="bg-[#f7f7f7] px-8 py-16 md:px-14">
        <div className="mx-auto grid max-w-[1700px] gap-12 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em]">UGC Creator</p>
            <p className="mt-8 max-w-[260px] text-sm leading-7 text-black/65">
              Creating content that connects.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em]">Navigation</p>
            <div className="mt-8 grid gap-3 text-sm uppercase">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="mailto:livehau@gmail.com">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em]">Connect</p>
            <div className="mt-8 grid gap-3 text-sm uppercase">
              <a href="https://instagram.com/livemhaugland">Instagram</a>
              <a href="https://tiktok.com/@livemhaugland">TikTok</a>
              <a href="mailto:livehau@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}