import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projetos from './pages/Projetos';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
