import Advertisement from "./Advertisement";
import Signin from "./Signin";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
  const { productData } = useSelector((state) => state.commonReducer);
  const AvailableProduct = productData?.filter((item) => item.productCount !== 0);

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <div className="container-fluid bg-light mb-3">
      <div className="row g-3">
        <div className="col-md-10">
          <div className="row g-3">
            <Slider {...settings}>
              {AvailableProduct?.map((item) => {
                console.log('AvailableProduct: ', AvailableProduct);
                return (
                  <div className="col-md-3" key={item._id}>
                    <Link
                      className="text-decoration-none"
                      to={`/product/${item._id}`}
                    >
                      <div className="card text-center ">
                        <div className="card-body">
                          <img
                            src={item.productImage}
                            alt="slider"
                            width={80}
                            height={80}
                            fill="currentColor"
                            className="text-primary"
                            viewBox="0 0 16 16"
                            style={{
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                          <h6 className="card-title text-capitalize">
                            {item.productName}
                          </h6>
                          <div className="card-text text-success">
                            {" "}
                            Upto 20% off
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
          <Advertisement />
        </div>
        <Signin />
      </div>
    </div>
  );
};

export default Products;
