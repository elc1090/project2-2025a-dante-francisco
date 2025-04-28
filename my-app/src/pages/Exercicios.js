// EcommerceHomePage.jsx
import React, { useState } from 'react'
import ListaExercicios from '../components/Exercicio.js'
import Filters from '../components/Filter.js'
import Pagination from '../components/Pagination.js'


const Exercicios = () => {
  const [filter,setFilters] = useState([]);
  const [page, setPage] = useState(1);
  const [activePag,setActivePag] = useState(1);

  const handlePage= (pag)=>{
    setPage(pag);
  }

  const handleActivePage= (pag)=>{
    setActivePag(pag);
  }

  const handleFilter= (filters)=>{
    setFilters(filters);
  }

  return (
    <div className="exercicios mx-10 ">
      <h1 className="text-3xl font-bold mb-6">Exercícios</h1>
      <section className="container mx-auto grid grid-cols-3 lg:grid-cols-4 gap-8">
        <Filters onFilter={handleFilter}></Filters>
        <ListaExercicios filtro={filter} setPag={handlePage} activePage={activePag}></ListaExercicios>
      </section>
      <Pagination totalPages={page} setActivePage={handleActivePage} activePage={activePag}></Pagination>
    </div>
  )
}

export default Exercicios
