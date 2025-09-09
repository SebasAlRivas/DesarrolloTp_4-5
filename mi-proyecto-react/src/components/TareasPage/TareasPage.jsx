import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TareasPage = () => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); //estado de caja de búsqueda
  const [filteredTareas, setFilteredTareas] = useState([]); // Acá guardo las tareas que coinciden con la búsqueda

  // Acá simulo la carga de las tareas
  useEffect(() => {
    const timer = setTimeout(() => {
      const datosSimulados = [
        { id: '1', titulo: 'Comprar mercaderia para la semana' },
        { id: '2', titulo: 'Terminar el proyecto de Desarrollo Web' },
        { id: '3', titulo: 'Llamar al médico' },
        { id: '4', titulo: 'Pagar las facturas del internet' },
        { id: '5', titulo: 'Preparar festejos luego que el profe me apruebe' },
      ];
      setTareas(datosSimulados);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Y este efecto va mirando si cambia lo que buscas o la lista de tareas original, no lo pidio pero esta bueno no profe?
  // entonces el filtro se actualiza solo.
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredTareas(tareas); // Si no hay nada en la caja de búsqueda, muestra todas las tareas
    } else {
      const results = tareas.filter(tarea =>
        tarea.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTareas(results); // Si encuentra algo, lo muestra
    }
  }, [searchTerm, tareas]); // si algo cambia se ejecuta


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
      <h2 className="mb-3">Lista de Tareas</h2>
      
      {/* Acá está la caja para el buscador */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar tareas..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* muestra la lista filtrada. Si no hay nada, sale el mensaje */}
      {filteredTareas.length > 0 ? (
        <ul className="list-group">
          {filteredTareas.map((tarea) => (
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