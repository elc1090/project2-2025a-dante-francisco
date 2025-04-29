// EcommerceHomePage.jsx
import React, { Suspense, useState } from 'react'
import Pagination from '../components/Pagination.js'
import Gear from '../Gear.gif' 

const ListaExercicios = React.lazy(() => import('../components/Exercicio.js'));
const Filters = React.lazy(() => import('../components/Filter.js'));

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
      <Suspense fallback={<div className='justify-center'><img src= {Gear} alt='Loading'/></div>}>
        <section className="container mx-auto grid grid-cols-3 lg:grid-cols-4 gap-8">
          <Filters onFilter={handleFilter}></Filters>
          <ListaExercicios filtro={filter} setPag={handlePage} activePage={activePag}></ListaExercicios>
        </section>
      </Suspense>
      <Pagination totalPages={page} setActivePage={handleActivePage} activePage={activePag}></Pagination>
    </div>
  )
}

export default Exercicios
