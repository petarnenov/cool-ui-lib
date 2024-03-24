import React from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} data-testid="cool-btn">
      {children}
    </button>
  );
};

export default Button;
