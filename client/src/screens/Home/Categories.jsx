import img1 from "../../assets/images/category/image-mens-512x512 (2).jpg";
import img2 from "../../assets/images/category/image-woman-512x512 (3).jpg";
import img3 from "../../assets/images/category/image-jewellery-512x512.jpg";
import img4 from "../../assets/images/category/image-electronics-512x512 (1).jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    { name: "Jewelery", imgSrc: img3 },
    { name: "Electronics", imgSrc: img4 },
    { name: "Mensclothing", imgSrc: img1 },
    { name: "WomensClothing", imgSrc: img2 },
  ];

  return (
    <>
      <div className="bg-info bg-gradient p-3 text-center mb-3">
        <h4 className="m-0">Explore Fashion Collection</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex ">
            {categories.map((category, index) => (
              <Link
                key={index}
                className="text-decoration-none "
                to={`/category/${category.name}`}
              >
                <img
                  src={category.imgSrc}
                  className="img-fluid rounded-circle"
                  alt={category.name}
                />
                <div className="text-center h6">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
