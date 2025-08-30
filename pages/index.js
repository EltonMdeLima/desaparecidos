// pages/index.js

import Head from 'next/head';  // Importando o componente Head para modificar o <head> da página
import styles from '../styles/Home.module.css';  // Importando um arquivo de estilos (caso exista)

export default function Home() {
  return (
    <>
      {/* Modificando o <head> da página */}
      <Head>
        <title>Desaparecidos</title>  {/* Título da página */}
        <meta name="description" content="Aplicativo para ajudar a encontrar pessoas desaparecidas." />  {/* Descrição para SEO */}
      </Head>

      <main className={styles.main}>
        <h1>Bem-vindo ao projeto Desaparecidos</h1> {/* Cabeçalho principal */}
        <p>Encontre informações sobre pessoas desaparecidas e ajude a encontrar respostas.</p>
        {/* Conteúdo adicional */}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Desaparecidos. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
