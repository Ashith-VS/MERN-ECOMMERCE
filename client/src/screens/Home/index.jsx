import Banner from "./Banner";
import Products from "./Products";
import Deals from "./Deals";
import Categories from "./Categories";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { GetProductData } from "../../redux/action/commonAction";

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GetProductData());
  }, []);

  return (
    <>
      <Banner/>
      <Products />
      <Deals />
      <Categories />
    </>
  );
};

export default Home;
