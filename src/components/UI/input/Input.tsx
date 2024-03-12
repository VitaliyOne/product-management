import React from 'react';
import { type IInputProps } from './types';
import classes from './Input.module.css';

const Input: React.FC<IInputProps> = ({ pattern, placeholder }) => {
  return <input className={classes.input} pattern={pattern} placeholder={placeholder} />;
};

export default Input;
