import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Skills } from "@/components/home/Skills";
import { Work } from "@/components/home/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}
