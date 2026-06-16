"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const cRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cRef.current) return;
    const testCards = cRef.current.querySelectorAll(".test-card");
    let currentTest = 0;
    let intervalId: NodeJS.Timeout;

    function updateTestimonials() {
      if (!testCards.length) return;
      testCards.forEach((card, i) => {
        card.className = "test-card";
        if (i === currentTest) card.classList.add("center");
        else if (i === (currentTest - 1 + testCards.length) % testCards.length) card.classList.add("left");
        else if (i === (currentTest + 1) % testCards.length) card.classList.add("right");
        else card.classList.add("hidden");
      });
    }

    updateTestimonials();

    intervalId = setInterval(() => {
      currentTest = (currentTest + 1) % testCards.length;
      updateTestimonials();
    }, 4000);

    testCards.forEach((card, i) => {
      card.addEventListener("click", () => {
        currentTest = i;
        updateTestimonials();
        clearInterval(intervalId); // Stop auto-play on manual click
      });
    });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="testimonials-section reveal">
      <div className="testimonials-carousel" ref={cRef}>
        <div className="test-card center">
          <div className="test-stars">★★★★★</div>
          <p className="test-quote">
            "The Malai Honey is unlike anything I've had from a supermarket. You can taste the difference
            immediately."
          </p>
          <p className="test-author">— Meenakshi R., Madurai</p>
          <span className="test-product">Malai Honey</span>
        </div>
        <div className="test-card right">
          <div className="test-stars">★★★★★</div>
          <p className="test-quote">
            "These peppercorns changed how I cook. The aroma when you crack them open is extraordinary."
          </p>
          <p className="test-author">— Karthik S., Chennai</p>
          <span className="test-product">Malai Pepper</span>
        </div>
        <div className="test-card left">
          <div className="test-stars">★★★★★</div>
          <p className="test-quote">
            "I've been using GreenWay Goods Trading cardamom for chai every morning. My family refuses to switch back."
          </p>
          <p className="test-author">— Priya V., Coimbatore</p>
          <span className="test-product">Cardamom</span>
        </div>
      </div>
    </section>
  );
}
