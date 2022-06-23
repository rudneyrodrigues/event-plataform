import { CaretRight } from "phosphor-react";
import { ReactNode, AnchorHTMLAttributes } from "react";

interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  title: string;
  icon: ReactNode;
  description: string;
}

export const Card = ({
  to,
  icon,
  title,
  description,
  ...rest
}: CardProps) => {
  return (
    <a
      href={to}
      className="flex items-stretch justify-between flex-auto xl:flex-1 bg-gray-700 rounded overflow-hidden gap-6 hover:bg-gray-600 transition-colors"
      {...rest}
    >
      <div className="bg-green-700 p-6 flex items-center text-gray-100">
        {icon}
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">
          {title}
        </strong>
        <p className="text-sm text-gray-200 mt-2">
          {description}
        </p>
      </div>
      <div className="p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  )
}
