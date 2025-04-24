import React from 'react'

const Anuncio = () => {
  return (
    <section className="w-full bg-cover bg-center text-white py-20 px-6 md:px-20 flex items-center justify-center">
      <div className="bg-black bg-opacity-70 p-8 rounded-2xl max-w-4xl w-full text-center shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Transforme seu Corpo, Comece Hoje!
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Treinos personalizados, ambiente de alta performance e os melhores instrutores esperando por você!
        </p>
        <a
          href="/matricula"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          Matricule-se Agora
        </a>
      </div>
    </section>
  )
}

export default Anuncio