
import { Brain, Users, Presentation, Lightbulb, Clock, MessageSquare, Puzzle, Handshake, ShieldCheck, Target, Award, Flame } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface SoftSkillsProps {
  language: string;
}

const SoftSkills = ({ language }: SoftSkillsProps) => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  const getLanguageContent = (lang: string) => {
    const content = {
      en: {
        title: "Soft Skills",
        skills: [
          {
            icon: Brain,
            title: "Problem Solving",
            description: "Analytical thinking and creative solution development"
          },
          {
            icon: Users,
            title: "Teamwork",
            description: "Collaborative spirit and effective group dynamics"
          },
          {
            icon: Presentation,
            title: "Leadership",
            description: "Team guidance and project management"
          },
          {
            icon: Lightbulb,
            title: "Creativity",
            description: "Innovative thinking and original solutions"
          },
          {
            icon: Clock,
            title: "Time Management",
            description: "Efficient organization and prioritization"
          },
          {
            icon: MessageSquare,
            title: "Communication",
            description: "Clear and effective information exchange"
          },
          {
            icon: Puzzle,
            title: "Adaptability",
            description: "Flexibility to adjust to new situations and challenges"
          },
          {
            icon: Handshake,
            title: "Negotiation",
            description: "Building consensus and finding win-win solutions"
          },
          {
            icon: ShieldCheck,
            title: "Resilience",
            description: "Capacity to recover from difficulties and challenges"
          },
          {
            icon: Target,
            title: "Goal Orientation",
            description: "Focus on achieving specific targets and outcomes"
          },
          {
            icon: Award,
            title: "Self-Motivation",
            description: "Internal drive to accomplish tasks without external pressure"
          },
          {
            icon: Flame,
            title: "Passion",
            description: "Enthusiasm and dedication towards work and projects"
          }
        ]
      },
      es: {
        title: "Habilidades Blandas",
        skills: [
          {
            icon: Brain,
            title: "Resolución de Problemas",
            description: "Pensamiento analítico y desarrollo de soluciones creativas"
          },
          {
            icon: Users,
            title: "Trabajo en Equipo",
            description: "Espíritu colaborativo y dinámica efectiva de grupo"
          },
          {
            icon: Presentation,
            title: "Liderazgo",
            description: "Guía de equipo y gestión de proyectos"
          },
          {
            icon: Lightbulb,
            title: "Creatividad",
            description: "Pensamiento innovador y soluciones originales"
          },
          {
            icon: Clock,
            title: "Gestión del Tiempo",
            description: "Organización eficiente y priorización"
          },
          {
            icon: MessageSquare,
            title: "Comunicación",
            description: "Intercambio claro y efectivo de información"
          },
          {
            icon: Puzzle,
            title: "Adaptabilidad",
            description: "Flexibilidad para adaptarse a nuevas situaciones y desafíos"
          },
          {
            icon: Handshake,
            title: "Negociación",
            description: "Construyendo consenso y encontrando soluciones beneficiosas para todos"
          },
          {
            icon: ShieldCheck,
            title: "Resiliencia",
            description: "Capacidad para recuperarse de dificultades y desafíos"
          },
          {
            icon: Target,
            title: "Orientación a Objetivos",
            description: "Enfoque en alcanzar objetivos y resultados específicos"
          },
          {
            icon: Award,
            title: "Automotivación",
            description: "Impulso interno para realizar tareas sin presión externa"
          },
          {
            icon: Flame,
            title: "Pasión",
            description: "Entusiasmo y dedicación hacia el trabajo y los proyectos"
          }
        ]
      },
      fr: {
        title: "Compétences Personnelles",
        skills: [
          {
            icon: Brain,
            title: "Résolution de Problèmes",
            description: "Pensée analytique et développement de solutions créatives"
          },
          {
            icon: Users,
            title: "Travail d'Équipe",
            description: "Esprit collaboratif et dynamique de groupe efficace"
          },
          {
            icon: Presentation,
            title: "Leadership",
            description: "Guidance d'équipe et gestion de projet"
          },
          {
            icon: Lightbulb,
            title: "Créativité",
            description: "Pensée innovante et solutions originales"
          },
          {
            icon: Clock,
            title: "Gestion du Temps",
            description: "Organisation efficace et priorisation"
          },
          {
            icon: MessageSquare,
            title: "Communication",
            description: "Échange d'informations clair et efficace"
          },
          {
            icon: Puzzle,
            title: "Adaptabilité",
            description: "Flexibilité pour s'adapter aux nouvelles situations et défis"
          },
          {
            icon: Handshake,
            title: "Négociation",
            description: "Construire un consensus et trouver des solutions gagnant-gagnant"
          },
          {
            icon: ShieldCheck,
            title: "Résilience",
            description: "Capacité à se remettre des difficultés et des défis"
          },
          {
            icon: Target,
            title: "Orientation vers les Objectifs",
            description: "Focus sur l'atteinte d'objectifs et de résultats spécifiques"
          },
          {
            icon: Award,
            title: "Auto-motivation",
            description: "Motivation interne pour accomplir des tâches sans pression externe"
          },
          {
            icon: Flame,
            title: "Passion",
            description: "Enthousiasme et dévouement envers le travail et les projets"
          }
        ]
      },
      de: {
        title: "Soft Skills",
        skills: [
          {
            icon: Brain,
            title: "Problemlösung",
            description: "Analytisches Denken und kreative Lösungsentwicklung"
          },
          {
            icon: Users,
            title: "Teamarbeit",
            description: "Kollaborativer Geist und effektive Gruppendynamik"
          },
          {
            icon: Presentation,
            title: "Führung",
            description: "Teamführung und Projektmanagement"
          },
          {
            icon: Lightbulb,
            title: "Kreativität",
            description: "Innovatives Denken und originelle Lösungen"
          },
          {
            icon: Clock,
            title: "Zeitmanagement",
            description: "Effiziente Organisation und Priorisierung"
          },
          {
            icon: MessageSquare,
            title: "Kommunikation",
            description: "Klarer und effektiver Informationsaustausch"
          },
          {
            icon: Puzzle,
            title: "Anpassungsfähigkeit",
            description: "Flexibilität, um sich an neue Situationen und Herausforderungen anzupassen"
          },
          {
            icon: Handshake,
            title: "Verhandlung",
            description: "Konsensbildung und Finden von Win-Win-Lösungen"
          },
          {
            icon: ShieldCheck,
            title: "Resilienz",
            description: "Fähigkeit, sich von Schwierigkeiten und Herausforderungen zu erholen"
          },
          {
            icon: Target,
            title: "Zielorientierung",
            description: "Fokus auf das Erreichen spezifischer Ziele und Ergebnisse"
          },
          {
            icon: Award,
            title: "Selbstmotivation",
            description: "Innerer Antrieb, Aufgaben ohne äußeren Druck zu erledigen"
          },
          {
            icon: Flame,
            title: "Leidenschaft",
            description: "Begeisterung und Hingabe für Arbeit und Projekte"
          }
        ]
      }
    };
    
    return content[lang as keyof typeof content] || content.es;
  };
  
  const content = getLanguageContent(language);

  return (
    <section id="soft-skills" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
        {content.title}
      </h2>
      
      <div className="relative py-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {content.skills.map((skill, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div 
                  className={`h-full p-6 rounded-lg border border-border bg-card shadow-sm transition-all duration-300 skill-card ${
                    hoveredSkill === index ? 'scale-105 shadow-lg border-primary' : 'hover:shadow-md'
                  }`}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: hoveredSkill === index ? 'translateY(-5px) scale(1.05)' : 'translateY(0) scale(1)'
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="transition-all duration-300" style={{ 
                      transform: hoveredSkill === index ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0)' 
                    }}>
                      <skill.icon className={`w-8 h-8 text-primary transition-all duration-300 ${
                        hoveredSkill === index ? 'text-accent-foreground' : 'text-primary'
                      }`} />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:left-4 bg-background/80 hover:bg-background" />
          <CarouselNext className="right-2 lg:right-4 bg-background/80 hover:bg-background" />
        </Carousel>
      </div>
      
      <div className="flex justify-center mt-6 gap-2">
        <div className="flex space-x-1">
          {content.skills.map((_, index) => (
            <div
              key={index}
              className="h-2 w-2 rounded-full bg-muted transition-all duration-300 hover:bg-primary"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
