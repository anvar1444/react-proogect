import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: <FaGithub />, url: 'https://github.com/anvar1444' },
    ];

    const footerLinks = [
        {
            title: 'Product',
            links: [
                { label: 'Features', url: '/features' },
                { label: 'Pricing', url: '/pricing' },
                { label: 'Templates', url: '/templates' },
                { label: 'Integrations', url: '/integrations' },
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', url: '/about' },
                { label: 'Blog', url: '/blog' },
                { label: 'Careers', url: '/careers' },
                { label: 'Contact', url: '/contact' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { label: 'Documentation', url: '/docs' },
                { label: 'Guides', url: '/guides' },
                { label: 'API Status', url: '/status' },
                { label: 'Help Center', url: '/help' },
            ]
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', url: '/privacy' },
                { label: 'Terms of Service', url: '/terms' },
                { label: 'Cookie Policy', url: '/cookies' },
                { label: 'GDPR', url: '/gdpr' },
            ]
        }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">YourLogo</div>
                        <p className="brand-tagline">
                            Building amazing web experiences with modern technologies and best practices.
                        </p>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label={social.url.split('/').pop()}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links">
                        {footerLinks.map((column, colIndex) => (
                            <div key={colIndex} className="footer-column">
                                <h3 className="footer-column-title">{column.title}</h3>
                                <ul className="footer-links-list">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href={link.url} className="footer-link">
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        &copy; {currentYear} Your Company. All rights reserved.
                    </div>
                    <div className="footer-legal-links">
                        <a href="/privacy">Privacy Policy</a>
                        <span className="divider">•</span>
                        <a href="/terms">Terms of Service</a>
                        <span className="divider">•</span>
                        <a href="/cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
