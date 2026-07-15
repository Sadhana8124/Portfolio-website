export default function VirtualExperience() {
  const experiences = [
    { name: 'Data Analysis Job Simulation', meta: 'Deloitte · Jun 2025' },
    { name: 'Cybersecurity Job Simulation', meta: 'Deloitte (Forage) · Jun 2025' }
  ];

  return (
    <section id="virtual-experience">
      <div className="section-head">
        <h2>Virtual Experience</h2>
        <span className="section-num">07 — Job Simulations</span>
      </div>
      {experiences.map((exp, index) => (
        <div className="edu-item" key={index}>
          <div className="edu-name">{exp.name}</div>
          <div className="edu-meta">{exp.meta}</div>
        </div>
      ))}
    </section>
  );
}
