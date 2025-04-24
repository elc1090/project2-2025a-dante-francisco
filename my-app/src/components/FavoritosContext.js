import { createContext, useState, useEffect } from "react";

// Criando o contexto para os favoritos
export const FavoritosContext = createContext();

// O provider gerencia o estado dos favoritos e os expõe para os componentes filhos
export const FavoritosProvider = ({ children }) => {
  // Estado para armazenar os favoritos, iniciando com os dados salvos no localStorage (se houver)
  const [favoritos, setFavoritos] = useState(() => {
    const saved = localStorage.getItem("favoritos"); // Verifica se há favoritos salvos
    return saved ? JSON.parse(saved) : []; // Se sim, carrega eles, se não, inicia com um array vazio
  });

  // Efeito para salvar os favoritos no localStorage toda vez que o estado mudar
  useEffect(() => {
    // Converte o array de favoritos para string e salva no localStorage
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]); // O efeito é disparado toda vez que o estado favoritos mudar

  // Função que alterna a adição ou remoção de um favorito
  const toggleFavorito = (id) => {
    // Verifica se o id do exercício já está nos favoritos
    setFavoritos((prev) =>
      prev.includes(id) // Se já está, remove-o
        ? prev.filter((favId) => favId !== id)
        // Se não está, adiciona o id aos favoritos
        : [...prev, id]
    );
  };

  // O valor que será passado pelo Contexto inclui o estado dos favoritos
  // e a função toggleFavorito para adicionar ou remover favoritos
  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children} {/* Renderiza os componentes filhos dentro do provider */}
    </FavoritosContext.Provider>
  );
};
