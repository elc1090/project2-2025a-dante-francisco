import React from 'react'
import Favoritos from '../components/favoritos/Favoritos.js'
import InformacoesTreino from '../components/favoritos/informacoesTreino.js'
import Conclusão from '../components/favoritos/Conclusão.js'

const MeusTreinos = () => {
  return (
    <>
      <Favoritos></Favoritos>
      <InformacoesTreino></InformacoesTreino>
      <Conclusão></Conclusão>
    </>
  )
}

export default MeusTreinos