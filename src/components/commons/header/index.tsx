import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['500'],
  subsets: ['latin'],
});

export default function Header() {
  return (
    <header
      className={`${roboto.className} bg-hblue900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}
    >
      <Link href="/">
        <Image
          src="/favicon.svg"
          alt="Ícone GR de Gierre"
          width={55}
          height={55}
        />
      </Link>
      <nav className="hidden md:flex itens-center gap-10 text-md">
        <Link href="/">Sobre mim</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/contatos">Entre em contato</Link>
      </nav>
    </header>
  );
}
