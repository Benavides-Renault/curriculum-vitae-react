import { useState, useEffect } from "react";
import { Moon, Sun, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface HeaderProps {
  language: string;
  setLanguage: (lang: 'en' | 'es' | 'fr' | 'de') => void;
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  language,
  setLanguage,
  darkMode,
  setDarkMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  const handleLanguageChange = (lang: 'en' | 'es' | 'fr' | 'de') => {
    setLanguage(lang);
    setShowLanguageSelector(false);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["hero", "about", "technical-skills", "projects", "contact"];
      let current = "hero";
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTranslatedText = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      aboutMe: {
        en: "About Me",
        es: "Sobre Mí",
        fr: "À Propos",
        de: "Über Mich"
      },
      skills: {
        en: "Skills",
        es: "Habilidades",
        fr: "Compétences",
        de: "Fähigkeiten"
      },
      projects: {
        en: "Projects",
        es: "Proyectos",
        fr: "Projets",
        de: "Projekte"
      },
      extracurricular: {
        en: "Extracurricular",
        es: "Extracurriculares",
        fr: "Extrascolaire",
        de: "Außerschulisch"
      },
      contact: {
        en: "Contact",
        es: "Contacto",
        fr: "Contact",
        de: "Kontakt"
      },
      lightMode: {
        en: "Light",
        es: "Claro",
        fr: "Clair",
        de: "Hell"
      },
      darkMode: {
        en: "Dark",
        es: "Oscuro",
        fr: "Sombre",
        de: "Dunkel"
      }
    };
    return texts[key]?.[language] || texts[key]?.en;
  };

  const languageOptions = [{
    id: "en" as const,
    name: "English",
    flag: "🇺🇸"
  }, {
    id: "es" as const,
    name: "Español",
    flag: "🇪🇸"
  }, {
    id: "fr" as const,
    name: "Français",
    flag: "🇫🇷"
  }, {
    id: "de" as const,
    name: "Deutsch",
    flag: "🇩🇪"
  }];

  return <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-white dark:bg-gray-900 shadow-md" : "py-4 bg-white dark:bg-gray-900"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-3 text-2xl font-bold header-logo text-black dark:text-white">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/img/yo.jpg" alt="Orlando Benavides" />
            <AvatarFallback>OB</AvatarFallback>
          </Avatar>
          <span>Orlando Benavides R.</span>
        </a>

        <nav className="flex items-center">
          <div className="flex items-center space-x-4 md:space-x-6">
            <a href="#about" className={`font-bold px-3 py-2 rounded-md ${activeSection === "about" ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" : "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"} transition-colors`}>
              {getTranslatedText("aboutMe")}
            </a>
            <a href="#technical-skills" className={`font-bold px-3 py-2 rounded-md ${activeSection === "technical-skills" ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" : "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"} transition-colors`}>
              {getTranslatedText("skills")}
            </a>
            <a href="#projects" className={`font-bold px-3 py-2 rounded-md ${activeSection === "projects" ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" : "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"} transition-colors`}>
              {getTranslatedText("projects")}
            </a>
            <a href="#extracurricular" className={`font-bold px-3 py-2 rounded-md ${activeSection === "extracurricular" ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" : "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"} transition-colors`}>
              {getTranslatedText("extracurricular")}
            </a>
            <a href="#contact" className={`font-bold px-3 py-2 rounded-md ${activeSection === "contact" ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20" : "text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400"} transition-colors`}>
              {getTranslatedText("contact")}
            </a>
          </div>
          
          <div className="flex items-center ml-6">
            <div className="relative">
              <button onClick={() => setShowLanguageSelector(!showLanguageSelector)} className="flex items-center justify-center p-2 rounded-lg transition-all space-x-1 mr-3 bg-transparent">
                <Globe className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <span className="font-bold text-sm uppercase text-gray-700 dark:text-gray-300">{language}</span>
              </button>
              
              {showLanguageSelector && <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg z-50 min-w-[250px]">
                  <div className="flex flex-row gap-2">
                    {languageOptions.filter(lang => lang.id !== language).map(lang => <button key={lang.id} onClick={() => handleLanguageChange(lang.id)} className="flex items-center space-x-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                          <span className="text-lg">{lang.flag}</span>
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{lang.name}</span>
                        </button>)}
                  </div>
                </div>}
            </div>
            
            <button type="button" onClick={handleThemeToggle} aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"} className="p-2.5 rounded-lg text-black dark:text-white transition-colors shadow-sm bg-transparent">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>
    </header>;
};

export default Header;
