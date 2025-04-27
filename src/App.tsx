import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import NotFound2 from "./pages/NotFound2";
import Extracurricular from "./components/Extracurricular";
import SoftSkills from "./components/SoftSkills";
import Projects from "./components/Projects"; // Add this import

const queryClient = new QueryClient();

interface ContentWrapperProps {}

const App = () => {
  const [language, setLanguage] = useState<'en' | 'es' | 'fr' | 'de'>('es'); // Default to Spanish
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

  const ContentWrapper: React.FC<ContentWrapperProps> = () => {
    const location = useLocation();
    
    // Extract language from path if available
    useEffect(() => {
      const pathLang = location.pathname.split('/')[1];
      if (['en', 'es', 'fr', 'de'].includes(pathLang)) {
        setLanguage(pathLang as 'en' | 'es' | 'fr' | 'de');
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
          <Projects language={language} />
          <Extracurricular language={language} />
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
