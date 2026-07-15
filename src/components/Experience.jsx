export default function Experience() {
  return (
    <section id="experience">
      <div className="section-head">
        <h2>Experience</h2>
        <span className="section-num">04 — Track Record</span>
      </div>
      <div className="exp-item">
        <div className="exp-period">Mar 2026 – Present</div>
        <div>
          <div className="exp-role">Full Stack Developer Intern</div>
          <div className="exp-org exp-org-link" href="https://satyukt.com/"
            target="_blank"
            rel="noopener noreferrer">Satyukt Analytics Pvt Ltd↗</div>
          <p className="exp-desc">
            Working in a team-based environment building the <b>Satyukt Business Portal</b> — developed
            the frontend and several <b>REST APIs</b> consumed by it, using <b>React + Vite</b> and <b>Tailwind CSS</b>
            on the frontend and Python on <b>AWS Lambda</b> for the serverless backend. Also maintain
            frontend dashboards for Sat2Farm, SFGC, and the company's main Satyukt website.
          </p>
        </div>
      </div>

      <div className="exp-item">
        <div className="exp-period">Aug 2025 – Oct 2025</div>
        <div>
          <div className="exp-role">Full Stack Developer Intern</div>
          <div className="exp-org exp-org-link" href="https://sfouresolutions.com/">Sfour eSolutions Pvt Ltd↗</div>
          <p className="exp-desc">
            Developed a role-based task management system with separate admin and intern
            dashboards. Implemented task assignment, submission with file upload, and project
            status tracking. Built secure backend APIs with <b>FastAPI</b> and <b>JWT authentication</b>, and a
            responsive <b>React + Tailwind CSS</b> frontend for a smooth user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
