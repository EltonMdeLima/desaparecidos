// pages/index.js

import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import { fetchPeople } from '../store/slices/peopleSlice';

export default function Home() {
  const dispatch = useDispatch();

  // Seleciona o estado de autenticação e de pessoas do Redux
  const authStatus = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);
  const peopleStatus = useSelector((state) => state.people.status);
  const peopleList = useSelector((state) => state.people.list);

  // Efeito 1: Tenta fazer o login automaticamente quando o componente é montado.
  useEffect(() => {
    // Evita o login repetido se o estado já não for 'idle'
    if (authStatus === 'idle') {
      dispatch(login({
        // Substitua por suas credenciais reais
        username: 'elton',
        password: 'elton',
      }));
    }
  }, [authStatus, dispatch]); // Dependências: re-executa se o status de autenticação mudar

  // Efeito 2: Busca os dados apenas se o login for bem-sucedido
  useEffect(() => {
    // A busca de dados só é disparada se o login tiver sucesso e se os dados ainda não tiverem sido buscados
    if (authStatus === 'succeeded' && peopleStatus === 'idle') {
      dispatch(fetchPeople());
    }
  }, [authStatus, peopleStatus, dispatch]); // Dependências: re-executa se o status de auth ou de people mudar

  // --- Renderização Condicional Baseada no Estado do Redux ---

  if (authStatus === 'loading') {
    return <div>Fazendo login...</div>;
  }

  if (authStatus === 'failed') {
    return <div>Erro ao fazer login: {JSON.stringify(authError)}</div>;
  }

  if (peopleStatus === 'loading') {
    return <div>Carregando pessoas desaparecidas...</div>;
  }

  // Se a API não retornar dados (lista vazia), mostre esta mensagem.
  if (peopleList.length === 0) {
    return <div>Nenhuma pessoa desaparecida encontrada.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Pessoas Desaparecidas - DESENVOLVE MT</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Pessoas Desaparecidas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {peopleList.map((person) => (
          <Link key={person.uuid} href={`/detalhes/${person.uuid}`}>
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-semibold">{person.name}</h2>
              <p>Status: <span className={person.status === 'MISSING' ? 'text-red-500' : 'text-green-500'}>{person.status}</span></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}