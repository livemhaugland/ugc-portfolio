import React from "react";
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import about from "./assets/about.png";


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
      <header className="mx-auto flex max-w-[1700px] items-center justify-between px-8 py-10 md:px-14">
        <a href="#top" className="text-sm uppercase tracking-[0.18em]">
          Live Marie Haugland
        </a>

        <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.16em] md:flex">
          <a href="#photos">Home</a>
          <a href="#about">About</a>
          <a href="#work">Portfolio</a>
          <a href="mailto:livehau@gmail.com">Contact</a>
        </nav>
      </header>

              <section id="photos" className="px-8 py-20 md:px-14">
          <p className="text-lg text-center font-normal uppercase leading-[1.1] tracking-[0.03em] md:text-[36px]">
            Oslo-Based UGC Creator
          </p>
                    <p className="mx-auto mt-10 max-w-[900px] text-center leading-6 text-black/65">
              I'm a 23-year-old creator from Norway, currently living between Oslo and Barcelona. 
              <br />
              My work sits at the intersection of beauty, fashion, lifestyle, and travel — industries I follow closely and genuinely love.
            </p>
            <br />


          <div className="mx-auto grid max-w-[1800px] grid-cols-4 gap-6 mt-6">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className="aspect-[4/5] w-full object-cover"
              />
            ))}
          </div>
        </section>

      <main id="top">
        <section className="flex items-center justify-center bg-[#f7f6f4] px-8 py-18 text-center md:px-14 min-h-[35vh]">
          <div className="flex flex-col justify-center bg-[#f7f6f4] px-10 py-12 md:px-24">
            <h1 className="text-lg font-normal uppercase leading-[1.1] tracking-[0.03em] md:text-[36px]">
              Authentic Content.<br />
              Real Impact.
            </h1>

  

            <a href="#work" className="mt-8 inline-block border-b border-black pb-1 text-xs uppercase tracking-[0.16em]">
              View work
            </a>
          </div>
        </section>

        <section id="about" className="px-8 py-20 md:px-14">
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

              <a href="#contact" className="mt-10 inline-block border-b border-black pb-1 text-xs uppercase tracking-[0.16em]">
                Get in touch
              </a>
            </div>
          </div>
        </section>



        <section id="work" className="px-8 py-8 md:px-14">
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
              <a href="#top">Home</a>
              <a href="#about">About</a>
              <a href="#photos">Photos</a>
              <a href="#work">Portfolio</a>
              <a href="#contact">Contact</a>
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