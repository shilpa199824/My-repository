import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Construction site background" 
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Tomorrow's Infrastructure
            <span className="highlight">Today</span>
          </h1>
          {/* <p className="hero-subtitle">
            Professional Civil Engineer with 12+ years of experience in designing and managing 
            large-scale infrastructure projects. Specializing in structural design, project management, 
            and sustainable construction solutions.
          </p> */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="src\assets\Shilpa R.pdf" className="btn btn-primary" download>
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;