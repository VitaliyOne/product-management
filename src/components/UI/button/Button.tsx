import React from 'react';
import classes from './Button.module.css';
import type { IButtonProps } from './types';

const Button: React.FC<IButtonProps> = ({ colorButton = 'black', onClick, children }) => {
  const colorYellow = '#F7EE55';
  const color = colorButton === colorYellow ? 'black' : 'white';
  const styleButton = {
    backgroundColor: `${colorButton}`,
    color: `${color}`
  };
  return (
    <button className={classes.button} style={styleButton} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
