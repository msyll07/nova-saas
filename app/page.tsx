import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Pricing from "@/components/Pricing";
import ProductPreview from "@/components/ProductPreview";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Logos/>
      <Features/>
      <ProductPreview/>
      <Pricing/>
      <Testimonials/>
      <CTA/>
      <Footer/>

    </main>
  );
}
