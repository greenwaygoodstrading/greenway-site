"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const loaderTl = gsap.timeline({
        onComplete: () => {
          gsap.to("#loader", { clipPath: "circle(150% at 50% 50%)", duration: 0.8 });
          setTimeout(() => setComplete(true), 800);
        },
      });

      loaderTl
        .to(".loader-drop", { y: "50px", ease: "bounce.out", duration: 1.2 })
        .to(".loader-drop", { opacity: 0, duration: 0.1 })
        .to(".loader-bar", { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.1")
        .to(".loader-text", { opacity: 1, duration: 0.4 }, "-=0.4")
        .to({}, { duration: 0.3 }); // holding
    });

    return () => ctx.revert();
  }, []);

  if (complete) return null;

  return (
    <div id="loader">
      <div className="loader-drop"></div>
      <div className="loader-bar-container">
        <div className="loader-bar"></div>
      </div>
      <div className="loader-text">GreenWay Goods Trading</div>
    </div>
  );
}
