import { gql, useQuery } from '@apollo/client';
import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { DefaultUi, Player as PlayerVideo, Youtube } from '@vime/react';

import { Card } from './Card';
import { Footer } from './Footer';
import { Button } from './Button';

import '@vime/core/themes/default.css';

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    };
  }
}

interface PlayerProps {
  lessonSlug: string;
}

export const Player = ({ lessonSlug }: PlayerProps) => {
  const { data, loading, error } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
  })

  if (!data || loading) {
    return (
      <div className='flex-1'>
        <span>Carregando...</span>
      </div>
    )
  }

  return (
    <>
      {error ? (
        <div className='flex-1'>
          <span>Erro ao carregar a aula</span>
        </div>
      ) : (
        <div className="flex-1">
          <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
              <PlayerVideo>
                <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
                <DefaultUi />
              </PlayerVideo>
            </div>
          </div>

          <div className="p-8 max-w-[1100px] mx-auto">
            <div className="flex items-start gap-16">
              <div className="flex-1">
                <h1 className="text-2xl text-gray-100 font-bold">
                  {data.lesson.title}
                </h1>
                <p className="mt-4 text-gray-200 leading-relaxed">
                  {data.lesson.description}
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    alt="Rudney Rodrigues"
                    src={data.lesson.teacher.avatarURL}
                    className="rounded-full w-16 h-16 border-2 border-blue-500"
                  />

                  <div className="leading-relaxed">
                    <strong className="text-2xl text-gray-100 font-bold block">
                      {data.lesson.teacher.name}
                    </strong>
                    <span className="text-gray-200 text-sm block">
                      {data.lesson.teacher.bio}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button to="">
                  <DiscordLogo size={24} />
                  Comunidade do Discord
                </Button>
                <Button to="" variant="secondary">
                  <Lightning size={24} />
                  Acesse o desafio
                </Button>
              </div>
            </div>

            <div className='gap-8 mt-20 flex items-center flex-wrap'>
              <Card
                to="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
                title="Material complementar"
                icon={<FileArrowDown size={40} />}
                description="Acesse o material complementar para acelerar o seu desenvolvimento"
                target="_blank"
              />
              <Card
                to="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR?usp=sharing"
                title="Wallpapers exclusivos"
                icon={<Image size={40} />}
                description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
                target="_blank"
              />
            </div>
            
            <Footer />
          </div>
        </div>
      )}
    </>
  )
}
