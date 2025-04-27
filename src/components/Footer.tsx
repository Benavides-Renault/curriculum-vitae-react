import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({
  language
}) => {
  const currentYear = new Date().getFullYear();
  const getLanguageContent = (lang: string) => {
    const content: Record<string, {
      contactInfo: string;
      quickLinks: string;
      aboutMe: string;
      skills: string;
      projects: string;
      contact: string;
      extracurricular: string;
      socialMedia: string;
      rights: string;
      role: string;
    }> = {
      en: {
        contactInfo: "Contact Information",
        quickLinks: "Quick Links",
        aboutMe: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        extracurricular: "Extracurricular",
        socialMedia: "Social Media",
        rights: "All rights reserved.",
        role: "Full Stack Developer"
      },
      es: {
        contactInfo: "Información de Contacto",
        quickLinks: "Enlaces Rápidos",
        aboutMe: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        extracurricular: "Extracurricular",
        socialMedia: "Redes Sociales",
        rights: "Todos los derechos reservados.",
        role: "Desarrollador Full Stack"
      },
      fr: {
        contactInfo: "Coordonnées",
        quickLinks: "Liens Rapides",
        aboutMe: "À Propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
        extracurricular: "Parascolaire",
        socialMedia: "Réseaux Sociaux",
        rights: "Tous droits réservés.",
        role: "Développeur Full Stack"
      },
      de: {
        contactInfo: "Kontaktinformationen",
        quickLinks: "Schnelllinks",
        aboutMe: "Über Mich",
        skills: "Fähigkeiten",
        projects: "Projekte",
        contact: "Kontakt",
        extracurricular: "Außerschulisch",
        socialMedia: "Soziale Medien",
        rights: "Alle Rechte vorbehalten.",
        role: "Fullstack-Entwickler"
      }
    };
    return content[lang] || content.es;
  };
  const content = getLanguageContent(language);

  return (
    <footer className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Personal Info with Avatar */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Avatar className="w-40 h-40 border-4 border-gray-200 dark:border-gray-700 shadow-lg">
              <AvatarImage src="/img/yo.jpg" alt="Orlando I. Benavides Renault" />
              <AvatarFallback>OBR</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Orlando I. Benavides Renault</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{content.role}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {content.contactInfo}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span>+506 8347-6182</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span>orlanisbe02@hotmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span>Alajuela, Costa Rica</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {content.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.aboutMe}
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.skills}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.projects}
                </a>
              </li>
              <li>
                <a href="#extracurricular" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.extracurricular}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {content.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              {content.socialMedia}
            </h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Benavides-Renault" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/orlando-benavides/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Orlando I. Benavides Renault. {content.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
