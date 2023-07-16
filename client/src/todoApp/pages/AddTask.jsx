import { useForm } from "react-hook-form"
import { useTasks } from "../../context/tasks";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


export const AddTask = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { onCreateTask } = useTasks();
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit ( async( values ) => {
    await onCreateTask( values );
    navigate('/tasks');

  });
  useEffect(() => {
    
  }, []);
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md mx-auto my-28">
      <h3 className="text-center font-bold mb-2">Agrega/modifica una tarea</h3>
      <form action="">

        <input type="text" placeholder="titulo" name="taskName"
          { ...register( 'taskName', {required:true} )}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <textarea rows="3" placeholder="Descripcion" name="taskDescription"
          { ...register( 'taskDescription', {required:true} )}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button onClick={ onSubmit } className="w-full bg-purple-800 rounded-md p-2">
          Guardar
        </button>
      </form>
    
    </div>
  )
}
