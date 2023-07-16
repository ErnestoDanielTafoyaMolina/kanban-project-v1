
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/auth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit, formState:{ errors } } =useForm();
  const { signIn, isAuthenticated, errors:signInErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])

  const onSubmit  = handleSubmit(async(values)=>{
    signIn(values);
  });

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      
      

      <form action="" onSubmit={ onSubmit } className="bg-zinc-800 p-5">
        <h1 className="w-full font-bold text-center">Inicia sesion</h1>
        {
        signInErrors.map((error,i) =>(
          <div className="w-full bg-red-500 p-2" key={ i }>{ error }</div>
        ))
      }
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
          Login
        </button>
        <div className="form-group text-center">
        <label>¿No tienes una cuenta? </label>
          <Link
            className="text-blue-500"
            to={'/register'}
          >
            registrate aquí
          </Link>
        </div>
        

      </form>

    </div>
  )
}
