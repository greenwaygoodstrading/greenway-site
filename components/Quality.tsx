"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mountain, Droplet, FlaskConical, Award, Diamond } from "lucide-react";

export default function Quality() {
  const qualityRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: qualityRef.current,
      start: "top 60%",
      end: "top 20%",
      scrub: true,
      onUpdate: (self) => {
        const textElement = document.querySelector(".mask-text") as HTMLElement;
        if (textElement) {
          textElement.style.setProperty("--reveal-percent", `${self.progress * 100}%`);
        }
      },
    });
  }, []);

  return (
    <>
      <section className="quality-section" id="quality-section" ref={qualityRef}>
        <div className="mask-text-container reveal">
          <h2 className="mask-text">PURE. HONEST. UNCOMPROMISED.</h2>
        </div>
        <div className="quality-grid reveal">
          <div className="quality-item">
            <Droplet size={32} className="quality-item-icon" />
            <h3 className="quality-item-title">No Additives</h3>
            <p className="quality-item-body">Zero artificial preservatives, colors, or flavor enhancers.</p>
          </div>
          <div className="quality-item">
            <Mountain size={32} className="quality-item-icon" />
            <h3 className="quality-item-title">Hill Sourced</h3>
            <p className="quality-item-body">Directly from farms above 1200m altitude in Tamil Nadu.</p>
          </div>
          <div className="quality-item">
            <FlaskConical size={32} className="quality-item-icon" />
            <h3 className="quality-item-title">Lab Tested</h3>
            <p className="quality-item-body">Every batch tested for purity before it reaches your home.</p>
          </div>
          <div className="quality-item">
            <Award size={32} className="quality-item-icon" />
            <h3 className="quality-item-title">FSSAI Certified</h3>
            <p className="quality-item-body">Registered under FSSAI No. 22426574000370.</p>
          </div>
        </div>
      </section>

      <div className="ornament-divider">
        <Diamond size={12} className="text-[var(--gold-line)]" />
      </div>
    </>
  );
}
