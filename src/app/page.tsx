import Hero from "~/components/sections/Hero";
import Navbar from "~/components/sections/Navbar";
import Pricing from "~/components/sections/Pricing";
import PrimaryFeatures from "~/components/sections/PrimaryFeatures";
import SecondaryFeatures from "~/components/sections/SecondaryFeatures";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <Pricing />
    </div>
  );
}
