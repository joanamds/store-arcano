import React from 'react';
import { useParams } from 'react-router-dom';

function Home() {
  const { id } = useParams();

  // Usa o ID do usuário para buscar informações do usuário e exibir na tela

  return (
    <div>
      <h1>Bem-vindo à página Home</h1>
      <p>O ID do usuário é: {id}</p>
    </div>
  );
}

export default Home;
