import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import Loader from "../../../../components/shared/Loader";

import RatingproductCard from "./ratingproductCard";

const StarRating = () => {
  const axiosSecure = useAxiosSecure();
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["starratingproducts"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/purchsedItem`);
      return res.data.products;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="py-16">
        <InnerSectiontitle
          title={"Rate & Review"}
          subtitle={"Empower Us with Your Valuable Ratings and Reviews"}
        ></InnerSectiontitle>
      </div>
      <div>
        {products?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {products?.map((product, index) => (
              <RatingproductCard
                key={index}
                product={product}
              ></RatingproductCard>
            ))}
          </div>
        ) : (
          <div className="text-center border py-16">
            <h2 className="text-[#f76b6a] font-bold text-2xl pb-2">
              You don&lsquo;t purchase any product
            </h2>
            <p className="">
              Start shopping now to experience our wide range of offerings
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StarRating;
