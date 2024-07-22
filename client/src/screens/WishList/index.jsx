import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {AddWishList,GetWishlist,cartItems} from "../../redux/action/commonAction";
import { isEmpty } from "lodash";

const WishList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItem, wishList } = useSelector((state) => state.commonReducer);
  console.log('wishList: ', wishList);
  const { currentUser } = useSelector((state) => state.authReducer);
  console.log('currentUser: ', currentUser);

  useEffect(() => {
    dispatch(GetWishlist(currentUser?._id));
  }, []);

  const handleAddToCart = async(product) => {
    const productExists = cartItem.find((item) => item.id === product.id);
    const productCountupdate = { ...product, productCount: 1 };
    if (productExists) {
      navigate("/cart");
      return;
    } else {
     await dispatch(cartItems([...cartItem, productCountupdate], currentUser?.uid));
    }
  };

  const handleAddToWishlist = async(item) => {
    const productExists = wishList.find((product) => product.id === item.id);
    const updatedWishlist = wishList.filter((product) => product.id !== item.id);
    if (productExists) {
      await dispatch(AddWishList(updatedWishlist, currentUser?.uid));
    } else {
      await dispatch(AddWishList([...wishList, item], currentUser?.uid));
    }
  };

  return (
    <div className="container mb-3">
      <h4 className="my-3">Wishlists</h4>
      <div className="row g-3">
        {isEmpty(wishList) && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "50vh" }}
          >
            <p className="text-center">WishList is empty</p>
          </div>
        )}
        {wishList?.map((item) => (
          <div className="col-md-6" key={item.id}>
            <div className="card">
              <div className="row g-0">
                <div className="col-md-3 text-center">
                  <img
                    src={item.productImage}
                    className="img-fluid"
                    alt="..."
                    width={"50%"}
                    height={"100%"}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h6 className="card-subtitle me-2 d-inline">
                      <Link
                        className="text-decoration-none"
                        to={`/product/${item.id}`}
                      >
                        {item.productName}
                      </Link>
                    </h6>
                    <span className="badge bg-success me-2">New</span>
                    <span className="badge bg-danger me-2">Hot</span>
                    <span className="badge bg-secondary">
                      <i className="bi bi-star-fill text-warning me-1" />4
                    </span>
                  </div>
                  <div className="card-footer">
                    <div className="mb-2">
                      <span className="fw-bold h5 me-2">
                        ${item.productPrice}
                      </span>
                      <del className="small text-muted me-2">
                        ${parseInt(item.productPrice) + 10}
                      </del>
                      <span className="rounded p-1 bg-warning me-2 small">
                        -10%
                      </span>
                      <span className="text-success small mb-2">
                        <i className="bi bi-truck" /> Free shipping
                      </span>
                    </div>
                    <div className="btn-group  d-flex" role="group">
                      {cartItem.find((cartitem) => cartitem.id === item.id) ? (
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          title="Add to cart"
                          onClick={() => navigate("/cart")}
                        >
                          Go to Cart
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          title="Add to cart"
                          onClick={() => handleAddToCart(item)}
                        >
                          <i className="bi bi-cart-plus" />
                        </button>
                      )}
                      <button
                        type="button"
                        className={`btn btn-sm ${
                          wishList.some((product) => product.id === item.id)
                            ? "btn-outline-danger"
                            : "btn-outline-secondary"
                        } me-2`}
                        title="Add to wishlist"
                        onClick={() => handleAddToWishlist(item)}
                      >
                        <i className="bi bi-heart-fill" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
