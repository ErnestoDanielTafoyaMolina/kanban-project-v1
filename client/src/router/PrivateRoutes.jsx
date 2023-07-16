import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import { NavBar } from "../todoApp/components/NavBar";



export const PrivateRoutes = () => {

    const { loading, isAuthenticated } = useAuth();
    if( loading ) return <h1 className="bg-red-200 text-zinc-900">cargando...</h1>
    if( !loading && !isAuthenticated )return <Navigate to='/login' replace />

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
