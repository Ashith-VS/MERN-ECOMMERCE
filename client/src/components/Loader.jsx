import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const { loading } = useSelector((state) => state.commonReducer);
  // console.log(loading, "loading");
  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="loader-inner" id="loaderContainer" tabIndex={0}>
            <div className="spinner"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
