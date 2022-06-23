import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

interface ButtonProps extends LinkProps {
  to: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export const Button = ({ to, variant = "primary", children, ...rest }: ButtonProps) => {
  return (
    <>
      {variant === "primary" ? (
        <Link
          to={to}
          className="p-4 text-sm text-white font-bold bg-green-500 flex items-center justify-center gap-2 rounded uppercase hover:bg-green-700 transition-colors"
          {...rest}
        >
          {children}
        </Link>
      ) : (
        <Link
          to={to}
          className="p-4 text-sm text-blue-500 font-bold flex items-center justify-center gap-2 rounded uppercase border border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
          {...rest}
        >
          {children}
        </Link>
      )}
    </>
  )
}
