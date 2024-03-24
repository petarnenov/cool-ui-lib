import React from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
