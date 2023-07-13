import { useForm } from "react-hook-form"

export const AddTask = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit ( async( values ) => {
    console.log(values)
  });
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md mx-auto my-28">
      <h3 className="text-center font-bold mb-2">Agrega una tarea</h3>
      <form action="">

        <input type="text" placeholder="titulo" name="title"
          { ...register( 'title', {required:true} )}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        />
        <textarea rows="3" placeholder="Descripcion" name="description"
          { ...register( 'description', {required:true} )}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button onClick={ onSubmit } className="w-full bg-purple-800 rounded-md p-2">
          Guardar
        </button>
      </form>
    
    </div>
  )
}
