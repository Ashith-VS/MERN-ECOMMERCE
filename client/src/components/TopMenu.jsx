import { isEmpty } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopMenu = () => {
  const { currentUser } = useSelector((state) => state.authReducer);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Commerce
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                All Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {isEmpty(currentUser) && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/signin">
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/signup">
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </>
                )}
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blogs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Jewelery">
                Jewellery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Electronics">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Mensclothing">
                Men's clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/WomensClothing">
                Women's clothing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
