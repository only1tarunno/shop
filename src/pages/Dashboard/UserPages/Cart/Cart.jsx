import useCart from "../../../../hooks/useCart";
import CartTableRow from "./CartTableRow";

const Cart = () => {
  const [cart] = useCart();

  // console.log(cart.cartProducts);
  return (
    <div>
      <h1>gg</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table text-center">
            <thead>
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
  );
};

export default Cart;
