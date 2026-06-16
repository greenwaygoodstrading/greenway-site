"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { BadgeCheck, Leaf, Droplets, Mountain } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    // Entrance Anim
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 })
      .to(".line-reveal-inner", { y: "0%", duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.4")
      .to(".hero-subtitle-tamil", { opacity: 1, duration: 0.6 }, "-=0.6")
      .to(".hero-subtitle-eng", { opacity: 1, duration: 0.6 }, "-=0.4")
      .to(".hero-body", { opacity: 1, duration: 0.6 }, "-=0.4")
      .to(".hero-ctas", { opacity: 1, scale: 1, duration: 0.6 }, "-=0.4")
      .to(".trust-badges", { opacity: 1, duration: 0.6 }, "-=0.4");
  }, []);

  return (
    <section className="hero relative" id="home">
      <Image 
        src="/mountain.jpg" 
        alt="Mountain Background" 
        fill 
        className="object-cover opacity-20" 
        style={{ zIndex: -1 }} 
        unoptimized 
      />
      <div className="hero-content">
        <div className="hero-eyebrow">From the hills of Tamil Nadu</div>
        <h1 className="hero-title display-text">
          <div className="line-reveal">
            <span className="line-reveal-inner">Nature's Finest,</span>
          </div>
          <div className="line-reveal">
            <span className="line-reveal-inner">Delivered Pure.</span>
          </div>
        </h1>
        <div className="hero-subtitle-tamil tamil-text">"மலைகளிலிருந்து உங்கள் இல்லம் வரை"</div>
        <div className="hero-subtitle-eng">(From the hills to your home)</div>
        <p className="hero-body">
          Six generations of hill farming, one promise — nothing added, nothing removed. Just pure goodness
          from untouched Tamil hills.
        </p>
        <div className="hero-ctas">
          <a href="#products-section" className="btn-primary">
            Explore Products
          </a>
          <a href="#story-section" className="btn-ghost">
            Our Story &rarr;
          </a>
        </div>
        <div className="trust-badges">
          <span className="badge">
            <BadgeCheck size={18} className="text-[var(--gold-line)]" /> FSSAI Certified
          </span>
          <span className="badge">
            <Leaf size={18} className="text-[var(--gold-line)]" /> 100% Natural
          </span>
          <span className="badge">
            <Droplets size={18} className="text-[var(--gold-line)]" /> No Additives
          </span>
          <span className="badge">
            <Mountain size={18} className="text-[var(--gold-line)]" /> Hill Harvested
          </span>
        </div>
      </div>
    </section>
  );
}
