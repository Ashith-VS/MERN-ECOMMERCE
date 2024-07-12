import { Link, useParams } from "react-router-dom";
import CategoryDetail from "./CategoryDetail";
import img from "../../assets/images/banner/image-1400x250.jpg";
import { useEffect, useState } from "react";
import Services from "./Services";
import { useDispatch, useSelector } from "react-redux";
import {GetProductData,setCategoryData,showLoader,} from "../../redux/action/commonAction";
import { isEmpty } from "lodash";
const Category = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productData, categoryData } = useSelector((state) => state.commonReducer);
  const [formData, setFormData] = useState({
    size: [],
    color: [],
  });
  const [sortOrder, setSortOrder] = useState("");
  const [viewMode, setViewMode] = useState("list");

  useEffect(() => {
    dispatch(showLoader(true));
    dispatch(GetProductData()).then(dispatch(showLoader(false)));
  }, []);

  const handlePriceChange = (e, price) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: price });
  };

  useEffect(() => {
    try {
      let filteredProducts = productData.filter((item) => {
        // Filter by category
        if (item.category !== id) return false;
        // Filter by size if formData.size is not empty
        if (
          formData.size.length > 0 &&
          !formData.size.some((size) => item.productSize.includes(size))
        ) {
          return false;
        }
        // Filter by color if formData.color is not empty
        if (
          formData.color.length > 0 &&
          !formData.color.some((color) => item.productColor.includes(color))
        ) {
          return false;
        }
        // Filter by price if formData.price is not empty
        if (formData.price) {
          const [minPrice, maxPrice] = formData.price
            .split("-")
            .map((price) => parseFloat(price.replace("$", "").trim()));
          if (item.productPrice < minPrice || item.productPrice > maxPrice) {
            return false;
          }
        }
        // Product passed all filters
        return true;
      });
      // Sort filtered products based on sortOrder
      if (sortOrder === "lowToHigh") {
        filteredProducts.sort((a, b) => a.productPrice - b.productPrice);
      } else if (sortOrder === "highToLow") {
        filteredProducts.sort((a, b) => b.productPrice - a.productPrice);
      }
      dispatch(setCategoryData(filteredProducts));
    } catch (error) {
      console.error(error);
    }
  }, [
    formData.price,
    formData.size,
    formData.color,
    productData,
    id,
    sortOrder,
  ]);

  const handleInputChange = (e) => {
    const { id, name, checked } = e.target;
    let array = [...formData[name]];
    if (checked) {
      array.push(id);
    } else {
      array = array.filter((item) => item !== id);
    }
    setFormData({ ...formData, [name]: array });
  };

  const isNonFilterableCategory = ["Electronics", "Jewelery"].includes(id);
  // console.log(isNonFilterableCategory)

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <>
      <div
        className="p-5 bg-primary bs-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container text-center">
          <span className="display-5 px-3 bg-white rounded shadow">{id}</span>
        </div>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb rounded-0">
          <li className="breadcrumb-item">
            <Link title="Home" to="/">
              category
            </Link>
          </li>
          <li className="breadcrumb-item active">
            <Link title="Men" to="">
              {id}
            </Link>
          </li>
        </ol>
      </nav>

      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-3 accordion">
              <div
                className="card-header fw-bold text-uppercase accordion-icon-button"
                data-bs-toggle="collapse"
                data-bs-target="#filterCategory"
                aria-expanded="true"
                aria-controls="filterCategory"
              >
                Categories
              </div>
              <ul
                className="list-group list-group-flush show"
                id="filterCategory"
              >
                {[
                  "Jewelery",
                  "Electronics",
                  "Mensclothing",
                  "WomensClothing",
                ].map((item, i) => (
                  <li className="list-group-item" key={i}>
                    <Link
                      className="text-decoration-none stretched-link"
                      to={`/category/${item}`}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card mb-3">
              <div
                className="card-header fw-bold text-uppercase accordion-icon-button"
                data-bs-toggle="collapse"
                data-bs-target="#filterPrice"
                aria-expanded="true"
                aria-controls="filterPrice"
              >
                Price
              </div>
              <ul className="list-group list-group-flush show" id="filterPrice">
                {[
                  { price: "$10.00 - $99.00" },
                  { price: "$100.00 - $499.00" },
                  { price: "$500.00 - $1000.00" },
                ].map((item, i) => (
                  <li className="list-group-item" key={i}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="price"
                        value={formData.price}
                        type="radio"
                        id={`flexCheckDefault${i}`}
                        onChange={(e) => handlePriceChange(e, item.price)}
                        checked={formData.price === item.price}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexCheckDefault${i}`}
                      >
                        {item.price}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {!isNonFilterableCategory && (
              <>
                <div className="card mb-3">
                  <div
                    className="card-header fw-bold text-uppercase accordion-icon-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#filterSize"
                    aria-expanded="true"
                    aria-controls="filterSize"
                  >
                    Size
                  </div>
                  <ul
                    className="list-group list-group-flush show"
                    id="filterSize"
                  >
                    {[
                      { id: "flexCheckSize1", label: "S" },
                      { id: "flexCheckSize2", label: "M" },
                      { id: "flexCheckSize3", label: "L" },
                      { id: "flexCheckSize4", label: "XL" },
                      { id: "flexCheckSize5", label: "XXL" },
                    ].map((size) => (
                      <li key={size.id} className="list-group-item">
                        <div className="row g-0">
                          <div className="form-check col">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={size.label}
                              name="size"
                              onChange={handleInputChange}
                              value={formData.size}
                              checked={formData.size.includes(size.label)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={size.id}
                            >
                              {size.label}
                            </label>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card mb-3">
                  <div
                    className="card-header fw-bold text-uppercase accordion-icon-button"
                    data-bs-toggle="collapse"
                    data-bs-target="#filterColor"
                    aria-expanded="true"
                    aria-controls="filterColor"
                  >
                    Color
                  </div>
                  <ul
                    className="list-group list-group-flush show"
                    id="filterColor"
                  >
                    {[
                      {
                        id: "flexCheckColor1",
                        label: "Blue",
                        bgClass: "bg-primary",
                      },
                      {
                        id: "flexCheckColor3",
                        label: "Green",
                        bgClass: "bg-success",
                      },
                      {
                        id: "flexCheckColor4",
                        label: "Red",
                        bgClass: "bg-danger",
                      },
                      {
                        id: "flexCheckColor5",
                        label: "Yellow",
                        bgClass: "bg-warning",
                      },
                    ].map((color) => (
                      <li key={color.id} className="list-group-item">
                        <div className="row g-0">
                          <div className="form-check col">
                            <input
                              className={`form-check-input ${color.bgClass}`}
                              type="checkbox"
                              id={color.label}
                              name="color"
                              onChange={handleInputChange}
                              value={formData.color}
                              checked={formData.color.includes(color.label)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={color.id}
                            >
                              {color.label}
                            </label>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="card mb-3">
              <div className="card-body fw-bold text-uppercase">
                Filter by{" "}
                {formData.price && (
                  <span className="badge bg-secondary ms-2">
                    {formData.price}
                    <button
                      type="button"
                      className="btn-close btn-close-white ms-1"
                      aria-label="Close"
                      onClick={() => setFormData({ ...formData, price: "" })}
                    />
                  </span>
                )}
                {formData.size.length > 0 && (
                  <span className="badge bg-secondary ms-2">
                    Size: {formData.size.join(", ")}
                    <button
                      type="button"
                      className="btn-close btn-close-white ms-1"
                      aria-label="Close"
                      onClick={() => setFormData({ ...formData, size: [] })}
                    />
                  </span>
                )}
                {formData.color.length > 0 && (
                  <span className="badge bg-secondary ms-2">
                    Color: {formData.color.join(", ")}
                    <button
                      type="button"
                      className="btn-close btn-close-white ms-1"
                      aria-label="Close"
                      onClick={() => setFormData({ ...formData, color: [] })}
                    />
                  </span>
                )}
                <button
                  type="reset"
                  className="btn btn-sm btn-light"
                  onClick={() =>
                    setFormData({ price: "", size: [], color: [] })
                  }
                >
                  <span aria-hidden="true">×</span> Clear All
                </button>
              </div>
            </div>

            <Services />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-7">
                {categoryData?.length > 0 && (
                  <span className="align-middle fw-bold">
                    {`${categoryData?.length} results for`}
                    <span className="text-warning">{`"${id}"`}</span>
                  </span>
                )}
              </div>
              <div className="col-5 d-flex justify-content-end">
                <select
                  className="form-select mw-180 float-start"
                  aria-label="Default select"
                  onChange={handleSortChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    select
                  </option>
                  <option value="lowToHigh">Price low to high</option>
                  <option value="highToLow">Price high to low</option>
                </select>
                <div className="btn-group ms-3" role="group">
                  <button
                    aria-label="Grid"
                    type="button"
                    onClick={() => handleViewChange("grid")}
                    className={`btn btn${
                      viewMode === "grid" ? "" : "-outline"
                    }-primary`}
                  >
                    <i className="bi bi-grid" />
                  </button>
                  <button
                    aria-label="List"
                    type="button"
                    onClick={() => handleViewChange("list")}
                    className={`btn btn${
                      viewMode === "list" ? "" : "-outline"
                    }-primary`}
                  >
                    <i className="bi bi-list" />
                  </button>
                </div>
              </div>
            </div>
            <hr />

            <CategoryDetail viewMode={viewMode} />
            <hr />
            {isEmpty(categoryData) && (
              <span className="d-flex justify-content-center">
                No items Found
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
