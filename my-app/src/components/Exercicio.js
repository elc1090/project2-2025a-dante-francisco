import { useState, useEffect } from "react";
import getExcList from "./requests/Exercicio_list.js";
import {getInfo,  getImg } from "./DescEnglish";
import imgPadrao from "../imgPadrao.png" 

const ListaExercicios = () => {
    const [listEx, setListEx] = useState([]);

    useEffect(() => {
        async function getData(){
            const data = await getExcList();
            if(data){
                setListEx(data.results);
            }
        }
        getData()
    }, []);

    return (
        <section className="container mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4">Exercícios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {listEx.map((val) =>{
                        return (
                                <div className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg" key={val.id}>
                                <img src={getImg(val.images) || imgPadrao} alt="Exercicio"className="w-full h-40 object-cover rounded-md" />
                                <h3 className="text-lg font-semibold mt-2">{getInfo(val.translations)}</h3>
                            </div>
                        );
                    
                })}
            </div>
        </section>
    )

}

export default ListaExercicios;