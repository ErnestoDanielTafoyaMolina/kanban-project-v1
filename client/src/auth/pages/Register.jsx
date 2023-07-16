import { useForm } from "react-hook-form"
import { useAuth } from "../../context/auth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {

  const { register, handleSubmit, formState:{ errors } } =useForm();
  const { signUp, user, isAuthenticated, errors:RegisterErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  const onSubmit  = handleSubmit(async(values)=>{
    signUp(values);
    console.log(user)
  });

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      
      

      <form action="" onSubmit={ onSubmit } className="bg-zinc-800 p-5">
        <h1 className="w-full font-bold text-center">Registro</h1>
        {
        RegisterErrors.map((error,i) =>(
          <div className="w-full bg-red-500 p-2" key={ i }>{ error }</div>
        ))
      }
        <label htmlFor="username">Username:</label>
        <input type="text" 
               name="username"
               placeholder="escribe tu nombre de usuario"
               { ...register("username",{ required:true }) }
               className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
               autoFocus
        />
        { errors.username && (<p className="text-red-500">El nombre de usuario es requerido</p>) }

        <label htmlFor="email">Correo:</label>
        <input type="email" 
              name="email"
              placeholder="ejemplo@ejemplo.com"
              { ...register("email",{ required:true }) }
              className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
        />
        { errors.email && (<p className="text-red-500">El email es requerido</p>) }

        <label htmlFor="password">Contraseña:</label>
        <input type="password" 
               name="password"
               placeholder="******"
               { ...register("password",{ required:true }) }
               className="w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md"
        />
        { errors.password && (<p className="text-red-500">la contraseña es requerida</p>) }

        <button type="submit" className="w-full bg-purple-800 my-5 rounded-sm p-2">
          Registrar
        </button>

        <div className="form-group text-center">
        <label>¿Ya tienes una cuenta? </label>
          <Link
            className="text-blue-500"
            to={'/login'}
          >
            Inicia sesion
          </Link>
        </div>
      </form>
    </div>
  )
}
