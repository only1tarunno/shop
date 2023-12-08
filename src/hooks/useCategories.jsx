import useAxiosPublic from "./useAxiosPublic";

import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: categories = [],
    isLoading: categoriesLoader,
    refetch: catFetch,
  } = useQuery({
    queryKey: ["categoriesForAllProductPage"],
    queryFn: async () => {
      const res = await axiosPublic.get("/categories");
      return res.data;
    },
  });
  return [categories, categoriesLoader, catFetch];
};

export default useCategories;
