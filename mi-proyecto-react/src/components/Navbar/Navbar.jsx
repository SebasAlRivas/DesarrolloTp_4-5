import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/tareas">Ver Tareas</Link>
      <Link to="/crear">Crear Tarea</Link>
    </nav>
  );
};

export default Navbar;
