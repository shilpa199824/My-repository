import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: '',
      category: 'Residential',
      year: '2021',
      location: 'Bangalore, India',
      description: 'A modern 3D elevation showcasing clean geometric lines, mixed textures, and integrated greenery for a sleek yet warm curb appeal. It blends minimalist form with natural materials-stone, wood, glass and strategic overhangs for light control and visual interest ',
      image: 'src/assets/project 2.jpeg',
      highlights: ['$120M Project Value', 'LEED Gold Certified', '3-Year Timeline']
    },
    {
      title: '',
      category: 'Canteen Building',
      year: '2022',
      location: 'Bangalore, India',
      description: 'A single‑storey brick masonry structure with a pitched gable roof supported by timber rafters, utilizing Mangalore-style clay tiles for efficient rainwater drainage and thermal insulation . The building is set within landscaped grounds featuring energy-efficient planting for wall insulation and shade, reducing heat gain and improving site microclimate.',
      image: 'src/assets/Project 4.jpeg',
      highlights: ['200 Units', 'Seismic Grade A', 'Net-Zero Energy']
    },
    {
      title: '',
      category: 'Residential',
      year: '2023',
      location: 'Bangalore, India',
      description: 'A contemporary two-story structural shell clad in reinforced brick panels over a frame, serving as a non-structural protective skin that enhances durability, weather resistance, and thermal and acoustic performance.',
      image: 'src/assets/Project 1.png',
      highlights: ['500,000 sq ft', 'BREEAM Excellent', 'Smart Building Tech']
    },
    {
      title: '',
      category: 'Residential',
      year: '2024',
      location: 'Bnagalore, India',
      description: 'A modern three-storey reinforced-concrete structure featuring a ventilated rainscreen cladding system—mixing plaster, textured panels, timber-look elements, and glass for both aesthetic appeal and protective layering.',
      image: 'src/assets/project 3.jpeg',
      highlights: ['Traffic +40% Improvement', '6-Lane Configuration', 'Pedestrian Bridges']
    }
  ];

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of recent projects demonstrating expertise in various aspects of civil engineering, 
            from large-scale infrastructure to sustainable building design.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="project-link">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <div className="project-details">
                    <span className="project-year">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                    <span className="project-location">
                      <MapPin size={14} />
                      {project.location}
                    </span>
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* <div className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-badge">{highlight}</span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;