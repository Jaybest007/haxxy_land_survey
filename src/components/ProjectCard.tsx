import { Link } from 'react-router-dom';

interface ProjectCardProps {
    title: string;
    year: number;
    client: string;
    category: string;
    image: string;
    index: number;
}

export const ProjectCard = ({ title, year, client, category, image, index }: ProjectCardProps) => {
    return (
        <Link to={`/projects/${index}`} className={`group relative overflow-hidden rounded-lg block hover-lift scroll-reveal`}>
            <div className="aspect-square bg-purple-200 relative overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/40 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2 py-1 bg-lime-500 text-purple-900 text-xs font-bold rounded mb-2">
                        {category} • {year}
                    </span>
                    <h3 className="text-white font-bold truncate">{title}</h3>
                    <p className="text-gray-200 text-sm">Client: {client}</p>
                </div>
            </div>
        </Link>
    );
}
