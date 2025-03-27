
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const isEnglish = language === 'en';
  
  useEffect(() => {
    // Check URL for language parameter
    const path = window.location.pathname;
    if (path.includes('/en')) setLanguage('en');
    else if (path.includes('/es')) setLanguage('es');
    else if (path.includes('/fr')) setLanguage('fr');
    else if (path.includes('/de')) setLanguage('de');
    else setLanguage('es'); // Default to Spanish
  }, []);
  
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

  const getLanguageContent = (lang: string) => {
    const content = {
      en: {
        title: "Portfolio - Orlando B.",
        description: "View my portfolio projects",
        heading: "My Portfolio",
        subheading: "Here you can find a collection of my most notable projects. Each one represents unique challenges and solutions that I've developed throughout my professional career."
      },
      es: {
        title: "Portafolio - Orlando B.",
        description: "Ver mis proyectos de portafolio",
        heading: "Mi Portafolio",
        subheading: "Aquí puedes encontrar una colección de mis proyectos más destacados. Cada uno representa desafíos y soluciones únicas que he desarrollado a lo largo de mi carrera profesional."
      },
      fr: {
        title: "Portfolio - Orlando B.",
        description: "Voir mes projets de portfolio",
        heading: "Mon Portfolio",
        subheading: "Vous pouvez trouver ici une collection de mes projets les plus remarquables. Chacun représente des défis et des solutions uniques que j'ai développés tout au long de ma carrière professionnelle."
      },
      de: {
        title: "Portfolio - Orlando B.",
        description: "Meine Portfolio-Projekte ansehen",
        heading: "Mein Portfolio",
        subheading: "Hier finden Sie eine Sammlung meiner bemerkenswertesten Projekte. Jedes repräsentiert einzigartige Herausforderungen und Lösungen, die ich im Laufe meiner beruflichen Laufbahn entwickelt habe."
      }
    };
    
    return content[lang as keyof typeof content] || content.en;
  };
  
  const content = getLanguageContent(language);

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
      </Helmet>
      
      <Header isEnglish={isEnglish} setIsEnglish={() => {}} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            {content.heading}
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
            {content.subheading}
          </p>
          
          <Projects isEnglish={isEnglish} />
        </div>
      </main>
      
      <Footer isEnglish={isEnglish} />
    </div>
  );
};

export default Portfolio;
