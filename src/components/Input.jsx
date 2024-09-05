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
          border-2
          bg-white`}
      />

      <label
        className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        `}
      >
      </label>
    </div>
  );
};

export default Input;