import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {AddWishList,GetWishlist,cartItems,getCartItem,setCategoryData} from "../../redux/action/commonAction";

const CategoryDetail = ({ viewMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productData, cartItem, wishList, categoryData } = useSelector((state) => state.commonReducer);

  const { currentUser } = useSelector((state) => state.authReducer);
  const { id } = useParams();

  const GetData = async () => {
    try {
      const filterData = productData.filter((item) => item.category === id);
      dispatch(setCategoryData(filterData));
    } catch (error) {
      console.error("Error :", error);
    }
  };

  useEffect(() => {
    GetData();
  }, [id]);

  const handleAddToCart = async (product) => {
    const productExists = cartItem?.find((item) => item.id === product._id);
    const newProductItem = {
      id: product?._id,
      productName: product?.productName,
      productDescription: product?.productDescription,
      productImage: product?.productImage,
      productPrice: product?.productPrice,
      productCount: 1,
      productColor: product?.productData[0].color,
      productSize: product?.productData[0].size,
      totalPrice: product?.productPrice ,
    };
    if (productExists) {
      // alert("The product already added to cart");
      return;
    } else {
      if(currentUser?._id){
      await dispatch(cartItems([...cartItem, newProductItem], currentUser?._id));
      await dispatch(getCartItem(currentUser?._id));
    }else{
      alert("Please login to add product to cart");
    }
  }
  };

  const handleAddToWishlist = async (item) => {
    const productExists = wishList?.find((product) => product?.id === item?._id);
    const updatedWishlist = wishList?.filter((product) => product.id !== item._id);
    if (productExists) {
      await dispatch(AddWishList(updatedWishlist, currentUser?._id));
      await dispatch(GetWishlist(currentUser?._id));
    } else {
      if (currentUser?._id) {
      const newWishlistItem = {
        id: item?._id,
        productName: item?.productName,
        productDescription: item?.productDescription,
        productImage: item?.productImage,
        productPrice: item?.productPrice,
        productCount: item?.productData[0].quantity,
        productColor: item?.productData[0].color,
        productSize: item?.productData[0].size,
        totalPrice: item?.productPrice ,
      };
      await dispatch(AddWishList([...wishList, newWishlistItem], currentUser?._id));
      await dispatch(GetWishlist(currentUser?._id));
    }else{
      alert("Please login to use Add to Wishlist");
    }
  }
  };

  return (
    <div className="row g-3">
      {categoryData?.map((item) => (
        <div
        key={item._id}
        className={viewMode === "grid" ? "col-md-4" : "col-md-12"}
        >
          <div className="card">
            <div className="row g-0">
              <div className="col-md-3 text-center">
                <img
                  src={item.productImage}
                  className="img-fluid"
                  alt="..."
                  style={{
                    maxHeight: "200px",
                    maxWidth: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h6 className="card-subtitle me-2 d-inline">
                    <Link
                      className="text-decoration-none"
                      to={`/product/${item._id}`}
                    >
                      {item.productName}
                    </Link>
                  </h6>
                  <span className="badge bg-success me-2">New</span>
                  <div>
                    <i className="bi bi-star-fill text-warning me-1" />
                    <i className="bi bi-star-fill text-warning me-1" />
                    <i className="bi bi-star-fill text-warning me-1" />
                    <i className="bi bi-star-fill text-warning me-1" />
                    <i className="bi bi-star-fill text-warning me-1" />
                  </div>
                  <p className="small mt-2">{item.productDescription}</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-body">
                  <div className="mb-2">
                    <span className="fw-bold h5">{`$${item.productPrice}`}</span>
                    <del className="small text-muted ms-2">
                      {`$${Number(item.productPrice) + 10}`}
                    </del>
                    <span className="rounded p-1 bg-warning ms-2 small">
                      -10%
                    </span>
                  </div>
                  <p className="text-success small mb-2">
                    <i className="bi bi-truck" /> Free shipping
                  </p>
                  <div className="btn-group d-flex" role="group">
                    {currentUser?.role === "admin" ? (
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        title="Add to cart"
                        onClick={() => navigate(`/admin/${item._id}`)}
                      >
                        Edit
                      </button>
                    ) : (
                      <>
                        {cartItem?.find(
                          (cartitem) => cartitem.id === item._id
                        ) ? (
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
                            wishList.some((product) => product.id === item._id)
                              ? "btn-outline-danger"
                              : "btn-outline-secondary"
                          } me-2`}
                          title="Add to wishlist"
                          onClick={() => handleAddToWishlist(item)}
                        >
                          <i className="bi bi-heart-fill" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetail;
