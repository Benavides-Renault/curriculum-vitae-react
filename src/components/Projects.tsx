
import { Github, ExternalLink, Building, Dumbbell, ShoppingBag, Code, Brain, Camera, Database, Terminal } from "lucide-react";

interface ProjectsProps {
  isEnglish: boolean;
}

const Projects = ({ isEnglish }: ProjectsProps) => {
  const projects = [
    {
      title: isEnglish ? "Titanium Fitness Gym" : "Titanium Fitness Gym",
      description: isEnglish 
        ? "Complete web platform for gym management, including membership system, routine tracking and user progress, and class schedule."
        : "Plataforma web completa para gestión de gimnasio, incluyendo sistema de membresías, seguimiento de rutinas y progreso de usuarios, y calendario de clases.",
      icon: Dumbbell,
      image: "/images/project-gym.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "SpartanArmory Store" : "SpartanArmory Tienda",
      description: isEnglish
        ? "E-commerce specialized in sports equipment and training items, with integrated payment system, inventory management and order tracking."
        : "E-commerce especializado en equipamiento deportivo y artículos de entrenamiento, con sistema de pagos integrado, gestión de inventario y seguimiento de pedidos.",
      icon: ShoppingBag,
      image: "/images/project-store.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "Institutional Renovation" : "Renovación Institucional",
      description: isEnglish
        ? "Institutional management system that modernizes administrative processes, including document management, internal communications and project tracking."
        : "Sistema de gestión institucional que moderniza procesos administrativos, incluyendo gestión documental, comunicaciones internas y seguimiento de proyectos.",
      icon: Building,
      image: "/images/project-institutional.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "AI Code Assistant" : "Asistente de Código IA",
      description: isEnglish
        ? "Intelligent code assistant that helps developers write, debug and optimize code, with support for multiple programming languages and frameworks."
        : "Asistente de código inteligente que ayuda a los desarrolladores a escribir, depurar y optimizar código, con soporte para múltiples lenguajes de programación y frameworks.",
      icon: Code,
      image: "/images/project-gym.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "Neural Network Visualizer" : "Visualizador de Redes Neuronales",
      description: isEnglish
        ? "Educational tool that visualizes neural networks in real-time, showing how they learn and process information during training."
        : "Herramienta educativa que visualiza redes neuronales en tiempo real, mostrando cómo aprenden y procesan información durante el entrenamiento.",
      icon: Brain,
      image: "/images/project-store.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "Photography Portfolio" : "Portafolio de Fotografía",
      description: isEnglish
        ? "Modern photography portfolio with gallery, client management, and integrated booking system for photography sessions."
        : "Portafolio de fotografía moderno con galería, gestión de clientes y sistema de reservas integrado para sesiones fotográficas.",
      icon: Camera,
      image: "/images/project-institutional.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "Database Management System" : "Sistema de Gestión de Bases de Datos",
      description: isEnglish
        ? "Custom database management system with visual query builder, data visualization, and automated backups."
        : "Sistema de gestión de bases de datos personalizado con constructor visual de consultas, visualización de datos y copias de seguridad automatizadas.",
      icon: Database,
      image: "/images/project-gym.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "Command Line Toolkit" : "Kit de Herramientas de Línea de Comandos",
      description: isEnglish
        ? "Comprehensive command line toolkit with productivity tools, file management, and system monitoring capabilities."
        : "Kit completo de herramientas de línea de comandos con herramientas de productividad, gestión de archivos y capacidades de monitoreo del sistema.",
      icon: Terminal,
      image: "/images/project-store.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "Smart Home Dashboard" : "Panel de Control para Hogar Inteligente",
      description: isEnglish
        ? "Centralized dashboard for smart home devices with automation rules, energy consumption tracking, and mobile app integration."
        : "Panel centralizado para dispositivos de hogar inteligente con reglas de automatización, seguimiento del consumo de energía e integración de aplicaciones móviles.",
      icon: Building,
      image: "/images/project-institutional.png",
      demoUrl: "#",
      downloadUrl: "#"
    },
    {
      title: isEnglish ? "Social Media Analytics" : "Análisis de Redes Sociales",
      description: isEnglish
        ? "Social media analytics platform with engagement metrics, audience insights, and content performance tracking."
        : "Plataforma de análisis de redes sociales con métricas de participación, información sobre la audiencia y seguimiento del rendimiento del contenido.",
      icon: ShoppingBag,
      image: "/images/project-gym.png",
      demoUrl: "#",
      downloadUrl: "#"
    }
  ];

  return (
    <section id="projects" className="container mx-auto px-4 py-16 scroll-fade">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        {isEnglish ? "Featured Projects" : "Proyectos Destacados"}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div 
              key={index}
              className="glass-card overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-[1.02] opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                    Demo
                  </a>
                  <a 
                    href={project.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {isEnglish ? "Code" : "Código"}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
