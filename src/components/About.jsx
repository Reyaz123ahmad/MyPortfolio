
// import React from 'react'
// import mypic from '../assets/mypic.jpg'
// import './About.css'

// const About = () => {
//   return (
//     <div className='about'>
//       <div className='intro-container'>
//         <h2 className='about-head'>Introduction</h2>
//         <p className='about-para'>Hello, my name is Ejaz Ahmad. I'm a student of B.tech 4th year with a strong interest in Computer Science. During my acacdemic career i have learn varoius skills and technologies like HTML, CSS, Javascript,React.js Node.js,Express.js and MongoDB.</p>
//       </div>
//       <div className='image-container'>
//        <img src={mypic} alt="" className='about-image' />
//       </div>
    
//     </div>
//   )
// }

// export default About

// components/About.js
import React from 'react';
import { FaCode, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaServer, FaGitAlt, FaMobileAlt,FaHome } from 'react-icons/fa';
import './About.css'

const About = () => {
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5 & CSS3' },
    { icon: <FaHome/>, name: 'Tailwind CSS' },
    { icon: <FaJs />, name: 'JavaScript (ES6+)' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <FaNodeJs />, name: 'Node.js & Express' },
    { icon: <FaDatabase />, name: 'MongoDB' },
    { icon: <FaServer />, name: 'RESTful APIs' },
    { icon: <FaGitAlt />, name: 'Git & GitHub' },
    { icon: <FaMobileAlt />, name: 'Responsive Design' },
    

  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-img">
            <FaCode className="code-icon" />
          </div>
          <div className="about-text">
            <h3>Full Stack Web Developer</h3>
            <p>I'm a passionate developer with expertise in building modern web applications using cutting-edge technologies. My focus is on creating efficient, scalable solutions with great user experiences.</p>
            <p>With experience in both frontend and backend development, I can handle all aspects of web development from concept to deployment.</p>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

