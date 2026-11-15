import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card counter">
      <h2>Counter <span>(useState hook)</span></h2>
      <p className="count" aria-live="polite">{count}</p>
      <div className="button-row">
        <button type="button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button type="button" className="button-secondary" onClick={() => setCount(0)}>
          Reset
        </button>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </section>
  );
}

export default Counter;
