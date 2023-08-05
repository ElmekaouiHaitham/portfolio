import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Example from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Example />
      <Footer />
    </main>
  );
}

// I am a flutter, and next.js developer I love to program to help businesses grow their businesses I also love the scientific side of programming, like math and making simulations. I am also interested in machine learning and I have a good foundation in it . I love learning and I also practice sports.
