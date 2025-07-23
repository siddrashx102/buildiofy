import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WebTemplates } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WebTemplates />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
