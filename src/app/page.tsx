import AboutMe from '@/components/Home/AboutMe';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre Mim | GR-Dev',
  description: 'Conheça um pouco mais sobre GR-Dev',
};

const Home = () => {
  return (
    <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
      <AboutMe />
    </div>
  );
};

export default Home;
