import React from 'react';

const Button = ({label, onClick, disabled}) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        bg-orange-500
        bg-terra
        text-white
        text-md
        py-3
        font-semibold
        border-2
        `}
    >
      {label}
    </button>
  );
};

export default Button;