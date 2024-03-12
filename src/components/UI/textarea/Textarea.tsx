import React from 'react';
import { type ITextareaProps } from './types';
import classes from './Textarea.module.css';

const Textarea: React.FC<ITextareaProps> = ({ placeholder }) => {
  return <textarea className={classes.textarea} placeholder={placeholder} />;
};

export default Textarea;
