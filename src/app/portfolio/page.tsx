import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfólio| GR-Dev',
};

const Contatos = () => {
  return (
    <div>
      <h1>Portfólio</h1>

      <Link href="/">Home</Link>
    </div>
  );
};

export default Contatos;
