import Features from "@/components/features";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
