import React, { useEffect, useState } from "react";
import json from "../../../../client/src/constants/data.json";
import img2 from "../../assets/images/banner/Laptops.webp";
import img1 from "../../assets/images/banner/Dell.webp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLoginUserAuth, LoggedUserAuth } from "../../redux/action/authAction";
import { isEmpty } from "lodash";
import { GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import {jwtDecode} from 'jwt-decode'
const Login = () => {
  
  const clientId =process.env.REACT_APP_GOOGLE_CLIENT_ID
  // console.log("clientId: ", clientId);
  
  const dispatch = useDispatch();
  // const { formData } = useSelector((state) => state.commonReducer);
  const [formData,setFormData] = useState({email:"",password:""})
  const [error,setError] = useState({})
 
  const { LoginFailure, currentUser,authenticated } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const inputdata = json.login;

  const handleValidation = () => {
    let errors={}
    inputdata.forEach((rule)=>{
      const {name,label,ispattern,isrequired} = rule
      const value = formData[name];
      if(isrequired&&isEmpty(value)){
        errors[name]=`${label} is required`
      } else if (ispattern && !RegExp(ispattern).test(value)) {
        errors[name] = `${label} is invalid`;
      }
    })
    return errors
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const valid =handleValidation()
    setError(valid);
    if(isEmpty(valid)){
      dispatch(LoggedUserAuth(formData, navigate))
      // setFormData({ email: "", password: "" });
      // setError({});
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
    setError({...error,[name]:""})
  };

  const renderedInputs = (item) => {
        return (
          <div className="form-group mb-3" key={item.id}>
            <label className="form-label required" htmlFor={item.id}>
              {item.label}
            </label>
            <div className="input-group">
              <input
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                maxLength={item.maxLength}
                className="form-control"
                id={item.id}
                onChange={(e)=>handleChange(e)}
                value={formData[item.name]}
              /> 
            </div>
            {!isEmpty(error[item.name]) &&  <>
                <span style={{ color: "red" }}>{`${error[item.name]}`}</span>
              </>
            }
          </div>
        );
  };
  // GOOGLE LOGIN
  const handleGoogleSuccess = (response) => {
    console.log("Google login success:", response);
    const user = jwtDecode(response.credential);
    console.log("Decoded user info: ", user);
    // Send the Google token to your backend for verification
dispatch(GoogleLoginUserAuth(user,navigate))
  }

  const handleGoogleFailure = (error) => {
    console.error("Google login error:", error);
  };

  return (
    <div className="container my-3 100-vh">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to="/">
            <img src={img1} alt="..." className="img-fluid" />
          </Link>
          <Link to="/">
            <img src={img2} alt="..." className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign In</h4>
          <form className="needs-validation " onSubmit={handleSubmit}>
            {inputdata.map((item) => renderedInputs(item))}
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
            {LoginFailure && (
              <>
                <br />{" "}
                <span style={{ color: "red" }}>invalid userEmail/Password</span>
              </>
            )}
            
            <div className="clearfix" />
          </form>
          <p className="mt-3">
            You don't have an account? <Link to={"/signup"}>Register</Link>
          </p>
         
  <div className="text-center mt-4">
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onFailure={handleGoogleFailure}
        useOneTap
        // auto_select
      />
    </GoogleOAuthProvider>
</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
