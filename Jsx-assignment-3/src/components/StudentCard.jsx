import React from 'react';

function StudentCard({ name, rollNo, branch }) {
  return (
    <section className="card">
      <h2>Student Info</h2>
      <dl className="student-details">
        <div>
          <dt>Name</dt>
          <dd>{name}</dd>
        </div>
        <div>
          <dt>Roll number</dt>
          <dd>{rollNo}</dd>
        </div>
        <div>
          <dt>Branch</dt>
          <dd>{branch}</dd>
        </div>
      </dl>
    </section>
  );
}

export default StudentCard;
