
import { Book, Terminal, Briefcase, Award } from "lucide-react";

const About = ({ language }) => {
  const getLanguageContent = (lang) => {
    const content = {
      en: {
        title: "About Me",
        bio1: "I am a passionate scientist and developer with experience in industrial automation and web development. My academic background in physics and my programming experience allow me to approach complex problems from multiple perspectives.",
        bio2: "I specialize in creating technological solutions that combine hardware and software, always seeking innovation and efficiency in each project.",
        education: "Education",
        educationDetail: "Physics Degree",
        development: "Development",
        developmentDetail: "Web & Industrial",
        experience: "Experience",
        experienceDetail: "1 year",
        projects: "Projects",
        projectsDetail: "+20 completed"
      },
      es: {
        title: "Sobre Mí",
        bio1: "Soy un apasionado científico y desarrollador con experiencia en el campo de la automatización industrial y el desarrollo web. Mi formación académica en física y mi experiencia en programación me permiten abordar problemas complejos desde múltiples perspectivas.",
        bio2: "Me especializo en la creación de soluciones tecnológicas que combinan hardware y software, siempre buscando la innovación y la eficiencia en cada proyecto.",
        education: "Educación",
        educationDetail: "Licenciatura en Física",
        development: "Desarrollo",
        developmentDetail: "Web & Industrial",
        experience: "Experiencia",
        experienceDetail: "1 año",
        projects: "Proyectos",
        projectsDetail: "+20 completados"
      },
      fr: {
        title: "À Propos",
        bio1: "Je suis un scientifique et développeur passionné avec une expérience en automatisation industrielle et développement web. Ma formation académique en physique et mon expérience en programmation me permettent d'aborder des problèmes complexes sous de multiples perspectives.",
        bio2: "Je me spécialise dans la création de solutions technologiques qui combinent matériel et logiciel, toujours en recherche d'innovation et d'efficacité dans chaque projet.",
        education: "Éducation",
        educationDetail: "Diplôme en Physique",
        development: "Développement",
        developmentDetail: "Web & Industriel",
        experience: "Expérience",
        experienceDetail: "1 an",
        projects: "Projets",
        projectsDetail: "+20 complétés"
      },
      de: {
        title: "Über Mich",
        bio1: "Ich bin ein leidenschaftlicher Wissenschaftler und Entwickler mit Erfahrung in industrieller Automatisierung und Webentwicklung. Mein akademischer Hintergrund in Physik und meine Programmiererfahrung ermöglichen es mir, komplexe Probleme aus verschiedenen Perspektiven anzugehen.",
        bio2: "Ich bin spezialisiert auf die Erstellung technologischer Lösungen, die Hardware und Software kombinieren, immer auf der Suche nach Innovation und Effizienz in jedem Projekt.",
        education: "Ausbildung",
        educationDetail: "Physikstudium",
        development: "Entwicklung",
        developmentDetail: "Web & Industriell",
        experience: "Erfahrung",
        experienceDetail: "1 Jahr",
        projects: "Projekte",
        projectsDetail: "+20 abgeschlossen"
      }
    };
    
    return content[lang] || content.en;
  };
  
  const content = getLanguageContent(language);

  return (
    <section id="about" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        {content.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg text-gray-800 dark:text-gray-300">
            {content.bio1}
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-300">
            {content.bio2}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="glass-card p-4">
              <Book className="w-6 h-6 mb-2 text-black dark:text-white" />
              <h3 className="font-semibold mb-1 text-black dark:text-white">{content.education}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{content.educationDetail}</p>
            </div>
            <div className="glass-card p-4">
              <Terminal className="w-6 h-6 mb-2 text-black dark:text-white" />
              <h3 className="font-semibold mb-1 text-black dark:text-white">{content.development}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{content.developmentDetail}</p>
            </div>
            <div className="glass-card p-4">
              <Briefcase className="w-6 h-6 mb-2 text-black dark:text-white" />
              <h3 className="font-semibold mb-1 text-black dark:text-white">{content.experience}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{content.experienceDetail}</p>
            </div>
            <div className="glass-card p-4">
              <Award className="w-6 h-6 mb-2 text-black dark:text-white" />
              <h3 className="font-semibold mb-1 text-black dark:text-white">{content.projects}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{content.projectsDetail}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="/images/about-image-1.png" alt="About 1" className="w-full h-48 object-cover rounded-lg glass-card" />
          <img src="/images/about-image-2.png" alt="About 2" className="w-full h-48 object-cover rounded-lg glass-card" />
          <img src="/images/about-image-3.png" alt="About 3" className="w-full h-48 object-cover rounded-lg glass-card" />
          <img src="/images/about-image-4.png" alt="About 4" className="w-full h-48 object-cover rounded-lg glass-card" />
        </div>
      </div>
    </section>
  );
};

export default About;
