import { useState, useEffect } from "react";
import getFilterList from "./requests/Filter_Parm";
import Swicht from "./Switch";

const Filters = ({onFilter}) => {
    const [filterEx, setFilterEx] = useState({
      muscle: [],
      equipment: [],
      category: []
    });
    const [filterExCheck, setFilterExCheck] = useState({
      category: [],
      muscle: [],
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
      <div className="flex flex-row gap-4">
        <div id="muscle" className="border p-5 row">
          <h2>Musculo</h2>
          {filterEx.muscle.map((valor) => {
            return(
              <div key={`mus-${valor.id}`} className="flex-row">
                <h3>{valor.name_en ? valor.name_en : valor.name}</h3>
                <Swicht val= {valor} SetListFilter= {HandleToggle} ListFilter = {filterExCheck} tipo={"muscle"}></Swicht>
              </div>
            );
          })}
        </div>
        <div id="category" className="border p-5 row">
          <h2>Categoria</h2>
          {filterEx.category.map((valor) => {
            return(
              <div key={`cat-${valor.id}`} className="flex-row">
                <h3>{valor.name}</h3>
                <Swicht val= {valor} SetListFilter= {HandleExclusiveToggle} ListFilter = {filterExCheck} tipo={"category"}></Swicht>
              </div>
            );
          })}
        </div>
        <div id="equipament" className="border p-5 row">
          <h2>Equipamento</h2>
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

