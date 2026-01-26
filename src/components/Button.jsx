import React from "react";

const Button = ({ title, id, leftIcon, containerClass, rightIcon }) => {
  return (
    <div
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black flex items-center ${containerClass} `}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>

      {rightIcon}
    </div>
  );
};

export default Button;
