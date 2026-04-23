import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Counter } from "@/components/sections/Counter";
import { Portfolio } from "@/components/sections/Portfolio";
import { Reels } from "@/components/sections/Reels";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <About />
      <Services />
      <Differentials />
      <Counter />
      <Portfolio />
      <Reels />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
