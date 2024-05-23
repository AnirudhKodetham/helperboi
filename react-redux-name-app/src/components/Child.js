import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../store/nameSlice';
import './Child.css';

const Child = () => {
  const [inputName, setInputName] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(inputName));
  };

  return (
    <div className="child-box">
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <label>
          What is your name?
          <input
            type="text"
            value={inputName}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Child;
