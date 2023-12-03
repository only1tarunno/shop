import img1 from "../../assets/p1.webp";
import img2 from "../../assets/p1v2.webp";
import Container from "../../components/shared/Container";
import FeaturedImage from "../../components/shared/FeaturedImage";

const Featured = () => {
  return (
    <Container>
      <div className="pt-16 pb-10">
        <h3 className="text-sm font-bold text-[#999999] text-center">
          TOP SALE ON THIS WEEK
        </h3>
        <h2 className="text-4xl font-bold text-[#333] text-center">
          Features Products
        </h2>
      </div>
      <div className="pb-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
          <div>
            <FeaturedImage img1={img1} img2={img2}></FeaturedImage>
            <div className="text-[#333] pt-2">
              <h4>Gray T-Shirt</h4>
              <p>$ 14.00</p>
            </div>
          </div>
          <div>
            <FeaturedImage img1={img1} img2={img2}></FeaturedImage>
            <div className="text-[#333] pt-2">
              <h4>Gray T-Shirt</h4>
              <p>$ 14.00</p>
            </div>
          </div>
          <div>
            <FeaturedImage img1={img1} img2={img2}></FeaturedImage>
            <div className="text-[#333] pt-2">
              <h4>Gray T-Shirt</h4>
              <p>$ 14.00</p>
            </div>
          </div>
          <div>
            <FeaturedImage img1={img1} img2={img2}></FeaturedImage>
            <div className="text-[#333] pt-2">
              <h4>Gray T-Shirt</h4>
              <p>$ 14.00</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
