import React from 'react';

const Input = ({id, label, disabled, type="text"}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        disabled={disabled}
        placeholder={label}
        type={type}
        className={`
          w-full
          p-4
          pt-6
          font-light
          bg-white
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          `}
      />
    </div>
  );
};

export default Input;