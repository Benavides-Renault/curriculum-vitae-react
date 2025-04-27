import { Helmet } from "react-helmet";
import Header from "../components/Header";
import AboutComponent from "../components/About";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const About = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('es');
  
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
        title: "About Me - Orlando B.",
        description: "Learn more about me and my background",
        heading: "About Me"
      },
      es: {
        title: "Sobre Mí - Orlando B.",
        description: "Conoce más sobre mí y mi trayectoria",
        heading: "Sobre Mí"
      },
      fr: {
        title: "À Propos - Orlando B.",
        description: "En savoir plus sur moi et mon parcours",
        heading: "À Propos"
      },
      de: {
        title: "Über Mich - Orlando B.",
        description: "Erfahren Sie mehr über mich und meinen Hintergrund",
        heading: "Über Mich"
      }
    };
    
    return content[lang as keyof typeof content] || content.en;
  };
  
  const content = getLanguageContent(language);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
      </Helmet>
      
      <Header language={language} setLanguage={setLanguage} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            {content.heading}
          </h1>
          <AboutComponent language={language} />
        </div>
      </main>
      
      <Footer isEnglish={language === 'en'} />
    </div>
  );
};

export default About;
