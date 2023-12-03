import Banner from "./Banner";
import Category from "./Category";
import Deals from "./Deals";
import Featured from "./Featured";
import Instagram from "./Instagram";
import Shipping from "./Shipping";
import Testimonial from "./Testimonial";
import TestimonialCard from "./TestimonialCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Shipping></Shipping>
      <Category></Category>
      <Featured></Featured>
      <Deals></Deals>
      <Testimonial></Testimonial>
      <TestimonialCard></TestimonialCard>
      <Instagram></Instagram>
    </div>
  );
};

export default Home;
