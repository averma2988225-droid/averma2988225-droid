import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Counter (useState Hook)</h2>
      <p style={styles.count}>{count}</p>
      <div style={styles.buttonRow}>
        <button style={styles.btn} onClick={() => setCount(count - 1)}>
          − Decrement
        </button>
        <button style={{ ...styles.btn, backgroundColor: '#6b7280' }} onClick={() => setCount(0)}>
          Reset
        </button>
        <button style={styles.btn} onClick={() => setCount(count + 1)}>
          + Increment
        </button>
      </div>
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
    textAlign: 'center',
  },
  title: {
    color: '#1f2937',
    marginTop: 0,
    borderBottom: '2px solid #F97316',
    paddingBottom: '8px',
  },
  count: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#F97316',
    margin: '16px 0',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
  },
  btn: {
    backgroundColor: '#F97316',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 20px',
    cursor: 'pointer',
    fontSize: '15px',
  },
};

export default Counter;
