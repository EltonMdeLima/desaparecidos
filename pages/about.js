// pages/about.js
import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>Sobre | Desaparecidas</title>
        <meta name="description" content="Página sobre o projeto Desaparecidas." />
      </Head>

      <main className={styles.main}>
        <h1>Sobre o Projeto</h1>
        <p>O projeto Desaparecidas tem como objetivo...</p>

        <section>
          <h2>Objetivo</h2>
          <p>Nosso objetivo é...</p>
        </section>

        <section>
          <h2>Equipe</h2>
          <p>Estamos trabalhando com uma equipe de...</p>
        </section>
      </main>
    </>
  );
};

export default About;
