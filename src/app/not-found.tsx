import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '404 | GR-Dev',
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 px-6 md:px-32">
      <h1 className="sm:text-7xl font-bold text-5xl">404</h1>
      <p className=" flex flex-col gap-8 md:gap-4 md:text-xl">
        <span>Oops! Não conseguimos encontrar essa página!</span>
        <span>
          Clique no botão abaixo para ser redirecionado à Página Inicial
        </span>
      </p>
      <Link
        href="/"
        className={`${roboto.className} p-4 bg-hblue500 rounded-xl text-black mt-5 md:mt-1 w-fit md:text-xl`}
      >
        {' '}
        Ir para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;
