import React, { useEffect, useState } from "react";
import json from "../../../../client/src/constants/data.json";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./sideBar";
import { useParams } from "react-router-dom";
import {
  GetProductData,
  addProductData,
  updateProductData,
} from "../../redux/action/commonAction";
import Modal from "react-modal";

const Admin = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.authReducer);
  // console.log('currentUser: ', currentUser);
  const { productData } = useSelector((state) => state.commonReducer);
  // console.log('productData: ', productData);
  const [errors, setErrors] = useState({});
  const inputdata = json.admin;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: null,
    discountPrice: null,
    productCount: null,
    productImage: "",
    category: "",
    productData: [{}],
  });

  // useEffect(() => {
  //   dispatch(GetProductData());
  // }, []);

  useEffect(() => {
    if (id && productData.length > 0) {
      const filteredData = productData.find((item) => item.id === id);
      if (filteredData) {
        setFormData({
          productName: filteredData.productName || "",
          productDescription: filteredData.productDescription || "",
          productPrice: filteredData.productPrice || "",
          productCount: filteredData.productCount || "",
          productImage: filteredData.productImage || "",
          category: filteredData.category || "",
          discountPrice: filteredData.discountPrice || "",
          productData: filteredData.productData || [{}],
        });
      }
    }
  }, [id, productData]);

  const updateProduct = async () => {
    try {
      const countss = formData.productCount ?? counts;
      await dispatch(
        updateProductData(id, { ...formData, id, productCount: countss })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const counts = formData?.productData?.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );

  const addProduct = async () => {
    try {
      // const id = Date.now().toString();
      const countss = formData.productCount ?? counts;
      await dispatch(addProductData({ ...formData, productCount: countss }));
    } catch (error) {
      console.error(error);
    }
  };
  const handleShowData = () => {
    const lastItem = formData.productData[formData.productData.length - 1];
    if (
      !isEmpty(lastItem) &&
      !formData.productData.some((item) => item.size === "")
    ) {
      setFormData((prevState) => ({
        ...prevState,
        productData: [...prevState.productData, {}],
      }));
      setErrors({});
    } else {
      setErrors({ ...errors, productData: "Please fill the product detail" });
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newArray = formData.productData.map((item, i) => {
      if (i === index) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setFormData({
      ...formData,
      productData: newArray,
    });
  };

  const handleClearInput = (index) => {
    if (index > 0) {
      const newData = formData.productData.filter((_, i) => i !== index);
      setFormData({
        ...formData,
        productData: newData,
      });
    }
  };

  const renderedInputs = (item) => {
    switch (item.type) {
      case "text":
        return (
          <>
            {(formData[item.referencekey] === item.referenceValue1 ||
              formData[item.referencekey] === item.referenceValue2) && (
              <div className="mb-3" key={item.id}>
                <label htmlFor={item.name} className="form-label">
                  {item.label}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={item.id}
                  name={item.name}
                  placeholder={item.placeholder}
                  value={formData[item.name]}
                  onChange={handleChange}
                />
                {errors && errors[item.name] && (
                  <span
                    style={{
                      color: " red",
                      display: "block",
                      fontSize: "13px",
                    }}
                  >
                    {errors[item.name]}
                  </span>
                )}
              </div>
            )}
          </>
        );
      case "textarea":
        return (
          <div className="mb-3" key={item.id}>
            <label htmlFor="productDescription" className="form-label">
              {item.label}
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              rows="3"
              placeholder={item.placeholder}
              name={item.name}
              value={formData.productDescription}
              onChange={handleChange}
            ></textarea>
            {errors && errors[item.name] && (
              <span
                style={{ color: " red", display: "block", fontSize: "13px" }}
              >
                {errors[item.name]}
              </span>
            )}
          </div>
        );
      case "table":
        return (
          <>
            {(formData[item.referencekey] === item.referenceValue1 ||
              formData[item.referencekey] === item.referenceValue2) && (
              <div className="container mt-4">
                <label className="form-label">{item.label}</label>
                <table className="table table-striped table-bordered text-center">
                  <thead className="thead-dark">
                    <tr>
                      <th>Size</th>
                      <th>Color</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.productData?.map((data, index) => (
                      <tr key={index}>
                        {item.tableData?.map((opt, i) => (
                          <td key={i}>
                            <input
                              type="text"
                              className="form-control"
                              id="productData"
                              name={opt.name}
                              value={data[opt.name] || ""}
                              onChange={(e) => handleInputChange(e, index)}
                            />
                          </td>
                        ))}
                        {index === formData.productData.length - 1 && (
                          <button
                            className="btn btn-primary float-end "
                            type="button"
                            onClick={(e) => handleShowData(e)}
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        )}

                        {index > 0 &&
                          index === formData.productData.length - 1 && ( // Render close icon only for the last row
                            <button
                              className="btn btn-danger float-end "
                              type="button"
                              onClick={() => handleClearInput(index)}
                            >
                              <i className="bi bi-x"></i>
                            </button>
                          )}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {errors && (errors.productData || errors.productDetail) && (
                  <span
                    style={{
                      color: " red",
                      display: "block",
                      fontSize: "13px",
                    }}
                  >
                    {errors.productData || errors.productDetail}
                  </span>
                )}
              </div>
            )}
          </>
        );
      case "checkbox":
        return (
          <>
            {(formData[item.referencekey] === item.referenceValue1 ||
              formData[item.referencekey] === item.referenceValue2) && (
              <div className="mb-3" key={item.id}>
                {/* <label className="form-label">{item.label}</label> */}
                <div className="col-sm-9">
                  {/* {item.options.map((opt) => (
                    <div className="form-check form-check-inline " key={opt.id}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name={item.name}
                        id={item.id}
                        onChange={handleChange}
                        value={opt.id}
                        // checked={formData[item.name]?.includes(opt.id)}
                        checked={formData[item.name]?.some(
                          (obj) => obj.value === opt.id
                        )}
                      />
                      <label className="form-check-label" htmlFor={opt.id}>
                        {opt.label}
                      </label>
                      {formData[item.name]?.some(
                        (obj) => obj.value === opt.id
                      ) && (
                        // {formData[item.name].includes(opt.id) && (
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Quantity"
                          name={opt.id}
                          // value={formData.quantities[opt.id] || ""}
                          onChange={(e) => handleChange(e, opt.id, item.name)}
                        />
                      )}
                    </div>
                  ))} */}
                </div>
                {/* {errors && errors[item.name] && (
                  <span
                    style={{
                      color: " red",
                      display: "block",
                      fontSize: "13px",
                    }}
                  >
                    {errors[item.name]}
                  </span>
                )} */}
              </div>
            )}
          </>
        );
      case "select":
        return (
          <div className="mb-3" key={item.id}>
            <label htmlFor={item.id} className="form-label">
              {item.label}
            </label>

            <select
              className="form-control"
              id={item.id}
              name={item.name}
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select {item.label}
              </option>
              {item.options.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors && errors[item.name] && (
              <span
                style={{ color: " red", display: "block", fontSize: "13px" }}
              >
                {errors[item.name]}
              </span>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const handleChange = (e, optId, names) => {
    const { id, value, type, name, checked } = e.target;
    if (type === "checkbox") {
      let array = [...formData[id]];

      if (checked) {
        array.push({ value, quantity: 0 });
      } else {
        array = array.filter((item) => item !== value);
      }
      setFormData({ ...formData, [name]: array });
    } else if (name === optId) {
      const updatedArray = formData[names]?.map((item) =>
        item.value === optId ? { ...item, quantity: value } : item
      );
      setFormData({ ...formData, [names]: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleValidation = () => {
    const error = {};
    inputdata.forEach((rule) => {
      const {
        name,
        label,
        isrequired,
        referencekey,
        referenceValue1,
        referenceValue2,
      } = rule;

      if (
        formData[referencekey] === referenceValue1 &&
        formData[referencekey] === referenceValue2
      ) {
        if (isEmpty(formData[name]) && isrequired) {
          error[name] = `${label} is required`;
        }
      }
    });
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = handleValidation();
    setErrors(valid);
    // console.log(valid);
    if (isEmpty(valid)) {
      // console.log(formData, "handleSubmit");
      // console.log(counts, "counts");

      {
        id ? updateProduct() : addProduct();
      }
      setModalIsOpen(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      productName: "",
      productDescription: "",
      productPrice: "",
      productCount: "",
      productImage: "",
      category: "",
      discountPrice: "",
      productData: [{}],
    });
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

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="container mt-4">
      {currentUser?.email === "admin@gmail.com" && (
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row justify-content-center">
              <div className="col-md-10">
                {id ? <h2>Update Product</h2> : <h2>Add Product</h2>}
                <form onSubmit={handleSubmit}>
                  {inputdata.map((item) => renderedInputs(item))}
                  <button type="submit" className="btn btn-primary m-3">
                    {id ? "Update Product" : "Add Product"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning m-3"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <h4>Product Status</h4>
        <p>
          {id ? "Product updated successfully" : "product created successfully"}
        </p>
        <button className="btn btn-primary" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Admin;
