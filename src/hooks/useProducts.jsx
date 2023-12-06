import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = (id) => {
  const axiosPublic = useAxiosPublic();
  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["singleproductsDetsils", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data;
    },
  });

  return [product, isLoading];
};

export default useProducts;
