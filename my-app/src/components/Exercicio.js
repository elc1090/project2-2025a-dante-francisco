import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "./FavoritosContext"; // <- aqui
import getExcList from "./requests/Exercicio_list.js";
import { getInfo, getImg } from "./DescEnglish";
import imgPadrao from "../imgPadrao.png";

const ListaExercicios = (filtro) => {
  const [listEx, setListEx] = useState([]);
  const { favoritos, toggleFavorito } = useContext(FavoritosContext); // <- aqui

  useEffect(() => {
    async function getData() {
      const data = await getExcList(filtro);
      if (data) {
        setListEx(data.results);
      }
    }
    getData();
  }, [filtro]);

  return (
    <section className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Exercícios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listEx.map((val) => {
          const id = val.id;
          const isFavorito = favoritos.includes(id);

          return (
            <div key={id} className="relative bg-white p-4 rounded-lg shadow hover:shadow-lg group">
              <img
                src={getImg(val.images) || imgPadrao}
                alt="Exercicio"
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{getInfo(val.translations)}</h3>
              <button
                onClick={() => toggleFavorito(id)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 group-hover:visible invisible"
              >
                {isFavorito ? '💖' : '🤍'}
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Filtros selecionados:</h2>
        <div>{JSON.stringify(filtro)}</div>
      </div>
    </section>
  );
};

export default ListaExercicios;
