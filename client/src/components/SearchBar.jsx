import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetProductData } from "../redux/action/commonAction";

const SearchBar = () => {
  const { productData } = useSelector((state) => state.commonReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(GetProductData());
  // }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearchInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterProducts(e.target.value);
  };

  const filterProducts = (query) => {
    if (!query) {
      setSearchResults([]);
    } else {
      const filtered = productData.filter((item) =>
        item.productName.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (selectedItem) {
      navigate(`/product/${selectedItem.id}`);
    }
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSelectItem = async (item) => {
    setSelectedItem(item);
    setSearchQuery(item.productName);
    setSearchResults([]);
    await navigate(`/product/${item.id}`);
  };

  const handleCancelSearch = () => {
    // const newQuery = searchQuery.slice(0, -1); // Remove the last character
    // setSearchQuery(newQuery);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="col-md-5">
      <form className="search" onSubmit={handleSearchSubmit} autoComplete="off">
        <div className="input-group">
          <input
            id="search"
            name="search"
            type="text"
            className="form-control"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            required=""
          />
          <label className="visually-hidden" htmlFor="search" />
          {searchQuery && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleCancelSearch}
              aria-label="Clear search"
            >
              <i className="bi bi-x" />
            </button>
          )}
          <button
            className="btn btn-primary text-white"
            type="submit"
            aria-label="Search"
          >
            <i className="bi bi-search" />
          </button>
        </div>
        {searchResults && (
          <ul
            style={{
              listStyleType: "none",
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {searchResults?.map((item) => {
              return (
                <li
                  key={item.id}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    borderTop: "1px solid grey",
                    borderBottom: "1px solid grey",
                    scrollBehavior: "smooth",
                  }}
                  onClick={() => handleSelectItem(item)}
                >
                  {item.productName}
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
