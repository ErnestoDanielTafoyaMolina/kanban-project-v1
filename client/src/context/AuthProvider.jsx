import { useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthContex"
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe ser usado en un provider")
    }
    return context;
}
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true)

    const signUp = async( user ) => {
        try {

            const res = await registerRequest( user );
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);

          } catch (error) {
            console.error(error.response.data);
            setErrors(error.response.data);
          }
    }

    const signIn = async ( user ) => {
        try {
            const res = await loginRequest( user );
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error.response.data);
            setErrors(error.response.data);
        }
    }

    useEffect(() => {
        if(errors.length>0){
            setTimeout(() => {
                setErrors([]);
            }, 5000);
        }
    }, [errors]);

    useEffect(() => {
        const checkLogin = async () =>{
            const cookies = Cookies.get();

            if(!cookies.token){
                setIsAuthenticated( false );
                setLoading( false );
                return setUser( null );
            }
            try {
                const res = await verifyTokenRequest( cookies.token );
                if(!res.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);

            } catch (error) {
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
                console.error(error) 
            }
        }
        checkLogin();
    }, [])
  return (
    <AuthContext.Provider value={{
        signUp,
        signIn,
        user,
        isAuthenticated,
        errors,
        loading
    }}>
        { children }
    </AuthContext.Provider>
  )
}
