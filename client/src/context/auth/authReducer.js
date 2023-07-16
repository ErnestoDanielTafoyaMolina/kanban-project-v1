import actionTypes from "../../types/types";

const authReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_USER:
        return { ...state, user: action.payload };
      case actionTypes.SET_AUTHENTICATED:
        return { ...state, isAuthenticated: action.payload };
      case actionTypes.SET_ERRORS:
        return { ...state, errors: action.payload };
      case actionTypes.SET_LOADING:
        return { ...state, loading: action.payload };
      default:
        throw new Error(`Invalid action type: ${action.type}`);
    }
  };
  
  export default authReducer;