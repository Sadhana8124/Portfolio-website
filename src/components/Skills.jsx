export default function Skills() {
  const skills = [
    { name: 'Java', tag: 'Language' },
    { name: 'Python', tag: 'Language' },
    { name: 'C', tag: 'Language' },
    { name: 'JavaScript', tag: 'Language' },
    { name: 'React + Vite', tag: 'Frontend' },
    { name: 'FastAPI', tag: 'Backend' },
    { name: 'HTML + CSS', tag: 'Markup / Style' },
    { name: 'DBMS / MySQL', tag: 'Database' },
    { name: 'JWT Auth', tag: 'Security' },
    { name: 'Problem Solving', tag: 'Soft Skill' },
    { name: 'Adaptability', tag: 'Soft Skill' },
    { name: 'Critical Thinking', tag: 'Soft Skill' },
  ];

  return (
    <section id="skills">
      <div className="section-head">
        <h2>Skills</h2>
        <span className="section-num">02 — Toolkit</span>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <span className="si-name">{skill.name}</span>
            <span className="si-tag">{skill.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
