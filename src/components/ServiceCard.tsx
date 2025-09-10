import { Link } from 'react-router-dom';

interface ServiceCardProps {
    category: string;
    items: string[];
    image: string;
    index: number;
}

export const ServiceCard = ({ category, items, image }: ServiceCardProps) => {
    // Create a URL-friendly version of the category for routing
    const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
    
    return (
        <div className={`bg-white rounded-xl shadow-xl overflow-hidden service-card hover-lift scroll-reveal`}>
            <div className="relative h-48 bg-purple-200 overflow-hidden">
                <img src={image} alt={category} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-purple-900/30 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white px-4 py-2 bg-purple-900/70 rounded">{category}</h3>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">{category}</h3>
                <ul className="space-y-2 mb-4">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-lime-500 mr-2">✓</span>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
                <Link to={`/services/${categorySlug}`} className="block w-full py-2 bg-lime-500 hover:bg-lime-600 text-purple-900 font-bold rounded-md transition-colors duration-200 shine-effect text-center">
                    Learn More
                </Link>
            </div>
        </div>
    );
}
