import { useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContex";
import { loginRequest, registerRequest, verifyTokenRequest } from "../../api/auth";
import Cookies from "js-cookie";
import authReducer from "./authReducer";
import actionTypes from "../../types/types";


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado en un provider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const initialState = {
    user: {},
    isAuthenticated: false,
    errors: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      dispatch({ type: actionTypes.SET_USER, payload: res.data });
      dispatch({ type: actionTypes.SET_AUTHENTICATED, payload: true });
    } catch (error) {
      console.error(error.response.data);
      dispatch({ type: actionTypes.SET_ERRORS, payload: error.response.data });
    }
  };

  const signIn = async (user) => {
    try {
      const res = await loginRequest(user);
      dispatch({ type: actionTypes.SET_USER, payload: res.data });
      dispatch({ type: actionTypes.SET_AUTHENTICATED, payload: true });
    } catch (error) {
      console.error(error.response.data);
      dispatch({ type: actionTypes.SET_ERRORS, payload: error.response.data });
    }
  };

  const signOut = async () => {
    try {
      alert("Vuelva pronto :D");
      Cookies.remove("token");
      dispatch({ type: actionTypes.SET_USER, payload: {} });
      dispatch({ type: actionTypes.SET_AUTHENTICATED, payload: false });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (state.errors.length > 0) {
      setTimeout(() => {
        dispatch({ type: actionTypes.SET_ERRORS, payload: [] });
      }, 5000);
    }
  }, [state.errors]);

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        dispatch({ type: actionTypes.SET_AUTHENTICATED, payload: false });
        dispatch({ type: actionTypes.SET_LOADING, payload: false });
        return dispatch({ type: actionTypes.SET_USER, payload: null });
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) {
          dispatch({ type: actionTypes.SET_AUTHENTICATED, payload: false });
          dispatch({ type: actionTypes.SET_LOADING, payload: false });
          return;
        }

        dispatch({ type: actionTypes.SET_AUTHENTICATED, payload: true });
        dispatch({ type: actionTypes.SET_USER, payload: res.data });
        dispatch({ type: actionTypes.SET_LOADING, payload: false });
      } catch (error) {
        dispatch({ type: actionTypes.SET_USER, payload: null });
        dispatch({ type: actionTypes.SET_AUTHENTICATED, payload: false });
        dispatch({ type: actionTypes.SET_LOADING, payload: false });
        console.error(error);
      }
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        signOut,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        errors: state.errors,
        loading: state.loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
