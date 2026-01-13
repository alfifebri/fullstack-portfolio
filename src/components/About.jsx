import React from 'react';
import { Code, Layout, Server, Database, GitBranch, Terminal } from 'lucide-react';
import Section from './ui/Section';
import Card from './ui/Card';

const skills = [
    { name: 'Frontend', icon: <Layout />, description: 'HTML, CSS, React, Tailwind' },
    { name: 'JavaScript', icon: <Code />, description: 'ES6+, TypeScript, Async' },
    { name: 'Backend', icon: <Server />, description: 'Node.js, Express' },
    { name: 'Database', icon: <Database />, description: 'MongoDB, PostgreSQL' },
    { name: 'Version Control', icon: <GitBranch />, description: 'Git, GitHub, GitLab' },
    { name: 'Tools', icon: <Terminal />, description: 'VS Code, Webpack, Vite' },
];

const About = () => {
    return (
        <Section id="about" className="about-section">
            <h2 className="heading-lg text-center">About Me</h2>
            <p className="text-lead text-center mx-auto mb-8 max-w-2xl">
                I am a Fullstack Developer with a strong focus on building modern, user-centric web applications. I enjoy working with technologies like Next.js, TypeScript, Tailwind CSS, and Firebase to create scalable, real-time applications with clean architecture and smooth user experiences.
                <br /><br />
                I pay close attention to UI/UX details, performance, and maintainability, and I enjoy turning ideas into polished, production-ready products.
            </p>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <Card key={skill.name} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <h3 className="heading-md">{skill.name}</h3>
                        <p className="text-muted">{skill.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default React.memo(About);
