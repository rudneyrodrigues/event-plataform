import { ptBR } from 'date-fns/locale';
import { isPast, format } from 'date-fns';
import classNames from 'classnames';
import { CheckCircle, LockKey } from "phosphor-react";
import { Link, LinkProps, useParams } from 'react-router-dom';

interface LessonProps extends LinkProps {
  title: string;
  to: string;
  availableAt: Date;
  type: "live" | "class";
}

export const Lesson = ({
  title,
  to,
  availableAt,
  type,
}: LessonProps) => {
  const {slug} = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'dd' de 'MMMM' • 'k'h'mm", { locale: ptBR });

  const isActiveLesson = slug === to;

  return (
    <Link
      to={`/event/lesson/${to}`}
      className="group"
    >
      <span className='text-gray-300'>
        {availableDateFormatted}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors', {
        'bg-green-500': isActiveLesson,
      })}>
        <header className="flex items-center justify-between gap-2">
          {isLessonAvailable ? (
            <span className={classNames('flex items-center justify-center gap-2 text-sm font-medium transition-colors', {
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2 text-sm text-orange-500 font-medium">
              <LockKey size={20} />
              Em breve
            </span>
          )}
          <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border font-bold transition-colors', {
            'border-green-500': !isActiveLesson,
            'border-white': isActiveLesson,
          })}>
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        
        <strong className={classNames('mt-5 block transition-colors', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
        })}>
          {title}
        </strong>
      </div>
    </Link>
  )
}
