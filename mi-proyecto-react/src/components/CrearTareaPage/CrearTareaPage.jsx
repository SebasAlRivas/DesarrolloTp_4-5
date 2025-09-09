import { useForm } from 'react-hook-form';
import './CrearTareaPage.css';

const CrearTareaPage = () => {
  // Con esto el formulario es super facil de manejar
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Datos del formulario:', data);
    alert(`Tarea "${data.titulo}" creada con éxito.`);
  };

  return (
    <div className="crear-tarea-container">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="titulo">Título de la Tarea:</label>
          <input
            id="titulo"
            type="text"
            {...register('titulo', { required: 'Este campo es obligatorio.' })}
          />
          {/* El error se muestra acá */}
          {errors.titulo && <p className="error-message">{errors.titulo.message}</p>}
        </div>
        <button type="submit" className="submit-button">Crear Tarea</button>
      </form>
    </div>
  );
};

export default CrearTareaPage;