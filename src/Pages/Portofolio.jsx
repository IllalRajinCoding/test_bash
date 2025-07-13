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

  // SEO Implementation
  useEffect(() => {
    // Update page title
    document.title = "Robbanie Hillaly | Full Stack Developer Portfolio";
    
    // Function to update or create meta tag
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO meta tags
    updateMetaTag('description', 'Portfolio dan blog Robbanie Hillaly, Full Stack Developer yang berpengalaman dalam React, JavaScript, PHP, dan teknologi web modern. Lihat proyek dan artikel tutorial programming.');
    updateMetaTag('keywords', 'full stack developer, web developer, react developer, javascript developer, PHP developer, robbanie hillaly, portfolio developer indonesia, tutorial programming');
    updateMetaTag('author', 'Robbanie Hillaly Kurniadien');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Indonesian');

    // Open Graph tags for social media
    updateMetaTag('og:title', 'Robbanie Hillaly | Full Stack Developer Portfolio', true);
    updateMetaTag('og:description', 'Portfolio dan blog Robbanie Hillaly, Full Stack Developer yang berpengalaman dalam React, JavaScript, PHP, dan teknologi web modern.', true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', 'https://www.loxyland.web.id', true);
    updateMetaTag('og:site_name', 'Robbanie Hillaly Portfolio', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', 'Robbanie Hillaly | Full Stack Developer Portfolio', true);
    updateMetaTag('twitter:description', 'Portfolio dan blog Robbanie Hillaly, Full Stack Developer yang berpengalaman dalam React, JavaScript, PHP, dan teknologi web modern.', true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.loxyland.web.id');

    // Structured Data (JSON-LD) for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Robbanie Hillaly Kurniadien",
      "jobTitle": "Full Stack Developer",
      "description": "Full Stack Developer specializing in React, JavaScript, PHP and modern web development",
      "url": "https://porto-two-phi.vercel.app/",
      "image": "https://porto-two-phi.vercel.app/images/profile.jpg",
      "alumniOf": "STT Terpadu Nurul Fikri",
      "knowsAbout": [
        "JavaScript",
        "React",
        "PHP",
        "MySQL",
        "Tailwind CSS",
        "Full Stack Development",
        "Web Development"
      ],
      "sameAs": [
        "https://github.com/robbaniehillaly",
        "https://linkedin.com/in/robbaniehillaly"
      ]
    };

    // Add or update structured data script
    let structuredScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredScript) {
      structuredScript = document.createElement('script');
      structuredScript.type = 'application/ld+json';
      document.head.appendChild(structuredScript);
    }
    structuredScript.textContent = JSON.stringify(structuredData);

  }, []);

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
} 

export default Portfolio;