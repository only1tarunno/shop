import { useQuery } from "@tanstack/react-query";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["paymentsHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  console.log(payments);
  return (
    <div>
      <div className="py-16">
        <InnerSectiontitle
          subtitle="Tracing Financial Footprints: Unveiling the Payment Saga"
          title="Payment History"
        ></InnerSectiontitle>
      </div>
      <div className="pt-10">
        <div className="flex justify-between pb-8">
          <h2 className="text-2xl">Total Items: 0</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead className="bg-gray-200 text-black text-base">
                <tr>
                  <th>Sl No.</th>
                  <th>Txn Id</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments?.length > 0 ? (
                  <>
                    {payments.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.transactionId}</td>
                        <td>{item.productQuantity}</td>
                        <td>$ {item.price}</td>
                        <td> {item.status}</td>
                        <td>
                          {new Date(item.date).toLocaleString(undefined, {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true, // Use 12-hour format
                          })}
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <tr className="text-center border-none">
                    <td colSpan={6}>
                      <h2 className="text-3xl text-[#f76b6a] font-bold pt-10 pb-2">
                        No Transactions Found
                      </h2>
                      <p className="text-lg">
                        Browse our latest collections and find what you need.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
