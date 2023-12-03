import Banner from "./Banner";
import Category from "./Category";
import Deals from "./Deals";
import Featured from "./Featured";
import Shipping from "./Shipping";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Shipping></Shipping>
      <Category></Category>
      <Featured></Featured>
      <Deals></Deals>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
