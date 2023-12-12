import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isUser = {},
    isPending: isUserLoading,
    refetch: isUserRefetch,
  } = useQuery({
    queryKey: ["SingleUser", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  return [isUser, isUserLoading, isUserRefetch];
};

export default useUser;
