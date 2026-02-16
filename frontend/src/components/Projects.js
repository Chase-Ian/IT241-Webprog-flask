import React from 'react';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Guestbook Application",
      tech: "Flask | React | Supabase",
      desc: "A full-stack application featuring real-time database integration and a responsive user interface."
    },
    {
      id: 2,
      title: "Portfolio Website",
      tech: "React | CSS Grid",
      desc: "A personal profile designed with a minimalist pixel-art theme, focused on mobile responsiveness and clean code."
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {projectList.map(project => (
          <div key={project.id} className="card">
            <h3 style={{ fontSize: '14px', marginBottom: '5px' }}>{project.title}</h3>
            <p style={{ fontSize: '10px', color: '#007bff', marginBottom: '10px', fontFamily: "'Press Start 2P'" }}>
              {project.tech}
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.4' }}>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;