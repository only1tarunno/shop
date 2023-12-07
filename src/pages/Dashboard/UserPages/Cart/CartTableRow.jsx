import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useProducts from "../../../../hooks/useProducts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";

/* eslint-disable react/prop-types */
const CartTableRow = ({ productData, serial }) => {
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const {
    _id,
    menuId,
    thumbnail_url,
    title,
    totalPrice: cartPrice,
    quantity: cartQuantity,
  } = productData || {};
  const [product] = useProducts(menuId);
  const [finalquantity, setFinalQuantity] = useState(cartQuantity);

  //   add product
  const handleIncrement = async () => {
    if (finalquantity < product?.product?.availability_count) {
      setFinalQuantity(finalquantity + 1);
      const newQuantity = finalquantity + 1;
      //   send data to server
      const cartItem = {
        totalPrice: parseFloat(
          (product?.product?.price * newQuantity).toFixed(2)
        ),
        quantity: newQuantity,
      };
      axiosSecure
        .patch(`/carts/${_id}`, cartItem)
        .then(() => {
          refetch();
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        icon: "error",
        title: "Stock Limit Exceeded",
        text: `Sorry, the available stock for this product is limited to ${product?.product?.availability_count} units. You've reached the maximum quantity allowed.`,
      });
    }
  };

  // minus a product
  const handleDecrement = () => {
    if (finalquantity > 1) {
      setFinalQuantity(finalquantity - 1);
      const newQuantity = finalquantity - 1;

      //   send data to server
      const cartItem = {
        totalPrice: parseFloat(
          (product?.product?.price * newQuantity).toFixed(2)
        ),
        quantity: newQuantity,
      };
      axiosSecure
        .patch(`/carts/${_id}`, cartItem)
        .then(() => {
          refetch();
        })
        .catch((err) => console.log(err));
    } else {
      Swal.fire({
        icon: "error",
        title: "Minimum Quantity Reached",
        text: `Sorry, you've reached the minimum quantity allowed for this product.`,
      });
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: `${title} has been deleted successfully`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <tr>
      <td>{serial + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={thumbnail_url} className="mx-auto" alt={title} />
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>
        <div className="flex items-stretch justify-center">
          <button
            onClick={handleDecrement}
            className="w-7 border flex items-center justify-center hover:text-[#f76b6a]"
          >
            <AiOutlineMinus />
          </button>
          <p className="w-10 border-t border-b flex items-center justify-center">
            {finalquantity}
          </p>
          <button
            onClick={handleIncrement}
            className="w-7 border flex items-center justify-center hover:text-[#f76b6a]"
          >
            <AiOutlinePlus />
          </button>
        </div>
      </td>
      <td>$ {cartPrice}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default CartTableRow;
