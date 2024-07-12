import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { isEmpty } from "lodash";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.authReducer);
  // console.log('currentUser: ', currentUser);
  
  // console.log(currentUser.blocked);
  // if (currentUser?.blocked) {
  //   return(
  //     <div
  //       className="d-flex justify-content-center align-items-center"
  //       style={{ height: "60vh" }}
  //     >
  //       You are blocked and cannot access this page.
  //     </div>
  //   );
  // }
  // if (isEmpty(currentUser)) {
  //   return <Navigate to="/" />;
  // }
  // return <Outlet />;
  return !isEmpty(currentUser) ? <Outlet /> : <Navigate to={"/"} />;
};

export default PrivateRoute;
