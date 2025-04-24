import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Exercicios from './pages/Exercicios';
import Home from './pages/Home';
import MeusTreinos from './pages/MeusTreinos';
import { FavoritosProvider } from './components/FavoritosContext';

function App() {
  return (
    <FavoritosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercicios" element={<Exercicios />} />
          <Route path="/meus-treinos" element={<MeusTreinos />} />
        </Routes>
      </Router>
    </FavoritosProvider>
  );
}

export default App;
