import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h2>¡Bienvenido a la aplicación de Tareas!</h2>
      <p className="lead">Organiza tus actividades de forma sencilla.</p>
      <Link to="/tareas">
        <button className="btn btn-primary btn-lg mt-3">Ver Mis Tareas</button>
      </Link>
    </div>
  );
};

export default HomePage;