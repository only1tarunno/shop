import { useQuery } from "@tanstack/react-query";
import { TiShoppingCart } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import Loader from "../../../components/shared/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";

const ResellerDashboard = () => {
  const [isUser, isUserLoading] = useUser();
  const axiosSecure = useAxiosSecure();

  // chart data fetch
  const { data: userActivities = {}, isLoading: userActivityLoading } =
    useQuery({
      queryKey: ["userActivities", isUser?.email],
      enabled: !!isUser?.email,
      queryFn: async () => {
        const res = await axiosSecure.get(`/userActivities/${isUser?.email}`);
        return res.data;
      },
    });

  if (isUserLoading || userActivityLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="text-center py-10 lg:py-16">
        <h2 className="text-4xl font-bold pb-2 capitalize">
          Welcome Back {isUser?.name}
        </h2>
        <p className="text-xl ">You are reseller now</p>
      </div>

      {/* img and order stats  */}
      <div className="py-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gray-100 py-10">
          <img
            src={isUser?.image}
            className="w-48 h-48 object-cover rounded-[50%] mx-auto"
            alt=""
          />
          <h2 className="text-center font-bold capitalize pt-3 text-2xl">
            {isUser?.name}
          </h2>
        </div>
        <div className="w-full md:w-1/2 bg-[#FEF9C3] py-10 border-transparent border-l-2 md:border-red-400 ps-0 md:ps-20 text-center md:text-start">
          <div className="flex flex-col justify-center items-center md:items-start h-full">
            <h2 className="capitalize text-4xl">Your Activities</h2>
            <div className="pt-5 space-y-3">
              <h3 className="flex gap-2 items-center text-2xl text-[#0088FE]">
                <TiShoppingCart></TiShoppingCart>{" "}
                <span>Orders: {userActivities?.productQuantity}</span>
              </h3>
              <h3 className="flex gap-2 items-center text-2xl text-[#00C4A1]">
                <FaStar /> <span>Reviews: {userActivities?.reviews}</span>
              </h3>
              <h3 className="flex gap-2 items-center text-2xl text-[#FF8042]">
                <MdOutlinePayments />{" "}
                <span>Payment: {userActivities?.payment}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerDashboard;
