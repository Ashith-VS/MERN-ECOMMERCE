import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProductData } from "../../redux/action/commonAction";
const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.commonReducer);
  useEffect(() => {
    dispatch(GetProductData());
  }, []);
  
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <div className="card-header fw-bold text-uppercase">
          Featured Products
        </div>
        { productData.slice(2,5)?.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id}>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-4">
                  <img
                    src={item.productImage}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <h6 className="text-capitalize mb-1">
                    <a className="text-decoration-none" href="/product/detail">
                      {item.productName}
                    </a>
                  </h6>
                  <div className="mb-2">
                    <i className="bi bi-star-fill text-warning me-1" />
                    <i className="bi bi-star-fill text-warning me-1" />
                    <i className="bi bi-star-fill text-warning me-1" />
                    <i className="bi bi-star-fill text-warning me-1" />
                  </div>
                  <span className="fw-bold h5">${item.productPrice }</span>
                  <del className="small text-muted ms-2">
                    ${Number(item.productPrice) + 100}
                  </del>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="card mb-3">
        <div className="card-header fw-bold text-uppercase">Custom Service</div>
        <div className="card-body">
          <div className="row border-bottom">
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="bi bi-truck"
                viewBox="0 0 16 16"
              >
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
            <div className="col">
              <div className="ms-3">
                <span className="fw-bold">Free Delivery</span>
                <p className="text-muted small">From $59.89</p>
              </div>
            </div>
          </div>
          <div className="row border-bottom py-3">
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="bi bi-life-preserver"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <div className="col">
              <div className="ms-3">
                <span className="fw-bold">Support 24/7</span>
                <p className="text-muted small m-0">Online 24 hours</p>
              </div>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                fill="currentColor"
                className="bi bi-arrow-counterclockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
              </svg>
            </div>
            <div className="col">
              <div className="ms-3">
                <span className="fw-bold">Free return</span>
                <p className="text-muted small m-0">365 a day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
