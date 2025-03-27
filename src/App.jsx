
import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Extracurricular from "./components/Extracurricular";
import SoftSkills from "./components/SoftSkills";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState('es'); // Default to Spanish
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          element.classList.add('fade-in-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ContentWrapper = () => {
    const location = useLocation();
    
    // Extract language from path if available
    useEffect(() => {
      const pathLang = location.pathname.split('/')[1];
      if (['en', 'es', 'fr', 'de'].includes(pathLang)) {
        setLanguage(pathLang);
      }
    }, [location]);
    
    return (
      <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
        <Header 
          language={language}
          setLanguage={setLanguage}
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />
        <main className="flex-grow pt-16">
          <section id="hero">
            <Hero language={language} />
          </section>
          <About language={language} />
          <TechnicalSkills language={language} />
          <SoftSkills language={language} />
          <Extracurricular language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </main>
        <Footer language={language} />
      </div>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<ContentWrapper />} />
            <Route path="/en/*" element={<ContentWrapper />} />
            <Route path="/es/*" element={<ContentWrapper />} />
            <Route path="/fr/*" element={<ContentWrapper />} />
            <Route path="/de/*" element={<ContentWrapper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
