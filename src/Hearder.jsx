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
                    <Link to="/">YourLogo</Link>
                </div>

                <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                </nav>

                <div className="header-actions">
                    <button 
                        className="theme-toggle" 
                        onClick={onToggleDarkMode}
                        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                    
                    <button 
                        className="mobile-menu-btn" 
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;