import { useParams } from 'react-router-dom';

const TareaDetallePage = () => {
  const { id } = useParams();

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Detalles de la Tarea</h5>
          <p className="card-text">ID de la Tarea: <strong>{id}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default TareaDetallePage;