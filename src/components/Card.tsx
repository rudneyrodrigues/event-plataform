import { Link, LinkProps } from "react-router-dom";
import { CaretRight, FileArrowDown } from "phosphor-react";
import { ReactElement, ReactNode } from "react";

interface CardProps extends LinkProps {
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
}: CardProps) => {
  return (
    <Link
      to={to}
      className="flex items-stretch justify-between flex-auto xl:flex-1 bg-gray-700 rounded overflow-hidden gap-6 hover:bg-gray-600 transition-colors"
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
    </Link>
  )
}
