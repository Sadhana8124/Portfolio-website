export default function Hero() {
  return (
    <section className="hero" id="top" style={{ borderTop: 'none' }}>
      <p className="eyebrow">MCA Graduate (8.2 CGPA) · Full Stack Developer</p>
      <h1 className="title">Sadhana Dhanapal <em>Subbannavar</em></h1>
      <p className="hero-sub">
        I design and ship role-based, production-style applications — from FastAPI backends with
        JWT authentication to React + Tailwind interfaces that real users rely on. In my internship
        at Sfour eSolutions, I built a complete task management system with admin and intern
        dashboards, file uploads, and live status tracking. I'm looking for an entry-level full
        stack role where I can own features end to end from day one.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">View Projects</a>
        <a className="btn btn-ghost" href="mailto:sadhanasubbannavar8124@gmail.com">Get in Touch</a>
        <a className="btn btn-ghost" href="https://github.com/Sadhana8124" target="_blank" rel="noopener">GitHub</a>
      </div>
    </section>
  );
}
