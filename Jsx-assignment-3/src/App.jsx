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
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">React practice project</p>
        <h1>JSX Assignment 3</h1>
        <p className="subtitle">Build reusable components with props, lists, and state.</p>
      </header>

      <StudentCard {...student} />
      <CourseList courses={courses} />
      <Counter />
    </main>
  );
}

export default App;
