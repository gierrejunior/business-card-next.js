import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatos | GR-Dev',
};

const Contatos = () => {
  return (
    <div>
      <h1>Contatos</h1>
      <ul>
        <li>
          <span>E-Mail</span>
          <div>
            <a href="mailto:gierremartins@gmail.com">gierremartins@gmail.com</a>
          </div>
        </li>
        <li>
          <span>LinkedIn</span>
          <div>
            <a href="https://www.linkedin.com/in/gierrejunior/">
              https://www.linkedin.com/in/gierrejunior/
            </a>
          </div>
        </li>
        <li>
          <span>GitHub</span>
          <div>
            <a href="https://github.com/gierrejunior">
              https://github.com/gierrejunior
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Contatos;
