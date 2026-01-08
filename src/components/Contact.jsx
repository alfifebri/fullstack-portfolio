import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for your message! This is a demo form.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Section id="contact" className="contact-section">
            <h2 className="heading-lg text-center">Get In Touch</h2>
            <div className="contact-wrapper">

                <div className="contact-info">
                    <h3 className="heading-md">Let's Talk</h3>
                    <p className="text-muted mb-4">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="info-item">
                        <Mail className="info-icon" />
                        <div>
                            <h4>Email</h4>
                            <p>alfifebriawan4@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <MapPin className="info-icon" />
                        <div>
                            <h4>Location</h4>
                            <p>Bandung, Indonesia</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <Phone className="info-icon" />
                        <div>
                            <h4>Phone</h4>
                            <p>+6285741802183</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>
                    <Button type="submit" className="full-width">
                        Send Message <Send size={18} />
                    </Button>
                </form>

            </div>
        </Section>
    );
};

export default React.memo(Contact);
