import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projetos from './pages/Projetos';
import Home from './pages/Home';

import './css/app.css';

function App() {
  return (
      <Routes>
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/' element={<Home />} />
      </Routes>
  );
}

export default App;
