import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/payment/payments.webp";
import { AddWishList,GetProductData,GetWishlist,cartItems,deleteCartItem,getCartItem,} from "../../redux/action/commonAction";
import ReactModal from "react-modal";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItem, wishList, productData } = useSelector((state) => state.commonReducer);
  console.log('cartItem: ', cartItem);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.authReducer);
  console.log('currentUser: ', currentUser);
  const [formData, setFormData] = useState({});
  const [canCheckout, setCanCheckout] = useState(true);
  useEffect(() => {
    dispatch(getCartItem(currentUser?._id));
  }, []);

  useEffect(() => {
    const hasInvalidQuantity = cartItem?.some((item) => {
      const productCountAvailable = productData?.find(
        (ite) => ite.id === item.id
      );
      return (
        productCountAvailable && productCountAvailable.productCount < item.productCount
      );
    });
    setCanCheckout(!hasInvalidQuantity);
  }, [cartItem, productData]);

  useEffect(() => {
    const initialCounts = {};
    cartItem?.forEach((item) => {
      initialCounts[item.id] = item.productCount || 1;
    });
    setFormData(initialCounts);
    dispatch(GetProductData());
  }, [cartItem]);

  const handleRemoveItem = async (data) => {
    await dispatch(deleteCartItem(data?._id,currentUser?._id));
    await dispatch(getCartItem(currentUser?._id));
  };

  const handleAddToWishlist = async (item) => {
    console.log('item: ', item);
    const productExists =Array.isArray(wishList) && wishList?.find((product) => product.id === item.id);
    const updatedWishlist =Array.isArray(wishList) &&wishList?.filter((product) => product.id !== item.id);
    if (productExists) {
      await dispatch(AddWishList(updatedWishlist, currentUser?._id));
      // await dispatch(GetWishlist(currentUser?._id));
    } else {
      await dispatch(AddWishList([...wishList, item], currentUser?._id));
      // await dispatch(GetWishlist(currentUser?._id));
    }
  };

  const totalPrice = cartItem&&cartItem?.reduce((total, item, i, array) => {
    const price = Number(item.productPrice) * item.productCount;
    return total + price;
  }, 0);

  const handleProductDecrement = async (product) => {
    const updatedCounts = { ...formData };
    if (updatedCounts[product.id] > 1) {
      updatedCounts[product.id] = updatedCounts[product.id] - 1;
      setFormData(updatedCounts);
      const updatedCart = cartItem?.map((item) =>
        item.id === product.id
          ? {
              ...item,
              productCount: updatedCounts[product.id],
            }
          : item
      );
      await dispatch(cartItems(updatedCart, currentUser?.uid));
      await dispatch(getCartItem(currentUser?.uid));
    } else {
      alert("You can't have less than 1 item");
    }
  };

  const handleProductIncrement = async (product) => {
    const updatedCounts = { ...formData };
    const productAvailable = productData.find((item) => item.id === product.id);
    if (!productAvailable) {
      alert("Product not found");
      return;
    }

    const currentCount = updatedCounts[product.id] || 0;
    const newCount = currentCount + 1;

    if (newCount > 10) {
      alert("You can't add more than 10 items");
      return;
    }

    if (newCount > productAvailable.productCount) {
      alert(
        `Only ${productAvailable.productCount} items are available. Do you want to book it?`
      );
      return;
    }

    updatedCounts[product.id] = newCount;
    setFormData(updatedCounts);

    const updatedCart = cartItem.map((item) =>
      item.id === product.id ? { ...item, productCount: newCount } : item
    );

    await dispatch(cartItems(updatedCart, currentUser?.uid));
    await dispatch(getCartItem(currentUser?.uid));
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="bg-secondary border-top p-4 text-white mb-3">
        <h1 className="display-6">Shopping Cart</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={150}>
                        Price
                      </th>
                      <th scope="col" className="text-end" width={130} />
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem?.length === 0 && (
                      <p className="d-flex justify-content-center ">
                        No Items Found
                      </p>
                    )}
                    {cartItem?.map((item) => {
                      // console.log(item)
                      const productCountAvailable = productData?.find(
                        (ite) => ite.id === item.id
                      );
                      const productAvailable =
                        productCountAvailable?.productData?.filter(
                          (opt) =>
                            opt.size === item.productSize &&
                            opt.color === item.productColor
                        );
                      const productQuantity = productAvailable?.map(
                        (item) => item.quantity
                      );
                      // console.log(productQuantity[0])
                      return (
                        <tr key={item.id}>
                          <td>
                            <div className="row">
                              <div className="col-3 d-none d-md-block">
                                <img
                                  src={item.productImage}
                                  width={50}
                                  alt="..."
                                />
                                <div>
                                  {productCountAvailable?.productCount < 5 && (
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      {`Only ${productCountAvailable?.productCount} items left`}{" "}
                                    </span>
                                  )}
                                  {/* {productQuantity[0]< 5 && (
                                    <span
                                      style={{ color: "red", fontSize: "14px" }}
                                    >
                                      {`Only ${productQuantity[0]} items left`}{" "}
                                    </span>
                                  )} */}
                                </div>
                              </div>

                              <div className="col">
                                <Link
                                  className="text-decoration-none"
                                  to={`/product/${item.id}`}
                                >
                                  {item.productName}
                                </Link>

                                <p className="small text-muted">
                                  {item.productSize && (
                                    <span>Size: {item.productSize}</span>
                                  )}
                                  <div></div>
                                  {item.productColor && (
                                    <span>Color: {item.productColor}</span>
                                  )}
                                </p>
                              </div>
                            </div>
                          </td>
                          {productCountAvailable?.productCount === 0 ? (
                            <p className="text-center">out of Stock</p>
                          ) : (
                            <>
                              <td>
                                <div className="input-group input-group-sm mw-140">
                                  <button
                                    className="btn btn-primary text-white"
                                    type="button"
                                    onClick={() => handleProductDecrement(item)}
                                  >
                                    <i className="bi bi-dash-lg" />
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={formData[item.id]}
                                    readOnly
                                  />
                                  <button
                                    className="btn btn-primary text-white"
                                    type="button"
                                    onClick={() => handleProductIncrement(item)}
                                  >
                                    <i className="bi bi-plus-lg" />
                                  </button>
                                </div>
                                {productCountAvailable?.productCount <
                                  item.productCount && (
                                  <span
                                    style={{ color: "red" }}
                                  >{`The available product quantity is ${productCountAvailable?.productCount}`}</span>
                                )}
                              </td>
                              <td>
                                <var className="price">
                                  ${item.productPrice * item.productCount}
                                </var>
                                <div></div>
                                <small className="text-muted">
                                  {` $${item.productPrice} each `}
                                </small>
                              </td>
                            </>
                          )}
                          <td className="text-end">
                            <button
                              className={`btn btn-sm ${
                                Array.isArray(wishList) &&
                                wishList?.some(
                                  (product) => product.id === item.id
                                )
                                  ? "btn-outline-danger"
                                  : "btn-outline-secondary"
                              } me-2`}
                              onClick={() => handleAddToWishlist(item)}
                            >
                              <i className="bi bi-heart-fill" />
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleRemoveItem(item)}
                            >
                              <i className="bi bi-trash" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="card-footer">
                <Link to={canCheckout ? "/checkout" : "#"}>
                  <button
                    className="btn btn-primary float-end"
                    onClick={canCheckout ? undefined : openModal}
                    disabled={cartItem?.length === 0}
                  >
                    Make Purchase <i className="bi bi-chevron-right" />
                  </button>
                </Link>
                <Link className="btn btn-secondary" to="/">
                  <i className="bi bi-chevron-left" /> Continue shopping
                </Link>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="m-0">
                <i className="bi bi-truck" /> Free Delivery within 1-2 weeks
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <dl className="row border-bottom">
                  <dt className="col-6">Total price:</dt>
                  <dd className="col-6 text-end">${totalPrice}</dd>
                  {/* <dt className="col-6 text-success">Discount:</dt>
                  <dd className="col-6 text-success text-end">
                    {parseInt(totalPrice) > 20 ? `-$5` : `-$0`}
                  </dd> */}
                </dl>
                <dl className="row">
                  <dt className="col-6">Total:</dt>
                  <dd className="col-6 text-end  h5">
                    $
                    {totalPrice !== 0 ? (
                      <strong>
                        {/* {`${`${parseInt(
                        totalPrice > 20 ? totalPrice - 5 : totalPrice
                      )}`}`} */}
                        {totalPrice}
                      </strong>
                    ) : (
                      0
                    )}
                  </dd>
                </dl>
                <hr />
                <p className="text-center">
                  <img src={img1} alt="..." height={26} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light border-top p-4">
        <div className="container">
          <h6>Payment and refund policy</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <h2>Issue with cart</h2>
        <p>
          Some items in your cart are currently out of stock or have limited
          availability. Please review your cart before proceeding.
        </p>
        <button className="btn btn-primary" onClick={closeModal}>
          Close
        </button>
      </ReactModal>
    </div>
  );
};

export default Cart;
