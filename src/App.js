
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './Pages/Home';
import Pokedex from './Pages/Pokedex';
import Carrinho from './Pages/Carrinho'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
