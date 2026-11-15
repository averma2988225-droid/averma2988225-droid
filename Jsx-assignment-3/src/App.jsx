import React from 'react';
import StudentCard from './components/StudentCard';
import CourseList from './components/CourseList';
import Counter from './components/Counter';

function App() {
  const student = {
    name: 'Ayush Verma',
    rollNo: 'CS2024001',
    branch: 'B.Tech CSE (AI/ML)',
  };

  const courses = [
    { id: 1, name: 'React Fundamentals', credits: 3 },
    { id: 2, name: 'JSX & Components', credits: 3 },
    { id: 3, name: 'State & Props', credits: 4 },
    { id: 4, name: 'Hooks in React', credits: 4 },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>JSX Assignment 3</h1>
      <p style={styles.subtitle}>React Components Practice</p>

      <StudentCard {...student} />
      <CourseList courses={courses} />
      <Counter />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '24px',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    color: '#F97316',
    textAlign: 'center',
    marginBottom: '4px',
  },
  subtitle: {
    textAlign: 'center',
    color: '#6b7280',
    marginBottom: '32px',
  },
};

export default App;
