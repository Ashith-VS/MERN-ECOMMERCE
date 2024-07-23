// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import axios from "axios";
import {
  AUTH_CREATE_FAILURE,
  AUTH_CREATE_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  CURRENT_USER_DATA,
} from "../../../../client/src/constants/constants";
import fetchData from "../../http/api";
// import { auth, db } from "../../services/firebase";
// import { doc, setDoc } from "firebase/firestore";

export const CreateUserAuth =(user, navigate) => {
  // console.log('user: ', user);
  return async (dispatch) => {
    try {
      const res=await fetchData('/register',"post",user)
      // console.log('res: ', res);
     if (res.status === 200) {
      dispatch({ type: AUTH_CREATE_SUCCESS, payload: res });
      navigate("/signin"); 
    } else {
      dispatch({ type: AUTH_LOGIN_FAILURE, payload: res.message });
    }
      // navigate("/");
      // const res = await createUserWithEmailAndPassword(
      //   auth,
      //   user.email,
      //   user.password
      // );
      // // Update user auth profile
      // await updateProfile(res.user, {
      //   displayName: user.name,
      // });
      // Add user to firestore
      // await setDoc(doc(db, "user", res.user.uid), {
      //   uid: res.user.uid,
      //   name: user.name,
      //   email: user.email,
      //   role: "user",
      // });
      // dispatch({ type: AUTH_CREATE_SUCCESS, payload: res });
      // navigate("/");
      // window.location.reload();
    } catch (error) {
      console.log(error.code, "error.message");
      dispatch({ type: AUTH_CREATE_FAILURE, payload: error.message });
    }
  };
};

export const LoggedUserAuth = (formdata, navigate) => {
  // console.log('user: ', formdata);
  return async (dispatch) => {
    try {
      const res=await fetchData('/login',"post",formdata)
      // console.log(res)
      if (res.status === 200) {
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res });
        // // Fetch and set the current user
        const userRes = await fetchData('/currentuser', 'get', null, {
          Authorization: `${res.token}`
        });
        // console.log('userRes: ', userRes);
        if (userRes.status === 200) {
          dispatch({ type: CURRENT_USER_DATA, payload: userRes.user });
        }
        navigate("/"); // Navigate to the home page after successful login
      } else {
        dispatch({ type: AUTH_LOGIN_FAILURE, payload: res.message });
      }
    } catch (error) {
      console.log('error: ', error.message);
      dispatch({ type: AUTH_LOGIN_FAILURE, payload: error.message});
    }
  };
};

export const GoogleLoginUserAuth=(user,navigate)=>{
  // console.log('user: ', user);
  return async (dispatch)=>{
    try {
const res= await fetchData("/googlelogin","post",user)
// console.log('res: ', res);
if (res.status === 200) {
  dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res });
  // // Fetch and set the current user
  const userRes = await fetchData('/currentuser', 'get', null, {
    Authorization: `${res.token}`
  });
  // console.log('res.jwtToken: ', res.token);
  // console.log('userRes: ', userRes);
  if (userRes.status === 200) {
    dispatch({ type: CURRENT_USER_DATA, payload: userRes.user });
  }
  navigate("/"); // Navigate to the home page after successful login

} else {
  dispatch({ type: AUTH_LOGIN_FAILURE, payload: res.message });
}
    } catch (error) {
      console.error(error.message);
      dispatch({ type: AUTH_LOGIN_FAILURE, payload: error.message});
    }
  }
}





export const CurrentUserAuth = (response) => {
  // console.log('response: ', response);
  // localStorage.setItem("currentUser", JSON.stringify(response));
  return {
    type: CURRENT_USER_DATA,
    payload: response,
  };
};



