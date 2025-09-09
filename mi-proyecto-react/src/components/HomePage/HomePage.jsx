import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h2>¡Bienvenido a la aplicación de Tareas!</h2>
      <p>Organiza tus actividades de forma sencilla.</p>
      <Link to="/tareas">
        <button className="home-button">Ver Mis Tareas</button>
      </Link>
    </div>
  );
};

export default HomePage;