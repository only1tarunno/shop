import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSingleCartProduct = (id) => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { refetch: singlecartRefect, data: singleCart = {} } = useQuery({
    queryKey: ["singlecartProduct", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/singlecart/${id}`);
      return res.data;
    },
  });

  return [singleCart, singlecartRefect];
};

export default useSingleCartProduct;
