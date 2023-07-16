import { useEffect } from "react";
import { Link, useNavigate} from "react-router-dom"
import { useAuth } from "../../context/auth/AuthProvider";

export const Home = () => {
  
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if(isAuthenticated) navigate('/tasks')
  }, [isAuthenticated])


  return (
    <>
      <div className="flex flex-col h-screen">
        <nav className="bg-purple-700 py-4">
          <div className="container mx-auto">
            <ul className="flex justify-between items-center">
              <li>
                <Link to="/" className="text-white font-bold text-xl">Kanban Project</Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:underline">Inicia sesión</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="container mx-auto text-white text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a Kanban Project</h1>
            <p className="text-xl mb-8">Aquí puedes gestionar tus tareas.</p>
            <p className="text-lg mb-4">¿Aún no tienes cuenta con nosotros?</p>
            <p className="mb-8">
              <Link to="/register" className="text-white underline">Regístrate aquí</Link>
            </p>
            <p className="text-lg">En caso de que ya tengas cuenta,</p>
            <p>
              <Link to="/login" className="text-white underline">Inicia sesión</Link>
            </p>
          </div>
        </div>
        <footer className="bg-purple-700 py-4 text-white text-center">
          <div className="container mx-auto">
            &copy; {new Date().getFullYear()} Kanban Project. Todos los derechos reservados.
          </div>
        </footer>
      </div>
    </>
  )
}
