import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const feedbacks = [
  {
    nome: "Lucas M.",
    texto: "A plataforma mudou minha rotina! Consigo treinar com muito mais foco e organização.",
    rating: 5,
  },
  {
    nome: "Fernanda R.",
    texto: "Adorei a variedade de exercícios disponíveis. Consegui montar meu treino ideal em minutos!",
    rating: 4,
  },
  {
    nome: "Carlos A.",
    texto: "Ótima experiência! Os treinos online são desafiadores e super práticos.",
    rating: 5,
  },
  {
    nome: "Amanda I.",
    texto: "Nunca pensei que ia gostar tanto de treinar em casa. Parabéns pela plataforma!",
    rating: 4,
  },
];

const Feedback = () => {
  const [indexAtual, setIndexAtual] = useState(0);
  const [animando, setAnimando] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      trocarProximo();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const trocarProximo = () => {
    setAnimando(true);
    setTimeout(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % feedbacks.length);
      setAnimando(false);
    }, 300);
  };

  const trocarAnterior = () => {
    setAnimando(true);
    setTimeout(() => {
      setIndexAtual((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
      setAnimando(false);
    }, 300);
  };

  const irPara = (index) => {
    setAnimando(true);
    setTimeout(() => {
      setIndexAtual(index);
      setAnimando(false);
    }, 300);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 mx-0.5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
            fill={i < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="w-full text-white py-16 px-4 md:px-20 flex flex-col items-center relative overflow-hidden">
      <div className="w-full max-w-2xl text-center relative">
        <h2 className="text-4xl text-black font-bold mb-8">O que nossos usuários dizem</h2>

        <div className="relative h-56 flex items-center justify-center">
          <div
            className={`bg-gray-800 bg-opacity-80 p-6 rounded-2xl shadow-xl absolute transition-all duration-300 ease-in-out transform ${
              animando ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"
            }`}
          >
            {renderStars(feedbacks[indexAtual].rating)}
            <p className="text-lg mb-4 italic max-w-lg mx-auto">
              "{feedbacks[indexAtual].texto}"
            </p>
            <h3 className="text-xl font-bold">- {feedbacks[indexAtual].nome}</h3>
          </div>
        </div>

        <button
          onClick={trocarAnterior}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={trocarProximo}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex justify-center mt-6 gap-2">
          {feedbacks.map((_, i) => (
            <button
              key={i}
              onClick={() => irPara(i)}
              className={`w-2.5 h-2.5 rounded-full ${indexAtual === i ? 'bg-blue-500' : 'bg-gray-500'} transition`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
