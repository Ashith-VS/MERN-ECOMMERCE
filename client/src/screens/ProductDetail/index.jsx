import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "./Accordion";
import FeaturedProducts from "./FeaturedProducts";
import { isEmpty, round } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  AddWishList,
  GetWishlist,
  cartItems,
  getCartItem,
  setFilteredData,
} from "../../redux/action/commonAction";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authReducer);
  const { cartItem, wishList, filteredData } = useSelector(
    (state) => state.commonReducer
  );
  const [formData, setFormData] = useState({
    productCount: 1,
    productColor: "",
    productSize: "",
  });
  // console.log(currentUser)
  // useEffect(() => {
  //   dispatch(getCartItem(currentUser?.uid));
  // }, []);

  // console.log(cartItem);

  // console.log(formData, "formData");
  useEffect(() => {
    dispatch(setFilteredData(id));
  }, [id]);

  const handleAddToWishlist = async () => {
    const productExists = wishList.find(
      (product) => product.id === filteredData?.id
    );
    if (productExists) {
      const updatedWishlist = wishList.filter(
        (product) => product.id !== filteredData?.id
      );
      await dispatch(AddWishList(updatedWishlist, currentUser.uid));
      await dispatch(GetWishlist(currentUser?.uid));
    } else {
      if (currentUser?.uid) {
        const newWishlistItem = {
          id: filteredData?.id,
          productName: filteredData?.productName,
          productDescription: filteredData?.productDescription,
          productImage: filteredData?.productImage,
          productPrice: filteredData?.productPrice,
          productCount: formData?.productCount,
          productColor: formData?.productColor,
          productSize: formData?.productSize,
          totalPrice: filteredData?.productPrice * formData?.productCount,
        };
        await dispatch(
          AddWishList([...wishList, newWishlistItem], currentUser?.uid)
        );
        await dispatch(GetWishlist(currentUser?.uid));
      } else {
        alert("Please login to use Add to Wishlist");
      }
    }
  };

  const handleAddToCart = async () => {
    if (filteredData?.productCount === 0) {
      navigate("/");
      return;
    }
    // if (!formData.productSize || !formData.productColor) {
    //   alert("Please select a size and color before adding to the cart");
    //   return;
    // }
    const cartItemsArray = cartItem ?? [];
    const productExists = cartItemsArray?.find((item) => item.id === id);
    if (productExists) {
      navigate("/cart");
      setFormData({
        productCount: 1,
        productColor: "",
        productSize: "",
      });
      return;
    } else {
      const value = {
        id: filteredData?.id,
        productName: filteredData?.productName,
        productDescription: filteredData?.productDescription,
        productImage: filteredData?.productImage,
        productPrice: filteredData?.productPrice,
        productCount: formData?.productCount || null,
        productColor: formData?.productColor || null,
        productSize: formData?.productSize || null,
        totalPrice: filteredData?.productPrice * formData?.productCount || null,
      };
      if (!isEmpty(currentUser.uid)) {
        // console.log(cartItemsArray)
        await dispatch(cartItems([...cartItemsArray, value], currentUser?.uid));
        await dispatch(getCartItem(currentUser?.uid));
        navigate("/cart");
        // clear formData for each updation
        // setFormData({
        //   productCount: 1,
        //   productColor: "",
        //   productSize: "",
        // });
      } else {
        alert("Please login to use Add to Cart");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, id } = e.target;
    setFormData({ ...formData, [name]: id });
  };

  const handleEdit = (product) => {
    navigate(`/admin/${product.id}`);
  };

  // useEffect(() => {
  //   if (filteredData) {
  //     if (!isEmpty(filteredData.productColor) && !formData.productColor) {
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         productColor: filteredData.productColor[0],
  //       }));
  //     }
  //     if (!isEmpty(filteredData.productSize) && !formData.productSize) {
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         productSize: filteredData.productSize[0],
  //       }));
  //     }

  //   }
  // }, [filteredData]);

  const counts = filteredData?.productData?.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );
  // console.log(counts)

  const filteredColor = filteredData?.productData?.filter(
    (item) => item.size === formData?.productSize
  );
  const uniqueSizes = [
    ...new Set(filteredData?.productData?.map((item) => item.size)),
  ];

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-3">
            <div className="col-md-5 text-center">
              <img
                src={filteredData?.productImage}
                className="border border-secondary me-2"
                width={"300px"}
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <h1 className="h5 d-inline me-2">{filteredData?.productName}</h1>
              <span className="badge bg-success me-2">New</span>
              {/* <div className="mb-3">
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-warning me-1" />
                <i className="bi bi-star-fill text-secondary me-1" />|{" "}
                <span className="text-muted small">
                  {filteredData?.rating?.rate} and 4 reviews
                </span>
              </div> */}
              <dl className="row small mb-3 mt-3">
                <dt className="col-sm-3">Availability</dt>
                <dd className="col-sm-9">
                  {filteredData?.productCount === 0 || counts === 0
                    ? "out of stock"
                    : `In stock - ${counts || filteredData?.productCount}`}
                </dd>
                <dt className="col-sm-3">Sold by</dt>
                <dd className="col-sm-9">Authorised Store</dd>

                {(filteredData?.category === "Mensclothing" ||
                  filteredData?.category === "WomensClothing") && (
                  <>
                    <dt className="col-sm-3">Size</dt>
                    <dd className="col-sm-9">
                      {uniqueSizes?.map((item, i) => {
                        return (
                          <div className="form-check form-check-inline" key={i}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="productSize"
                              id={item}
                              onChange={handleInputChange}
                              value={formData.productSize}
                            />
                            <label className="form-check-label" htmlFor={item}>
                              {item}
                            </label>
                          </div>
                        );
                      })}
                    </dd>
                  </>
                )}

                {!isEmpty(filteredColor) && (
                  <>
                    <dt className="col-sm-3">Color</dt>
                    <dd className="col-sm-9">
                      {filteredColor?.map((item, i) => (
                        <div className="form-check form-check-inline" key={i}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="productColor"
                            id={item.color}
                            onChange={handleInputChange}
                            value={formData.productColor}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={item.color}
                          >
                            {item.color}
                          </label>
                        </div>
                      ))}
                    </dd>
                  </>
                )}
              </dl>

              <div className="mb-3">
                <span className="fw-bold h5 me-2">
                  {filteredData?.discountPrice
                    ? `$${
                        round(filteredData?.productPrice) -
                        (Number(filteredData?.productPrice) *
                          Number(filteredData?.discountPrice)) /
                          100
                      }`
                    : `$${filteredData?.productPrice}`}
                </span>
                <del className="small text-muted me-2">
                  {filteredData?.discountPrice &&
                    `$${Number(filteredData?.productPrice)}`}
                </del>
                {filteredData?.discountPrice && (
                  <span className="rounded p-1 bg-warning  me-2 small">
                    -${filteredData?.discountPrice}%
                  </span>
                )}
              </div>
              <div className="mb-3">
                {currentUser?.role === "admin" ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() => handleEdit(filteredData)}
                    >
                      Edit
                    </button>
                  </>
                ) : (
                  <>
                    {cartItem?.find((cartitem) => cartitem.id === id) ? (
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
                        onClick={handleAddToCart}
                        // disabled={data?.productCount === 0}
                      >
                        {filteredData?.productCount === 0 ? (
                          ""
                        ) : (
                          <i className="bi bi-cart-plus me-1" />
                        )}
                        {filteredData?.productCount === 0
                          ? "out of stock"
                          : "Add to cart"}
                      </button>
                    )}

                    <button
                      type="button"
                      className={`btn btn-sm ${
                        wishList.some(
                          (product) => product?.id === filteredData?.id
                        )
                          ? "btn-outline-danger"
                          : "btn-outline-secondary"
                      } me-2`}
                      onClick={() => handleAddToWishlist()}
                    >
                      <i className="bi bi-heart-fill" />
                    </button>
                  </>
                )}
              </div>
              <div>
                <p className="fw-bold mb-2 small">Product Highlights</p>
                <p>{filteredData?.productDescription}</p>
              </div>
            </div>
          </div>
          <Accordion />
        </div>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
