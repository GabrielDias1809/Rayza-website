import React, { useEffect, useState } from 'react';

const Listas = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []); // O array vazio como segundo argumento garante que essa função seja chamada apenas uma vez, quando o componente é montado

  return (
    <div>
      {data?.map((c, index) => (
        <div key={index}>
          <h1>{c.title}</h1>
          <p>{c.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Listas;
