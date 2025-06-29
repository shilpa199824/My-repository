import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shilpa R</h3>
            <p>Civil Engineer</p>
            <p>
              Building tomorrow's infrastructure with innovative engineering solutions 
              and sustainable design practices.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Structural Analysis</a></li>
              <li><a href="#services">Project Management</a></li>
              <li><a href="#services">Engineering Consulting</a></li>
              <li><a href="#services">Site Supervision</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Bangalore, Karnataka, India</p>
            <p>shilpabvr1998@gmail.com</p>
            <p>+91 8310955454</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © 2025 Shilpa R. Made with <Heart size={16} className="heart" /> by a passionate engineer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;