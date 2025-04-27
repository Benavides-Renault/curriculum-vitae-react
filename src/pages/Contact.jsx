import { Helmet } from "react-helmet";
import Header from "../components/Header";
import ContactComponent from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Contact = () => {
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
        title: "Contact Me - Orlando B.",
        description: "Get in touch with me",
        heading: "Contact Me"
      },
      es: {
        title: "Contáctame - Orlando B.",
        description: "Ponte en contacto conmigo",
        heading: "Contáctame"
      },
      fr: {
        title: "Contactez-moi - Orlando B.",
        description: "Entrer en contact avec moi",
        heading: "Contactez-moi"
      },
      de: {
        title: "Kontaktiere Mich - Orlando B.",
        description: "Nehmen Sie Kontakt mit mir auf",
        heading: "Kontaktiere Mich"
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
      
      <Header isEnglish={isEnglish} setIsEnglish={() => {}} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black dark:text-white">
            {content.heading}
          </h1>
          <ContactComponent isEnglish={isEnglish} />
        </div>
      </main>
      
      <Footer isEnglish={isEnglish} />
    </div>
  );
};

export default Contact;
