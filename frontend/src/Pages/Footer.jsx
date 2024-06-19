
import React from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-column">
        <h4>Devpost</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Hackathons</h4>
        <ul>
          <li><a href="#">Browse hackathons</a></li>
          <li><a href="#">Explore projects</a></li>
          <li><a href="#">Host a hackathon</a></li>
          <li><a href="#">Hackathon guides</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Portfolio</h4>
        <ul>
          <li><a href="#">Your projects</a></li>
          <li><a href="#">Your hackathons</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Connect</h4>
        <ul>
          <li><a href="#"><TwitterIcon/></a></li>
          
          <li><a href="#"><FacebookIcon/></a></li>
          <li><a href="#"><LinkedInIcon/></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Devpost, Inc. All rights reserved.</p>
        <ul className="footer-bottom-links">
          <li><a href="#">Community guidelines</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">CA notice</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Terms of service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
