// import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import img from "../assets/images/image-logo-151x42.jpg";
import SearchBar from "./SearchBar";
// import { getCartItem } from "../redux/action/commonAction";
import { useEffect } from "react";
import fetchData from "../http/api";
import { CurrentUserAuth } from "../redux/action/authAction";
import { googleLogout } from "@react-oauth/google";

const Header = () => {
  const dispatch = useDispatch();
const {token,currentUser}=useSelector((state)=>state.authReducer)
const { cartItem } = useSelector((state) => state.commonReducer);

// console.log(token)
  const getCurrentUser=async()=>{
    try {
      const res=await fetchData("/currentuser","get",null,{
        Authorization: token
      })
      dispatch(CurrentUserAuth(res.user))
      // console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    getCurrentUser()
  },[])

  const handleLogout = () => {
    googleLogout(); 
    localStorage.clear();
    window.location.reload();
  };


  return (
    <header className="p-3 border-bottom bg-light">
      <div className="container-fluid">
        <div className="row g-3">
          <div className="col-md-3 text-center">
            <Link to="/">
              <img alt="logo" src={img} />
            </Link>
          </div>
          <SearchBar />
          <div className="col-md-4">
            <div className="position-relative d-inline me-3">
              <Link className="btn btn-primary" to="/cart">
                <i className="bi bi-cart3" />
                <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                  {!isEmpty(cartItem) && cartItem.length}
                </div>
              </Link>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary rounded-circle border me-3"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-label="Profile"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-fill text-light" />
              </button>
              <ul className="dropdown-menu" style={{}}>
                {!isEmpty(currentUser) && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <i className="bi bi-person-square" /> My Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </>
                )}
                {isEmpty(currentUser)&& (
                  <li>
                    <Link className="dropdown-item" to="/signin">
                      Sign In
                    </Link>
                  </li>
                )}
                {!isEmpty(currentUser) && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/wishlist">
                        <i className="bi bi-heart-fill text-danger" /> Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/orders">
                        <i className="bi bi-list-check text-primary" /> Orders
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/notification">
                        <i className="bi bi-bell-fill text-primary" />
                        Notification
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/support">
                        <i className="bi bi-info-circle-fill text-success" />
                        Support
                      </Link>
                    </li>     
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-door-closed-fill text-danger" />
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            {currentUser?.email === "admin@gmail.com" && (
              <div className="position-relative d-inline me-3">
                <Link className="btn btn-primary" to="/admin">
                  Admin Pannel
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
