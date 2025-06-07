import React, { useEffect, useState, lazy, Suspense } from "react";
import BarLoader from "react-spinners/BarLoader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));
const Blog = lazy(() => import("./Blog"));
function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloadResources = async () => {
      try {
        await Promise.all([
        ]);
      } finally {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    };

    preloadResources();
  }, []);

  const LoadingScreen = () => (
    <div className="flex justify-center items-center h-screen w-screen flex-col bg-black gap-4 fixed top-0 left-0 z-50">
      <BarLoader color="#4fd1c5" loading={loading} />{" "}
    </div>
  );

  const Background = () => (
    <>
      <div className="fixed top-0 -z-10 h-full w-full pointer-events-none">
        <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 z-[-1] opacity-10 animate-background-grid" />
      </div>
    </>
  );

  return (
    <div>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <Background />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <Hero />
            <Suspense fallback={<div className="h-screen" />}>
              <About />
              <Skills />
              <Experience />
              <Blog />
              <Projects />
              <Contact />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
} export default Portfolio;
