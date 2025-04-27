import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
			<div className="text-center">
				<h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
					404
				</h1>
				<h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
					Página no encontrada
				</h2>
				<p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
					Lo sentimos, la página que estás buscando no existe o ha sido movida.
				</p>
				<Link
					to="/"
					className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mx-auto w-max"
				>
					<Home size={18} />
					Volver al inicio
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
