import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface LessonProps {
  id: string;
  lessonType: "live" | "class";
  availableAt: string;
  title: string;
  slug: string;
}

interface GetLessonsQueryResponse {
  lessons: LessonProps[];
}

export const Sidebar = () => {
  const { loading, error, data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-x border-gray-600 hidden xl:block">
      <span className="block text-2xl font-bold text-white p-6 mb-6 border-b border-gray-500">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {loading ? (
          <span className="text-gray-300">Carregando aulas...</span>
        ) : (
          <>
            {error ? (
              <span className="text-gray-300">
                Houve um erro ao carregar as aulas.
              </span>
            ) : (
              <>
                {data?.lessons.map((lesson) => {
                  return (
                    <Lesson
                      key={lesson.id}
                      title={lesson.title}
                      slug={lesson.slug}
                      availableAt={new Date(lesson.availableAt)}
                      type={lesson.lessonType}
                    />
                  )
                })}
              </>
            )}
          </>
        )}
      </div>
    </aside>
  )
}
