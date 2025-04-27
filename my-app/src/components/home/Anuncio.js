const Anuncio = () => {
  return (
    <section
      className="w-full bg-cover bg-center text-white py-28 px-8 md:px-28 flex items-center justify-center relative"
      style={{ backgroundImage: "url('/imgs/fundo.jpg')" }}
    >
      {/* Overlay para escurecer o fundo */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Conteúdo acima do overlay */}
      <div className="relative bg-black bg-opacity-90 p-10 md:p-16 rounded-3xl max-w-5xl w-full text-center shadow-2xl">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Transforme seu Corpo, Comece Hoje!
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          Treinos personalizados, ambiente de alta performance totalmente virtual!
        </p>
        <a
          href="/exercicios"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-2xl text-lg md:text-xl transition duration-300"
        >
          Monte Seu Treino
        </a>
      </div>
    </section>
  )
}

export default Anuncio;
