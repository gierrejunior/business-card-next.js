import {
  faGithub,
  faJs,
  faNodeJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <main>
      <div>
        <h1>Prazer, sou&nbsp;</h1>
        <span>Gierre (GR-Dev)</span>
      </div>
      <div>
        <h2>
          Sou um desenvolvedor de software apaixonado por tecnologia, com foco
          em <strong>desenvolvimento backend</strong> e atualmente explorando o
          mundo do <strong>frontend</strong>. Busco soluções inovadoras e
          eficientes para transformar ideias em projetos funcionais. Estou
          sempre em busca de novos desafios e aprendizado contínuo para
          aprimorar minhas habilidades e entregar o melhor resultado em cada
          projeto.
        </h2>
        <Link href="/contatos">Entre em contato</Link>

        <h3>Linguagens que utilizo:</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.card} ${styles.python}`}>
            <FontAwesomeIcon icon={faPython} />
            <p>Python</p>
          </div>
          <div className={`${styles.card} ${styles.js}`}>
            <FontAwesomeIcon icon={faJs} />
            <p>JavaScript</p>
          </div>
          <div className={`${styles.card} ${styles.ts}`}>
            <FontAwesomeIcon icon={faJs} />
            <p>TypeScript</p>
          </div>
          <div className={`${styles.card} ${styles.sql}`}>
            <FontAwesomeIcon icon={faDatabase} />
            <p>SQL</p>
          </div>
        </div>

        <h3>Tecnologias que trabalho:</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.card} ${styles.django}`}>
            <FontAwesomeIcon icon={faJs} />
            <p>Django</p>
          </div>
          <div className={`${styles.card} ${styles.nest}`}>
            <FontAwesomeIcon icon={faJs} />
            <p>NestJS</p>
          </div>
          <div className={`${styles.card} ${styles.node}`}>
            <FontAwesomeIcon icon={faNodeJs} />
            <p>Node.js</p>
          </div>
          <div className={`${styles.card} ${styles.github}`}>
            <FontAwesomeIcon icon={faGithub} />
            <p>GitHub</p>
          </div>
        </div>

        <h3>Habilidades Técnicas:</h3>
        <div className={styles.techGrid}>
          <div className={`${styles.card} ${styles.api}`}>
            <p>APIs</p>
          </div>
          <div className={`${styles.card} ${styles.unitTesting}`}>
            <FontAwesomeIcon icon={faVial} />
            <p>Testes </p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/48733200?v=4"
          alt="Foto do Perfil de GIerre"
          width={200}
          height={200}
        />
        <p>
          <span>2+</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  );
};

export default AboutMe;
