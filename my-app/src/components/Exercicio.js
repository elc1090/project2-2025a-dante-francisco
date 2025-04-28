import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "./FavoritosContext";
import getExcList from "./requests/Exercicio_list.js";
import { getInfo, getImg } from "./DescEnglish";
import imgPadrao from "../imgPadrao.png";

const ListaExercicios = ({filtro,setPag,activePage}) => {
  const [listEx, setListEx] = useState([]);
  const { favoritos, toggleFavorito } = useContext(FavoritosContext);

  useEffect(() => {
    async function getData() {
      const data = await getExcList(filtro,activePage);
      if (data) {
        setListEx(data.results);
        setPag(Math.ceil(data.count/40))
      }
    }
    getData();
  }, [filtro,activePage]);

  return ( 
    <div className="col-span-3">
      <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default ListaExercicios;
