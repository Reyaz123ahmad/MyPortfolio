// // components/Projects.js
// import React from 'react';
// import './Project.css'

// const Projects = () => {
//   const projects = [
//     { 
//       title: 'E-commerce Platform', 
//       description: 'Full-featured online shopping platform with product management, cart, and payment integration.',
//       tags: ['React', 'Node.js', 'MongoDB', 'Stripe API']
//     },
//     { 
//       title: 'Task Management App', 
//       description: 'Productivity application for managing tasks with drag-and-drop interface and team collaboration.',
//       tags: ['React', 'Express', 'MongoDB', 'WebSocket']
//     },
//     { 
//       title: 'Weather Dashboard', 
//       description: 'Real-time weather application with location detection and 5-day forecast visualization.',
//       tags: ['JavaScript', 'API Integration', 'Chart.js', 'Geolocation']
//     }
//   ];

//   return (
//     <section className="projects" id="projects">
//       <div className="container">
//         <div className="section-title">
//           <h2>My Projects</h2>
//         </div>
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div className="project-card" key={index}>
//               <div className="project-img">
//                 <div className="project-number">{index + 1}</div>
//               </div>
//               <div className="project-content">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//                 <div className="project-tags">
//                   {project.tags.map((tag, tagIndex) => (
//                     <span className="project-tag" key={tagIndex}>{tag}</span>
//                   ))}
//                 </div>
//                 <a href="#" className="btn btn-outline">View Details</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from 'react';
import './Project.css';

const Projects = () => {
  const projects = [
    { 
      title: 'Note Master', 
      description: 'Developed note management app with CRUD operations and search/filter functionality',
      achievements: [
        'Reduced UI latency by 40% through react memoization techniques',
        'Implemented responsive design supporting all device sizes',
        'Optimized performance using React memoization'
      ],
      tags: ['React', 'Tailwind CSS', 'LocalStorage'] 
    },
    { 
      title: 'Coffee Shop E-Commerce', 
      description: 'Built a responsive coffee shop app using React to enhance user experience',
      achievements: [
        'Implemented intuitive navigation for seamless interactions across devices'
      ],
      tags: ['React', 'Tailwind CSS', 'Responsive UI'] 
    },
    { 
      title: 'Portfolio App', 
      description: 'Built a responsive portfolio website using React and CSS',
      achievements: [
        'Showcased projects with interactive animations'
      ],
      tags: ['React', 'CSS'] 
    },
    { 
      title: 'Dentalist Healthcare Portal', 
      description: 'Created appointment scheduling system for medical specialities',
      achievements: [
        'Reduced data entry errors by 40% through robust form validation',
        'Designed responsive patient dashboard with treatment history',
        'Enabled faster insurance approvals through accurate patient records'
      ],
      tags: ['HTML', 'CSS', 'JavaScript'] 
    },
    { 
      title: 'Simple React App', 
      description: 'Built a responsive and user friendly app using React Router and Tailwind CSS',
      achievements: [],
      tags: ['React', 'Tailwind CSS'] 
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p className="section-subtitle">A showcase of my technical implementations and solutions</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-header">
                <div className="project-number">{index + 1}</div>
                <h3>{project.title}</h3>
              </div>
              
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                
                {project.achievements.length > 0 && (
                  <div className="project-achievements">
                    <h4>Achievements:</h4>
                    <ul>
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="project-tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <a href="#" className="btn btn-outline">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

