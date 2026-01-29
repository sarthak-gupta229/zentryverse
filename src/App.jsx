import React, { useEffect, useState } from "react";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import Story from "./components/Story.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { Atom } from "react-loading-indicators";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Safety fallback: if videos never load (network error), remove loader after 8s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <Atom color="#4231cc" size="large" text="" textColor="" />
        </div>
      )}
      <Navbar />
      <Hero onVideoLoad={() => setLoading(false)} />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      {/* fix */}
    </main>
  );
};

export default App;
