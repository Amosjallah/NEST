import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-base tracking-wide shadow-sm hover:shadow-md";
  
  const variants = {
    primary: "bg-montessori-primary text-white hover:bg-[#3d5e23]",
    secondary: "bg-montessori-secondary text-white hover:bg-[#c96248]",
    accent: "bg-montessori-accent text-montessori-dark hover:bg-[#e0b57a]",
    outline: "bg-transparent border-2 border-montessori-primary text-montessori-primary hover:bg-montessori-primary hover:text-white"
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;