import React from 'react';

function CourseList({ courses }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Enrolled Courses</h2>
      <ul style={styles.list}>
        {courses.map((course) => (
          <li key={course.id} style={styles.item}>
            <span>{course.name}</span>
            <span style={styles.badge}>{course.credits} Credits</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '24px',
    backgroundColor: '#f9fafb',
  },
  title: {
    color: '#1f2937',
    marginTop: 0,
    borderBottom: '2px solid #F97316',
    paddingBottom: '8px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #e5e7eb',
  },
  badge: {
    backgroundColor: '#F97316',
    color: '#fff',
    borderRadius: '12px',
    padding: '2px 10px',
    fontSize: '13px',
  },
};

export default CourseList;
