import { useParams } from 'react-router-dom';
import './TareaDetallePage.css';

const TareaDetallePage = () => {
  // Agarré el id de la URL
  const { id } = useParams();

  return (
    <div className="detalle-container">
      <h2>Detalles de la Tarea</h2>
      <p>ID de la Tarea: **{id}**</p>
    </div>
  );
};

export default TareaDetallePage;