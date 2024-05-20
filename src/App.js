import React, { useState } from 'react';
import './App.css'; // Make sure to create and style App.css accordingly

function App() {
  // State example: Counter
  const [count, setCount] = useState(0);

  // Props example: Greeting
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleNameSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  return (
    <div className="app-container">
      {/* State Example */}
      <div className="counter-container">
        <button className="counter-button" onClick={() => setCount(count - 1)}>-</button>
        <span className="counter-number">{count}</span>
        <button className="counter-button" onClick={() => setCount(count + 1)}>+</button>
      </div>

      {/* Props Example */}
      <div className="greeting-container">
        <form onSubmit={handleNameSubmit}>
          <label htmlFor="nameInput">What is your name?</label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {submittedName && <h2>Hi {submittedName}, welcome to my channel!</h2>}
      </div>
    </div>
  );
}

export default App;
