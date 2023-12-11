import React from 'react';
import './Footer.css';
// import Home from './pages/Home';
// import About from './pages/About';
// import PremiumPage from './pages/PremiumPage';
// import NavLink from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left Section (Logo) */}
                <div className="footer-logo">
                    <img src="path/to/your/logo.png" alt="Logo" />
                </div>

                {/* Right Section (Email and Phone) */}
                <div className="footer-contact">
                    <p>Email: your@email.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;