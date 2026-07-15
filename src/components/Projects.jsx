export default function Projects() {
  const projects = [
    {
      title: 'Intern Task Management System',
      index: 'Internship Project — Sfour eSolutions',
      description: 'A role-based task management platform with separate admin and intern dashboards. Admins assign tasks and track progress; interns submit work with file uploads and follow live status updates. Frontend built with React + Vite and Tailwind CSS; backend is a FastAPI service secured end-to-end with JWT authentication.',
      stack: ['React', 'Vite', 'Tailwind CSS', 'Python', 'FastAPI', 'JWT'],
      demo: 'https://intern-task-uj68.vercel.app/',
      github: 'https://github.com/Sadhana8124'
    },
    {
      title: 'Blood Donor Management System',
      index: 'Academic Project',
      description: 'A web-based system to streamline blood donor registration, inventory management, and blood distribution, with a focus on efficient data handling and a user-friendly interface. Built with PHP and MySQL using VS Code and XAMPP.',
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      
    },
    {
      title: 'Birth & Death Analysis System',
      index: 'Academic Project',
      description: 'A system to manage and analyze birth and death records, with secure login, full CRUD operations, and search filters — improving both record accuracy and retrieval speed.',
      stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
     
    }
  ];

  return (
    <section id="projects">
      <div className="section-head">
        <h2>Projects</h2>
        <span className="section-num">03 — Selected Work</span>
      </div>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div className="project-top">
            <div>
              <div className="project-title">{project.title}</div>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  ↗ Live Demo
                </a>
              )}
            </div>
            <div className="project-index">{project.index}</div>
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="stack">
            {project.stack.map((tech, i) => (
              <span key={i}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}