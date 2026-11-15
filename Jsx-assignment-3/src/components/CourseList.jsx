import React from 'react';

function CourseList({ courses }) {
  return (
    <section className="card">
      <h2>Enrolled Courses</h2>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id}>
            <span>{course.name}</span>
            <span className="badge">{course.credits} credits</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseList;
