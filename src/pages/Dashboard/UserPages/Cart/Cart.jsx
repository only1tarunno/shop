import { useNavigate } from "react-router-dom";
import useCart from "../../../../hooks/useCart";
import CartTableRow from "./CartTableRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import Loader from "../../../../components/shared/Loader";

const Cart = () => {
  const [cart, , isLoading] = useCart();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handlePay = async () => {
    const res = await axiosSecure.get(`/cart/pay/quantitycheck`);
    console.log(res.data);
    if (res.data.sucess) {
      navigate("/dashboard/payment");
    } else {
      Swal.fire({
        icon: "error",
        title: res.data.message,
        text: `Sorry, the available stock for this product is limited to ${res.data.quantitymessage} units.`,
      });
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="py-16">
        <InnerSectiontitle
          title={"My Cart"}
          subtitle={"wanna add more"}
        ></InnerSectiontitle>
      </div>
      <div className="pt-10">
        <div className="flex justify-between pb-8">
          <h2 className="text-2xl">Total Items: {cart.totalQuantity}</h2>
          <h2 className="text-2xl">
            Total Price: $
            {cart?.cartProducts
              ?.reduce((sum, item) => sum + item.totalPrice, 0)
              .toFixed(2)}
          </h2>
          <div>
            {cart?.cartProducts?.length ? (
              <button
                onClick={handlePay}
                className="btn bg-[#f76b6a] border-[#f76b6a] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase"
              >
                Pay
              </button>
            ) : (
              <button
                disabled
                className="btn bg-[#f76b6a] border-[#f76b6a] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase"
              >
                Pay
              </button>
            )}
          </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead className="bg-gray-200 text-black text-base">
                <tr>
                  <th>Sl No.</th>
                  <th>Product Image</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart?.cartProducts?.length > 0 ? (
                  cart?.cartProducts?.map((product, index) => (
                    <CartTableRow
                      key={product._id}
                      productData={product}
                      serial={index}
                    ></CartTableRow>
                  ))
                ) : (
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
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
