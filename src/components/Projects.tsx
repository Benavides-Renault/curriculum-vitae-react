import { useState } from 'react';
import {
  Github,
  ExternalLink,
  Building,
  Dumbbell,
  ShoppingBag,
  Code,
  Brain,
  Camera,
  Database,
  Terminal,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ProjectsProps {
  language: 'en' | 'es' | 'fr' | 'de';
}

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
  demoUrl: string;
  downloadUrl: string;
}

interface LanguageContent {
  title: string;
  demoText: string;
  codeText: string;
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const getLanguageContent = (lang: 'en' | 'es' | 'fr' | 'de'): LanguageContent => {
    const content: Record<string, LanguageContent> = {
      en: {
        title: 'Featured Projects',
        demoText: 'Demo',
        codeText: 'Code',
        projects: [
          {
            title: 'Titanium Fitness Gym',
            description:
              'Complete web platform for gym management, including membership system, routine tracking and user progress, and class schedule.',
            icon: Dumbbell,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
          {
            title: 'SpartanArmory Store',
            description:
              'E-commerce specialized in sports equipment and training items, with integrated payment system, inventory management and order tracking.',
            icon: ShoppingBag,
            image: '/img/spartamArmory_img.png',
            demoUrl: 'https://shop-spartan-armory.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/shop-spartan-armory',
          },
          {
            title: 'BatteryRoad: Service Tracking Demo',
            description:
              'Service tracking demo for Carretera Baterías Costa Rica, integrating Google Maps APIs for user management, order tracking, and service information.',
            icon: Building,
            image: '/img/battery_img.png',
            demoUrl: 'https://traking-2-arreglos-demo.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/traking-2-arreglos-demo',
          },
          {
            title: 'Rick and Morty: Status Tracker',
            description:
              'Rick and Morty platform using the updated API to display character status: alive, dead, or missing.',
            icon: Code,
            image: '/img/rick_morty_img.png',
            demoUrl: 'https://vercel.com/dark-masters-projects/rick-and-morty-api-n2-proyect',
            downloadUrl: 'https://github.com/Benavides-Renault/Rick-and-Morty-Api-n2-proyect',
          },
          {
            title: 'PokéWorld: Multigenerational Explorer',
            description:
              'Multigenerational Pokédex using the Pokémon API, allowing users to explore, search and filter Pokémon from all available generations.',
            icon: Brain,
            image: '/img/pokemon_img.png',
            demoUrl: 'https://pokedex-orlando-vite.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/Pokedex',
          },
          {
            title: 'Photography Portfolio',
            description:
              'Modern photography portfolio with gallery, client management, and integrated booking system for photography sessions.',
            icon: Camera,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
          {
            title: 'Smart Home Dashboard - in progress',
            description:
              'Centralized dashboard for smart home devices with automation rules, energy consumption tracking, and mobile app integration.',
            icon: Building,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
        ],
      },
      es: {
        title: 'Proyectos Destacados',
        demoText: 'Demo',
        codeText: 'Código',
        projects: [
          {
            title: 'Titanium Fitness Gym',
            description:
              'Plataforma web completa para gestión de gimnasio, incluyendo sistema de membresías, seguimiento de rutinas y progreso de usuarios, y calendario de clases.',
            icon: Dumbbell,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
          {
            title: 'SpartanArmory Tienda',
            description:
              'E-commerce especializado en equipamiento deportivo y artículos de entrenamiento, con sistema de pagos integrado, gestión de inventario y seguimiento de pedidos.',
            icon: ShoppingBag,
            image: '/img/spartamArmory_img.png',
            demoUrl: 'https://shop-spartan-armory.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/shop-spartan-armory',
          },
          {
            title: 'BatteryRoad: Demo de Rastreo de Servicios',
            description:
              'SDemo de rastreo de servicio para Carretera Baterías Costa Rica, integrando APIs de Google Maps para manejo de usuarios, seguimiento de órdenes e información de servicios.',
            icon: Building,
            image: '/img/battery_img.png',
            demoUrl: 'https://traking-2-arreglos-demo.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/traking-2-arreglos-demo',
          },
          {
            title: 'Rick y Morty: Rastreador de Estados',
            description:
              'Plataforma de Rick y Morty utilizando la API actualizada para mostrar el estado de los personajes: vivos, muertos o desaparecidos.',
            icon: Code,
            image: '/img/rick_morty_img.png',
            demoUrl: 'https://rick-and-morty-api-n2-proyect.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/Rick-and-Morty-Api-n2-proyect',
          },
          {
            title: 'PokéMundo: Explorador Multigeneracional',
            description:
              'Pokédex multigeneracional utilizando la API de Pokémon, que permite explorar, buscar y filtrar Pokémon de todas las generaciones disponibles.',
            icon: Brain,
            image: '/img/pokemon_img.png',
            demoUrl: 'https://pokedex-orlando-vite.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/Pokedex',
          },
          {
            title: 'Portafolio de Fotografía',
            description:
              'Portafolio de fotografía moderno con galería, gestión de clientes y sistema de reservas integrado para sesiones fotográficas.',
            icon: Camera,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
          {
            title: 'Panel de Control para Hogar Inteligente - en progreso',
            description:
              'Panel centralizado para dispositivos de hogar inteligente con reglas de automatización, seguimiento del consumo de energía e integración de aplicaciones móviles.',
            icon: Building,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
        ],
      },
      fr: {
        title: 'Projets Vedettes',
        demoText: 'Démo',
        codeText: 'Code',
        projects: [
          {
            title: 'Titanium Fitness Gym',
            description:
              "Plateforme web complète pour la gestion de gymnase, comprenant un système d'adhésion, un suivi des routines et des progrès des utilisateurs, et un calendrier des cours.",
            icon: Dumbbell,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
          {
            title: 'SpartanArmory Boutique',
            description:
              "E-commerce spécialisé dans l'équipement sportif et les articles d'entraînement, avec système de paiement intégré, gestion des stocks et suivi des commandes.",
            icon: ShoppingBag,
            image: '/img/spartamArmory_img.png',
            demoUrl: 'https://shop-spartan-armory.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/shop-spartan-armory',
          },
          {
            title: 'BatteryRoad : Démo de Suivi de Services',
            description:
              'Démo de suivi de service pour Carretera Baterías Costa Rica, intégrant les APIs Google Maps pour la gestion des utilisateurs, le suivi des commandes et les informations sur les services.',
            icon: Building,
            image: '/img/battery_img.png',
            demoUrl: 'https://traking-2-arreglos-demo.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/traking-2-arreglos-demo',
          },
          {
            title: 'Rick et Morty : Suivi des Statuts',
            description:
              "Plateforme Rick et Morty utilisant l'API mise à jour pour afficher l'état des personnages : vivants, morts ou disparus.",
            icon: Code,
            image: '/img/rick_morty_img.png',
            demoUrl: 'https://rick-and-morty-api-n2-proyect.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/Rick-and-Morty-Api-n2-proyect',
          },
          {
            title: 'PokéMonde : Explorateur Multigénération',
            description:
              "Pokédex multigénération utilisant l'API Pokémon, permettant aux utilisateurs d'explorer, rechercher et filtrer des Pokémon de toutes les générations disponibles.",
            icon: Brain,
            image: '/img/pokemon_img.png',
            demoUrl: 'https://pokedex-orlando-vite.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/Pokedex',
          },
          {
            title: 'Portfolio de Photographie',
            description:
              'Portfolio de photographie moderne avec galerie, gestion des clients et système de réservation intégré pour les séances photo.',
            icon: Camera,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
          {
            title: 'Tableau de Bord Maison Intelligente - en cours',
            description:
              "Tableau de bord centralisé pour les appareils domestiques intelligents avec règles d'automatisation, suivi de la consommation d'énergie e intégration d'applications mobiles.",
            icon: Building,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
        ],
      },
      de: {
        title: 'Vorgestellte Projekte',
        demoText: 'Demo',
        codeText: 'Code',
        projects: [
          {
            title: 'Titanium Fitness Gym',
            description:
              'Komplette Webplattform für Fitnessstudio-Management, einschließlich Mitgliedschaftssystem, Routine-Tracking und Benutzerfortschritt sowie Kursplan.',
            icon: Dumbbell,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
          {
            title: 'SpartanArmory Shop',
            description:
              'E-Commerce spezialisiert auf Sportausrüstung und Trainingsartikel, mit integriertem Zahlungssystem, Bestandsverwaltung und Auftragsverfolgung.',
            icon: ShoppingBag,
            image: '/img/spartamArmory_img.png',
            demoUrl: 'https://shop-spartan-armory.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/shop-spartan-armory',
          },
          {
            title: 'BatteryRoad: Service-Tracking-Demo',
            description:
              'Service-Tracking-Demo für Carretera Baterías Costa Rica, mit Integration von Google-Maps-APIs für Benutzerverwaltung, Auftragsverfolgung und Serviceinformationen.',
            icon: Building,
            image: '/img/battery_img.png',
            demoUrl: 'https://traking-2-arreglos-demo.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/traking-2-arreglos-demo',
          },
          {
            title: 'Rick und Morty: Status-Tracker',
            description:
              'Rick-und-Morty-Plattform mit aktualisierter API zur Anzeige des Charakterstatus: lebendig, tot oder vermisst.',
            icon: Code,
            image: '/img/rick_morty_img.png',
            demoUrl: 'https://rick-and-morty-api-n2-proyect.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/Rick-and-Morty-Api-n2-proyect',
          },
          {
            title: 'PokéWelt: Multigenerationen-Explorer',
            description:
              'Multigenerationale Pokédex basierend auf der Pokémon-API, mit der Benutzer Pokémon aller verfügbaren Generationen durchsuchen, suchen und filtern können.',
            icon: Brain,
            image: '/img/pokemon_img.png',
            demoUrl: 'https://pokedex-orlando-vite.vercel.app/',
            downloadUrl: 'https://github.com/Benavides-Renault/Pokedex',
          },
          {
            title: 'Fotografie-Portfolio',
            description:
              'Modernes Fotografie-Portfolio mit Galerie, Kundenverwaltung und integriertem Buchungssystem für Fotosessions.',
            icon: Camera,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
          {
            title: 'Smart Home Dashboard - im Gange',
            description:
              'Zentralisiertes Dashboard für Smart-Home-Geräte mit Automatisierungsregeln, Energieverbrauchsverfolgung und mobiler App-Integration.',
            icon: Building,
            image: '/images/project-gym.png',
            demoUrl: '#',
            downloadUrl: '#',
          },
        ],
      },
    };

    return content[lang] || content.es;
  };

  const content = getLanguageContent(language);

  return (
    <section id="projects" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        {content.title}
      </h2>
      
      <div className="relative py-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {content.projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3">
                <div 
                  className={`glass-card overflow-hidden rounded-lg transform transition-all duration-300 ${
                    hoveredProject === index ? 'scale-[1.02] shadow-lg' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <project.icon className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-white dark:bg-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {content.demoText}
                      </a>
                      <a
                        href={project.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {content.codeText}
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-background/80 hover:bg-background" />
          <CarouselNext className="hidden md:flex bg-background/80 hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
