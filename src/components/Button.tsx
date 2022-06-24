import { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export const Button = ({ to, variant = "primary", children, ...rest }: ButtonProps) => {
  return (
    <>
      {variant === "primary" ? (
        <a
          href={to}
          className="w-full lg:w-auto p-4 text-sm text-white font-bold bg-green-500 flex items-center justify-center gap-2 rounded uppercase hover:bg-green-700 transition-colors"
          {...rest}
        >
          {children}
        </a>
      ) : (
        <a
          href={to}
          className="w-full lg:w-auto p-4 text-sm text-blue-500 font-bold flex items-center justify-center gap-2 rounded uppercase border border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  )
}
