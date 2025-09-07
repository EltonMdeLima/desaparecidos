// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'; // Importe o axios para manter a consistência

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use a rota de proxy configurada no next.config.js
        const response = await axios.get('/api/person');
        setData(response.data.data.content); // Ajuste para a estrutura de dados da API
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

  // Se a API não retornar dados, mostre uma mensagem para o usuário
  if (data.length === 0) {
    return <div>Nenhuma pessoa desaparecida encontrada.</div>;
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
              {/* Adicione outros dados aqui, como 'age' e 'city' se disponíveis */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}