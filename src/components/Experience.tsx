import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import '../styles/Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Consultant (Civil Engineer)',
      company: 'Working from Home-Office',
      period: '05/2023 - Present',
      location: 'Bengaluru, INDIA',
      description: 'Managed residential and commercial construction projects from conception to completion. Coordinated with architects, contractors, and regulatory agencies.',
      achievements: [
        'Managed multiple civil engineering projects from inception to completion, including residential and small commercialstructures.',
        'Provided structural analysis, design solutions, and technical drawings using industry-standard software.', 
        'Conducted site inspections and coordinated with clients, contractors, and suppliers to ensure project specifications were met.',
        'Prepared detailed project documentation, including reports, estimates, and compliance documents.',
        'Stayed updated with the latest civil engineering standards and best practices.'
      ]
    },
    {
      title: 'Graduate Apprentice Training',
      company: 'Bharat Electronics Limited',
      period: '02/2022 - 03/2023',
      location: 'Bengaluru, INDIA',
      description: 'I applied academic learning in real-world projects, developed strong problem-solving, digital skills (e.g., AutoCAD, BIM), and progressed toward professional accreditation as I contributed to quality, safety, and efficiency in construction environments .',
      achievements: [
        'Study of site execution drawings',
        'Estimation and costing for the site activities',
        'Surveying',
        'Construction management',
        'Drafting and designing in AutoCAD',
        'Billing details for the site activities',
        'Overall responsible for site activities',
        
      ]
    },

    {
      title: 'Site Engineer',
      company: 'N Giriraju Engineering contactors',
      period: '12/2020 - 01/2022',
      location: 'Bengaluru, INDIA',
      description: 'A proactive Site Engineer with hands‑on expertise in supervising on‑site construction processes, translating blueprints into concrete results.',
      achievements: [
        'Estimation and costing for the site activities',
        'Surveying',
        'Construction management',
        'Overall responsible for site activities'
      ]
    },
    
    // {
    //   title: 'Structural Engineer',
    //   company: 'California Infrastructure Solutions',
    //   period: '2014 - 2016',
    //   location: 'Sacramento, CA',
    //   description: 'Specialized in seismic analysis and retrofit design for existing structures. Conducted structural assessments and prepared detailed engineering reports.',
    //   achievements: [
    //     'Completed seismic retrofits for 60+ buildings',
    //     'Developed innovative strengthening techniques',
    //     'Published research on seismic resilience in peer-reviewed journals'
    //   ]
    // },
    // {
    //   title: 'Junior Engineer',
    //   company: 'Bay Area Engineering Consultants',
    //   period: '2012 - 2014',
    //   location: 'Oakland, CA',
    //   description: 'Assisted senior engineers in design calculations, AutoCAD drafting, and construction documentation. Gained experience in various civil engineering disciplines.',
    //   achievements: [
    //     'Completed professional development program',
    //     'Obtained Professional Engineer (PE) license',
    //     'Contributed to 25+ successful project deliveries'
    //   ]
    // }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A progressive career in civil engineering with increasing responsibilities 
            and expertise across diverse project types and scales.
          </p>
        </div>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-meta">
                    <span className="company">{exp.company}</span>
                    <span className="period">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;