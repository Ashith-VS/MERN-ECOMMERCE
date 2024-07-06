import React from 'react'
import img1 from "../../assets/images/banner/Watches.webp"
import { Link } from 'react-router-dom'
import { isEmpty } from "lodash";
import { useSelector } from 'react-redux';
const Signin = () => {
  const {currentUser}=useSelector(state=>state.authReducer)
  
  return (
    <div className="col-md-2">
      {isEmpty(currentUser)&&
        <div className="card shadow-sm mb-3">
          <div className="card-body text-center">
            <h5 className="card-title">Sign in for your best experience</h5>
            <Link className="btn btn-warning" to="/signin">
              Sign in securely
            </Link>
          </div>
        </div>}
        <Link to="/">
          <div className="card shadow-sm undefined">
            <div className="card-body p-0">
              <img
                src={img1}
                className="img-fluid rounded"
                alt="..."
              />
            </div>
          </div>
        </Link>
      </div>
  )
}

export default Signin