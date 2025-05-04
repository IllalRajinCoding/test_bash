import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
// import Contact from "./components/Contact";
import NegativeCircleCursor from "../fitur/NegatifCursor";
import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import Navi from "../fitur/Navigate";
import GithubStats from "../components/Github";

function Portofolio() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ?
        <div className="flex justify-center items-center h-screen flex-col gap-4 animate-pulse">
          <BarLoader size={40} color={"#123abc"} loading={loading} />
        </div>
        :
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <NegativeCircleCursor />

          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>
          <div className="container mx-auto px-8">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <GithubStats />
            <Navi />
            {/* <Contact /> */}
          </div>
        </div>
      }
    </div>
  );
}

export default Portofolio;
