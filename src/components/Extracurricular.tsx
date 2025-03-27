
import { Sword, Dumbbell, Tent, Music } from "lucide-react";

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
            image: "/images/activity-martial-arts.png"
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
            image: "/images/activity-powerlifting.png"
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
            image: "/images/activity-scout.png"
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
            image: "/images/activity-music.png"
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
            image: "/images/activity-martial-arts.png"
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
            image: "/images/activity-powerlifting.png"
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
            image: "/images/activity-scout.png"
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
            image: "/images/activity-music.png"
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
            image: "/images/activity-martial-arts.png"
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
            image: "/images/activity-powerlifting.png"
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
            image: "/images/activity-scout.png"
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
            image: "/images/activity-music.png"
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
            image: "/images/activity-martial-arts.png"
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
            image: "/images/activity-powerlifting.png"
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
            image: "/images/activity-scout.png"
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
            image: "/images/activity-music.png"
          }
        ]
      }
    };
    
    return content[lang as keyof typeof content] || content.es;
  };
  
  const content = getLanguageContent(language);

  return (
    <section id="extracurricular" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {content.title}
      </h2>
      
      <div className="space-y-12">
        {content.activities.map((activity, index) => (
          <div 
            key={index}
            className="glass-card p-6 grid grid-cols-1 md:grid-cols-2 gap-8 transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <activity.icon className="w-8 h-8" />
                <h3 className="text-2xl font-semibold">{activity.title}</h3>
              </div>
              <p className="text-gray-400">{activity.description}</p>
              <ul className="space-y-2">
                {activity.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-first md:order-last flex items-center justify-center">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-[300px] object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurricular;
