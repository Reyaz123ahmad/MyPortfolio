
// import React from 'react'
// import { FaGithub,FaLinkedin,FaFacebook,FaInstagram,FaTelegram,FaTwitter } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import './Footer.css'


// const Footer = () => {
//   const year=new Date().getFullYear();
//   return (
//     <div className='footer'>
//       <div className='footer-second-container'>
//         <div className='icon-container'>
//           <h2>Social Networks</h2>
//             <Link to='https://github.com/Ejaz786Ahmad' className='link1'><FaGithub/> Github</Link>
//             <Link to='https://www.linkedin.com/in/ejaz-ahmad-1691a9321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='link1'><FaLinkedin/> Linkedin</Link>
//             <Link to='https://www.instagram.com/ejaz_ahmad.?igsh=MTBzdHNoODh1YWlhYg==' className='link1'><FaInstagram/> Instagram</Link>
//             <Link to='https://www.facebook.com/share/19Ja8PxyFN/?mibextid=qi2Omg' className='link1'><FaFacebook/> Facebook</Link>
//             <Link to='https://telegram.org/dl' className='link1'><FaTelegram/> Telegram</Link>
//             <Link to='/' className='link1'><FaTwitter/> Twitter</Link>
//         </div>
//         <div className='info-container'>
//           <h2>Info</h2>
//           <p>Home</p>
//           <p>About</p>
//           <p>Contact</p>
//           <p>Our Stories</p>
//         </div>
//         <div className='policy-container'>
//           <h2>Policy</h2>
//           <p>Privacy Policy</p>
//           <p>Terms Of Service</p>
//           <p>Security</p>
//           <p>Terms & Conditions</p>
//         </div>
//       </div>
//       <div className='line-parent'><div className='line'></div></div>
//       <div className='copyright'>
//         <p>&copy; {year} Ejaz - All Rights Reserved</p>
//       </div>
//     </div>
//   )
// }

// export default Footer




import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="footer-heading">Social Networks</h3>
            <div className="social-links">
              <a href="https://github.com/Ejaz786Ahmad" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub className="social-icon" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ejaz-ahmad-1691a9321" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a href="https://www.instagram.com/ejaz_ahmad" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram className="social-icon" /> Instagram
              </a>
              <a href="https://www.facebook.com/share/19Ja8PxyFN" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook className="social-icon" /> Facebook
              </a>
              <a href="https://telegram.org/dl" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTelegram className="social-icon" /> Telegram
              </a>
              <a href="/" className="social-link">
                <FaTwitter className="social-icon" /> Twitter
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="newsletter-text">Subscribe to receive updates and exclusive offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {year} Ejaz Ahmad. All Rights Reserved.</p>
            <p className="made-with">Made with <FaHeart className="heart-icon" /> in India</p>
          </div>
          
          <div className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp className="arrow-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
