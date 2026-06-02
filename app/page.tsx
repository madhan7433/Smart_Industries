import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Machinery from "../components/Machinery";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import Trading from "../components/Trading";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Trading />
      <Machinery />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}