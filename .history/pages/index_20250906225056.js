// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação da busca de dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('https://abitus-api.geia.vip/person');
        const json = await response.json();
        setData(json.data.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Pessoas Desaparecidas - DESENVOLVE MT</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Pessoas Desaparecidas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((person) => (
          <Link key={person.uuid} href={`/detalhes/${person.uuid}`}>
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold">{person.name}</h2>
              <p>Status: <span className={person.status === 'MISSING' ? 'text-red-500' : 'text-green-500'}>{person.status}</span></p>
              {/* Adicione outros dados aqui */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}