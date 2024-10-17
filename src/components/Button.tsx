import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: keyof typeof variantStyles;
}

export const variantStyles = {
  primary: "rounded-2xl bg-primary-40 text-black hover:bg-primary-60",
  "primary-light": "rounded-2xl bg-primary-20 hover:bg-primary-40 text-black",
  "outline-primary":
    "rounded-2xl bg-transparent text-primary-40 border border-primary-40 hover:border-primary-60 hover:text-primary-60 duration-300",
  "outline-white":
    "rounded-2xl bg-transparent text-light-20 border border-light-100 hover:border-light-60 hover:text-light-40",
  "dark-80": "rounded-2xl bg-dark-80 hover:bg-dark-100 text-light-20",
  "danger-white": "rounded-2xl bg-danger-20 hover:bg-danger-40 text-danger-80",
  "danger-red": "rounded-2xl bg-danger-80 hover:bg-danger-100 text-light-20",
  "danger-black":
    "rounded-2xl bg-dark-60 hover:bg-dark-80 text-danger-40 border-0",
  disabled: "rounded-2xl bg-light-100 text-white",
};

export const sizeStyles = {
  large: "px-8 py-4 text-body-lg",
  medium: "px-8 py-3.5 text-body-md",
  small: "px-8 py-3 text-body-sm",
};

export default function Button({
  className = "",
  disabled,
  children,
  size = "small",
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseStyles =
    "text-center font-medium rounded-2xl cursor-pointer transition-all";
  return (
    <button
      {...props}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
