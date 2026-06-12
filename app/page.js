import Navbar from "@/components/layout/navbar";
import Hero from "@/components/hero/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Awards from "@/components/sections/awards";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
