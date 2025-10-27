import React from 'react';
import { FaArrowRight, FaCheckCircle, FaRocket, FaUsers, FaChartLine } from 'react-icons/fa';
import './Center.css';

function Center() {
    const features = [
        {
            icon: <FaRocket className="feature-icon" />,
            title: "Fast Performance",
            description: "Lightning-fast loading times and smooth animations"
        },
        {
            icon: <FaUsers className="feature-icon" />,
            title: "User Friendly",
            description: "Intuitive interface designed for all users"
        },
        {
            icon: <FaChartLine className="feature-icon" />,
            title: "Analytics",
            description: "Powerful insights into your data"
        }
    ];

    return (
        <main className="main-content">
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Build Amazing Web Experiences</h1>
                        <p className="hero-subtitle">Create stunning websites and web applications with our powerful tools and components.</p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary">
                                Get Started <FaArrowRight className="btn-icon" />
                            </button>
                            <button className="btn btn-outline">Learn More</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-placeholder">
                            <div className="floating-shape shape-1"></div>
                            <div className="floating-shape shape-2"></div>
                            <div className="main-image">
                                <img src="/placeholder-image.jpg" alt="App Preview" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Amazing Features</h2>
                        <p className="section-subtitle">Everything you need to build your next great project</p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to get started?</h2>
                        <p>Join thousands of satisfied users today and experience the difference.</p>
                        <button className="btn btn-primary btn-large">
                            Start Free Trial <FaArrowRight className="btn-icon" />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Center;
