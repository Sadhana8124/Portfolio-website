export default function Certifications() {
  const certifications = [
    { name: 'Front-End Development – HTML', meta: 'Great Learning' },
    { name: 'Data Structures and Algorithms in Java', meta: 'Infosys Springboard' },
    { name: 'Java Programming Certification', meta: 'Oracle' },
    { name: 'Essentials of Cloud Computing', meta: 'Infosys Springboard' }
  ];

  return (
    <section id="certifications">
      <div className="section-head">
        <h2>Certifications</h2>
        <span className="section-num">06 — Credentials</span>
      </div>
      {certifications.map((cert, index) => (
        <div className="edu-item" key={index}>
          <div className="edu-name">{cert.name}</div>
          <div className="edu-meta">{cert.meta}</div>
        </div>
      ))}
    </section>
  );
}
