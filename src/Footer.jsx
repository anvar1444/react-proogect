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
            title: 'Mahsulot',
            links: [
                { label: 'Xususiyatlar', url: '/features' },
                { label: 'Narxlar', url: '/pricing' },
                { label: 'Shablonlar', url: '/templates' },
                { label: 'Integratsiyalar', url: '/integrations' },
            ]
        },
        {
            title: 'Kompaniya',
            links: [
                { label: 'Biz haqimizda', url: '/about' },
                { label: 'Blog', url: '/blog' },
                { label: 'Ish o\'rinlari', url: '/careers' },
                { label: 'Aloqa', url: '/contact' },
            ]
        },
        {
            title: 'Resurslar',
            links: [
                { label: 'Hujjatlar', url: '/docs' },
                { label: 'Qo\'llanmalar', url: '/guides' },
                { label: 'API holati', url: '/status' },
                { label: 'Yordam markazi', url: '/help' },
            ]
        },
        {
            title: 'Huquqiy',
            links: [
                { label: 'Maxfiylik siyosati', url: '/privacy' },
                { label: 'Foydalanish shartlari', url: '/terms' },
                { label: 'Cookie siyosati', url: '/cookies' },
                { label: 'GDPR', url: '/gdpr' },
            ]
        }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">Logotip</div>
                        <p className="brand-tagline">
                            Zamonaviy texnologiyalar va eng yaxshi amaliyotlar bilan ajoyib veb-tajribalar yaratamiz.
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
                        <p> {currentYear} Sizning Kompaniyangiz. Barcha huquqlar himoyalangan.</p>
                    </div>
                    <div className="footer-legal-links">
                        <a href="/privacy">Maxfiylik siyosati</a>
                        <span className="divider">•</span>
                        <a href="/terms">Foydalanish shartlari</a>
                        <span className="divider">•</span>
                        <a href="/cookies">Cookie siyosati</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
