import React from 'react';
import { useSelector } from 'react-redux';
import Child from './Child';
import './Parent.css';

const Parent = () => {
  const name = useSelector((state) => state.name);

  return (
    <div className="parent-box">
      <h1>Parent Component</h1>
      <Child />
      {name && <p>Welcome, {name}!</p>}
    </div>
  );
};

export default Parent;
