// StateDropdown.js
import React from 'react';

const StateDropdown = ({ states, onSelectState }) => {
  return (
    <select onChange={(e) => onSelectState(e.target.value)}>
      <option value="">Select a State</option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default StateDropdown;
