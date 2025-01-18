import About from "../components/About";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden min-h-screen w-screen relative">
      <Hero />
      <About />
    </main>
  );
}
