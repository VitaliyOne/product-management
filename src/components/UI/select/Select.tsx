import React from 'react';
import classes from './Select.module.css';
import { type ISelectProps } from './types';

const Select: React.FC<ISelectProps> = ({ value, onChange, defaultValue, option }) => {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {defaultValue && (
        <option value="" disabled>
          {defaultValue}
        </option>
      )}
      {option.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
