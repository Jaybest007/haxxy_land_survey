
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import land_pic1 from '../assets/land.png';
import aerial_pic1 from '../assets/drone.png';
import Hydrographic from '../assets/Hydrographic.png';

// Define service data with detailed information
const serviceData = {
    name: "Haxxy Land Surveys Limited",
    rcNumber: "RC 1938018",
    services: [
        {
            category: "Land Surveying",
            slug: "land-surveying",
            items: ["Cadastral Survey", "Title Registration", "Boundary Re-establishment", "Subdivision Layouts", "Real Estate Mapping"],
            image: land_pic1,
            description: "Our land surveying services provide precise measurements and boundary determinations for property owners, developers, and government agencies across Nigeria. Using advanced equipment and methodologies, we deliver accurate data that forms the foundation for land transactions, development projects, and legal documentation.",
            detailedServices: [
                {
                    name: "Cadastral Survey",
                    description: "We conduct comprehensive cadastral surveys to establish legal property boundaries and create official records. Our cadastral surveys are accepted by all government agencies and provide the documentation needed for land title registration.",
                    benefits: [
                        "Legal certainty for property boundaries",
                        "Prevention of boundary disputes",
                        "Required documentation for title registration",
                        "Support for property valuation"
                    ],
                    process: "Our cadastral survey process includes historical research, field measurements using advanced GPS equipment, computation and analysis, and preparation of survey plans that meet all regulatory requirements."
                },
                {
                    name: "Title Registration",
                    description: "We facilitate the title registration process by providing all necessary surveying documentation and technical support. Our experience with land administration systems throughout Nigeria ensures smooth processing of your title documents.",
                    benefits: [
                        "Secure legal ownership of property",
                        "Protection against fraudulent transactions",
                        "Proper documentation for financing and mortgages",
                        "Smooth transfer of property rights"
                    ],
                    process: "Our title registration support includes property verification, survey plan preparation, coordination with government agencies, and monitoring of the registration process to completion."
                },
                {
                    name: "Boundary Re-establishment",
                    description: "When boundary markers are lost or disputed, our boundary re-establishment services provide definitive resolution based on historical records, deed descriptions, and precise measurements.",
                    benefits: [
                        "Resolution of boundary uncertainties",
                        "Prevention of encroachment issues",
                        "Legal documentation of boundaries",
                        "Peace of mind for property owners"
                    ],
                    process: "We analyze existing documentation, conduct field surveys to locate boundary evidence, apply legal principles of boundary determination, and establish new markers with proper documentation."
                },
                {
                    name: "Subdivision Layouts",
                    description: "Our subdivision layout services help developers and landowners maximize land value by creating optimal plot arrangements that comply with local regulations and market demands.",
                    benefits: [
                        "Maximized land utilization and value",
                        "Compliance with planning regulations",
                        "Optimized infrastructure planning",
                        "Marketable plot configurations"
                    ],
                    process: "We conduct topographic surveys, analyze site constraints, design plot layouts considering infrastructure needs, and prepare detailed subdivision plans for approval and implementation."
                },
                {
                    name: "Real Estate Mapping",
                    description: "Our real estate mapping services create detailed visual representations of properties, developments, and land assets for marketing, planning, and management purposes.",
                    benefits: [
                        "Enhanced marketing materials",
                        "Improved property management",
                        "Visual support for development planning",
                        "Integration with GIS systems"
                    ],
                    process: "We combine field surveys, aerial imagery, and GIS technology to create accurate, visually appealing maps that highlight property features, boundaries, and context."
                }
            ],
            equipment: [
                "Trimble R12i GNSS Systems",
                "Leica TS16 Total Stations",
                "Digital Levels",
                "RTK GPS Systems",
                "Advanced Data Processing Software"
            ],
            certifications: [
                "All land surveys conducted by SURCON-registered surveyors",
                "ISO 9001:2015 Quality Management System",
                "Compliance with Survey Regulations Act"
            ]
        },
        {
            category: "Aerial Surveying",
            slug: "aerial-surveying",
            items: ["Drone Surveys", "LiDAR Mapping", "Digital Terrain Models (DTM)", "Ortho-mosaic Imagery", "Ground Control Points (GCPs)"],
            image: aerial_pic1,
            description: "Our aerial surveying services utilize cutting-edge drone technology and advanced sensors to capture high-resolution data from above. This approach provides rapid, comprehensive coverage of large areas while maintaining exceptional accuracy, making it ideal for projects requiring detailed topographic information, volumetric calculations, or visual documentation.",
            detailedServices: [
                {
                    name: "Drone Surveys",
                    description: "Our drone survey services deploy UAV technology to capture detailed aerial imagery and data for a wide range of applications, from construction monitoring to environmental assessment.",
                    benefits: [
                        "Rapid data acquisition over large areas",
                        "Cost-effective alternative to traditional methods",
                        "Access to difficult or hazardous terrains",
                        "Regular monitoring capabilities"
                    ],
                    process: "We plan flight paths considering project requirements, deploy drones equipped with specialized sensors, process captured data, and deliver orthorectified imagery and derived products."
                },
                {
                    name: "LiDAR Mapping",
                    description: "Our aerial LiDAR mapping services use laser scanning technology to create precise 3D representations of terrain and structures, even penetrating vegetation to map the ground surface.",
                    benefits: [
                        "Highly accurate elevation data",
                        "Ability to penetrate vegetation",
                        "Efficient mapping of large areas",
                        "Rich 3D data for analysis"
                    ],
                    process: "Our specialized drones equipped with LiDAR sensors collect point cloud data which is processed, classified, and transformed into detailed 3D models and terrain representations."
                },
                {
                    name: "Digital Terrain Models (DTM)",
                    description: "We create detailed Digital Terrain Models that accurately represent the bare earth surface, providing essential data for engineering design, flood modeling, and land development planning.",
                    benefits: [
                        "Precise representation of ground topography",
                        "Essential input for engineering design",
                        "Foundation for hydrological modeling",
                        "Volumetric calculation capabilities"
                    ],
                    process: "Using data from drone photogrammetry or LiDAR, we process and filter information to generate bare-earth models that remove vegetation and structures to reveal true ground contours."
                },
                {
                    name: "Ortho-mosaic Imagery",
                    description: "Our ortho-mosaic services produce geometrically corrected aerial imagery that combines multiple photos into a seamless, map-accurate composite of your project area.",
                    benefits: [
                        "High-resolution visual documentation",
                        "Geometrically accurate for measurements",
                        "Comprehensive site context",
                        "Valuable historical record"
                    ],
                    process: "We capture overlapping aerial images, process them with photogrammetric software to correct distortions, and create seamless mosaics with consistent scale and perspective."
                },
                {
                    name: "Ground Control Points (GCPs)",
                    description: "We establish accurate ground control points to ensure the highest precision in aerial surveys, providing a solid reference framework that enhances the accuracy of all derived products.",
                    benefits: [
                        "Enhanced accuracy of aerial data",
                        "Integration with existing survey control",
                        "Consistent reference for multiple surveys",
                        "Quality assurance for deliverables"
                    ],
                    process: "Using precision GNSS equipment, we establish and document ground control points that are incorporated into the aerial data processing workflow to ensure geometric accuracy."
                }
            ],
            equipment: [
                "DJI Matrice 300 RTK Drones",
                "DJI Phantom 4 RTK",
                "YellowScan Surveyor Ultra LiDAR System",
                "High-resolution RGB and Multispectral Cameras",
                "Pix4D and Agisoft Metashape Processing Software"
            ],
            certifications: [
                "NCAA Certified Drone Operators",
                "KSOC Operational Safety Certification",
                "FAA Part 107 Equivalent Training"
            ]
        },
        {
            category: "Hydrographic Surveying",
            slug: "hydrographic-surveying",
            items: ["Bathymetric Surveys", "Flood Modeling", "Shoreline Erosion Monitoring", "Sea Rise Analysis", "Jetty & Floating Platform Surveys"],
            image: Hydrographic,
            description: "Our hydrographic surveying services map underwater features and measure depths in oceans, rivers, lakes, and other water bodies. These surveys are essential for maritime construction, coastal management, environmental monitoring, and water resource development projects across Nigeria's extensive coastline and inland waterways.",
            detailedServices: [
                {
                    name: "Bathymetric Surveys",
                    description: "Our bathymetric survey services measure and map underwater depths and features, providing crucial data for dredging operations, marine construction, and navigation safety.",
                    benefits: [
                        "Accurate water depth measurements",
                        "Underwater obstacle identification",
                        "Volume calculations for dredging",
                        "Navigation safety planning"
                    ],
                    process: "Using specialized sonar equipment mounted on vessels, we systematically survey water bodies to collect depth data, which is processed and converted into detailed bathymetric charts and 3D models."
                },
                {
                    name: "Flood Modeling",
                    description: "Our flood modeling services combine hydrographic and topographic data to predict flood behavior, identify vulnerable areas, and support effective flood management strategies.",
                    benefits: [
                        "Accurate flood risk assessment",
                        "Infrastructure planning support",
                        "Emergency response preparation",
                        "Climate change adaptation planning"
                    ],
                    process: "We integrate bathymetric data with terrain models, analyze hydraulic conditions, and apply sophisticated modeling software to simulate flood scenarios under various conditions."
                },
                {
                    name: "Shoreline Erosion Monitoring",
                    description: "We track shoreline changes over time to identify erosion patterns, quantify land loss, and develop effective protection strategies for coastal properties and infrastructure.",
                    benefits: [
                        "Early identification of erosion threats",
                        "Quantitative measurement of shoreline changes",
                        "Evidence-based protection planning",
                        "Monitoring of intervention effectiveness"
                    ],
                    process: "Using a combination of historical data analysis, regular field surveys, and remote sensing, we track shoreline positions over time and analyze trends to predict future changes."
                },
                {
                    name: "Sea Rise Analysis",
                    description: "Our sea rise analysis services help coastal communities and developers understand and prepare for the impacts of rising sea levels on property, infrastructure, and natural systems.",
                    benefits: [
                        "Long-term planning guidance",
                        "Vulnerability assessment",
                        "Infrastructure adaptation strategies",
                        "Land use planning support"
                    ],
                    process: "We combine high-precision elevation data with sea level rise projections to model inundation scenarios, identify vulnerable areas, and develop adaptation recommendations."
                },
                {
                    name: "Jetty & Floating Platform Surveys",
                    description: "We provide specialized surveys for marine structures such as jetties, piers, and floating platforms to support design, construction, maintenance, and safety compliance.",
                    benefits: [
                        "Structural integrity assessment",
                        "Construction quality control",
                        "Maintenance planning",
                        "Regulatory compliance documentation"
                    ],
                    process: "Our surveys combine above-water and underwater measurements using total stations, GNSS, and sonar to create comprehensive as-built documentation and condition assessments."
                }
            ],
            equipment: [
                "Teledyne ODOM Echotrac MKIII Echo Sounder",
                "SonTek RiverSurveyor M9 ADCP",
                "RTK GPS for Water Level Referencing",
                "Side-Scan Sonar Systems",
                "HYPACK Hydrographic Survey Software"
            ],
            certifications: [
                "International Hydrographic Organization (IHO) Standards Compliance",
                "IMCA Certification for Hydrographic Surveyors",
                "NIMAET Approved for Marine Surveys"
            ]
        }
    ]
};

export const ServicesPage = () => {
    const { serviceCategory } = useParams<{ serviceCategory: string }>();
    const [activeService, setActiveService] = useState(
        serviceCategory 
            ? serviceData.services.findIndex(s => s.slug === serviceCategory) 
            : 0
    );
    const [activeTab, setActiveTab] = useState(0);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = serviceCategory 
            ? `${serviceData.services.find(s => s.slug === serviceCategory)?.category} | ${serviceData.name}`
            : `Our Services | ${serviceData.name}`;
            
        if (serviceCategory) {
            const index = serviceData.services.findIndex(s => s.slug === serviceCategory);
            if (index >= 0) {
                setActiveService(index);
            }
        }
    }, [serviceCategory]);
    
    const service = serviceData.services[activeService];
    
    return (
        <>
            <Navbar />
            
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-purple-900 text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                {serviceCategory 
                                    ? service.category 
                                    : "Our Services"
                                }
                            </h1>
                            <p className="max-w-3xl text-gray-300">
                                {serviceCategory 
                                    ? service.description 
                                    : "We offer comprehensive surveying solutions that combine technical expertise with innovative technology to deliver accurate, reliable results for projects of all sizes."
                                }
                            </p>
                        </div>
                    </div>
                </section>
                
                {/* Service Selection Section (only shown on main services page) */}
                {!serviceCategory && (
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Surveying Expertise</h2>
                                <p className="max-w-3xl mx-auto text-gray-600">
                                    Explore our specialized surveying services designed to meet the diverse needs of our clients across Nigeria and beyond.
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                {serviceData.services.map((service, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                        <div className="relative h-48 bg-purple-200 overflow-hidden">
                                            <img src={service.image} alt={service.category} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-purple-900/30 flex items-center justify-center">
                                                <h3 className="text-2xl font-bold text-white px-4 py-2 bg-purple-900/70 rounded">{service.category}</h3>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold text-purple-900 mb-3">{service.category}</h3>
                                            <p className="text-gray-600 mb-4">{service.description.substring(0, 150)}...</p>
                                            <ul className="space-y-2 mb-4">
                                                {service.items.slice(0, 3).map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="text-lime-500 mr-2">✓</span>
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                                {service.items.length > 3 && (
                                                    <li className="text-purple-700 text-sm">+ {service.items.length - 3} more services</li>
                                                )}
                                            </ul>
                                            <Link to={`/services/${service.slug}`} className="block w-full py-2 bg-lime-500 hover:bg-lime-600 text-purple-900 font-bold rounded-md transition-colors duration-200 shine-effect text-center">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                
                {/* Service Detail Section (only shown when a specific service is selected) */}
                {serviceCategory && (
                    <section className="py-16 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="mb-12">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="relative h-64 md:h-96 bg-purple-200 overflow-hidden">
                                        <img src={service.image} alt={service.category} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/60 to-transparent flex items-end">
                                            <div className="p-6 md:p-10 w-full">
                                                <div className="inline-block px-3 py-1 bg-lime-500 text-purple-900 text-sm font-bold rounded-lg mb-3">
                                                    Professional Surveying Services
                                                </div>
                                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{service.category}</h2>
                                                <p className="text-gray-200 max-w-3xl">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Navigation Tabs */}
                                    <div className="border-b border-gray-200">
                                        <nav className="flex overflow-x-auto">
                                            <button 
                                                className={`py-4 px-6 font-medium whitespace-nowrap ${activeTab === 0 ? 'text-purple-900 border-b-2 border-lime-500' : 'text-gray-500 hover:text-purple-700'}`}
                                                onClick={() => setActiveTab(0)}
                                            >
                                                Services
                                            </button>
                                            <button 
                                                className={`py-4 px-6 font-medium whitespace-nowrap ${activeTab === 1 ? 'text-purple-900 border-b-2 border-lime-500' : 'text-gray-500 hover:text-purple-700'}`}
                                                onClick={() => setActiveTab(1)}
                                            >
                                                Equipment & Technology
                                            </button>
                                            <button 
                                                className={`py-4 px-6 font-medium whitespace-nowrap ${activeTab === 2 ? 'text-purple-900 border-b-2 border-lime-500' : 'text-gray-500 hover:text-purple-700'}`}
                                                onClick={() => setActiveTab(2)}
                                            >
                                                Certifications
                                            </button>
                                        </nav>
                                    </div>
                                    
                                    {/* Tab Content */}
                                    <div className="p-6 md:p-10">
                                        {/* Services Tab */}
                                        {activeTab === 0 && (
                                            <div className="space-y-10">
                                                {service.detailedServices.map((detailedService, idx) => (
                                                    <div key={idx} className="bg-gray-50 rounded-lg p-6 md:p-8">
                                                        <h3 className="text-2xl font-bold text-purple-900 mb-4">{detailedService.name}</h3>
                                                        <p className="text-gray-700 mb-6">
                                                            {detailedService.description}
                                                        </p>
                                                        
                                                        <div className="grid md:grid-cols-2 gap-8">
                                                            <div>
                                                                <h4 className="text-lg font-bold text-purple-800 mb-3">Key Benefits</h4>
                                                                <ul className="space-y-2">
                                                                    {detailedService.benefits.map((benefit, bidx) => (
                                                                        <li key={bidx} className="flex items-start">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                            </svg>
                                                                            <span className="text-gray-700">{benefit}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            
                                                            <div>
                                                                <h4 className="text-lg font-bold text-purple-800 mb-3">Our Process</h4>
                                                                <p className="text-gray-700">
                                                                    {detailedService.process}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                
                                                <div className="text-center mt-8">
                                                    <Link to="/contact" className="inline-block px-8 py-3 bg-lime-500 hover:bg-lime-600 text-purple-900 font-bold rounded-lg transition-colors duration-200 shine-effect">
                                                        Request a Quote
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Equipment Tab */}
                                        {activeTab === 1 && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-purple-900 mb-6">Our Equipment & Technology</h3>
                                                <p className="text-gray-700 mb-8">
                                                    We invest in the latest surveying technology to ensure accuracy, efficiency, and reliability in all our projects. Our specialized equipment allows us to tackle complex surveying challenges with confidence.
                                                </p>
                                                
                                                <div className="bg-purple-50 rounded-lg p-6 md:p-8 mb-8">
                                                    <h4 className="text-xl font-bold text-purple-900 mb-4">Specialized {service.category} Equipment</h4>
                                                    <ul className="grid md:grid-cols-2 gap-4">
                                                        {service.equipment.map((item, idx) => (
                                                            <li key={idx} className="flex items-start">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                <span className="text-gray-700">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-purple-300 transition-colors">
                                                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                            </svg>
                                                        </div>
                                                        <h5 className="text-lg font-bold text-purple-900 mb-2">Accuracy</h5>
                                                        <p className="text-gray-600">Our equipment meets or exceeds industry standards for precision measurement.</p>
                                                    </div>
                                                    
                                                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-purple-300 transition-colors">
                                                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                            </svg>
                                                        </div>
                                                        <h5 className="text-lg font-bold text-purple-900 mb-2">Efficiency</h5>
                                                        <p className="text-gray-600">Advanced technology allows us to complete projects faster without sacrificing quality.</p>
                                                    </div>
                                                    
                                                    <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-purple-300 transition-colors">
                                                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                            </svg>
                                                        </div>
                                                        <h5 className="text-lg font-bold text-purple-900 mb-2">Innovation</h5>
                                                        <p className="text-gray-600">We continuously invest in emerging technologies to provide better solutions for our clients.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        {/* Certifications Tab */}
                                        {activeTab === 2 && (
                                            <div>
                                                <h3 className="text-2xl font-bold text-purple-900 mb-6">Our Certifications & Standards</h3>
                                                <p className="text-gray-700 mb-8">
                                                    We maintain the highest professional standards in the surveying industry. Our work is backed by recognized certifications and adherence to industry best practices.
                                                </p>
                                                
                                                <div className="bg-purple-50 rounded-lg p-6 md:p-8 mb-8">
                                                    <h4 className="text-xl font-bold text-purple-900 mb-4">{service.category} Certifications</h4>
                                                    <ul className="space-y-4">
                                                        {service.certifications.map((cert, idx) => (
                                                            <li key={idx} className="flex items-start">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                                                </svg>
                                                                <span className="text-gray-700">{cert}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                
                                                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                                                    <h4 className="text-xl font-bold text-purple-900 mb-4">Our Commitment to Quality</h4>
                                                    <p className="text-gray-700">
                                                        At HAXXY Land Surveys Limited, we are committed to maintaining the highest standards of quality and professionalism in all our services. Our work is regularly reviewed and validated through internal quality assurance processes, and we continuously update our methods and equipment to meet evolving industry standards.
                                                    </p>
                                                    <div className="mt-6 flex items-center">
                                                        <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-bold text-purple-900">Quality Guaranteed</h5>
                                                            <p className="text-sm text-gray-600">All our work is backed by our commitment to accuracy and client satisfaction.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Other Services Section */}
                            <div>
                                <h3 className="text-2xl font-bold text-purple-900 mb-6">Explore Our Other Services</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {serviceData.services.filter(s => s.slug !== serviceCategory).map((otherService, index) => (
                                        <Link key={index} to={`/services/${otherService.slug}`} className="bg-white rounded-lg shadow overflow-hidden flex hover:shadow-lg transition-shadow">
                                            <div className="w-1/3 bg-purple-200 relative">
                                                <img src={otherService.image} alt={otherService.category} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-purple-900/40"></div>
                                            </div>
                                            <div className="w-2/3 p-4">
                                                <h4 className="text-lg font-bold text-purple-900 mb-2">{otherService.category}</h4>
                                                <p className="text-gray-600 text-sm line-clamp-2">{otherService.description}</p>
                                                <div className="text-lime-600 text-sm font-medium mt-2 flex items-center">
                                                    Learn more
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                
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
                            <p className="text-sm text-gray-400">Land Surveys Limited • {serviceData.rcNumber}</p>
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
