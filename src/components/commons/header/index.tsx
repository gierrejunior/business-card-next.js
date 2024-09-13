'use client';
import { MenuIcon } from '@/components/icons/menu-icon';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useState } from 'react';

import { Menu } from './menu';

const roboto = Roboto({
  weight: ['500'],
  subsets: ['latin'],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

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
      <button
        className="p-1 md:hidden"
        onClick={openMenu}
        aria-label="Abrir Menu"
      >
        <MenuIcon className=" fill-white w-10 h-10" />
      </button>
      <nav className="hidden md:flex itens-center gap-10 text-md">
        <Link href="/">Sobre mim</Link>
        <Link href="/portfolio">Portfólio</Link>
        <Link href="/contatos">Entre em contato</Link>
      </nav>
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
