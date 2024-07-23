import {
  AUTH_CREATE_FAILURE,
  AUTH_CREATE_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  CURRENT_USER_DATA,
} from "../../constants/constants";

const initialState = {
  authenticated: false,
  AuthSuccess: {},
  AuthFailure: false,
  LoginSuccess: {},
  LoginFailure: false,
  currentuser: null,
  // currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  token: JSON.parse(localStorage.getItem("usertoken")) || null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CREATE_SUCCESS:
      // console.log('action.payload: ', action.payload);
      return {
        ...state,
        authenticated: true,
        AuthSuccess: action.payload,
        AuthFailure: false, // Clear any previous failures
      };
    case AUTH_CREATE_FAILURE:
      // console.log('action.payload: ', action.payload);
      return {
        ...state,
        authenticated: false,
        AuthFailure: action.payload,
      };
      case AUTH_LOGIN_SUCCESS:
      // console.log('action.payload: ', action.payload);
      return {
        ...state,
        authenticated: true,
        LoginSuccess: action.payload,
        LoginFailure: false, // Clear any previous failures
        token:localStorage.setItem("usertoken",JSON.stringify(action.payload.token)), 
         // currentUser: localStorage.setItem("currentUser",JSON.stringify(action.payload.user)),
      };
    case AUTH_LOGIN_FAILURE:
      // console.log('action.payload: ', action.payload);
      return {
        ...state,
        authenticated: false,
        LoginFailure: action.payload,
      };   
   
    case CURRENT_USER_DATA:
      // console.log('action.payload: ', action.payload);
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
