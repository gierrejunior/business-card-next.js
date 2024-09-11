import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 | GR-Dev',
};

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
      <p>Oops! Não conseguimos encontrar essa página!</p>
      <span>
        Clique no botão abaixo para ser redirecionado à Página Inicial
      </span>
      <div>
        <Link href="/"> Ir para a página inicial</Link>
      </div>
    </div>
  );
};

export default NotFound;
