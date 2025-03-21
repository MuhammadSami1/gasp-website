import About from "../components/About";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import FloatingImage from "../components/Story";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen w-screen relative">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
      <Footer />
    </main>
  );
}
