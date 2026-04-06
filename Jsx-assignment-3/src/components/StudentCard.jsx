import React from 'react';

function StudentCard({ name, rollNo, branch }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Student Info</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>Branch:</strong> {branch}</p>
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
};

export default StudentCard;
