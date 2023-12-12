import Swal from "sweetalert2";
import Loader from "../../../../components/shared/Loader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUser from "../../../../hooks/useUser";
import Chart from "react-google-charts";
import { useQuery } from "@tanstack/react-query";

const UserDashboard = () => {
  const [isUser, isUserLoading, isUserRefetch] = useUser();
  const axiosSecure = useAxiosSecure();

  // chart data fetch
  const { data: userActivities = [], isLoading: userActivityLoading } =
    useQuery({
      queryKey: ["userActivities", isUser?.email],
      enabled: isUser?.email,
      queryFn: async () => {
        const res = await axiosSecure.get(`/userActivities//${isUser?.email}`);
        return res.data;
      },
    });

  const handleApply = async (email) => {
    const updateinfo = {
      role: "resellerRequest",
    };
    const res = await axiosSecure.patch(`/users/${email}`, updateinfo);
    if (res.data.modifiedCount) {
      Swal.fire({
        title: "Pending",
        text: "Request has been send.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      isUserRefetch();
    }
  };

  // chart related options
  const pieOptions = {
    title: "Pie Chart Depicting Publisher Contribution in Articles",
  };

  if (isUserLoading || userActivityLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="text-center py-10 lg:py-16">
        <h2 className="text-4xl font-bold pb-2 capitalize">
          Welcome {isUser?.name}
        </h2>
        <p className="text-xl ">
          You can apply for Reseller and get discount price in every product.
        </p>
      </div>
      <div className="border w-full lg:w-1/2 mx-auto py-10 rounded text-center font-bold text-2xl space-y-3">
        <h2>Wanna Become Reseller!</h2>
        {isUser?.role === "user" ? (
          <button
            onClick={() => handleApply(isUser?.email)}
            className="btn bg-[#f76b6a] border-[#f76b6a] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase"
          >
            Apply Now
          </button>
        ) : (
          <button
            disabled
            className="btn bg-[#f76b6a]  border-[#f76b6a] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase"
          >
            Applied
          </button>
        )}
      </div>
      <div className="py-10">
        <Chart
          chartType="PieChart"
          data={userActivities}
          options={pieOptions}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
