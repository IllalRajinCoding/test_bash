import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import NegativeCircleCursor from "../fitur/NegatifCursor";
import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import Contact from "../components/Contact";

function Portofolio() {
  const [loading, setLoading] = useState(true); // Set initial loading to true

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Shorter loading time for better user experience

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-screen flex-col bg-black gap-4 fixed top-0 left-0 z-50"> {/* Full screen loader */}
          <BarLoader color={"#123abc"} loading={loading} /> {/* Assuming you want this color */}
        </div>
      ) : (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <NegativeCircleCursor />

          <div className="fixed top-0 -z-10 h-full w-full pointer-events-none"> {/* Added pointer-events-none */}
            {/* Base Radial Gradient */}
            <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            {/* Interactive Grid Overlay */}
            <div className="absolute inset-0 z-[-1] opacity-10 animate-background-grid"></div>
          </div>

          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default Portofolio;