import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TareasPage = () => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const datosSimulados = [
        { id: '1', titulo: 'Comprar víveres' },
        { id: '2', titulo: 'Terminar el informe' },
        { id: '3', titulo: 'Llamar al médico' },
      ];
      setTareas(datosSimulados);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Lista de Tareas</h2>
      {tareas.length > 0 ? (
        <ul className="list-group">
          {tareas.map((tarea) => (
            <li key={tarea.id} className="list-group-item">
              <Link to={`/tarea/${tarea.id}`}>{tarea.titulo}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-info mt-3" role="alert">
          No hay tareas disponibles.
        </div>
      )}
    </div>
  );
};

export default TareasPage;