import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/shared/Loader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUser from "../../../../hooks/useUser";
import { Chart } from "react-google-charts";

const AdminDashboard = () => {
  const [isUser, isUserLoading] = useUser();
  const axiosSecure = useAxiosSecure();
  const { data: stats = [], isLoading } = useQuery({
    queryKey: ["orderStatistics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const pieOptions = {
    title: "Product Sales Distribution - Pie Chart",
    is3D: true,
  };

  const barOptions = {
    chart: {
      title: "Product Sales Distribution - Bar Chart",
      subtitle: "Percentage Contribution of Products in Sales Insights",
    },
  };

  if (isUserLoading || isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      {" "}
      <div className="text-center py-10 lg:py-16">
        <h2 className="text-4xl font-bold pb-2 capitalize">
          Welcome Back {isUser?.name}
        </h2>
      </div>
      <div></div>
      <div className="flex justify-between flex-col lg:flex-row pb-10">
        <div className="w-full lg:w-[48%]">
          <Chart
            chartType="PieChart"
            data={stats}
            options={pieOptions}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="w-full lg:w-[48%]">
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={stats}
            options={barOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
