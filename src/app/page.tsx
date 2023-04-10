import CTA from "~/components/sections/CTA";
import FAQ from "~/components/sections/FAQ";
import Footer from "~/components/sections/Footer";
import Hero from "~/components/sections/Hero";
import Navbar from "~/components/sections/Navbar";
import Newsletter from "~/components/sections/Newsletter";
import Pricing from "~/components/sections/Pricing";
import PrimaryFeatures from "~/components/sections/PrimaryFeatures";
import SecondaryFeatures from "~/components/sections/SecondaryFeatures";
import Testimonials from "~/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CTA />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}
