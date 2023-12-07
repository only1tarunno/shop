import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";

const PaymentHistory = () => {
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
                {/* {cart?.cartProducts?.length > 0 ? (
                  cart?.cartProducts?.map((product, index) => (
                    <CartTableRow
                      key={product._id}
                      productData={product}
                      serial={index}
                    ></CartTableRow>
                  ))
                ) : ( */}
                <tr className="text-center border-none">
                  <td colSpan={6}>
                    <h2 className="text-3xl text-[#f76b6a] font-bold pt-10 pb-2">
                      Your Cart is Empty
                    </h2>
                    <p className="text-lg">
                      Browse our latest collections and find what you need.
                    </p>
                  </td>
                </tr>
                {/* )} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
