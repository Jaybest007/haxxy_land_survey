import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import haxxyLogo from "../assets/haxxy_logo.png";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-purple-900/95 backdrop-blur-sm shadow-lg py-2" : "bg-purple-900/80 py-4"
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo and Company Name */}
                    <div className="flex items-center">
                        <img src={haxxyLogo} alt="HAXXY Logo" className="h-12 w-auto mr-3 float-animation" />
                        <div>
                            <h1 className="text-lime-400 font-bold text-2xl leading-tight">HAXXY</h1>
                            <p className="text-white text-md leading-tight">Land Surveys & Resources Limited</p>
                            <p className="text-gray-300 text-[10px]">RC 1938018</p>
                        </div>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-white hover:text-lime-400 transition-colors duration-200">Home</Link>
                        <a href="#services" className="text-white hover:text-lime-400 transition-colors duration-200">Services</a>
                        <Link to="/projects" className="text-white hover:text-lime-400 transition-colors duration-200">Projects</Link>
                        <a href="#team" className="text-white hover:text-lime-400 transition-colors duration-200">Our Team</a>
                        <a href="#about" className="text-white hover:text-lime-400 transition-colors duration-200">About Us</a>
                        <a href="https://wa.me/2347057711880" className="bg-lime-500 hover:bg-lime-600 text-purple-900 font-bold px-4 py-2 rounded-md transition-colors duration-200 shine-effect">Contact</a>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white hover:text-lime-400 focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-purple-800">
                        <Link to="/" className="block px-3 py-2 text-white hover:bg-purple-700 hover:text-lime-400 rounded-md">Home</Link>
                        <a href="#services" className="block px-3 py-2 text-white hover:bg-purple-700 hover:text-lime-400 rounded-md">Services</a>
                        <a href="#projects" className="block px-3 py-2 text-white hover:bg-purple-700 hover:text-lime-400 rounded-md">Projects</a>
                        <a href="#team" className="block px-3 py-2 text-white hover:bg-purple-700 hover:text-lime-400 rounded-md">Our Team</a>
                        <a href="#about" className="block px-3 py-2 text-white hover:bg-purple-700 hover:text-lime-400 rounded-md">About Us</a>
                        <a href="https://wa.me/2347057711880" className="block px-3 py-2 bg-lime-500 text-purple-900 font-bold rounded-md text-center">Contact</a>
                    </div>
                    <div className="px-5 py-3 border-t border-purple-700 bg-purple-900/90">
                        <p className="text-xs text-lime-400 font-medium">Precision. Integrity. Innovation.</p>
                        <p className="text-xs text-gray-300">Your Trusted Surveying Partner in Nigeria</p>
                    </div>
                </div>
            )}
        </nav>
    );
}
