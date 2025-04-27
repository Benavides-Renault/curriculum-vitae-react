import { Sword, Dumbbell, Tent, Music } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ExtracurricularProps {
  language: string;
}

const Extracurricular = ({ language }: ExtracurricularProps) => {
  const getLanguageContent = (lang: string) => {
    const content = {
      en: {
        title: "Extracurricular Activities",
        activities: [
          {
            icon: Sword,
            title: "Martial Arts",
            description: "Dedication and experience in multiple martial disciplines.",
            achievements: [
              "Black Belt in Karate",
              "Active Judo Practitioner",
              "Training in Jiu-jitsu",
              "Boxing Experience"
            ],
            image: "/img/deporte.jpg"
          },
          {
            icon: Dumbbell,
            title: "Powerlifting",
            description: "Professional competitor and certified judge.",
            achievements: [
              "Competitor at the national level",
              "Certified judge of national competitions",
              "Experience in event organization",
              "Technical advice to other athletes"
            ],
            image: "/img/Power.jpg"
          },
          {
            icon: Tent,
            title: "Scout",
            description: "Leadership and personal development in the Scout movement.",
            achievements: [
              "Maximum Scout advances obtained",
              "National recognition",
              "Participation in international events",
              "Mentor of new generations"
            ],
            image: "/img/Scouts.jpg"
          },
          {
            icon: Music,
            title: "Music",
            description: "Artistic development through music.",
            achievements: [
              "Experienced saxophonist",
              "Participation in musical ensembles",
              "Presentations at events",
              "Continuous musical training"
            ],
            image: "/img/Musica.jpg"
          }
        ]
      },
      es: {
        title: "Actividades Extracurriculares",
        activities: [
          {
            icon: Sword,
            title: "Artes Marciales",
            description: "Dedicación y experiencia en múltiples disciplinas marciales.",
            achievements: [
              "Cinturón negro en Karate",
              "Practicante activo de Judo",
              "Entrenamiento en Jiu-jitsu",
              "Experiencia en Boxeo"
            ],
            image: "/img/deporte.jpg"
          },
          {
            icon: Dumbbell,
            title: "Powerlifting",
            description: "Competidor profesional y juez certificado.",
            achievements: [
              "Competidor a nivel nacional",
              "Juez certificado de competencias nacionales",
              "Experiencia en organización de eventos",
              "Asesoramiento técnico a otros atletas"
            ],
            image: "/img/Power.jpg"
          },
          {
            icon: Tent,
            title: "Scout",
            description: "Liderazgo y desarrollo personal en el movimiento Scout.",
            achievements: [
              "Máximos adelantos Scout obtenidos",
              "Reconocimiento a nivel nacional",
              "Participación en eventos internacionales",
              "Mentor de nuevas generaciones"
            ],
            image: "/img/Scouts.jpg"
          },
          {
            icon: Music,
            title: "Música",
            description: "Desarrollo artístico a través de la música.",
            achievements: [
              "Saxofonista experimentado",
              "Participación en ensambles musicales",
              "Presentaciones en eventos",
              "Formación musical continua"
            ],
            image: "/img/Musica.jpg"
          }
        ]
      },
      fr: {
        title: "Activités Extracurriculaires",
        activities: [
          {
            icon: Sword,
            title: "Arts Martiaux",
            description: "Dévouement et expérience dans plusieurs disciplines martiales.",
            achievements: [
              "Ceinture noire en Karaté",
              "Pratiquant actif de Judo",
              "Formation en Jiu-jitsu",
              "Expérience en Boxe"
            ],
            image: "/img/deporte.jpg"
          },
          {
            icon: Dumbbell,
            title: "Powerlifting",
            description: "Compétiteur professionnel et juge certifié.",
            achievements: [
              "Compétiteur au niveau national",
              "Juge certifié de compétitions nationales",
              "Expérience en organisation d'événements",
              "Conseil technique à d'autres athlètes"
            ],
            image: "/img/Power.jpg"
          },
          {
            icon: Tent,
            title: "Scout",
            description: "Leadership et développement personnel dans le mouvement Scout.",
            achievements: [
              "Progrès Scout maximum obtenus",
              "Reconnaissance nationale",
              "Participation à des événements internationaux",
              "Mentor des nouvelles générations"
            ],
            image: "/img/Scouts.jpg"
          },
          {
            icon: Music,
            title: "Musique",
            description: "Développement artistique à travers la musique.",
            achievements: [
              "Saxophoniste expérimenté",
              "Participation à des ensembles musicaux",
              "Présentations lors d'événements",
              "Formation musicale continue"
            ],
            image: "/img/Musica.jpg"
          }
        ]
      },
      de: {
        title: "Außerschulische Aktivitäten",
        activities: [
          {
            icon: Sword,
            title: "Kampfkünste",
            description: "Engagement und Erfahrung in mehreren Kampfdisziplinen.",
            achievements: [
              "Schwarzer Gürtel in Karate",
              "Aktiver Judo-Praktiker",
              "Training in Jiu-jitsu",
              "Erfahrung im Boxen"
            ],
            image: "/img/deporte.jpg"
          },
          {
            icon: Dumbbell,
            title: "Powerlifting",
            description: "Professioneller Wettkämpfer und zertifizierter Richter.",
            achievements: [
              "Wettkämpfer auf nationaler Ebene",
              "Zertifizierter Richter für nationale Wettbewerbe",
              "Erfahrung in der Veranstaltungsorganisation",
              "Technische Beratung für andere Athleten"
            ],
            image: "/img/Power.jpg"
          },
          {
            icon: Tent,
            title: "Pfadfinder",
            description: "Führung und persönliche Entwicklung in der Pfadfinderbewegung.",
            achievements: [
              "Maximale Pfadfinderfortschritte erreicht",
              "Nationale Anerkennung",
              "Teilnahme an internationalen Veranstaltungen",
              "Mentor für neue Generationen"
            ],
            image: "/img/Scouts.jpg"
          },
          {
            icon: Music,
            title: "Musik",
            description: "Künstlerische Entwicklung durch Musik.",
            achievements: [
              "Erfahrener Saxophonist",
              "Teilnahme an Musikensembles",
              "Präsentationen bei Veranstaltungen",
              "Kontinuierliche musikalische Ausbildung"
            ],
            image: "/img/Musica.jpg"
          }
        ]
      }
    };
    
    return content[lang as keyof typeof content] || content.es;
  };
  
  const content = getLanguageContent(language);

  return (
    <section id="extracurricular" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        {content.title}
      </h2>
      
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            slidesToScroll: 1
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {content.activities.map((activity, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                <div className="glass-card p-6 h-full transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <activity.icon className="w-8 h-8 text-black dark:text-white" />
                      <h3 className="text-2xl font-semibold text-black dark:text-white">{activity.title}</h3>
                    </div>
                    <p className="text-gray-800 dark:text-white">{activity.description}</p>
                    <ul className="space-y-2">
                      {activity.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-gray-800 dark:text-white">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className="w-full h-[350px] object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Extracurricular;
