export default function About() {
  return (
    <section id="about">
      <div className="section-head">
        <h2>About</h2>
        <span className="section-num">01 — Profile</span>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm an <strong>MCA graduate from Dayananda Sagar College</strong> (8.3 CGPA) with a BCA
            background (9.1 CGPA), and hands-on experience building production-style software during
            my internship at <strong>Sfour eSolutions Pvt Ltd</strong>, where I worked as a Full Stack
            Developer Intern from August to October 2025.
          </p>
          <p>
            There, I built a <strong>role-based task management system</strong> from the ground up —
            separate admin and intern dashboards, task assignment and submission with file upload,
            and live status tracking, backed by FastAPI APIs secured with JWT authentication and a
            React + Tailwind CSS frontend.
          </p>
          <p>
            Beyond the internship, I've built and shipped two further full stack systems on PHP and
            MySQL, and backed my development skills with certifications in Java, data structures and
            algorithms, and cloud computing, plus virtual experience programs with Deloitte in data
            analysis and cybersecurity. I'm a fresher by title, not by practice — and I'm looking for
            a team where I can take on real ownership early.
          </p>
        </div>
        <div className="status-card">
          <div className="label">Status</div>
          <div className="value">Open to entry-level roles</div>
          <div className="label">Based in</div>
          <div className="value">Bengaluru, India</div>
          <div className="label">Phone</div>
          <div className="value" style={{ fontSize: '1.05rem' }}>+91 86603 21738</div>
          <div className="label">Focus</div>
          <div className="value">Full Stack Development</div>
        </div>
      </div>
    </section>
  );
}
