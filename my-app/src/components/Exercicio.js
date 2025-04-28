import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "./FavoritosContext";
import getExcList from "./requests/Exercicio_list.js";
import { getInfo, getImg } from "./DescEnglish";
import imgPadrao from "../imgPadrao.png";

const ListaExercicios = () => {
  const [listEx, setListEx] = useState([]);
  const { favoritos, toggleFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    async function getData() {
      const data = await getExcList();
      if (data) {
        setListEx(data.results);
      }
    }
    getData();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold mb-12">Explore os Exercícios</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Filtro */}
        <aside className="md:w-1/4 bg-gray-100 p-6 rounded-3xl shadow-lg h-fit">
          <h3 className="text-xl font-bold mb-6">Filtrar</h3>
          
          {/* Filtro por categoria */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Categoria</h4>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl mb-2 transition">
              Superiores
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl mb-2 transition">
              Inferiores
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl mb-2 transition">
              Core
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl mb-2 transition">
              Cardio
            </button>
          </div>
        </aside>

        {/* Lista de Exercícios */}
        <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {listEx.map((val) => {
            const id = val.id;
            const isFavorito = favoritos.includes(id);

            return (
              <div key={id} className="relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition group">
                <img
                  src={getImg(val.images) || imgPadrao}
                  alt="Exercicio"
                  className="w-full h-32 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{getInfo(val.translations)}</h3>
                <button
                  onClick={() => toggleFavorito(id)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                >
                  {isFavorito ? '💖' : '🤍'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListaExercicios;
