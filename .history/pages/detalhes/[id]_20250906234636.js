// pages/detalhes/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Importamos o axios

const DetalhesPessoa = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pessoa, setPessoa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Certifica-se de que o ID existe antes de buscar os dados
    if (id) {
      const fetchPessoa = async () => {
        try {
          // Use axios.get() para fazer a requisição
          const response = await axios.get(`/api/pessoas/${id}`); // Substitua pela sua URL da API
          setPessoa(response.data);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchPessoa();
    }
  }, [id]); // O useEffect será executado novamente se o ID mudar

  // O que a página renderiza
  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!pessoa) {
    return <p>Pessoa não encontrada.</p>;
  }

  return (
    <div>
      <h1>Detalhes de {pessoa.nome}</h1>
      <p>Idade: {pessoa.idade}</p>
      <p>Local do desaparecimento: {pessoa.localDesaparecimento}</p>
      {/* Adicione mais detalhes conforme a sua API */}
    </div>
  );
};

export default DetalhesPessoa;