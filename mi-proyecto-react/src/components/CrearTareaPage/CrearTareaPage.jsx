import { useForm } from 'react-hook-form';

const CrearTareaPage = () => {
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
    <div className="container mt-4">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título de la Tarea:</label>
          <input
            id="titulo"
            type="text"
            className="form-control"
            {...register('titulo', { required: 'Este campo es obligatorio.' })}
          />
          {errors.titulo && <div className="alert alert-danger mt-2">{errors.titulo.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Crear Tarea</button>
      </form>
    </div>
  );
};

export default CrearTareaPage;