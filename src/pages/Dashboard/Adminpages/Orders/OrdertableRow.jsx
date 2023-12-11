import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const OrdertableRow = ({ index, product }) => {
  const {
    _id,
    email,
    date,
    transactionId,
    price,
    status: prevStatus,
  } = product || {};

  const [productstatus, setProductStatus] = useState(prevStatus);
  const axiosSecure = useAxiosSecure();

  const handleStatus = (e) => {
    const status = e.target.value;
    setProductStatus(status);
    const data = { status };
    axiosSecure.patch(`/orders/${_id}`, data).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          icon: "success",
          title: `Order has been ${status}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>
        {new Date(date).toLocaleString(undefined, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour12: true, // Use 12-hour format
        })}
      </td>
      <td>{transactionId}</td>
      <td>{price}</td>
      <td>
        {" "}
        <select
          value={productstatus}
          onChange={handleStatus}
          className="border-none"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
    </tr>
  );
};

export default OrdertableRow;
