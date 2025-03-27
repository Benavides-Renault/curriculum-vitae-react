import {
	Github,
	Linkedin,
	Twitter,
	Instagram,
	Phone,
	Mail,
	Home,
} from 'lucide-react';

const Footer = ({ language }) => {
	const currentYear = new Date().getFullYear();

	const getLanguageContent = (lang) => {
		const content = {
			en: {
				contactInfo: 'Contact Information',
				quickLinks: 'Quick Links',
				aboutMe: 'About Me',
				skills: 'Skills',
				projects: 'Projects',
				contact: 'Contact',
				socialMedia: 'Social Media',
				rights: 'All rights reserved.',
			},
			es: {
				contactInfo: 'Información de Contacto',
				quickLinks: 'Enlaces Rápidos',
				aboutMe: 'Sobre Mí',
				skills: 'Habilidades',
				projects: 'Proyectos',
				contact: 'Contacto',
				socialMedia: 'Redes Sociales',
				rights: 'Todos los derechos reservados.',
			},
			fr: {
				contactInfo: 'Coordonnées',
				quickLinks: 'Liens Rapides',
				aboutMe: 'À Propos',
				skills: 'Compétences',
				projects: 'Projets',
				contact: 'Contact',
				socialMedia: 'Réseaux Sociaux',
				rights: 'Tous droits réservés.',
			},
			de: {
				contactInfo: 'Kontaktinformationen',
				quickLinks: 'Schnelllinks',
				aboutMe: 'Über Mich',
				skills: 'Fähigkeiten',
				projects: 'Projekte',
				contact: 'Kontakt',
				socialMedia: 'Soziale Medien',
				rights: 'Alle Rechte vorbehalten.',
			},
		};

		return content[lang] || content.es;
	};

	const content = getLanguageContent(language);

	return (
		<footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl shadow-sm">
						<h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
							{content.contactInfo}
						</h3>
						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
									<Phone className="w-5 h-5 text-blue-200 dark:text-blue-300" />
								</div>
								<span className="text-gray-100 dark:text-gray-100">
									+506 8347-6182
								</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
									<Mail className="w-5 h-5 text-purple-600 dark:text-purple-300" />
								</div>
								<span className="text-gray-100 dark:text-gray-100">
									orlanisbe02@hotmail.com
								</span>
							</div>
							<div className="flex items-center gap-3">
								<div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
									<Home className="w-5 h-5 text-green-600 dark:text-green-300" />
								</div>
								<span className="text-gray-100 dark:text-gray-100">
									Alajuela, Costa Rica
								</span>
							</div>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
							{content.quickLinks}
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#about"
									className="text-gray-100 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors flex items-center"
								>
									<span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
									{content.aboutMe}
								</a>
							</li>
							<li>
								<a
									href="#technical-skills"
									className="text-gray-100 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors flex items-center"
								>
									<span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
									{content.skills}
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="text-gray-100 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors flex items-center"
								>
									<span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
									{content.projects}
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-gray-100 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors flex items-center"
								>
									<span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
									{content.contact}
								</a>
							</li>
						</ul>
					</div>
					<div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-xl shadow-sm">
						<h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
							{content.socialMedia}
						</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
							>
								<Github className="w-6 h-6 text-gray-100 dark:text-gray-200" />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
							>
								<Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-300" />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-sky-100 dark:bg-sky-900 p-3 rounded-full hover:bg-sky-200 dark:hover:bg-sky-800 transition-colors"
							>
								<Twitter className="w-6 h-6 text-sky-600 dark:text-sky-300" />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-pink-100 dark:bg-pink-900 p-3 rounded-full hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors"
							>
								<Instagram className="w-6 h-6 text-pink-600 dark:text-pink-300" />
							</a>
						</div>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-700 dark:text-gray-300">
					<p>
						&copy; {currentYear} Orlando. {content.rights}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
