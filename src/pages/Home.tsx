import { FormEvent, useState } from 'react';

import { Footer } from '../components/Footer';
import { Logo } from '../components/Logo';

import codeMockup from '../assets/code-mockup.png';
import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`;

export const Home = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, {
    loading,
    error,
  }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center px-4">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center justify-between gap-4 mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] font-semibold text-gray-100 leading-tight">
            Construa uma <strong className="text-blue-500">
              aplicação completa
            </strong>, do zero, com <strong className="text-blue-500">
              React
            </strong>
          </h1>
          <p className="mt-6 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 w-full mt-8 bg-gray-700 border border-gray-500 rounded md:w-auto md:mt-auto">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              name="email"
              id="email"
              placeholder='Digite seu e-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 lg:w-auto p-4 text-sm text-white font-bold bg-green-500 flex items-center justify-center gap-2 rounded uppercase hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      
      <img src={codeMockup} className="mt-10 max-w-[1100px] w-full" alt="Code" />

      <Footer />
    </div>
  )
}
