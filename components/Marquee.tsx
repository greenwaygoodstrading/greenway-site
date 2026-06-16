"use client";

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[1, 2, 3].map((i) => (
          <div className="marquee-item" key={i}>
            ✦ Pure · Natural · Trusted <span className="marquee-sep">✦</span> From Hills to Home{" "}
            <span className="marquee-sep">✦</span> FSSAI Certified <span className="marquee-sep">✦</span> No
            Additives <span className="marquee-sep">✦</span> Hand Harvested{" "}
            <span className="marquee-sep">✦</span> 100% Authentic
          </div>
        ))}
      </div>
    </div>
  );
}
