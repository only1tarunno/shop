import { useQuery } from "@tanstack/react-query";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/shared/Loader";
import OrdertableRow from "./OrdertableRow";

const Orders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["allOrders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <div className="pt-16">
        <InnerSectiontitle
          title={"Manage Orders"}
          subtitle={"Manage all orders in one place"}
        ></InnerSectiontitle>
      </div>
      <div className="overflow-x-auto py-16">
        <table className="table rounded overflow-hidden text-center">
          {/* head */}
          <thead className="bg-[#cccccc] text-black">
            <tr>
              <th>Sl No</th>
              <th>Email</th>
              <th>Order Date</th>
              <th>TxID</th>
              <th>Total Price</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((product, index) => (
              <OrdertableRow
                key={product?._id}
                product={product}
                index={index}
              ></OrdertableRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
