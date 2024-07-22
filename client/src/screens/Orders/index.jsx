import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetOrderCollection } from "../../redux/action/commonAction";

const Orders = () => {
  const { currentUser } = useSelector((state) => state.authReducer);
  const { allPreviousCollection } = useSelector((state) => state.commonReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOrderCollection(currentUser?._id));
  }, []);
  // console.log(allPreviousCollection);

  return (
    <div className="container mb-3">
      <h4 className="my-3">Orders</h4>
      <div className="row g-3">
        {allPreviousCollection.map((items) =>
          items?.orderItems?.map((item, i) => {
            return (
              <div className="col-md-6" key={i}>
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-3 text-center">
                      <img
                        src={item?.productImage}
                        className="img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-9">
                      <div className="card-header">
                        <div className="small">
                          <span className="border bg-secondary rounded-left px-2 text-white">
                            Order ID
                          </span>
                          <span className="border bg-white rounded-right px-2 me-2">
                            {`#${item?.id}`}
                          </span>
                        </div>
                      </div>
                      <div className="card-body">
                        <h6>
                          <a className="text-decoration-none" href="/">
                            {item?.productName}
                          </a>
                        </h6>
                        <div className="small">
                          {item?.productSize && (
                            <>
                              {" "}
                              <span className="text-muted me-2">Size:</span>
                              <span className="me-3">{item?.productSize}</span>
                            </>
                          )}
                          <span className="text-muted me-2">Price:</span>
                          <span className="me-3">{`$${item?.totalPrice}`}</span>
                          {item?.productColor && (
                            <>
                              ( <span className="text-muted me-2">Color:</span>
                              <span className="me-3">{item?.productColor}</span>
                              )
                            </>
                          )}
                        </div>
                        <div className="mt-2" />
                      </div>
                      <div className="card-footer d-flex justify-content-between">
                        <div>
                          <span className="me-2">Status:</span>
                          <span className="text-success">
                            <i className="bi bi-check-circle-fill me-1" />
                            Completed
                          </span>
                        </div>
                        <div>
                          {console.log(item.id)}
                          <span className="me-2">Invoice:</span>
                          <span className="text-success">
                            <Link to={`/invoice/${item?.id}`}>
                              <i className="bi bi-receipt-cutoff me-1" />
                              Download
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Orders;
