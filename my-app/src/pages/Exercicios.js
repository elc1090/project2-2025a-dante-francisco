// EcommerceHomePage.jsx
import React from 'react'
import getExcList from "../components/requests/Exercicio_list.js"

//Teste da API wger
const data = await getExcList();

const Exercicios = () => {
  return (
    <div className="exercicios">
        {data.results[0].equipment[0].name}
    </div>
  )
}

export default Exercicios
