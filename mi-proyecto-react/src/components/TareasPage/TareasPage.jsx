import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TareasPage.css';

const TareasPage = () => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Acá hago un timeout para simular que carga de la base de datos
    const timer = setTimeout(() => {
      const datosSimulados = [
        { id: '1', titulo: 'Comprar víveres' },
        { id: '2', titulo: 'Terminar el informe' },
        { id: '3', titulo: 'Llamar al médico' },
      ];
      setTareas(datosSimulados);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Para que no explote
  }, []); //para que solo se ejecute una vez

  if (loading) {
    return <div className="loading-text">Cargando tareas...</div>;
  }

  return (
    <div className="tareas-container">
      <h2>Lista de Tareas</h2>
      {tareas.length > 0 ? (
        <ul className="tareas-list">
          {tareas.map((tarea) => (
            <li key={tarea.id} className="tarea-item">
              <Link to={`/tarea/${tarea.id}`}>{tarea.titulo}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  );
};

export default TareasPage;