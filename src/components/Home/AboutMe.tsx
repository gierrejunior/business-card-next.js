import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['500'],
  subsets: ['latin'],
});

const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5ren] ">
          Prazer, sou&nbsp;
          <span className="font-bold ">Gierre</span>
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
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols2 xl:w-fit gap-3">
          <li className="bg-javascript text-black px-1 py1 rounded">
            JavaScript
          </li>
          <li className="bg-typescript px-1 py1 rounded">TypeScript</li>
          <li className="bg-nodejs px-1 py1 rounded">Node.js</li>
          <li className="bg-python px-1 py1 rounded">Python</li>

          <div className="w-full"></div>

          <li className="bg-react text-black px-1 py1 rounded">React</li>
          <li className="bg-nextjs px-1 py1 rounded">Next.js</li>
          <li className="bg-nestjs px-1 py1 rounded">Nest.Js</li>
          <li className="bg-express px-1 py1 rounded">Express</li>
          <li className="bg-django px-1 py1 rounded">Django</li>

          <div className="w-full"></div>

          <li className="bg-postgresql px-1 py1 rounded">PostgreSQL</li>
          <li className="bg-github px-1 py1 rounded">GitHub</li>
        </ul>
      </div>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/48733200?v=4"
          alt="Foto do Perfil de Gierre"
          unoptimized
          width={500}
          height={500}
        />
        <p>
          <span>3+</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
