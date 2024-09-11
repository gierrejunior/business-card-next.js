// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="/favicon.svg" alt="Ícone" width={50} height={50} />
      </Link>
      <nav>
        <Link href="/">Sobre mim</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/contatos">Entre em contato</Link>
      </nav>
    </header>
  );
}
