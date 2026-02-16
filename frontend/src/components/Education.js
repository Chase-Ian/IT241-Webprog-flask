import React from 'react';

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="card">
        <h3 style={{ fontSize: '16px' }}>Bachelor of Science in Information Technology</h3>
        <p style={{ color: '#666', marginBottom: '10px' }}>University Name | 2022 – 2026</p>
        <ul style={{ paddingLeft: '20px', fontSize: '14px' }}>
          <li>Relevant Coursework: Web Development, Database Management, Systems Analysis.</li>
          <li>Maintaining a high GPA and participating in tech seminars.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;