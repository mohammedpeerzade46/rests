import React, { useEffect } from "react";
import Header from "@/components/empire/Header";
import Hero from "@/components/empire/Hero";
import ChefRecommendations from "@/components/empire/ChefRecommendations";
import CustomerReviews from "@/components/empire/CustomerReviews";
import ExploreMenu from "@/components/empire/ExploreMenu";
import GalleryPreview from "@/components/empire/GalleryPreview";
import About from "@/components/empire/About";
import ContactLocation from "@/components/empire/ContactLocation";
import Footer from "@/components/empire/Footer";

export default function Landing() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div data-testid="landing-page" className="min-h-screen bg-[#FAF9F6] text-[#2A3B2C]">
      <Header />
      <main>
        <Hero />
        <ChefRecommendations />
        <ExploreMenu />
        <CustomerReviews />
        <GalleryPreview />
        <About />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
}
