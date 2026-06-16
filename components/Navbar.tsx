"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!navRef.current) return;

    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(navRef.current, { scale: 0.97, y: -10, duration: 0.3 });
        } else {
          gsap.to(navRef.current, { scale: 1, y: 0, duration: 0.3 });
        }
      },
    });
  }, []);

  return (
    <div className="nav-container" ref={navRef}>
      <nav className="nav-bar">
        <a href="#" className="nav-logo">
          <Image src="/logo.jpeg" alt="Greenway Goods Logo" width={32} height={32} className="rounded-full object-cover" />
          Greenway Goods
        </a>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#products-section" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#story-section" onClick={() => setIsOpen(false)}>Story</a>
          <a href="#quality-section" onClick={() => setIsOpen(false)}>Quality</a>
          <a href="#footer" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
        <a href="#contact" className="nav-cta">
          Order Now
        </a>
        <button className="mobile-menu-btn cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" style={{ background: 'none', border: 'none' }}>
          {isOpen ? <X size={24} color="var(--forest)" /> : <Menu size={24} color="var(--forest)" />}
        </button>
      </nav>
    </div>
  );
}
