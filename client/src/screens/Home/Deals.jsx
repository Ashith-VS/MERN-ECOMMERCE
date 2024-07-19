import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Deals = () => {
  const { productData } = useSelector((state) => state.commonReducer);
  const AvailableProduct = productData?.filter((item) => item.productCount !== 0);
  // console.log('AvailableProduct: ', AvailableProduct);

  return (
    <div className="container-fluid bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title pb-3 border-bottom">
          Deals of the Day <i className="bi bi-stopwatch text-primary" />{" "}
          <div className="float-end">
            <Link to="/dealsofDay">
              <button className="btn  btn-outline-primary" type="button">
                View All
              </button>
            </Link>
          </div>
        </h5>
      </div>
      <div className="d-flex flex-wrap justify-content-start">
        {AvailableProduct?.slice(0, 8).map((item) => (
          <div className="col-md-3 "key={item.id} style={{ marginBottom: "20px" }}>
            <Link className="text-decoration-none" to={`/product/${item.id}`}>
              <div className="card text-center" style={{ height: "100%" }}>
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
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
