import { ptBR } from 'date-fns/locale';
import { Link, LinkProps } from 'react-router-dom';
import { isPast, format } from 'date-fns';
import { CheckCircle, LockKey } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export const Lesson = ({
  title,
  slug,
  availableAt,
  type,
}: LessonProps) => {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'dd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className="group"
    >
      <span className='text-gray-300'>
        {availableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors">
        <header className="flex items-center justify-between gap-2">
          {isLessonAvailable ? (
            <span className="flex items-center justify-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2 text-sm text-orange-500 font-medium">
              <LockKey size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        
        <strong className="text-gray-200 mt-5 block">
          {title}
        </strong>
      </div>
    </Link>
  )
}
