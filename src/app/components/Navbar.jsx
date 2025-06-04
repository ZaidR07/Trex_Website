"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleNavigation = (path) => {
        router.push(path);
        setIsMobileMenuOpen(false);

    };

    return (
        <div className="bg-gray-900 text-white z-50 w-full h-[14vh]  fixed top-0 ">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>

            <nav className="relative z-20 px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer " onClick={() => handleNavigation('/')} >

                        <div className="w-16 h-16 p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <Image src="/logo.jpeg" alt="Logo" className="w-full h-full rounded-lg "
                                width={500} height={500}
                            />
                        </div>
                        <span className="text-xl font-bold cursor-pointer text-white">T-Rex Infotech</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <button
                            onClick={() => handleNavigation('Services')}
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                        >
                            Services
                        </button>
                        {/* <button
                            onClick={() => handleNavigation('/testimonials')}
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                        >
                            Testimonials
                        </button> */}
                        <button
                            onClick={() => handleNavigation('/Pricing')}
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                        >
                            Pricing
                        </button>
                        <button
                            onClick={() => handleNavigation('/Portfolio')}
                            className="text-gray-300 hover:text-white transition-colors font-medium"
                        >
                            Portfolio
                        </button>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:block">
                        <a 
                            href='#booking'
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                            Schedule a callback
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 shadow-2xl">
                        <div className="px-4 py-6 space-y-4">
                            <button
                                onClick={() => handleNavigation('/Services')}
                                className="block w-full text-left text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                            >
                                Services
                            </button>
                            {/* <button
                                onClick={() => handleNavigation('/Testimonials')}
                                className="block w-full text-left text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                            >
                                Testimonials
                            </button> */}
                            <button
                                onClick={() => handleNavigation('/Pricing')}
                                className="block w-full text-left text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                            >
                                Pricing
                            </button>
                            <button
                                onClick={() => handleNavigation('/Portfolio')}
                                className="block w-full text-left text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium"
                            >
                                Portfolio
                            </button>
                            <div className="pt-4 border-t border-gray-700">
                                <a
                                    href='#booking' 
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"  >
                                    Schedule a callback
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;