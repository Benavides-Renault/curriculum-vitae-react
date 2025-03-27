
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Phone, Mail, Home } from "lucide-react";

interface FooterProps {
  isEnglish: boolean;
}

const Footer = ({ isEnglish }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  const getLanguageContent = (lang: string) => {
    const content = {
      en: {
        contactInfo: "Contact Information",
        quickLinks: "Quick Links",
        aboutMe: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        socialMedia: "Social Media",
        rights: "All rights reserved."
      },
      es: {
        contactInfo: "Información de Contacto",
        quickLinks: "Enlaces Rápidos",
        aboutMe: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        socialMedia: "Redes Sociales",
        rights: "Todos los derechos reservados."
      },
      fr: {
        contactInfo: "Coordonnées",
        quickLinks: "Liens Rapides",
        aboutMe: "À Propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
        socialMedia: "Réseaux Sociaux",
        rights: "Tous droits réservés."
      },
      de: {
        contactInfo: "Kontaktinformationen",
        quickLinks: "Schnelllinks",
        aboutMe: "Über Mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
        socialMedia: "Soziale Medien",
        rights: "Alle Rechte vorbehalten."
      }
    };
    
    return content[lang as keyof typeof content] || content.en;
  };
  
  const content = getLanguageContent(isEnglish ? "en" : "es");

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              {content.contactInfo}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-white">+506 8347-6182</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-white">orlanisbe02@hotmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                <span className="text-gray-800 dark:text-white">Alajuela, Costa Rica</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              {content.quickLinks}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {content.aboutMe}
                </a>
              </li>
              <li>
                <a href="#technical-skills" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {content.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {content.projects}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {content.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              {content.socialMedia}
            </h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-white">
          <p>
            &copy; {currentYear} Orlando. {content.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
