import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Projetos';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/projetos' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
