"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Story() {
  const storyRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (storyRef.current) {
      gsap.to(".story-1947", {
        y: -150,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      });
      gsap.to(".story-mountains", {
        y: -80,
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }

    // Number counters
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const finalVal = parseInt(target.getAttribute("data-val") || "0");
          gsap.to(target, {
            innerHTML: finalVal,
            duration: 2,
            snap: { innerHTML: 1 },
            onUpdate: function () {
              let val = Math.round(Number(this.targets()[0].innerHTML));
              const suffix = target.getAttribute("data-suffix");
              if (suffix) target.innerHTML = val + suffix;
              else target.innerHTML = val.toString();
            },
          });
          observer.unobserve(target);
        }
      });
    });

    document.querySelectorAll(".counter-val").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="story-section" id="story-section" ref={storyRef}>
      <div className="story-noise"></div>
      <div className="story-1947">1947</div>
      <svg className="story-mountains" viewBox="0 0 100 20" preserveAspectRatio="none">
        <path d="M0,20 L30,5 L50,15 L80,0 L100,10 L100,20 Z" fill="currentColor" />
      </svg>
      <div className="story-content reveal">
        <div className="story-eyebrow">The Story</div>
        <h2 className="story-headline">
          From the Mist of<br />
          the Hills.
        </h2>
        <p className="story-body">
          Three generations of farmers in the Nilgiris have trusted the same process — let the hills do the work. No
          shortcuts, no chemicals, no rush. Just the patience that good things require.
        </p>
        <div className="stats-row" ref={numberRef}>
          <div className="stat-col">
            <h3>
              <span className="counter-val" data-val="6" data-suffix="+">
                0
              </span>
            </h3>
            <p>Generations of Farming</p>
          </div>
          <div className="stat-col">
            <h3>
              <span className="counter-val" data-val="100" data-suffix="%">
                0
              </span>
            </h3>
            <p>Naturally Processed</p>
          </div>
          <div className="stat-col">
            <h3>Zero</h3>
            <p>Additives. Ever.</p>
          </div>
        </div>
        <a href="#" className="btn-ghost-ivory">
          Read Our Full Story
        </a>
      </div>
    </section>
  );
}
