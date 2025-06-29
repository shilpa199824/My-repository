import React from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  const stats = [
    { icon: Clock, value: '12+', label: 'Years Experience' },
    { icon: Target, value: '150+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '25+', label: 'Awards Won' }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
            To secure a challenging position as a Civil Engineer where I can contribute my expertise in structural analysis, project management, and
technical design while continuing to develop my skills and knowledge within the civil engineering field.
            </p>
            <p className='about-description'>
              Throughout my career, I've had the privilege of working on diverse projects ranging 
              from residential developments to major Commercial Projects. I believe in combining 
              traditional engineering principles with modern technology to deliver exceptional results.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <h4>Education</h4>
                <p>B.Tech in Civil Engineering (Persidency University)</p>  
                <p>PUC (MES BRS PU College)</p>
              </div>
              <div className="highlight-item">
                <h4>Certifications</h4>
                <p>Site Engineer (12/2020 - 01/2022)(N Giriraju Engineering contactors)</p>
                <p>Graduate Apprentice Training (02/2022 - 03/2023)( Bharat Electronics Limited)</p>
                <p>JAVA Full Stack Training (08/24 - 01/2025)( Besant Technologies )
</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="src\assets\shilpa.jpeg" 
              alt="Professional engineer" 
            />
          </div>
        </div>
        
        {/* <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <stat.icon className="stat-icon" size={48} />
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;