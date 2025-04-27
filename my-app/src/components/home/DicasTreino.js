const DicasTreino = () => {
    return (
      <section
        className="w-full bg-cover bg-center text-white py-28 px-8 md:px-28 flex flex-col items-center relative"
        style={{ backgroundImage: "url('/imgs/fundo2.jpeg')" }}
      >
        {/* Overlay para escurecer o fundo */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
  
        {/* Conteúdo acima do overlay */}
        <div className="relative w-full max-w-6xl text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10">
            Dicas para Montar seu Treino Ideal
          </h2>
  
          <div className="grid gap-8 md:grid-cols-2">
            {/* Dica 1 */}
            <div className="bg-black bg-opacity-80 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Defina Seu Objetivo</h3>
              <p className="text-lg">
                Antes de começar, saiba se você quer ganhar massa, perder peso ou apenas manter a forma.
                Seu objetivo vai guiar todo o seu treino!
              </p>
            </div>
  
            {/* Dica 2 */}
            <div className="bg-black bg-opacity-80 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Escolha Exercícios Essenciais</h3>
              <p className="text-lg">
                Priorize exercícios compostos como agachamento, supino e levantamento terra.
                Eles trabalham vários músculos de uma vez só.
              </p>
            </div>
  
            {/* Dica 3 */}
            <div className="bg-black bg-opacity-80 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Monte uma Rotina Balanceada</h3>
              <p className="text-lg">
                Combine treinos de força, resistência e flexibilidade para ter um desenvolvimento completo e evitar lesões.
              </p>
            </div>
  
            {/* Dica 4 */}
            <div className="bg-black bg-opacity-80 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Dê Atenção ao Descanso</h3>
              <p className="text-lg">
                O descanso é tão importante quanto o treino. Planeje dias de descanso para permitir que seus músculos se recuperem e cresçam.
              </p>
            </div>
          </div>
  
          <a
            href="/exercicios"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl text-lg md:text-xl transition duration-300 mt-12"
          >
            Comece a Montar seu Treino
          </a>
        </div>
      </section>
    )
  }
  
  export default DicasTreino;
  