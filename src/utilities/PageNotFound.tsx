import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">    
            <h1 className="text-6xl font-bold text-purple-900 mb-4">404</h1>
            <p className="text-2xl text-gray-700 mb-8">Page Not Found</p>
            <Link to="/" className="px-6 py-3 bg-lime-500 hover:bg-lime-600 text-white font-bold rounded-md transition-colors duration-200">Go Home</Link>
        </div>
    )
}