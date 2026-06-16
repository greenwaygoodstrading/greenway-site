import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Story from "@/components/Story";
import Quality from "@/components/Quality";
import HoverCarousel from "@/components/HoverCarousel";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager";

export default function Page() {
  return (
    <main>
      <ScrollManager />
      <CustomCursor />
      <Loader />
      <Navbar />
      <Hero />
      <Marquee />
      <Products />
      <Story />
      <Quality />
      <HoverCarousel />
      <CTA />
      <Footer />
    </main>
  );
}
