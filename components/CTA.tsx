"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTA() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctaWords = document.querySelectorAll(".cta-word-inner");
    if (ctaWords.length) {
      gsap.fromTo(
        ctaWords,
        { y: "100%" },
        {
          y: "0%",
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".cta-section", start: "top 70%" },
        }
      );
    }
  }, []);

  return (
    <section className="cta-section" id="contact">
      <div className="cta-watermark">தேர்வு</div>
      <div className="cta-content">
        <h2 className="cta-headline display-text">
          <div className="cta-word">
            <span className="cta-word-inner">Ready</span>
          </div>
          <div className="cta-word">
            <span className="cta-word-inner">to</span>
          </div>
          <div className="cta-word">
            <span className="cta-word-inner">taste</span>
          </div>
          <br />
          <div className="cta-word">
            <span className="cta-word-inner">the</span>
          </div>
          <div className="cta-word">
            <span className="cta-word-inner">real</span>
          </div>
          <div className="cta-word">
            <span className="cta-word-inner">thing?</span>
          </div>
        </h2>
        <p className="cta-body">Order directly from GreenWay Goods Trading. Fresh stock, direct from our farms.</p>
        <div className="cta-buttons">
          <a href="#" className="btn-primary">
            Shop Now
          </a>
          <a href="#" className="btn-ghost-ivory" style={{ borderColor: "var(--forest)", color: "var(--forest)" }}>
            Call Us: 8220308567
          </a>
        </div>
        <p className="cta-fssai">
          FSSAI Reg. No. 22426574000370 · All products are naturally processed and tested for purity.
        </p>
      </div>
    </section>
  );
}
