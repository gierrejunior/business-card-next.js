import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      <Link href="/contacts">Ir para a Página Contatos</Link>
    </div>
  );
};

export default Home;
