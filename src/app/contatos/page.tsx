import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatos | GR-Dev',
};

const Contatos = () => {
  return (
    <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
      <h1 className="text-5xl md:text-7xl font-bold text-center">Contatos</h1>
      <ul className="table mx-auto sapce-y-6 md:space-y-8">
        <li className="md:text-xl">
          <span className="font-bold">E-Mail</span>
          <div className="flex gap-1 md fap-3 items-center">
            <a
              href="mailto:gierremartins@gmail.com"
              className="text-sm md:text-lg text-slate-300 underline truncate"
            >
              gierremartins@gmail.com
            </a>
          </div>
        </li>
        <li className="md:text-xl">
          <span className="font-bold">LinkedIn</span>
          <div className="flex gap-1 md fap-3 items-center">
            <a
              href="https://www.linkedin.com/in/gierrejunior/"
              className="text-sm md:text-lg text-slate-300 underline truncate"
            >
              https://www.linkedin.com/in/gierrejunior/
            </a>
          </div>
        </li>
        <li className="md:text-xl">
          <span className="font-bold">GitHub</span>
          <div className="flex gap-1 md fap-3 items-center">
            <a
              href="https://github.com/gierrejunior"
              className="text-sm md:text-lg text-slate-300 underline truncate"
            >
              https://github.com/gierrejunior
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Contatos;
