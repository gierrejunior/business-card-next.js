import AboutMe from '@/components/Home/AboutMe';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mim | GR-Dev',
  description: 'Conheça um pouco mais sobre GR-Dev',
};

const Home = () => {
  return (
    <div>
      <AboutMe />
    </div>
  );
};

export default Home;
