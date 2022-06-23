import { DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { Button } from './Button';
import { Card } from './Card';
import { Footer } from './Footer';

export const Player = () => {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video" />
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl text-gray-100 font-bold">
              Aula 01 - Abertura do Ignite Lab
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                alt="Rudney Rodrigues"
                src="https://avatars.githubusercontent.com/u/68288226?v=4"
                className="rounded-full w-16 h-16 border-2 border-blue-500"
              />

              <div className="leading-relaxed">
                <strong className="text-2xl text-gray-100 font-bold block">Rudney Rodrigues</strong>
                <span className="text-gray-200 text-sm block">Desenvolvedor Front-end</span>
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
            to=""
            title="Material complementar"
            icon={<FileArrowDown size={40} />}
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
          />
          <Card
            to=""
            title="Wallpapers exclusivos"
            icon={<Image size={40} />}
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
          />
        </div>
        
        <Footer />
      </div>
    </div>
  )
}
