import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SocialProofBar from "../components/SocialProofBar";
import WinesSection from "../components/WinesSection";
import PhotoStrip from "../components/PhotoStrip";
import QuoteStrip from "../components/QuoteStrip";
import TerroirSection from "../components/TerroirSection";
import Testimonials from "../components/Testimonials";
import Panels from "../components/Panels";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SocialProofBar />
      <WinesSection />
      <PhotoStrip />
      <QuoteStrip />
      <TerroirSection />
      <Testimonials />
      <Panels />
      <FAQ />
      <Footer />
    </>
  );
}
