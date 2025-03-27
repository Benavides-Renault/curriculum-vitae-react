
import { Github, ExternalLink, Building, Dumbbell, ShoppingBag, Code, Brain, Camera, Database, Terminal } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const Projects = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const projectsPerView = isMobile ? 1 : 3;
  const carouselRef = useRef(null);

  const getLanguageContent = (lang) => {
    const content = {
      en: {
        title: "Featured Projects",
        demoText: "Demo",
        codeText: "Code",
        projects: [
          {
            title: "Titanium Fitness Gym",
            description: "Complete web platform for gym management, including membership system, routine tracking and user progress, and class schedule.",
            icon: Dumbbell,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "SpartanArmory Store",
            description: "E-commerce specialized in sports equipment and training items, with integrated payment system, inventory management and order tracking.",
            icon: ShoppingBag,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Institutional Renovation",
            description: "Institutional management system that modernizes administrative processes, including document management, internal communications and project tracking.",
            icon: Building,
            image: "/images/project-institutional.png", 
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "AI Code Assistant",
            description: "Intelligent code assistant that helps developers write, debug and optimize code, with support for multiple programming languages and frameworks.",
            icon: Code,
            image: "/images/project-store.png",
            demoUrl: "#", 
            downloadUrl: "#"
          },
          {
            title: "Neural Network Visualizer",
            description: "Educational tool that visualizes neural networks in real-time, showing how they learn and process information during training.",
            icon: Brain,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Photography Portfolio",
            description: "Modern photography portfolio with gallery, client management, and integrated booking system for photography sessions.",
            icon: Camera,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Database Management System",
            description: "Custom database management system with visual query builder, data visualization, and automated backups.",
            icon: Database,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Command Line Toolkit",
            description: "Comprehensive command line toolkit with productivity tools, file management, and system monitoring capabilities.",
            icon: Terminal,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Smart Home Dashboard",
            description: "Centralized dashboard for smart home devices with automation rules, energy consumption tracking, and mobile app integration.",
            icon: Building,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Social Media Analytics",
            description: "Social media analytics platform with engagement metrics, audience insights, and content performance tracking.",
            icon: ShoppingBag,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          }
        ]
      },
      es: {
        title: "Proyectos Destacados",
        demoText: "Demo",
        codeText: "Código",
        projects: [
          {
            title: "Titanium Fitness Gym",
            description: "Plataforma web completa para gestión de gimnasio, incluyendo sistema de membresías, seguimiento de rutinas y progreso de usuarios, y calendario de clases.",
            icon: Dumbbell,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "SpartanArmory Tienda",
            description: "E-commerce especializado en equipamiento deportivo y artículos de entrenamiento, con sistema de pagos integrado, gestión de inventario y seguimiento de pedidos.",
            icon: ShoppingBag,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Renovación Institucional",
            description: "Sistema de gestión institucional que moderniza procesos administrativos, incluyendo gestión documental, comunicaciones internas y seguimiento de proyectos.",
            icon: Building,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Asistente de Código IA",
            description: "Asistente de código inteligente que ayuda a los desarrolladores a escribir, depurar y optimizar código, con soporte para múltiples lenguajes de programación y frameworks.",
            icon: Code,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Visualizador de Redes Neuronales",
            description: "Herramienta educativa que visualiza redes neuronales en tiempo real, mostrando cómo aprenden y procesan información durante el entrenamiento.",
            icon: Brain,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Portafolio de Fotografía",
            description: "Portafolio de fotografía moderno con galería, gestión de clientes y sistema de reservas integrado para sesiones fotográficas.",
            icon: Camera,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Sistema de Gestión de Bases de Datos",
            description: "Sistema de gestión de bases de datos personalizado con constructor visual de consultas, visualización de datos y copias de seguridad automatizadas.",
            icon: Database,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Kit de Herramientas de Línea de Comandos",
            description: "Kit completo de herramientas de línea de comandos con herramientas de productividad, gestión de archivos y capacidades de monitoreo del sistema.",
            icon: Terminal,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Panel de Control para Hogar Inteligente",
            description: "Panel centralizado para dispositivos de hogar inteligente con reglas de automatización, seguimiento del consumo de energía e integración de aplicaciones móviles.",
            icon: Building,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Análisis de Redes Sociales",
            description: "Plataforma de análisis de redes sociales con métricas de participación, información sobre la audiencia y seguimiento del rendimiento del contenido.",
            icon: ShoppingBag,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          }
        ]
      },
      fr: {
        title: "Projets Vedettes",
        demoText: "Démo",
        codeText: "Code",
        projects: [
          {
            title: "Titanium Fitness Gym",
            description: "Plateforme web complète pour la gestion de gymnase, comprenant un système d'adhésion, un suivi des routines et des progrès des utilisateurs, et un calendrier des cours.",
            icon: Dumbbell,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "SpartanArmory Boutique",
            description: "E-commerce spécialisé dans l'équipement sportif et les articles d'entraînement, avec système de paiement intégré, gestion des stocks et suivi des commandes.",
            icon: ShoppingBag,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Rénovation Institutionnelle",
            description: "Système de gestion institutionnelle qui modernise les processus administratifs, y compris la gestion documentaire, les communications internes et le suivi des projets.",
            icon: Building,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Assistant de Code IA",
            description: "Assistant de code intelligent qui aide les développeurs à écrire, déboguer et optimiser le code, avec prise en charge de plusieurs langages de programmation et frameworks.",
            icon: Code,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Visualiseur de Réseaux Neuronaux",
            description: "Outil éducatif qui visualise les réseaux neuronaux en temps réel, montrant comment ils apprennent et traitent l'information pendant l'entraînement.",
            icon: Brain,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Portfolio de Photographie",
            description: "Portfolio de photographie moderne avec galerie, gestion des clients et système de réservation intégré pour les séances photo.",
            icon: Camera,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Système de Gestion de Base de Données",
            description: "Système de gestion de base de données personnalisé avec constructeur visuel de requêtes, visualisation de données et sauvegardes automatisées.",
            icon: Database,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Boîte à Outils en Ligne de Commande",
            description: "Boîte à outils complète en ligne de commande avec outils de productivité, gestion de fichiers et capacités de surveillance du système.",
            icon: Terminal,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Tableau de Bord Maison Intelligente",
            description: "Tableau de bord centralisé pour les appareils domestiques intelligents avec règles d'automatisation, suivi de la consommation d'énergie e intégration d'applications mobiles.",
            icon: Building,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Analytique des Médias Sociaux",
            description: "Plateforme d'analyse des médias sociaux avec métriques d'engagement, informations sur l'audience et suivi des performances du contenu.",
            icon: ShoppingBag,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          }
        ]
      },
      de: {
        title: "Vorgestellte Projekte",
        demoText: "Demo",
        codeText: "Code",
        projects: [
          {
            title: "Titanium Fitness Gym",
            description: "Komplette Webplattform für Fitnessstudio-Management, einschließlich Mitgliedschaftssystem, Routine-Tracking und Benutzerfortschritt sowie Kursplan.",
            icon: Dumbbell,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "SpartanArmory Shop",
            description: "E-Commerce spezialisiert auf Sportausrüstung und Trainingsartikel, mit integriertem Zahlungssystem, Bestandsverwaltung und Auftragsverfolgung.",
            icon: ShoppingBag,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Institutionelle Renovierung",
            description: "Institutionelles Managementsystem, das Verwaltungsprozesse modernisiert, einschließlich Dokumentenmanagement, interne Kommunikation und Projektverfolgung.",
            icon: Building,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "KI-Code-Assistent",
            description: "Intelligenter Code-Assistent, der Entwicklern beim Schreiben, Debuggen und Optimieren von Code hilft, mit Unterstützung für mehrere Programmiersprachen und Frameworks.",
            icon: Code,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Neuronale Netzwerk-Visualisierer",
            description: "Lernwerkzeug, das neuronale Netzwerke in Echtzeit visualisiert und zeigt, wie sie während des Trainings lernen und Informationen verarbeiten.",
            icon: Brain,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Fotografie-Portfolio",
            description: "Modernes Fotografie-Portfolio mit Galerie, Kundenverwaltung und integriertem Buchungssystem für Fotosessions.",
            icon: Camera,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Datenbankverwaltungssystem",
            description: "Benutzerdefiniertes Datenbankverwaltungssystem mit visuellem Abfrage-Builder, Datenvisualisierung und automatisierten Backups.",
            icon: Database,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Kommandozeilen-Toolkit",
            description: "Umfassendes Kommandozeilen-Toolkit mit Produktivitätstools, Dateiverwaltung und Systemüberwachungsfunktionen.",
            icon: Terminal,
            image: "/images/project-institutional.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Smart Home Dashboard",
            description: "Zentralisiertes Dashboard für Smart-Home-Geräte mit Automatisierungsregeln, Energieverbrauchsverfolgung und mobiler App-Integration.",
            icon: Building,
            image: "/images/project-gym.png",
            demoUrl: "#",
            downloadUrl: "#"
          },
          {
            title: "Social Media Analyse",
            description: "Social-Media-Analyseplattform mit Engagement-Metriken, Informationen über die Zielgruppe und Verfolgung der Inhaltsleistung.",
            icon: ShoppingBag,
            image: "/images/project-store.png",
            demoUrl: "#",
            downloadUrl: "#"
          }
        ]
      }
    };
    
    return content[lang] || content.es;
  };
  
  const content = getLanguageContent(language);
  const projects = content.projects;

  const totalProjects = projects.length;
  const maxIndex = totalProjects - projectsPerView;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000); // 15 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);
  
  return (
    <section id="projects" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        {content.title}
      </h2>
      
      <div className="relative overflow-visible" ref={carouselRef}>
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-2 rounded-full shadow-lg hover:opacity-90 transition-opacity -ml-4 md:ml-0"
          aria-label="Previous projects"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-2000 ease-in-out transform">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div 
                key={index + currentIndex}
                className="glass-card overflow-hidden rounded-lg transform transition-all duration-2000 hover:scale-[1.02] opacity-100"
                style={{ 
                  animationDelay: `${index * 500}ms`,
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '2000ms',
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-2000 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-1000">
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
                  <p className="text-gray-800 dark:text-gray-300 text-sm line-clamp-3">{project.description}</p>
                  
                  <div className="flex gap-4 pt-4">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
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
            );
          })}
        </div>
        
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-2 rounded-full shadow-lg hover:opacity-90 transition-opacity -mr-4 md:mr-0"
          aria-label="Next projects"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;
