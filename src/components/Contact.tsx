import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            {/* Ready to discuss your next project? I'd love to hear from you. 
            Let's work together to bring your vision to life. */}
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I’m Shilpa R, a Civil Engineer specializing in Quantity Surveyor, Darafting & designing. Let’s explore how we can collaborate to deliver efficient, resilient projects that positively impact communities.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <Mail className="contact-icon" size={24} />
                <div>
                  <h4>Email</h4>
                  <p>shilpabvr1998@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <Phone className="contact-icon" size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+91 8310955454</p>
                </div>
              </div>
              
              <div className="contact-method">
                <MapPin className="contact-icon" size={24} />
                <div>
                  <h4>Location</h4>
                  <p>Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/shilpa-bvr-4a03b8270/" className="social-link">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          {/* <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              <Send size={20} />
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;