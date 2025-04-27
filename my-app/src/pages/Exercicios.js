// EcommerceHomePage.jsx
import React, { useState } from 'react'
import ListaExercicios from '../components/Exercicio.js'
import Filters from '../components/Filter.js'


const Exercicios = () => {
  const [filter,setFilters] = useState([]);
  const handleFilter= (filters)=>{
    setFilters(filters);
  }

  return (
    <div className="exercicios">
      <ListaExercicios filtro={filter}></ListaExercicios>
      <Filters onFilter={handleFilter}></Filters>
    </div>
  )
}

export default Exercicios
