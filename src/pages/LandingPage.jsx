
import Features from "../components/featuresection/Features";
import Navbar from "../components/layouts/Navbar";
import Problem from "../components/problemsection/Problem";
import Hero from "../components/herosection/Hero";
import Testimonials from "../components/testimonialsection/Testimonials";
import WhyShopWithUs from "../components/shopwithus/WhyShopWithUs";
import FAQ from "../components/faqsection/FAQ";
import Footer from "../components/layouts/Footer";
import MainProductPage from "../components/mainpage/MainProductPage";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <MainProductPage />
        </section>
        <section id="features">
          <Features />
        </section>
        <Problem />
        <section id="reviews">
          <Testimonials />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <WhyShopWithUs />
      </main>
      <Footer />


    </>
  );
}
