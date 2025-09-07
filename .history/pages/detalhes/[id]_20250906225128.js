import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function PersonDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPersonDetails = async () => {
        try {
          // Substitua a URL da API para buscar por UUID
          const response = await fetch(`https://abitus-api.geia.vip/person/${id}`);
          const json = await response.json();
          setPerson(json.data);
        } catch (error) {
          console.error('Error fetching person details:', error);
          setPerson(null);
        } finally {
          setLoading(false);
        }
      };
      fetchPersonDetails();
    }
  }, [id]);

  if (loading) {
    return <div>Carregando detalhes...</div>;
  }

  if (!person) {
    return <div>Pessoa não encontrada.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>{person.name} - Detalhes</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">{person.name}</h1>
      <p className="text-xl font-medium">Status: <span className={person.status === 'MISSING' ? 'text-red-500' : 'text-green-500'}>{person.status}</span></p>
      
      {/* Aqui você pode exibir a imagem e outras informações detalhadas */}
      <div className="mt-4 p-4 border rounded-lg">
        <p><strong>Nome Completo:</strong> {person.fullName}</p>
        <p><strong>Data de Nascimento:</strong> {person.birthDate}</p>
        {/* Adicione mais detalhes conforme a API e o design */}
      </div>

      {/* Adicionar aqui o botão e formulário para "Enviar Informações" */}
    </div>
  );
}