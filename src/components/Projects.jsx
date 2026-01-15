import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';
import Button from './ui/Button';

const projects = [
    {
        title: 'E-Commerce-mini',
        description: 'Modern e-commerce app with product catalog, dynamic cart management, and checkout flow. Features smooth animations and responsive design.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/alfifebri/ecommerce-mini',
        live: 'https://ecommerce-mini-phi.vercel.app',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    },
    {
        title: 'Task Management App (Kanban)',
        description: 'A modern task management (Kanban) application that allows users to manage daily tasks with real-time updates. Users can create, edit, delete, and drag tasks between Todo, In Progress, and Done columns. The app features Firebase authentication, real-time Firestore syncing, smooth drag-and-drop interactions, and a professional dark-themed UI with subtle animations.',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase', 'Framer Motion', 'dnd-kit'],
        github: 'https://github.com/alfifebri/task-management-app',
        live: 'https://task-management-app-five-ruddy.vercel.app/',
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80',
    },
    {
        title: 'Weather Dashboard',
        description: 'Real-time weather application using OpenWeatherMap API with location detection.',
        tech: ['React', 'API Integration', 'CSS Grid'],
        github: '#',
        live: '#',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    },
];

const Projects = () => {
    return (
        <Section id="projects" className="bg-surface">
            <h2 className="heading-lg text-center">Featured Projects</h2>
            <p className="text-lead text-center mx-auto mb-5">
                Here are some of the projects I've worked on recently.
            </p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Card key={index} className="project-card" hoverEffect={false}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} loading="lazy" />
                            <div className="project-overlay">
                                <Button href={project.live} className="btn-sm">
                                    Live Demo <ExternalLink size={16} />
                                </Button>
                                <Button href={project.github} variant="outline" className="btn-sm">
                                    Code <Github size={16} />
                                </Button>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="heading-md">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t) => (
                                    <span key={t} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default React.memo(Projects);
