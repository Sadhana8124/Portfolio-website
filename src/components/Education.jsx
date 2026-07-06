export default function Education() {
  const education = [
    {
      name: 'Master of Computer Applications (MCA)',
      meta: 'Dayananda Sagar College of Arts, Science and Commerce, Bengaluru · 2023–2025 · 8.2 CGPA'
    },
    {
      name: 'Bachelor of Computer Applications (BCA)',
      meta: 'SVES B R Darur First Grade College, Harugeri · 2020–2023 · 9.1 CGPA'
    }
  ];

  return (
    <section id="education">
      <div className="section-head">
        <h2>Education</h2>
        <span className="section-num">05 — Background</span>
      </div>
      {education.map((edu, index) => (
        <div className="edu-item" key={index}>
          <div className="edu-name">{edu.name}</div>
          <div className="edu-meta">{edu.meta}</div>
        </div>
      ))}
    </section>
  );
}
