
import { Book, Terminal, Briefcase, Award } from "lucide-react";

interface AboutProps {
  isEnglish: boolean;
}

const About = ({ isEnglish }: AboutProps) => {
  return (
    <section id="about" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {isEnglish ? "About Me" : "Sobre Mí"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-lg text-gray-300">
            {isEnglish 
              ? "I am a passionate scientist and developer with experience in industrial automation and web development. My academic background in physics and my programming experience allow me to approach complex problems from multiple perspectives."
              : "Soy un apasionado científico y desarrollador con experiencia en el campo de la automatización industrial y el desarrollo web. Mi formación académica en física y mi experiencia en programación me permiten abordar problemas complejos desde múltiples perspectivas."
            }
          </p>
          <p className="text-lg text-gray-300">
            {isEnglish
              ? "I specialize in creating technological solutions that combine hardware and software, always seeking innovation and efficiency in each project."
              : "Me especializo en la creación de soluciones tecnológicas que combinan hardware y software, siempre buscando la innovación y la eficiencia en cada proyecto."
            }
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="glass-card p-4">
              <Book className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">{isEnglish ? "Education" : "Educación"}</h3>
              <p className="text-sm text-gray-400">{isEnglish ? "Physics Degree" : "Licenciatura en Física"}</p>
            </div>
            <div className="glass-card p-4">
              <Terminal className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">{isEnglish ? "Development" : "Desarrollo"}</h3>
              <p className="text-sm text-gray-400">{isEnglish ? "Web & Industrial" : "Web & Industrial"}</p>
            </div>
            <div className="glass-card p-4">
              <Briefcase className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">{isEnglish ? "Experience" : "Experiencia"}</h3>
              <p className="text-sm text-gray-400">{isEnglish ? "1 year" : "1 año"}</p>
            </div>
            <div className="glass-card p-4">
              <Award className="w-6 h-6 mb-2" />
              <h3 className="font-semibold mb-1">{isEnglish ? "Projects" : "Proyectos"}</h3>
              <p className="text-sm text-gray-400">{isEnglish ? "+20 completed" : "+20 completados"}</p>
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
