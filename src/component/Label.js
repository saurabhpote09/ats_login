import React from 'react';

const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className='font-medium text-sm leading-4'>{text}</label>
  );
}

export default Label;
