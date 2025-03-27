
import { Phone, Globe, Download } from "lucide-react";

interface HeroProps {
  language: string;
}

const Hero = ({ language }: HeroProps) => {
  const getLanguageContent = (lang: string) => {
    const content = {
      en: {
        greeting: "Hi, I'm Orlando",
        description: "Scientist and Programmer passionate about technology and industrial electronics. I specialize in web development and industrial automation, combining my knowledge in programming and electronics to create innovative solutions.",
        contactMe: "Contact Me",
        viewProjects: "View Projects",
        downloadCV: "Download CV"
      },
      es: {
        greeting: "Hola, soy Orlando",
        description: "Científico y Programador apasionado por la tecnología y la electrónica industrial. Me especializo en desarrollo web y automatización industrial, combinando mis conocimientos en programación y electrónica para crear soluciones innovadoras.",
        contactMe: "Contáctame",
        viewProjects: "Ver Proyectos",
        downloadCV: "Descargar CV"
      },
      fr: {
        greeting: "Bonjour, je suis Orlando",
        description: "Scientifique et Programmeur passionné par la technologie et l'électronique industrielle. Je me spécialise dans le développement web et l'automatisation industrielle, combinant mes connaissances en programmation et en électronique pour créer des solutions innovantes.",
        contactMe: "Contactez-moi",
        viewProjects: "Voir les Projets",
        downloadCV: "Télécharger CV"
      },
      de: {
        greeting: "Hallo, ich bin Orlando",
        description: "Wissenschaftler und Programmierer mit Leidenschaft für Technologie und Industrieelektronik. Ich bin spezialisiert auf Webentwicklung und industrielle Automatisierung und kombiniere mein Wissen in Programmierung und Elektronik, um innovative Lösungen zu schaffen.",
        contactMe: "Kontaktieren Sie mich",
        viewProjects: "Projekte ansehen",
        downloadCV: "Lebenslauf herunterladen"
      }
    };
    
    return content[lang as keyof typeof content] || content.es;
  };
  
  const content = getLanguageContent(language);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="smooth-fade">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {content.greeting}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="glass-card px-6 py-3 text-white hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {content.contactMe}
            </a>
            <a 
              href="#projects" 
              className="glass-card px-6 py-3 text-white hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              {content.viewProjects}
            </a>
            <a 
              href="/cv.pdf" 
              download
              className="glass-card px-6 py-3 text-white hover:bg-white/20 transition-colors duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {content.downloadCV}
            </a>
          </div>
        </div>
        <div className="glass-card p-4 smooth-fade flex items-center justify-center" style={{animationDelay: "0.2s"}}>
          <img 
            src="/images/profile-photo.png"
            alt="Orlando" 
            className="w-full h-[350px] object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
