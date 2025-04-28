import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "../FavoritosContext.js";
import getExcList from "../requests/Exercicio_list.js";
import { getInfo, getImg } from "../DescEnglish.js";
import imgPadrao from "../../imgPadrao.png";

const Favoritos = () => {
  const { favoritos, toggleFavorito } = useContext(FavoritosContext);
  const [todosExercicios, setTodosExercicios] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getExcList(0,0);
      if (data) {
        setTodosExercicios(data.results);
      }
    }
    fetchData();
  }, []);

  const exerciciosFavoritos = todosExercicios.filter((ex) =>
    favoritos.includes(ex.id)
  );

  return (
    <section className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Meus Favoritos</h2>

      {exerciciosFavoritos.length === 0 ? (
        <p className="text-gray-500">Você ainda não favoritou nenhum exercício.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {exerciciosFavoritos.map((val) => (
            <div
              key={val.id}
              className="relative bg-white p-4 rounded-lg shadow hover:shadow-lg group"
            >
              <img
                src={getImg(val.images) || imgPadrao}
                alt="Exercicio"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{getInfo(val.translations)}</h3>

              <button
                onClick={() => toggleFavorito(val.id)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                💖
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Favoritos;
