import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TareasPage from './components/TareasPage/TareasPage';
import CrearTareaPage from './components/CrearTareaPage/CrearTareaPage';
import TareaDetallePage from './components/TareaDetallePage/TareaDetallePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tareas" element={<TareasPage />} />
          <Route path="/crear" element={<CrearTareaPage />} />
          <Route path="/tarea/:id" element={<TareaDetallePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
