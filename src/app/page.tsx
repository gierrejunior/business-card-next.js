import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre Mim | GR-Dev',
  description: 'Conheça um pouco mais sobre GR-Dev',
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link href="/contatos">Ir para a Página Contatos</Link>
    </div>
  );
};

export default Home;
