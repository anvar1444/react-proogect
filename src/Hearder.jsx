import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header({ isDarkMode, onToggleDarkMode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    return (
        <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="container">
                <div className="logo">
                    <Link to="/">Logotip</Link>
                </div>

                <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Bosh sahifa</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Biz haqimizda</Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Xizmatlar</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Aloqa</Link>
                </nav>

                <div className="header-actions">
                    <button 
                        className="theme-toggle" 
                        onClick={onToggleDarkMode}
                        aria-label={isDarkMode ? 'Kunduzgi rejimga o\'tish' : 'Tungi rejimga o\'tish'}
                    >
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                    
                    <button 
                        className="mobile-menu-btn" 
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;