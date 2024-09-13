import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['500'],
  subsets: ['latin'],
});

const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 text-center py-8 text-lg xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5ren] ">
          Prazer, sou&nbsp;
          <strong className="font-bold ">Gierre</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>
            Sou um desenvolvedor de software apaixonado por tecnologia, com foco
            em <strong>desenvolvimento backend</strong> e atualmente explorando
            o mundo do <strong>frontend</strong>. Busco soluções inovadoras e
            eficientes para transformar ideias em projetos funcionais. Estou
            sempre em busca de novos desafios e aprendizado contínuo para
            aprimorar minhas habilidades e entregar o melhor resultado em cada
            projeto.
          </h2>
          <Link
            href="/contatos"
            className="p-3 bg-hgray500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80"
          >
            Entre em contato
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3">
          <li className="bg-javascript text-black p-1 rounded-md">
            JavaScript
          </li>
          <li className="bg-typescript p-1 rounded-md">TypeScript</li>
          <li className="bg-nodejs p-1 rounded-md">Node.js</li>
          <li className="bg-python p-1 rounded-md">Python</li>

          <li className="bg-react text-black p-1 rounded-md">React</li>
          <li className="bg-nextjs p-1 rounded-md">Next.js</li>
          <li className="bg-nestjs p-1 rounded-md">Nest.Js</li>
          <li className="bg-express p-1 rounded-md">Express</li>
          <li className="bg-django p-1 rounded-md">Django</li>

          <li className="bg-postgresql p-1 rounded-md">PostgreSQL</li>
          <li className="bg-github p-1 rounded-md">GitHub</li>
        </ul>
      </div>
      <div className="relative">
        <Image
          src="https://avatars.githubusercontent.com/u/48733200?v=4"
          alt="Foto do Perfil de Gierre"
          unoptimized
          width={500}
          height={500}
          className="rounded-full"
        />
        <p className="p-1 w-fit text-base rounded-xl text-black absolute -bottom-[0.75rem] leading-tight sm:bottom bg-hblue500">
          <strong className="text-4xl">3+</strong>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
