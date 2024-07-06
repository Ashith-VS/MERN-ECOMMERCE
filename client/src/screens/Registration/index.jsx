import img2 from "../../assets/images/banner/Laptops.webp";
import img1 from "../../assets/images/banner/Dell.webp";
import { Link, useNavigate } from "react-router-dom";
import json from "../../constants/data.json";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../redux/action/commonAction";
import { CreateUserAuth } from "../../redux/action/authAction";
import { isEmpty } from "lodash";
import { useState } from "react";
const Registration = () => {
  const navigate = useNavigate();
  const { formData } = useSelector((state) => state.commonReducer);
  const [error,setError] = useState({})
  const { AuthFailure} = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const inputData = json.Register;

const handleValidation=()=>{
  let errors={}
  inputData.forEach((rule)=>{
    const { name, label,ispattern} = rule
if(isEmpty(formData[name])){
  errors[name]=`${label} is required`
}else if (ispattern && !RegExp(ispattern).test(formData[name])) {
  errors[name] = `${label} is invalid`
}
  })
  return errors;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid =handleValidation()
    setError(valid)
    if (isEmpty(valid)) {
      dispatch(CreateUserAuth(formData,navigate));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    name === "mobile"
      ? dispatch(updateFormData(name, numericValue))
      : dispatch(updateFormData(name, value));
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
                minLength={item.minLength}
                className="form-control"
                id={item.id}
                onChange={handleChange}
                value={formData[item.name]}
              />
            </div>
            {error[item.name] && (          
                <span style={{ color: "red" }}>{error[item.name]}</span>       
            )}
          </div>
        );
  };

  return (
    <div className="container my-3">
      <div className="row border">
        <div className="col-md-6 bg-light bg-gradient p-3 d-none d-md-block">
          <Link to={"/"}>
            <img src={img1} alt="..." className="img-fluid" />
          </Link>
          <Link to={"/"}>
            <img src={img2} alt="..." className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-6 p-3">
          <h4 className="text-center">Sign Up</h4>
          <form className="needs-validation" onSubmit={handleSubmit}>
            {inputData.map((item) => renderedInputs(item))}
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            {AuthFailure && (
              <>
                <br />{" "}
                <span style={{ color: "red" }}>{AuthFailure}</span>
              </>
            )}
            <div className="clearfix" />
          </form>
          <p className="mt-3">
            You have an account? <Link to={"/signin"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
