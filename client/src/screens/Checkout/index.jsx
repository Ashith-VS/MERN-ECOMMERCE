import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import json from "../../../../client/src/constants/data.json";
import img from "../../assets/images/payment/cards.webp";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import {OrderCollection,cartItems,getCartItem, updateProductData} from "../../redux/action/commonAction";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState({});
  const { cartItem, productData } = useSelector((state) => state.commonReducer);
  const { currentUser } = useSelector((state) => state.authReducer);

  const totalprice = cartItem.reduce((total, item, i) => {
    const productprice = item.totalPrice * item.productCount;
    return total + productprice;
  }, 0);

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    if (checked === true) {
      setFormData({
        ...formData,
        name2: formData.name,
        address21: formData.address1,
        address22: formData.address2,
        country2: formData.country,
        state2: formData.state,
        zip2: formData.zip,
      });
      setError({ ...error, [id]: "" });
    } else {
      setFormData({
        ...formData,
        name2: "",
        address21: "",
        address22: "",
        country2: "",
        state2: "",
        zip2: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    if (
      id === "mobile" ||
      id === "zip" ||
      id === "zip2" ||
      id === "cvv" ||
      id === "expYear" ||
      id === "expMonth" ||
      id === "cardNumber"
    ) {
      setFormData({ ...formData, [id]: numericValue });
    } else {
      setFormData({ ...formData, [id]: value });
    }
    setError({ ...error, [id]: "" });
  };

  const handleValidation = () => {
    const errors = {};
    const allFields = [
      ...json.shippingInfo,
      ...json.contactInfo,
      ...json.billinginfo,
      ...json.paymentDetails,
    ];
    allFields.forEach((rule) => {
      const { id, label, isrequired, ispattern, patternErrorMessage } = rule;
      const value = formData[id];
      if (isrequired && !value) {
        errors[id] = `${label} is required`;
      } else if (ispattern && !new RegExp(ispattern).test(value)) {
        errors[id] = patternErrorMessage;
      }
    });
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = handleValidation();
    setError(valid);
    if (isEmpty(valid)) {
      // console.log(formData, "handleSubmit");
      // Update product count in Firestore
      await Promise.all(
        cartItem.map(async (item) => {
          // console.log('item: ', item);
          try {     
            const product = productData.find((prod) => prod._id === item.id);
            // console.log('product: ', product);
            if (product) {
              const filtered = product?.productData?.filter((data) => data.size === item.productSize && data.color === item.productColor);
              // console.log(filtered);
              // Calculate the new quantities for each filtered item
              const updatedQuantities = filtered?.map((data) => ({...data,quantity: data.quantity - item.productCount}));
              // console.log(updatedQuantities)
              // Update the main product's productCount
              // const updatedProductCount = product.productCount - item.productCount;
              // console.log('updatedProductCount: ', updatedProductCount);
              // Update the Firestore document
              // const productDocRef = doc(db, "product", item.id);
              // Create the updated product data by merging the updated quantities back into the productData array
              const updatedProductData = product.productData.map((data) => {
                const updatedItem = updatedQuantities.find((updated) =>updated.size === data.size && updated.color === data.color);
                return updatedItem ? updatedItem : data;
              });
              console.log('updatedProductData: ', updatedProductData);
              const updatedProduct = {
                // productCount: updatedProductCount,
                // productData: updatedProductData,
              };
              await dispatch(updateProductData(item.id, updatedProductData));
            }
          } catch (error) {
            console.error("Error updating product count:", error);
          }
        })
      );
      await dispatch(OrderCollection(formData, cartItem, currentUser?._id));
      await dispatch(cartItems([], currentUser?._id));
      await dispatch(getCartItem(currentUser?._id));
      navigate("/orders");
    }
  };

  const renderedInputs = (item) => {
    switch (item.type) {
      case "email":
        return (
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder={item.placeholder}
              aria-label="Email Address"
              onChange={handleInputChange}
              id={item.id}
              value={formData[item.id]}
            />

            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );
      case "tel":
        return (
          <div className="col-md-6">
            <input
              type="tel"
              className="form-control"
              placeholder="Mobile no"
              aria-label="Mobile no"
              onChange={handleInputChange}
              id="mobile"
              maxLength={10}
              value={formData.mobile}
            />
            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );

      default:
        return null;
    }
  };

  const renderedShippingInputs = (item) => {
    switch (item.type) {
      case "text":
        return (
          <div className="col-md-12">
            <input
              type="text"
              className="form-control"
              value={formData[item.id]}
              placeholder={item.placeholder}
              onChange={handleInputChange}
              id={item.id}
            />
            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );
      case "address":
        return (
          <div className="col-md-6">
            <input
              id={item.id}
              type="address"
              value={formData[item.id]}
              className="form-control"
              placeholder={item.placeholder}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );

      case "select":
        return (
          <div className="col-md-4">
            <select
              className="form-select"
              id={item.id}
              value={formData[item.id]}
              onChange={handleInputChange}
            >
              {item.options.map((opt) => (
                <option value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );
      case "zip":
        return (
          <div className="col-md-4">
            <input
              id={item.id}
              type="zip"
              value={formData[item.id]}
              className="form-control"
              placeholder={item.placeholder}
              onChange={handleInputChange}
              maxLength={6}
            />
            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );

      default:
        return null;
    }
  };

  const renderedPaymentDetails = (item) => {
    switch (item.type) {
      case "text":
        return (
          <div className="col-md-6">
            <input
              type="text"
              id={item.id}
              value={formData[item.id]}
              className="form-control"
              placeholder="Name on card"
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );
      case "texts":
        return (
          <div className="col-md-6">
            <input
              id={item.id}
              value={formData[item.id]}
              type="text"
              className="form-control"
              placeholder="Card number"
              maxLength={12}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );
      case "textss":
        return (
          <div className="col-md-4">
            <input
              id={item.id}
              value={formData[item.id]}
              type="text"
              className="form-control"
              placeholder={item.placeholder}
              onChange={handleInputChange}
              maxLength={item.maxlength}
            />
            <span style={{ color: "red" }}>{error[item.id]}</span>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div>
      <div className="bg-secondary border-top p-4 text-white mb-3">
        <h1 className="display-6">Checkout</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-header">
                <i className="bi bi-envelope" /> Contact Info
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {json.contactInfo.map((item) => renderedInputs(item))}
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-header">
                <i className="bi bi-truck" /> Shipping Infomation
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {json.shippingInfo.map((item) =>
                    renderedShippingInputs(item)
                  )}
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-header">
                <i className="bi bi-receipt" /> Billing Infomation
                <div className="form-check form-check-inline ms-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue="true"
                    id="sameAsShipping"
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor="sameAsShipping">
                    Same as Shipping Infomation
                  </label>
                </div>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  {json.billinginfo.map((item) => renderedShippingInputs(item))}
                </div>
              </div>
            </div>
            <div className="card mb-3 border-info">
              <div className="card-header bg-info">
                <i className="bi bi-credit-card-2-front" /> Payment Method
              </div>
              <div className="card-body">
                <div className="row g-3 mb-3 border-bottom">
                  <div className="col-md-6">
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        Credit card
                        <img src={img} alt="..." className="ms-3" height={26} />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  {json.paymentDetails.map((item) =>
                    renderedPaymentDetails(item)
                  )}
                </div>
              </div>
              <div className="card-footer border-info d-grid">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-info"
                >
                  Pay Now <strong>{`$${totalprice}`}</strong>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="bi bi-cart3" /> Cart{" "}
                <span className="badge bg-secondary float-end">
                  {cartItem.length}
                </span>
              </div>
              <ul className="list-group list-group-flush">
                {cartItem?.map((item) => {
                  return (
                    <li
                      className="list-group-item d-flex justify-content-between lh-sm"
                      key={item.id}
                    >
                      <div>
                        <h6 className="my-0">{item.productName}</h6>
                        <small className="text-muted">
                          {item.productDescription}
                        </small>
                      </div>
                      <span className="text-muted">
                        ${item.totalPrice * item.productCount}
                      </span>
                    </li>
                  );
                })}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>{`$${totalprice}`}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
