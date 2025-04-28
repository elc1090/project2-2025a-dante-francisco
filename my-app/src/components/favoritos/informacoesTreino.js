import React, { useState } from 'react';
import imgPadrao from "../../imgPadrao.png";

const CarrosselTreino = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Dicas Essenciais para Iniciantes no Treino",
      sections: [
        { 
          subtitle: "Introdução ao Treinamento",
          content: `Começar a treinar é um passo importante para melhorar sua saúde física e mental. 
            Se você é iniciante, priorize aprender a execução correta dos movimentos e comece com cargas leves. 
            Concentre-se em exercícios de corpo inteiro 2 a 3 vezes por semana para criar uma base sólida.`,
        },
        { 
          subtitle: "Aquecimento",
          content: `O aquecimento prepara o corpo, aumenta a circulação sanguínea e reduz o risco de lesões. 
            Realize 5–10 minutos de cardio leve (caminhada, bicicleta estacionária) seguido de mobilidade articular 
            (ombros, quadris, tornozelos) e alongamentos dinâmicos (balanço de pernas e braços).`,
        },
        {
          subtitle: "Dicas de Postura",
          content: `Mantenha sempre a coluna alinhada e o core ativado. 
            Evite curvar as costas em agachamentos e levantamentos. 
            Olhe sempre para frente, distribua o peso igualmente entre os pés e mantenha os joelhos alinhados aos pés.`,
        },
        {
          subtitle: "Exercícios Básicos",
          content: `Foque em movimentos compostos que trabalhem vários grupos musculares:
            • Agachamento sem peso: 3×10  
            • Flexão de braços (joelhos apoiados, se precisar): 3×8  
            • Prancha isométrica: 3×30s  
            • Remada australiana: 3×8`,
        },
        {
          subtitle: "Plano de Treino Inicial",
          content: `Segunda, quarta e sexta — treino de corpo inteiro:
            • Agachamento: 3 séries de 10 repetições  
            • Supino com halteres leves: 3×10  
            • Remada com elástico: 3×12  
            • Prancha: 3×30s  
            Terça e quinta — cardio leve (30 minutos caminhada ou bicicleta)`,
        },
        {
          subtitle: "Recuperação e Descanso",
          content: `Durma de 7 a 9 horas por noite.  
            Faça alongamentos estáticos e liberação miofascial (foam roller) após o treino.  
            Mantenha uma hidratação adequada (2–3 L de água por dia) e inclua uma refeição com proteína e carboidrato até 60 minutos após o exercício.`,
        },
      ]
    },
    {
      title: "Dicas Essenciais para Intermediários no Treino",
      sections: [
        { 
          subtitle: "Revisão de Postura e Técnica",
          content: `Agora que já dominou o básico, foque em aperfeiçoar a execução:
            • Agachamento: desça até os joelhos estarem alinhados ao quadril  
            • Supino: controle do movimento excêntrico  
            • Levantamento terra: mantenha barra próxima ao corpo e costas neutras`,
        },
        { 
          subtitle: "Aquecimento Avançado",
          content: `Inclua exercícios pliométricos leves e mobilidade dinâmica:
            • Pular corda: 2 minutos  
            • Burpees leves: 2×10  
            • Alongamentos dinâmicos com maior amplitude (lunges com rotação de tronco)`,
        },
        {
          subtitle: "Divisão de Treino ABC",
          content: `Peito/Ombros/Tríceps (Segunda): 4 exercícios, 3–4 séries de 8–12 repetições  
            Costas/Bíceps (Quarta): mesma estrutura com remada, puxada e rosca  
            Pernas (Sexta): agachamento livre, leg press, stiff e panturrilha`,
        },
        {
          subtitle: "Técnicas de Intensidade",
          content: `• Pirâmide: aumente a carga e diminua as repetições a cada série  
            • Drop sets: execute até a falha e reduza o peso para continuar  
            • Supersets: combine dois exercícios opostos sem descanso`,
        },
        {
          subtitle: "Nutrição para Hipertrofia",
          content: `Consuma 1.6–2.2 g de proteína por kg de peso corporal.  
            Inclua carboidratos de baixo índice glicêmico antes e após o treino para repor glicogênio.  
            Use gorduras saudáveis (abacate, azeite, oleaginosas) em quantidades moderadas.`,
        },
        {
          subtitle: "Recuperação Ativa",
          content: `Em dias de descanso, faça caminhadas leves ou yoga para manter a circulação.  
            Considere técnicas de liberação miofascial e sessões curtas de alongamento.  
            Mantenha suplemento de BCAA ou EAA se necessário, conforme orientação.`,
        },
      ]
    },
    {
      title: "Dicas Essenciais para Avançados no Treino",
      sections: [
        { 
          subtitle: "Avaliação de Performance",
          content: `Monitorar força (1RM), composição corporal e indicadores de bem-estar (sono, energia).  
            Use diários de treino ou apps para registrar cargas, repetições e sensações.`,
        },
        { 
          subtitle: "Aquecimento Específico",
          content: `Inclua exercícios de mobilidade profunda e ativa:
            • Kettlebell swings leves: 2×10  
            • Mobilidade de quadril com mini bands  
            • Sprints curtos (10–20 m) para ativar o sistema nervoso central`,
        },
        {
          subtitle: "Treino de Força Máxima",
          content: `1–3 repetições a 85–95% do 1RM em exercícios principais (agachamento, supino, terra).  
            4–6 séries, 3–5 minutos de descanso entre séries para maximizar a recuperação neural.`,
        },
        {
          subtitle: "Periodização Avançada",
          content: `Macro, meso e microciclos:
            • Macrociclo: 12 meses  
            • Mesociclo: 4–8 semanas (hipertrofia, força, potência)  
            • Microciclo: 1 semana com variação de volume/intensidade`,
        },
        {
          subtitle: "Estratégias de Recuperação",
          content: `Sono de qualidade (7–9 h);  
            Crioterapia ou banho frio pós-treino;  
            Massagem esportiva e ventosaterapia;  
            Suplementação de ômega-3 e vitamina D conforme necessidade.`,
        },
        {
          subtitle: "Suplementação e Monitoramento",
          content: `Proteína isolada e caseína para manter balanço proteico;  
            Creatina monohidratada (3–5 g/dia);  
            Monitorar composição corporal a cada 4–6 semanas e ajustar calorias e macros.`,
        },
      ]
    }
  ];

  const changePage = (i) => {
    if (i >= 0 && i < pages.length) {
      setCurrentPage(i);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8 mt-20">
        {pages[currentPage].title}
      </h1>

      {pages[currentPage].sections.map((sec, idx) => (
        <section key={idx} className="max-w-3xl mx-auto mb-12 flex flex-col md:flex-row items-start">
          <div className="flex-1 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{sec.subtitle}</h2>
            <p className="text-lg text-gray-600 whitespace-pre-line">{sec.content}</p>
          </div>
          <img className="h-64 w-full object-cover md:w-64 md:h-70 mt-4 md:mt-0 md:ml-6" src={imgPadrao} alt={sec.subtitle} />
        </section>
      ))}

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-50"
        >
          Anterior
        </button>
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === pages.length - 1}
          className="px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-50"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default CarrosselTreino;
