
import { Navbar } from '../components/navbar';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { TeamMemberCard } from '../components/TeamMemberCard';
import ContactForm from '../components/contactus';
import surveyor_pic1 from '../assets/surv_hassan.png';
import Hydrographic from '../assets/Hydrographic.png';
import aerial_pic1 from '../assets/drone.png';
import land_pic1 from '../assets/land.png';
import haxxyLogo from '../assets/haxxy_logo.png';
import awoyemi from '../assets/awoyemi.jpg';
import afolabi from '../assets/afolabi.png';
import woman from '../assets/woman.png';
import sewage_pic1 from '../assets/sewage/1.jpg';
import tankAsBuilt from '../assets/Tanks-As-Built/1.jpg';
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import main from '../assets/main.png';
import { getMainProjectImage } from '../utils/projectImages';
import { initScrollReveal, applyStaggeredAnimations } from '../utils/animations';

// Define company data
const companyData = {
    name: "Haxxy Land Surveys Limited",
    rcNumber: "RC 1938018",
    tagline: "Precision. Integrity. Innovation. Your Trusted Surveying Partner in Nigeria.",
    description: "HAXXY Land Surveys Limited is a multidisciplinary surveying firm delivering land, aerial, and hydrographic services across Nigeria with world-class accuracy.",
    vision: "To create a unique symbol of excellence with global reach, beyond Africa, without compromising ethical values.",
    mission: "To provide dynamic business solutions that relieve client challenges through surveying, GIS, title perfection, construction, real estate, consultancy, and data management.",
    coreValues: ["Excellence", "Integrity", "Innovation", "Creativity", "Enjoyment", "Diversity"],
    services: [
        {
            category: "Land Surveying",
            items: ["Cadastral Survey", "Title Registration", "Boundary Re-establishment", "Subdivision Layouts", "Real Estate Mapping"],
        },
        {
            category: "Aerial Surveying",
            items: ["Drone Surveys", "LiDAR Mapping", "Digital Terrain Models (DTM)", "Ortho-mosaic Imagery", "Ground Control Points (GCPs)"],
        },
        {
            category: "Hydrographic Surveying",
            items: ["Bathymetric Surveys", "Flood Modeling", "Shoreline Erosion Monitoring", "Sea Rise Analysis", "Jetty & Floating Platform Surveys"],
        }
    ],
    projects: [
        { title: "Bathymetric Survey – Lekki Lagoon", year: 2022, client: "Private Client", category: "Hydro" },
        { title: "NEPZA", year: 2022, client: "Federal Government of Nigeria", category: "Land" },
        { title: "Aerial Mapping – Proposed Refinery in Ogoni Land", year: 2022, client: "Private Client", category: "Aerial" },
        { title: "Sewage Pipleline Survey for NEPZA, Freezone, Alaro, Epe, Lagos", year: 2020, client: "NEPZA", category: "Sewage" },
        { title: "Tanks as built Survey – Dangote Fertilizer plant", year: 2023, client: "Omitti Engineering Ltd", category: "tank" }
    ],
    team: [
        { name: "Surv. Hassan Lateef", role: "Managing Director", experience: "13+ years", reg: "SURCON Reg. No. 4869", img: "/assets/team/hassan.jpg" },
        { name: "Surv. Oluwadare Afolabi", role: "Senior Surveyor", experience: "13 years", img: "/assets/team/afolabi.jpg" },
        { name: "Engr. Awoyemi Ajiboye", role: "Civil Engineer", experience: "12 years", img: "/assets/team/awoyemi.jpg" },
        { name: "Maria Kosoko", role: "Head of Finance", experience: "5 years", img: "/assets/team/maria.jpg" }
    ],
    contact: {
        address: "Km 36, Lekki-Epe Expressway, Mobil Filling Station, Oribanwa Bus-stop, Ibeju-Lekki, Lagos",
        email: "haxxysurvey@gmail.com",
        phones: ["07057711880", "09067899975"],
        instagram: "https://www.instagram.com/haxxysurvey?igsh=d252ZGYzdnphODhi"
    }

};

export const LandingPage = () => {
    const [activeProjectSlide, setActiveProjectSlide] = useState(0);
    const [activeTeamSlide, setActiveTeamSlide] = useState(0);
    const projectsContainerRef = useRef<HTMLDivElement>(null);
    const teamContainerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // This is handled by Helmet now
        // document.title = companyData.name;
        
        // Observer for project scroll container
        const projectObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setActiveProjectSlide(index);
                    }
                });
            },
            { root: projectsContainerRef.current, threshold: 0.6 }
        );
        
        // Observer for team scroll container
        const teamObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setActiveTeamSlide(index);
                    }
                });
            },
            { root: teamContainerRef.current, threshold: 0.6 }
        );
        
        // Observe project items
        const projectItems = document.querySelectorAll('#projects .scroll-item');
        projectItems.forEach((item) => projectObserver.observe(item));
        
        // Observe team items
        const teamItems = document.querySelectorAll('#team .scroll-item');
        teamItems.forEach((item) => teamObserver.observe(item));
        
        // Initialize scroll reveal animations
        const cleanupScrollReveal = initScrollReveal();
        
        // Apply staggered animations to services
        applyStaggeredAnimations('#services .grid', '.service-card', 'animate-scaleIn', 100, 150);
        
        // Apply staggered animations to core values
        applyStaggeredAnimations('#about .grid-cols-2', 'div', 'animate-fadeIn', 100, 100);
        
        return () => {
            projectObserver.disconnect();
            teamObserver.disconnect();
            cleanupScrollReveal();
        };
    }, []);
    
    // Function to scroll to specific project
    const scrollToProject = (index: number) => {
        const items = document.querySelectorAll('#projects .scroll-item');
        if (items[index]) {
            (items[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setActiveProjectSlide(index);
        }
    };
    
    // Function to scroll to specific team member
    const scrollToTeam = (index: number) => {
        const items = document.querySelectorAll('#team .scroll-item');
        if (items[index]) {
            (items[index] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setActiveTeamSlide(index);
        }
    };
    return (
        <>
            <Helmet>
                <title>Haxxy Land Surveys Limited - Professional Surveying Services in Nigeria</title>
                <meta name="description" content="HAXXY Land Surveys Limited is a leading surveying firm delivering professional land, aerial, and hydrographic services across Nigeria with precision and integrity. RC 1938018." />
                <meta name="keywords" content="Haxxy, Haxxy Land Surveys, Haxxy Survey, Land Surveying, Aerial Surveying, Hydrographic Surveying, Nigeria Surveying Company, Haxy, RC 1938018" />
                <meta property="og:title" content="Haxxy Land Surveys Limited" />
                <meta property="og:description" content="Professional surveying services in Nigeria including land, aerial, and hydrographic surveying with precision and integrity." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://haxxysurvey.com/" />
                <meta property="og:image" content={haxxyLogo} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Haxxy Land Surveys Limited" />
                <meta name="twitter:description" content="Professional surveying services in Nigeria including land, aerial, and hydrographic surveying with precision and integrity." />
                <link rel="canonical" href="https://haxxysurvey.com/" />
                <link rel="icon" href={haxxyLogo} />
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "${companyData.name}",
                        "legalName": "${companyData.name}",
                        "alternateName": "Haxxy Survey",
                        "description": "${companyData.description}",
                        "image": "https://haxxysurvey.com/logo.png",
                        "url": "https://haxxysurvey.com",
                        "telephone": "${companyData.contact.phones[0]}",
                        "email": "${companyData.contact.email}",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Km 36, Lekki-Epe Expressway, Mobil Filling Station, Oribanwa Bus-stop",
                            "addressLocality": "Ibeju-Lekki",
                            "addressRegion": "Lagos",
                            "addressCountry": "Nigeria"
                        },
                        "founder": "Surv. Hassan Lateef",
                        "foundingDate": "2018",
                        "sameAs": [
                            "https://www.instagram.com/${companyData.contact.instagram.replace('@', '')}"
                        ],
                        "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
                        "priceRange": "₦₦-₦₦₦",
                        "serviceArea": {
                            "@type": "GeoCircle",
                            "geoMidpoint": {
                                "@type": "GeoCoordinates",
                                "latitude": 6.4550,
                                "longitude": 3.3841
                            },
                            "geoRadius": "500km"
                        },
                        "keywords": "Haxxy, Haxxy Land Surveys, Haxxy Survey, Haxy, Land Surveying, Aerial Surveying, Hydrographic Surveying, Nigeria Surveying Company"
                    }
                `}
                </script>
            </Helmet>
            <Navbar />
            
            {/* Hero Section */}
            <section id="home" className="pt-0 md:pt-0">
                <div className="bg-gradient-purple-green clip-diagonal min-h-screen flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-lime-300/10 float-animation"></div>
                    <div className="absolute bottom-40 left-10 w-20 h-20 rounded-full bg-lime-300/10"></div>
                    <div className="absolute top-40 left-[30%] w-64 h-64 rounded-full bg-purple-700/20"></div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-24">
                        <div className="md:flex items-center">
                            <div className="md:w-1/2 z-10 animate-fadeIn opacity-0">
                                
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                                    <span className="block mb-2">Transforming Spaces</span>
                                    <span className="text-gradient">Mapping Excellence</span>
                                </h1>
                                <p className="text-lg text-gray-200 mb-8 max-w-xl animate-fadeIn stagger-1 opacity-0">
                                    {companyData.tagline}
                                </p>
                                <div className="flex flex-wrap gap-4 animate-fadeIn stagger-2 opacity-0">
                                    <a href="#services" className="px-6 py-3 bg-lime-500 hover:bg-lime-600 text-purple-900 font-bold rounded-lg transition-colors duration-200 shine-effect">
                                        Our Services
                                    </a>
                                    <a href="https://wa.me/2347057711880" className="px-6 py-3 bg-transparent hover:bg-purple-800/50 text-white border-2 border-lime-400 rounded-lg transition-colors duration-200">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2 mt-10 md:mt-0 z-10 animate-fadeIn stagger-3 opacity-0">
                                <div className="aspect-[4/3] rounded-lg relative overflow-hidden shadow-2xl border-4 border-white/20">
                                    <img 
                                        src={main} 
                                        alt="Modern Surveying Equipment and Professionals" 
                                        className="w-full h-full object-cover object-center" 
                                    />
                                    <div className="absolute inset-0 bg-purple-900/20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 scroll-reveal">About <span className="text-gradient">HAXXY</span></h2>
                        <p className="max-w-3xl mx-auto text-gray-600 scroll-reveal">
                            {companyData.description}
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover-lift scroll-reveal">
                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                {companyData.mission}
                            </p>
                        </div>
                        
                        <div className="bg-white p-8 rounded-xl shadow-lg hover-lift scroll-reveal">
                            <div className="w-16 h-16 rounded-full bg-lime-100 flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-purple-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                {companyData.vision}
                            </p>
                        </div>
                    </div>
                    
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center scroll-reveal">Our Core Values</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {companyData.coreValues.map((value, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow text-center border-b-4 border-lime-500 hover-scale transition-transform scroll-reveal">
                                    <span className="block text-lg font-bold text-purple-900">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Services Section */}
            <section id="services" className="py-20 bg-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 scroll-reveal">Our <span className="text-lime-400">Services</span></h2>
                        <p className="max-w-3xl mx-auto text-gray-300 scroll-reveal">
                            We offer comprehensive surveying solutions that combine technical expertise with innovative technology.
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {companyData.services.map((service, index) => {
                            let serviceImage;
                            if (service.category === "Land Surveying") {
                                serviceImage = land_pic1;
                            } else if (service.category === "Aerial Surveying") {
                                serviceImage = aerial_pic1;
                            } else {
                                serviceImage = Hydrographic;
                            }
                            
                            return (
                                <ServiceCard 
                                    key={index}
                                    category={service.category}
                                    items={service.items}
                                    image={serviceImage}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            
            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 scroll-reveal">Featured <span className="text-gradient">Projects</span></h2>
                        <p className="max-w-3xl mx-auto text-gray-600 mb-6 scroll-reveal">
                            Explore some of our most successful projects delivered with precision and excellence.
                        </p>
                        <div className="flex items-center justify-center text-purple-900 text-sm scroll-reveal">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>Scroll to see more projects</span>
                        </div>
                    </div>
                    
                    <div className="scroll-container" ref={projectsContainerRef}>
                        {companyData.projects.map((project, index) => {
                            // Get project-specific image using appropriate image source
                            let projectImage;
                            
                            if (project.category === "tank") {
                                projectImage = tankAsBuilt;
                            } else if (project.category === "Sewage") {
                                projectImage = sewage_pic1;
                            } else {
                                // Use utility for other categories
                                projectImage = getMainProjectImage(project.title, project.category);
                            }

                            return (
                                <div className="scroll-item" key={index} data-index={index}>
                                    <ProjectCard 
                                        title={project.title}
                                        year={project.year}
                                        client={project.client}
                                        category={project.category}
                                        image={projectImage}
                                        index={index}
                                    />
                                </div>
                            );
                        })}
                        
                        {/* View More Card */}
                        <div className="scroll-item flex items-center justify-center" data-index={companyData.projects.length}>
                            <div className="h-full flex flex-col items-center justify-center p-6 bg-purple-100 rounded-xl hover:bg-purple-200 transition-colors duration-300 cursor-pointer shadow-lg">
                                <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <p className="text-purple-900 font-bold text-lg">View All Projects</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                        <div className="flex space-x-2">
                            {Array.from({ length: companyData.projects.length + 1 }, (_, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => scrollToProject(index)}
                                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                        activeProjectSlide === index ? 'bg-purple-900' : 'bg-purple-300 hover:bg-purple-500'
                                    }`}
                                    aria-label={`Go to project ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link to="/projects" className="px-6 py-3 bg-purple-900 hover:bg-purple-800 text-white font-bold rounded-lg transition-colors duration-200">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Team Section */}
            <section id="team" className="py-20 bg-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 scroll-reveal">Our <span className="text-gradient">Team</span></h2>
                        <p className="max-w-3xl mx-auto text-gray-600 mb-6 scroll-reveal">
                            Meet the professionals behind our success. Our team combines decades of surveying expertise with a passion for innovation.
                        </p>
                        <div className="flex items-center justify-center text-purple-900 text-sm scroll-reveal">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>Scroll to see more team members</span>
                        </div>
                    </div>
                    
                    <div className="scroll-container" ref={teamContainerRef}>
                        {companyData.team.map((member, index) => {
                            let teamImage;
                            if (member.name === "Surv. Hassan Lateef") {
                                teamImage = surveyor_pic1;
                            } else if (member.name === "Engr. Awoyemi Ajiboye") {
                                teamImage = awoyemi;
                            } else if (member.name === "Surv. Oluwadare Afolabi") {
                                teamImage = afolabi;
                            } else {
                                teamImage = woman;
                            }

                            return (
                                <div className="scroll-item" key={index} data-index={index}>
                                    <TeamMemberCard
                                        name={member.name}
                                        role={member.role}
                                        experience={member.experience}
                                        reg={member.reg}
                                        img={teamImage}
                                        index={index}
                                    />
                                </div>
                            );
                        })}
                        
                        {/* View More Card */}
                        <div className="scroll-item flex items-center justify-center" data-index={companyData.team.length}>
                            <div className="h-full flex flex-col items-center justify-center p-6 bg-purple-100 rounded-xl hover:bg-purple-200 transition-colors duration-300 cursor-pointer shadow-lg">
                                <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <p className="text-purple-900 font-bold text-lg">View All Team</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                        <div className="flex space-x-2">
                            {Array.from({ length: companyData.team.length + 1 }, (_, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => scrollToTeam(index)}
                                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                        activeTeamSlide === index ? 'bg-purple-900' : 'bg-purple-300 hover:bg-purple-500'
                                    }`}
                                    aria-label={`Go to team member ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-purple-green text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In <span className="text-lime-400">Touch</span></h2>
                            <p className="mb-8 text-gray-200">
                                Have a project in mind? We'd love to hear about it. Reach out to us and we'll get back to you as soon as possible.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p>{companyData.contact.address}</p>
                                </div>
                                
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p>{companyData.contact.email}</p>
                                </div>
                                
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        {companyData.contact.phones.map((phone, index) => (
                                            <a href={`https://wa.me/234${phone.substring(1)}`} key={index} className="hover:text-lime-400 transition-colors">
                                                {phone}, {" "}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                    <a href={companyData.contact.instagram} className="hover:text-lime-400 transition-colors">Haxxysurvey</a>
                                </div>
                            </div>
                        </div>
                        
                        <ContactForm />
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="bg-purple-950 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold text-lime-400">HAXXY</h2>
                            <p className="text-sm text-gray-400">Land Surveys Limited • {companyData.rcNumber}</p>
                        </div>
                        
                        <div className="text-center md:text-right">
                            <p className="text-sm text-gray-400">© {new Date().getFullYear()} HAXXY Land Surveys Limited.</p>
                            <p className="text-sm text-gray-400">All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}