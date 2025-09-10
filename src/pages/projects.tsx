
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import surveyor_pic1 from '../assets/surv_hassan.png';
import land_pic1 from '../assets/land.png';
import aerial_pic1 from '../assets/drone.png';
import { Helmet } from 'react-helmet-async';

// Import company data (in a real app, this would be in a shared location)
const companyData = {
    name: "Haxxy Land Surveys Limited",
    rcNumber: "RC 1938018",
    projects: [
        { 
            title: "12km Pipeline Route Survey – Dangote Refinery", 
            year: 2019, 
            client: "Omitti Engineering Ltd", 
            category: "Land",
            description: "A comprehensive survey for the 12km pipeline route connecting the Dangote Refinery to external infrastructure. This project involved detailed topographic mapping, ground truthing, and precise coordinate establishment.",
            challenges: [
                "Complex terrain with varying elevations",
                "Crossing multiple property boundaries",
                "Coordination with environmental impact assessments"
            ],
            solutions: [
                "Employed advanced GPS equipment for accurate coordinate placement",
                "Utilized GIS mapping for comprehensive documentation",
                "Collaborated with environmental teams to minimize ecological impact"
            ],
            outcomes: "Successfully delivered accurate survey data enabling the pipeline construction with minimal deviations. The project was completed ahead of schedule and contributed to the timely development of the refinery's infrastructure."
        },
        { 
            title: "Bathymetric Survey – Lekki Lagoon", 
            year: 2022, 
            client: "Private Client", 
            category: "Hydro",
            description: "A detailed bathymetric survey of the Lekki Lagoon to map underwater topography, depths, and features. This data was essential for a planned waterfront development project.",
            challenges: [
                "Varying water depths and underwater obstacles",
                "Tidal variations affecting measurements",
                "Limited visibility in some areas"
            ],
            solutions: [
                "Deployed advanced sonar equipment for precise depth measurements",
                "Scheduled work around tidal patterns for consistent data",
                "Integrated GPS for accurate positioning of underwater features"
            ],
            outcomes: "Produced comprehensive bathymetric maps that allowed the client to optimize their waterfront development plans. The data revealed previously unknown underwater features that influenced the final design."
        },
        { 
            title: "Topographic Survey – Muhammadu Buhari Estate", 
            year: 2021, 
            client: "Ogun State Government", 
            category: "Land",
            description: "A large-scale topographic survey of the proposed Muhammadu Buhari Estate, covering elevation contours, existing structures, vegetation, and drainage patterns.",
            challenges: [
                "Extensive area requiring efficient survey methodology",
                "Integration with existing infrastructure plans",
                "Coordination with multiple government departments"
            ],
            solutions: [
                "Combined drone aerial survey with ground control points",
                "Created 3D terrain models for better visualization",
                "Developed a phased approach to accommodate stakeholder reviews"
            ],
            outcomes: "Delivered comprehensive topographic data that formed the foundation for the estate's master planning. The survey enabled optimal placement of roads, utilities, and building plots while respecting natural drainage patterns."
        },
        { 
            title: "Aerial Mapping – Proposed Refinery in Ogoni Land", 
            year: 2022, 
            client: "Private Client", 
            category: "Aerial",
            description: "High-resolution aerial mapping of a proposed refinery site in Ogoni Land, providing detailed orthomosaic imagery, digital elevation models, and feature identification.",
            challenges: [
                "Sensitive environmental and social context",
                "Dense vegetation obstructing ground visibility",
                "Large area requiring efficient survey techniques"
            ],
            solutions: [
                "Deployed specialized drones with multispectral sensors",
                "Implemented vegetation penetration techniques",
                "Conducted community engagement throughout the process"
            ],
            outcomes: "Created detailed aerial maps that allowed for informed decision-making about site development while minimizing environmental impact. The data helped identify optimal locations for various refinery components."
        },
        { 
            title: "Sewage Pipeline Survey for NEPZA, Freezone, Alaro, Epe, Lagos", 
            year: 2020, 
            client: "NEPZA", 
            category: "Land",
            description: "A precision survey for a sewage pipeline network in the NEPZA Freezone, covering route planning, elevation profiling, and connection points.",
            challenges: [
                "Urban environment with existing infrastructure",
                "Need for minimal disruption to ongoing operations",
                "Precise elevation measurements for gravity flow systems"
            ],
            solutions: [
                "Utilized ground-penetrating radar to identify underground obstacles",
                "Conducted night surveys to minimize operational disruption",
                "Employed differential leveling for critical elevation accuracy"
            ],
            outcomes: "Delivered precise survey data that enabled efficient pipeline installation with minimal adjustments during construction. The survey helped optimize the pipeline route to utilize natural gravity flow where possible, reducing pumping requirements."
        },
        { 
            title: "Tanks as built Survey – Dangote Fertilizer plant", 
            year: 2023, 
            client: "Omitti Engineering Ltd", 
            category: "Land",
            description: "An as-built survey of storage tanks at the Dangote Fertilizer plant, documenting precise locations, elevations, and dimensional accuracy compared to design specifications.",
            challenges: [
                "Working in an operational industrial environment",
                "High precision requirements for regulatory compliance",
                "Complex structural measurements"
            ],
            solutions: [
                "Used 3D laser scanning for comprehensive measurements",
                "Implemented safety protocols for industrial surveying",
                "Developed specialized templates for dimensional analysis"
            ],
            outcomes: "Produced detailed as-built documentation that verified construction accuracy and compliance with design specifications. The survey data was used for final certification and acceptance of the tank installations."
        }
    ]
};

export const ProjectsPage = () => {
    const { projectId } = useParams<{projectId: string}>();
    const [activeProject, setActiveProject] = useState(projectId ? parseInt(projectId) : 0);
    const [showVideo, setShowVideo] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = `Projects | ${companyData.name}`;
    }, []);
    
    // Get the current project data
    const project = companyData.projects[activeProject];
    
    // Helper function to get appropriate image based on category
    const getProjectImage = (category: string) => {
        if (category === "Land") {
            return land_pic1;
        } else if (category === "Aerial") {
            return aerial_pic1;
        } else {
            return surveyor_pic1;
        }
    };
    
    
    return (
        <>
            <Helmet>
                <title>Projects | Haxxy Land Surveys Limited</title>
                <meta name="description" content="Explore Haxxy Land Surveys' portfolio of successful surveying projects across Nigeria, showcasing our expertise in land, aerial, and hydrographic surveying." />
                <meta name="keywords" content="Haxxy projects, land survey projects, aerial survey projects, hydrographic survey projects, Nigeria surveying projects, Dangote Refinery survey" />
                <meta property="og:title" content="Projects | Haxxy Land Surveys Limited" />
                <meta property="og:description" content="Explore our portfolio of successful surveying projects that showcase our expertise, precision, and commitment to excellence across Nigeria." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://haxxysurvey.com/projects" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Projects | Haxxy Land Surveys Limited" />
                <meta name="twitter:description" content="Explore our portfolio of successful surveying projects that showcase our expertise, precision, and commitment to excellence across Nigeria." />
                <link rel="canonical" href="https://haxxysurvey.com/projects" />
                {projectId && (
                    <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Project",
                            "name": "${project.title}",
                            "description": "${project.description}",
                            "provider": {
                                "@type": "Organization",
                                "name": "${companyData.name}",
                                "sameAs": "https://haxxysurvey.com"
                            },
                            "category": "${project.category} Surveying",
                            "dateCompleted": "${project.year}"
                        }
                    `}
                    </script>
                )}
            </Helmet>
            <Navbar />
            
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-purple-900 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                            <p className="max-w-3xl text-gray-300">
                                Explore our portfolio of successful surveying projects that showcase our expertise,
                                precision, and commitment to excellence across Nigeria.
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* Project Detail Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Project Navigation Sidebar */}
                            <div className="md:col-span-1">
                                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                                    <h3 className="text-xl font-bold text-purple-900 mb-6">All Projects</h3>
                                    <nav>
                                        <ul className="space-y-2">
                                            {companyData.projects.map((p, index) => (
                                                <li key={index}>
                                                    <button
                                                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                                                            activeProject === index
                                                                ? 'bg-purple-100 text-purple-900 font-bold'
                                                                : 'hover:bg-gray-100 text-gray-700'
                                                        }`}
                                                        onClick={() => setActiveProject(index)}
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <span className="line-clamp-1">{p.title}</span>
                                                            <span className={`px-2 py-1 text-xs rounded ${
                                                                p.category === "Land" ? "bg-green-100 text-green-800" :
                                                                p.category === "Aerial" ? "bg-blue-100 text-blue-800" :
                                                                "bg-indigo-100 text-indigo-800"
                                                            }`}>
                                                                {p.category}
                                                            </span>
                                                        </div>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            
                            {/* Project Details */}
                            <div className="md:col-span-2">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    {/* Project Image/Video Section */}
                                    <div className="relative h-80 md:h-96 bg-purple-200">
                                        {showVideo ? (
                                            // Video placeholder
                                            <div className="absolute inset-0 flex items-center justify-center bg-black">
                                                <div className="text-white text-center">
                                                    <p className="text-lg mb-2">Video Placeholder</p>
                                                    <button 
                                                        onClick={() => setShowVideo(false)}
                                                        className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors"
                                                    >
                                                        Show Images
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            // Image display
                                            <div className="relative h-full">
                                                <img 
                                                    src={getProjectImage(project.category)} 
                                                    alt={project.title} 
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/70"></div>
                                                
                                                {/* Image/Video toggle button */}
                                                <button 
                                                    className="absolute bottom-4 right-4 bg-purple-900 hover:bg-purple-800 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
                                                    onClick={() => setShowVideo(true)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </button>
                                                
                                                {/* Project category and year badge */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="inline-block px-3 py-1 bg-lime-500 text-purple-900 text-sm font-bold rounded-lg">
                                                        {project.category} • {project.year}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Project Content */}
                                    <div className="p-6 md:p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <h2 className="text-2xl md:text-3xl font-bold text-purple-900">{project.title}</h2>
                                            <span className="text-lime-600 font-medium">Client: {project.client}</span>
                                        </div>
                                        
                                        <p className="text-gray-700 mb-8">
                                            {project.description}
                                        </p>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                            {/* Challenges */}
                                            <div className="bg-purple-50 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-purple-900 mb-4">Challenges</h3>
                                                <ul className="space-y-2">
                                                    {project.challenges.map((challenge, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                            </svg>
                                                            <span className="text-gray-700">{challenge}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            {/* Solutions */}
                                            <div className="bg-purple-50 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-purple-900 mb-4">Our Solutions</h3>
                                                <ul className="space-y-2">
                                                    {project.solutions.map((solution, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                            <span className="text-gray-700">{solution}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        {/* Outcomes */}
                                        <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-lg p-6">
                                            <h3 className="text-xl font-bold mb-4">Project Outcomes</h3>
                                            <p>{project.outcomes}</p>
                                        </div>
                                        
                                        {/* Gallery Placeholder */}
                                        <div className="mt-8">
                                            <h3 className="text-xl font-bold text-purple-900 mb-4">Project Gallery</h3>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {[1, 2, 3, 4].map((item) => (
                                                    <div key={item} className="bg-purple-100 rounded-lg aspect-square overflow-hidden relative hover:opacity-90 transition-opacity cursor-pointer">
                                                        <div className="absolute inset-0 flex items-center justify-center text-purple-900">
                                                            <span className="text-sm font-medium">Photo {item}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Project Navigation */}
                                <div className="flex justify-between mt-8">
                                    <button 
                                        onClick={() => setActiveProject(prev => prev > 0 ? prev - 1 : companyData.projects.length - 1)}
                                        className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:bg-purple-50 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Previous Project
                                    </button>
                                    
                                    <button 
                                        onClick={() => setActiveProject(prev => (prev + 1) % companyData.projects.length)}
                                        className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:bg-purple-50 transition-colors"
                                    >
                                        Next Project
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Call to Action */}
                <section className="bg-purple-900 text-white py-16">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                        <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                            Let us bring our expertise and precision to your next surveying project. 
                            Contact us today to discuss how we can help you achieve accurate, reliable results.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-6 py-3 bg-lime-500 hover:bg-lime-600 text-purple-900 font-bold rounded-lg transition-colors duration-200 shine-effect">
                                Contact Us
                            </Link>
                            <Link to="/" className="px-6 py-3 bg-purple-800 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors duration-200">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            
            {/* Footer */}
            <footer className="bg-purple-950 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold text-lime-400">HAXXY</h2>
                            <p className="text-sm text-gray-400">Land Surveys Limited • {companyData.rcNumber}</p>
                        </div>
                        
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="mt-8 border-t border-gray-800 pt-8 text-sm text-gray-400 text-center">
                        <p>&copy; {new Date().getFullYear()} HAXXY Land Surveys Limited. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};
