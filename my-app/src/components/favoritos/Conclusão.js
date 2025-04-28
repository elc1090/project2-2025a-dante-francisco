import React from 'react';

const Conclusão = () => {
  return (
    <>
      {/* Conclusão */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-center py-16 px-10 rounded-3xl shadow-lg max-w-5xl mx-auto mt-8 mb-8">
        <h2 className="text-4xl font-extrabold text-white mb-6">Boa Sorte em Sua Jornada!</h2>
        <p className="text-lg text-white mb-8">
          Lembre-se, o mais importante é ser constante e paciente com seu progresso. Com o tempo, você verá os resultados e se
          sentirá cada vez melhor!
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
            Comece Agora
          </button>
        </div>
      </section>
    </>
  );
}

export default Conclusão;

