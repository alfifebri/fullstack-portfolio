import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-greeting">Hello, I'm</span>
                    <h1 className="heading-xl">
                        <span className="text-gradient">Alfi Febri</span>
                        <br />
                        Fullstack Developer
                    </h1>
                    <p className="text-lead">
                        I build accessible, pixel-perfect, and performant web experiences using modern technologies.
                        Specialized in React and Node.js.
                    </p>

                    <div className="hero-actions">
                        <Button href="#projects">
                            View Projects <ArrowRight size={20} />
                        </Button>
                        <Button href="#contact" variant="outline">
                            Contact Me
                        </Button>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:email@example.com" aria-label="Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Hero);
