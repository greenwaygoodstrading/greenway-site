"use client";

import { useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function HoverCarousel() {
  useEffect(() => {
    const tabs = document.querySelectorAll(".carousel-tab");
    const panels = document.querySelectorAll(".carousel-panel");
    
    tabs.forEach((tab, index) => {
      tab.addEventListener("mouseenter", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        if (panels[index]) panels[index].classList.add("active");
      });
    });
  }, []);

  return (
    <section className="hover-carousel-section reveal">
      <div className="carousel-container">
        <div className="carousel-tabs">
          <div className="carousel-tab active">
            <span className="carousel-tab-tamil">மலை தேன்</span>
            <span className="carousel-tab-eng">Malai Honey</span>
          </div>
          <div className="carousel-tab">
            <span className="carousel-tab-tamil">மலை மிளகு</span>
            <span className="carousel-tab-eng">Malai Pepper</span>
          </div>
          <div className="carousel-tab">
            <span className="carousel-tab-tamil">மலை பூண்டு</span>
            <span className="carousel-tab-eng">Malai Garlic</span>
          </div>
          <div className="carousel-tab">
            <span className="carousel-tab-tamil">ஏலக்காய்</span>
            <span className="carousel-tab-eng">Cardamom</span>
          </div>
          <div className="carousel-tab">
            <span className="carousel-tab-tamil">கிராம்பு</span>
            <span className="carousel-tab-eng">Clove</span>
          </div>
          <div className="carousel-tab">
            <span className="carousel-tab-tamil">காபி தூள்</span>
            <span className="carousel-tab-eng">Coffee Powder</span>
          </div>
        </div>
        
        <div className="carousel-panels">
          {/* Panel 1 */}
          <div className="carousel-panel active">
            <div className="panel-left">
              <div className="panel-ill-bg" style={{ background: "var(--honey)" }}></div>
              <Image src="/honey (2).jpg" alt="Malai Honey" fill className="object-cover" unoptimized />
            </div>
            <div className="panel-right">
              <div className="panel-tamil">மலை தேன்</div>
              <div className="panel-eng">Malai Honey</div>
              <p className="panel-desc">
                Sourced directly from the dense forests of Tamil Nadu, our Malai Honey retains its raw pollen and
                active enzymes.
              </p>
              <ul className="panel-features">
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Unpasteurized & completely raw</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Rich in natural antioxidants</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> No added sugars or syrups</li>
              </ul>
              <a href="#" className="panel-cta">Enquire <ArrowRight size={16} /></a>
            </div>
          </div>
          {/* Panel 2 */}
          <div className="carousel-panel">
            <div className="panel-left">
              <div className="panel-ill-bg" style={{ background: "var(--forest-mid)" }}></div>
              <Image src="/pepper (2).jpg" alt="Malai Pepper" fill className="object-cover" unoptimized />
            </div>
            <div className="panel-right">
              <div className="panel-tamil">மலை மிளகு</div>
              <div className="panel-eng">Malai Pepper</div>
              <p className="panel-desc">
                Grown in the cool, shaded elevations of our mountain estates, known for their sharp, robust heat.
              </p>
              <ul className="panel-features">
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Hand-picked from the vine</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Sun-dried naturally</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> High volatile oil content</li>
              </ul>
              <a href="#" className="panel-cta">Enquire <ArrowRight size={16} /></a>
            </div>
          </div>
          {/* Panel 3 */}
          <div className="carousel-panel">
            <div className="panel-left">
              <div className="panel-ill-bg" style={{ background: "#7A9E7E" }}></div>
              <Image src="/garlic.webp" alt="Malai Garlic" fill className="object-cover" unoptimized />
            </div>
            <div className="panel-right">
              <div className="panel-tamil">மலை பூண்டு</div>
              <div className="panel-eng">Malai Garlic</div>
              <p className="panel-desc">
                Farm fresh garlic grown naturally in cooler climates. Renowned for its exceptionally strong flavor and medicinal properties.
              </p>
              <ul className="panel-features">
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Farm Fresh</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Naturally Grown</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Strong Flavor</li>
              </ul>
              <a href="#" className="panel-cta">Enquire <ArrowRight size={16} /></a>
            </div>
          </div>
          {/* Panel 4 */}
          <div className="carousel-panel">
            <div className="panel-left">
              <div className="panel-ill-bg" style={{ background: "#4A7C59" }}></div>
              <Image src="/Cardamom.jpg" alt="Cardamom" fill className="object-cover" unoptimized />
            </div>
            <div className="panel-right">
              <div className="panel-tamil">ஏலக்காய்</div>
              <div className="panel-eng">Cardamom</div>
              <p className="panel-desc">
                Our cardamom bold pods are renowned for their vibrant green color and intense, sweet aroma.
              </p>
              <ul className="panel-features">
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Jumbo 8mm pods</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Retains maximum essential oils</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> No artificial green dye used</li>
              </ul>
              <a href="#" className="panel-cta">Enquire <ArrowRight size={16} /></a>
            </div>
          </div>
          {/* Panel 5 */}
          <div className="carousel-panel">
            <div className="panel-left">
              <div className="panel-ill-bg" style={{ background: "var(--spice)" }}></div>
              <Image src="/clove.jpg" alt="Clove" fill className="object-cover" unoptimized />
            </div>
            <div className="panel-right">
              <div className="panel-tamil">கிராம்பு</div>
              <div className="panel-eng">Clove</div>
              <p className="panel-desc">
                Whole, unextracted cloves carrying intense natural oils. A powerful spice free of any artificial enhancers.
              </p>
              <ul className="panel-features">
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Whole Cloves</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Strong Aroma</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> No Additives</li>
              </ul>
              <a href="#" className="panel-cta">Enquire <ArrowRight size={16} /></a>
            </div>
          </div>
          {/* Panel 6 */}
          <div className="carousel-panel">
            <div className="panel-left">
              <div className="panel-ill-bg" style={{ background: "#3E1F0E" }}></div>
              <Image src="/coffee beans.jpg" alt="Coffee Powder" fill className="object-cover" unoptimized />
            </div>
            <div className="panel-right">
              <div className="panel-tamil">காபி தூள்</div>
              <div className="panel-eng">Coffee Powder</div>
              <p className="panel-desc">
                A signature blend of estate-grown Arabica and Robusta, slow-roasted for the perfect morning cup.
              </p>
              <ul className="panel-features">
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Small-batch roasted</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Freshly ground weekly</li>
                <li><CheckCircle2 size={18} className="text-[var(--honey)]" /> Authentic local profile</li>
              </ul>
              <a href="#" className="panel-cta">Enquire <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
