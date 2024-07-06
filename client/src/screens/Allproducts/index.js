import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProductData,
  cartItems,
  deleteProductData,
  getCartItem,
} from "../../redux/action/commonAction";
import { Link, useNavigate } from "react-router-dom";

const AllProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItem, productData } = useSelector((state) => state.commonReducer);
  const { currentUser } = useSelector((state) => state.authReducer);

  // useEffect(() => {
  //   dispatch(GetProductData());
  // }, []);

  const handleAddToCart = async (product) => {
    const productExists = cartItem.find((item) => item.id === product.id);
    const productCountAvailable = { ...product, productCount: 1 };
    if (productExists) {
      navigate("/cart");
      return;
    } else {
      await dispatch(
        cartItems([...cartItem, productCountAvailable], currentUser?.uid)
      );
      await dispatch(getCartItem(currentUser?.uid));
    }
  };

  const handleEdit = (product) => {
    navigate(`/admin/${product.id}`);
  };

  const handleDelete = async (product) => {
    try {
      await dispatch(deleteProductData(product?.id));
      await dispatch(GetProductData()); // Refresh product data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title pb-3 border-bottom">All products</h5>
      </div>
      <div className="d-flex flex-wrap justify-content-start">
        {productData?.map((item) => (
          <div
            className="col-md-3 "
            key={item._id}
            style={{ marginBottom: "20px" }}
          >
           
            <div className="card text-center" style={{ height: "100%" }}>
            <Link to={`/product/${item.id}`} style={{textDecoration:"none"}}
            >
              <div className="card-body" style={{ height: "100%" }}>
                <img
                  src={item.productImage}
                  width={80}
                  height={80}
                  fill="currentColor"
                  className="text-primary"
                  viewBox="0 0 16 16"
                  alt=""
                />
                <h6 className="card-title text-capitalize">
                  {item.productName}
                </h6>
                <div className="card-text text-success">Upto 20% off</div>
                <small className="text-muted">
                  Price: ${item.productPrice}
                </small>
              </div>
            </Link>
              <div className="m-4">
                {currentUser?.role === "admin" ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(item)}
                    >
                      <i className="bi bi-cart-plus me-1" />
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleDelete(item)}
                    >
                      <i className="bi bi-cart-plus me-1" />
                      Delete
                    </button>
                  </>
                ) : item?.productCount !== 0 ? (
                  <>
                    {cartItem?.find((cartitem) => cartitem.id === item.id) ? (
                      <button
                        type="button"
                        className="btn btn-sm btn-primary me-2"
                        title="Add to cart"
                        onClick={() => navigate("/cart")}
                      >
                        Go to Cart
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleAddToCart(item)}
                      >
                        <i className="bi bi-cart-plus me-1" />
                        Add to cart
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary me-2"
                  >
                    out of stock
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
