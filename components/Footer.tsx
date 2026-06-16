"use client";

import { Mountain, Instagram, MessageCircle, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-logo gap-2">
            <Image src="/logo.jpeg" alt="GreenWay Goods Trading Logo" width={32} height={32} className="rounded-full object-cover" /> GreenWay Goods Trading
          </div>
          <p className="footer-tagline">"From Hills to Home"</p>
          <div className="footer-socials">
            <a href="#">
              <Instagram size={24} />
            </a>
            <a href="#">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Malai Honey</a>
            </li>
            <li>
              <a href="#">Malai Pepper</a>
            </li>
            <li>
              <a href="#">Malai Garlic</a>
            </li>
            <li>
              <a href="#">Cardamom</a>
            </li>
            <li>
              <a href="#">Clove</a>
            </li>
            <li>
              <a href="#">Coffee Powder</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Quality Standards</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <h4>Contact</h4>
          <p>
            <Phone size={16} className="inline mr-2" /> 8220308567
          </p>
          <p>FSSAI: 22426574000370</p>
          <div className="footer-tn mt-6 flex items-center justify-start gap-2 text-xs opacity-80 text-[var(--ivory)]">
            <MapPin size={16} /> Proudly Tamil Nadu
          </div>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2026 GreenWay Goods Trading. All rights reserved.</div>
    </footer>
  );
}
