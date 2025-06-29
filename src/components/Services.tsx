import React from 'react';
import { Building, Wrench, FileText, Users, Shield, Lightbulb } from 'lucide-react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: 'Structural Analysis',
      description: 'Comprehensive structural analysis and design for residential, commercial, and industrial buildings using advanced engineering software.'
    },
    {
      icon: Wrench,
      title: 'Project Management',
      description: 'End-to-end project management services ensuring projects are delivered on time, within budget, and to the highest quality standards.'
    },
    {
      icon: FileText,
      title: 'Engineering Consulting',
      description: 'Expert technical consulting services for complex engineering challenges, feasibility studies, and regulatory compliance.'
    },
    {
      icon: Users,
      title: 'Site Supervision',
      description: 'Professional construction supervision and quality control to ensure projects meet design specifications and safety standards.'
    },
    {
      icon: Shield,
      title: 'Safety Assessment',
      description: 'Comprehensive safety evaluations, risk assessments, and compliance reviews for existing and new construction projects.'
    },
    {
      icon: Lightbulb,
      title: 'Sustainable Solutions',
      description: 'Innovative green building design and sustainable engineering solutions that minimize environmental impact.'
    }
  ];

  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Comprehensive civil engineering services tailored to meet our project needs, 
            from initial concept to final completion.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <service.icon size={48} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;