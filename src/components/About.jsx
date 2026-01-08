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
            <p className="text-lead text-center mx-auto">
                Passionate developer with a kick for clean code and user-centric design.
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
