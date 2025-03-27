
import { Code, Cpu, Atom, Brain, Workflow } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TechnicalSkillsProps {
  language: string;
}

const TechnicalSkills = ({ language }: TechnicalSkillsProps) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

  const getLanguageContent = (lang: string) => {
    const content = {
      en: {
        title: "Technical Skills",
        skills: [
          {
            icon: <Code className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Web Development",
            tech: "JavaScript • HTML • CSS • React",
            description: "Experience in modern web application development using the latest technologies. Specialized in React and its ecosystem, creating interactive and responsive interfaces. Mastery of modern JavaScript and its frameworks."
          },
          {
            icon: <Brain className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Python and Data Science",
            tech: "Python • NumPy • Pandas • Machine Learning",
            description: "Development of advanced solutions using Python for data analysis and machine learning. Experience in processing and analyzing large datasets. Implementation of predictive models and machine learning algorithms."
          },
          {
            icon: <Cpu className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "PLC and Automation",
            tech: "Industrial Automation • Process Control",
            description: "Design and implementation of industrial control systems using PLCs. Experience in programming logic controllers and SCADA systems. Optimization of industrial processes through automation."
          },
          {
            icon: <Atom className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Physics and Mathematics",
            tech: "Analysis • Modeling • Problem Solving",
            description: "Solid background in physics and mathematics applied to industrial problems. Ability to model and analyze complex systems. Application of physical principles in engineering solutions."
          },
          {
            icon: <Workflow className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Process Automation",
            tech: "Optimization • Efficiency • Control",
            description: "Design and implementation of automated systems for industrial processes. Integration of technologies to improve operational efficiency. Development of customized solutions according to specific needs."
          }
        ]
      },
      es: {
        title: "Habilidades Técnicas",
        skills: [
          {
            icon: <Code className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Desarrollo Web",
            tech: "JavaScript • HTML • CSS • React",
            description: "Experiencia en desarrollo de aplicaciones web modernas utilizando las últimas tecnologías. Especializado en React y su ecosistema, creando interfaces interactivas y responsivas. Dominio de JavaScript moderno y sus frameworks."
          },
          {
            icon: <Brain className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Python y Ciencia de Datos",
            tech: "Python • NumPy • Pandas • Machine Learning",
            description: "Desarrollo de soluciones avanzadas utilizando Python para análisis de datos y machine learning. Experiencia en procesamiento y análisis de grandes conjuntos de datos. Implementación de modelos predictivos y algoritmos de aprendizaje automático."
          },
          {
            icon: <Cpu className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "PLC y Automatización",
            tech: "Automatización Industrial • Control de Procesos",
            description: "Diseño e implementación de sistemas de control industrial utilizando PLCs. Experiencia en programación de controladores lógicos y sistemas SCADA. Optimización de procesos industriales mediante automatización."
          },
          {
            icon: <Atom className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Física y Matemáticas",
            tech: "Análisis • Modelado • Resolución de Problemas",
            description: "Sólida formación en física y matemáticas aplicadas a problemas industriales. Capacidad para modelar y analizar sistemas complejos. Aplicación de principios físicos en soluciones de ingeniería."
          },
          {
            icon: <Workflow className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Automatización de Procesos",
            tech: "Optimización • Eficiencia • Control",
            description: "Diseño e implementación de sistemas automatizados para procesos industriales. Integración de tecnologías para mejorar la eficiencia operativa. Desarrollo de soluciones personalizadas según necesidades específicas."
          }
        ]
      },
      fr: {
        title: "Compétences Techniques",
        skills: [
          {
            icon: <Code className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Développement Web",
            tech: "JavaScript • HTML • CSS • React",
            description: "Expérience dans le développement d'applications web modernes utilisant les dernières technologies. Spécialisé dans React et son écosystème, créant des interfaces interactives et réactives. Maîtrise du JavaScript moderne et de ses frameworks."
          },
          {
            icon: <Brain className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Python et Science des Données",
            tech: "Python • NumPy • Pandas • Machine Learning",
            description: "Développement de solutions avancées utilisant Python pour l'analyse de données et le machine learning. Expérience dans le traitement et l'analyse de grands ensembles de données. Mise en œuvre de modèles prédictifs et d'algorithmes d'apprentissage automatique."
          },
          {
            icon: <Cpu className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "PLC et Automatisation",
            tech: "Automatisation Industrielle • Contrôle de Processus",
            description: "Conception et mise en œuvre de systèmes de contrôle industriel utilisant des PLCs. Expérience en programmation de contrôleurs logiques et de systèmes SCADA. Optimisation des processus industriels par l'automatisation."
          },
          {
            icon: <Atom className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Physique et Mathématiques",
            tech: "Analyse • Modélisation • Résolution de Problèmes",
            description: "Solide formation en physique et en mathématiques appliquées aux problèmes industriels. Capacité à modéliser et à analyser des systèmes complexes. Application des principes physiques dans les solutions d'ingénierie."
          },
          {
            icon: <Workflow className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Automatisation des Processus",
            tech: "Optimisation • Efficacité • Contrôle",
            description: "Conception et mise en œuvre de systèmes automatisés pour les processus industriels. Intégration de technologies pour améliorer l'efficacité opérationnelle. Développement de solutions personnalisées selon les besoins spécifiques."
          }
        ]
      },
      de: {
        title: "Technische Fähigkeiten",
        skills: [
          {
            icon: <Code className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Web-Entwicklung",
            tech: "JavaScript • HTML • CSS • React",
            description: "Erfahrung in der Entwicklung moderner Webanwendungen mit den neuesten Technologien. Spezialisiert auf React und sein Ökosystem, Erstellung interaktiver und responsiver Benutzeroberflächen. Beherrschung von modernem JavaScript und seinen Frameworks."
          },
          {
            icon: <Brain className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Python und Datenwissenschaft",
            tech: "Python • NumPy • Pandas • Machine Learning",
            description: "Entwicklung fortschrittlicher Lösungen mit Python für Datenanalyse und maschinelles Lernen. Erfahrung in der Verarbeitung und Analyse großer Datensätze. Implementierung von Vorhersagemodellen und Algorithmen für maschinelles Lernen."
          },
          {
            icon: <Cpu className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "SPS und Automatisierung",
            tech: "Industrieautomatisierung • Prozesssteuerung",
            description: "Entwurf und Implementierung von industriellen Steuerungssystemen mit SPSen. Erfahrung in der Programmierung von Steuerungslogik und SCADA-Systemen. Optimierung industrieller Prozesse durch Automatisierung."
          },
          {
            icon: <Atom className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Physik und Mathematik",
            tech: "Analyse • Modellierung • Problemlösung",
            description: "Solide Ausbildung in Physik und Mathematik angewandt auf industrielle Probleme. Fähigkeit, komplexe Systeme zu modellieren und zu analysieren. Anwendung physikalischer Prinzipien in Ingenieurlösungen."
          },
          {
            icon: <Workflow className="w-8 h-8 mr-4 text-black dark:text-white transition-all duration-300" />,
            title: "Prozessautomatisierung",
            tech: "Optimierung • Effizienz • Kontrolle",
            description: "Entwurf und Implementierung automatisierter Systeme für industrielle Prozesse. Integration von Technologien zur Verbesserung der Betriebseffizienz. Entwicklung maßgeschneiderter Lösungen entsprechend spezifischer Anforderungen."
          }
        ]
      }
    };
    
    return content[lang as keyof typeof content] || content.es;
  };
  
  const content = getLanguageContent(language);

  return (
    <section id="technical-skills" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        {content.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.skills.map((skill, index) => (
          <div 
            key={index}
            className={cn(
              "glass-card p-8 smooth-fade skill-card cursor-pointer transition-all duration-500",
              activeCard === index ? "transform scale-105 shadow-xl z-10" : ""
            )}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardLeave}
            onTouchStart={() => handleCardHover(index)}
            onTouchEnd={handleCardLeave}
          >
            <div className={cn(
              "flex items-center mb-6 transition-all duration-500",
              activeCard === index ? "transform scale-110" : ""
            )}>
              <div className={cn(
                "transition-all duration-500",
                activeCard === index ? "transform scale-125" : ""
              )}>
                {skill.icon}
              </div>
              <h3 className={cn(
                "text-2xl font-semibold text-black dark:text-white transition-all duration-500",
                activeCard === index ? "text-3xl" : ""
              )}>
                {skill.title}
              </h3>
            </div>
            <div className="space-y-4">
              <p className={cn(
                "text-lg text-black dark:text-gray-400 transition-all duration-500",
                activeCard === index ? "text-xl font-medium" : ""
              )}>
                {skill.tech}
              </p>
              <p className={cn(
                "text-gray-800 dark:text-gray-400 transition-all duration-500",
                activeCard === index ? "text-lg leading-relaxed" : ""
              )}>
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
