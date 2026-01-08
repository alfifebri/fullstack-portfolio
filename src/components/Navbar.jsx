import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#home" className="logo">
                    <Code2 size={32} color="var(--color-primary)" />
                    <span>DevPortfolio</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-links desktop">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>


                {/* Mobile Menu */}
                <div className={`nav-links mobile ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            toggleTheme();
                            setIsOpen(false);
                        }}
                        className="theme-toggle mobile-theme-btn"
                        aria-label="Toggle theme"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text)' }}
                    >
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
