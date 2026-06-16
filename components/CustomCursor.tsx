"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;
    if (!cursor) return;

    if (window.innerWidth > 768) {
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
      let xTo = gsap.quickTo(cursor, "left", { duration: 0.4, ease: "power3" }),
        yTo = gsap.quickTo(cursor, "top", { duration: 0.4, ease: "power3" });
        
      const handleMouseMove = (e: MouseEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };
      
      window.addEventListener("mousemove", handleMouseMove);

      const setupCursorHover = () => {
        document.querySelectorAll("a, button, .carousel-tab, .test-card").forEach((el) => {
          el.addEventListener("mouseenter", () => cursor.classList.add("hover-state"));
          el.addEventListener("mouseleave", () => cursor.classList.remove("hover-state"));
        });
      };

      setupCursorHover();
      
      // Setup mutation observer to catch dynamically added links (if any)
      const observer = new MutationObserver(() => {
         setupCursorHover();
      });
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        observer.disconnect();
      };
    } else {
      cursor.style.display = "none";
    }
  }, []);

  return <div className="custom-cursor"></div>;
}
