import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen w-screen relative">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
