import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} Alfi Febri. All rights reserved.</p>
                <p className="footer-motto">Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
