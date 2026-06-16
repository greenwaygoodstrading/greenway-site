"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PRODUCTS = [
  { tamil: "மலை தேன்", eng: "Malai Honey", emoji: "🍯", image: "/honey (2).jpg", bg: "var(--honey)", desc: "Raw & unfiltered wild honey harvested from the deep forests. Authentic taste, absolutely no added sugars or preservatives.", pills: ["Raw & Unfiltered", "Hill Harvested", "No Added Sugar"] },
  { tamil: "மலை மிளகு", eng: "Malai Pepper", emoji: "🧆", image: "/pepper (2).jpg", bg: "var(--forest-mid)", desc: "Sun-dried, high-aroma peppercorns hand-selected from our mountain estates. Bringing bold and natural spice to your daily meals.", pills: ["Sun Dried", "High Aroma", "Hand Selected"] },
  { tamil: "மலை பூண்டு", eng: "Malai Garlic", emoji: "🧄", image: "/garlic.webp", bg: "#7A9E7E", desc: "Farm fresh garlic grown naturally in cooler climates. Renowned for its exceptionally strong flavor and medicinal properties.", pills: ["Farm Fresh", "Naturally Grown", "Strong Flavor"] },
  { tamil: "ஏலக்காய்", eng: "Cardamom", emoji: "🌿", image: "/Cardamom.jpg", bg: "#4A7C59", desc: "Premium grade cardamom pods handpicked at peak ripeness. Infuses a rich, sweet aroma into every dish or beverage.", pills: ["Premium Grade", "Handpicked", "Rich Aroma"] },
  { tamil: "கிராம்பு", eng: "Clove", emoji: "🍂", image: "/clove.jpg", bg: "var(--spice)", desc: "Whole, unextracted cloves carrying intense natural oils. A powerful spice free of any artificial enhancers.", pills: ["Whole Cloves", "Strong Aroma", "No Additives"] },
  { tamil: "காபி தூள்", eng: "Coffee Powder", emoji: "☕", image: "/coffee beans.jpg", bg: "#3E1F0E", desc: "Freshly ground estate coffee beans roasted to perfection. Experience the authentic blend of the Nilgiri hills in every cup.", pills: ["Freshly Ground", "Estate Beans", "Authentic Blend"] },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 1280 && trackRef.current && containerRef.current) {
      const track = trackRef.current;
      const trackWidth = track.scrollWidth;

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${trackWidth}`,
        pin: true,
        scrub: 1,
        animation: gsap.to(track, {
          x: () => -(trackWidth - window.innerWidth + 300),
          ease: "none",
        }),
        onUpdate: (self) => {
          gsap.set(".progress-dot", { left: `${self.progress * 100}%` });
        },
      });

      return () => {
        trigger.kill();
      };
    }
  }, []);

  return (
    <section className="products-section" id="products-section" ref={containerRef}>
      <div className="products-left">
        <h2>OUR PRODUCTS</h2>
      </div>
      <div className="products-track-container">
        <div className="products-track" id="products-track" ref={trackRef}>
          {PRODUCTS.map((prod, i) => (
            <div className="product-card" key={i}>
              <div className="product-ill">
                <div className="product-ill-bg" style={{ background: prod.bg }}></div>
                {prod.image ? (
                  <Image src={prod.image} alt={prod.eng} fill className="object-cover rounded-2xl" unoptimized />
                ) : (
                  <div className="product-ill-emoji">{prod.emoji}</div>
                )}
              </div>
              <div className="product-tamil">{prod.tamil}</div>
              <div className="product-eng">{prod.eng}</div>
              <div className="product-div"></div>
              <p className="product-desc">{prod.desc}</p>
              <div className="product-pills">
                {prod.pills.map((pill, j) => (
                  <span className="pill" key={j}>
                    {pill}
                  </span>
                ))}
              </div>
              <a href="#" className="product-cta">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
        <div className="progress-line-container">
          <div className="progress-dot"></div>
        </div>
      </div>
    </section>
  );
}
