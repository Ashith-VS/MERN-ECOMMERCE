import React from "react";

const NotFound = () => {
  return (
    <div className="container text-center p-5 " style={{ height: "70vh" }}>
      <div className="display-1 justify-content-md-center">
        <i className="bi bi-exclamation-triangle-fill text-warning" />
        404
      </div>
      <h1 className="mb-3">Oops... Page Not Found!</h1>
    </div>
  );
};

export default NotFound;
