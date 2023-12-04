import { useQuery } from "@tanstack/react-query";

import Container from "../../components/shared/Container";
import FeaturedImage from "../../components/shared/FeaturedImage";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loader from "../../components/shared/Loader";
import Button from "../../components/shared/Button";
import { Link } from "react-router-dom";

const Featured = () => {
  const axiosPublic = useAxiosPublic();
  const { data: featureProducts = [], status } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });

  if (status === "pending") {
    return <Loader></Loader>;
  }
  return (
    <Container>
      <div className="pt-20 pb-16">
        <h3 className="text-sm font-bold text-[#999999] text-center">
          TOP SALE ON THIS WEEK
        </h3>
        <h2 className="text-4xl font-bold text-[#333] text-center">
          Features Products
        </h2>
      </div>
      <div className="pb-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5">
          {featureProducts?.slice(0, 8)?.map((product) => (
            <div key={product?._id}>
              <FeaturedImage
                img1={product?.thumbnail_url}
                img2={product?.image_url}
              ></FeaturedImage>
              <div className="text-[#333] pt-2">
                <h4>{product?.title}</h4>
                <p>$ {product?.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-10">
          <Link to="/shop">
            <Button text={"View More"}></Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
