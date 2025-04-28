import { useState, useEffect } from "react";
import getFilterList from "./requests/Filter_Parm";
import Swicht from "./Switch";

const Filters = ({onFilter}) => {
    const [filterEx, setFilterEx] = useState({
      muscles: [],
      equipment: [],
      category: []
    });
    const [filterExCheck, setFilterExCheck] = useState({
      category: [],
      muscles: [],
      equipment: []
    });

    useEffect(() => {
      async function getData() {
        const data = await getFilterList();
        if (data) {
          setFilterEx(data);
        }
      }
      getData();
    }, []);

    useEffect(() => {
      onFilter(filterExCheck);
    }, [filterExCheck]);

    const HandleToggle =(id, tipo) =>{
      setFilterExCheck((prev) => ({
        ...prev,
          [tipo]: prev[tipo].includes(id) 
              ? prev[tipo].filter((item) => item !== id)
              : [...prev[tipo], id]
      }))
    }

    const HandleExclusiveToggle =(id, tipo) =>{
      setFilterExCheck((prev) => ({
        ...prev,
          [tipo]: prev[tipo] === id
              ? []
              : [id]
      }))
    }

    return (
      <div className="grid gap-4 grid-cols-1">
        <div id="muscles" className="rounded-lg border p-5 group">
          <h2 className="text-xl font-bold">Musculo</h2>
          {filterEx.muscles.map((valor) => {
            return(
              <div key={`mus-${valor.id}`} className="flex-row">
                <h3>{valor.name_en ? valor.name_en : valor.name}</h3>
                <Swicht val= {valor} SetListFilter= {HandleToggle} ListFilter = {filterExCheck} tipo={"muscles"}></Swicht>
              </div>
            );
          })}
        </div>
        <div id="category" className="border p-5 group">
          <h2 className="text-xl font-bold">Categoria</h2>
          {filterEx.category.map((valor) => {
            return(
              <div key={`cat-${valor.id}`} className="flex-row">
                <h3>{valor.name}</h3>
                <Swicht val= {valor} SetListFilter= {HandleExclusiveToggle} ListFilter = {filterExCheck} tipo={"category"}></Swicht>
              </div>
            );
          })}
        </div>
        <div id="equipament" className="border p-5 group">
          <h2 className="text-xl font-bold">Equipamento</h2>
          {filterEx.equipment.map((valor) => {
            return(
              <div key={`equip-${valor.id}`} className="flex-row">
                <h3>{valor.name}</h3>
                <Swicht val= {valor} SetListFilter= {HandleToggle} ListFilter = {filterExCheck} tipo={"equipment"}></Swicht>
              </div>
            );
          })}
        </div>
      </div>
    )
}   

export default Filters

