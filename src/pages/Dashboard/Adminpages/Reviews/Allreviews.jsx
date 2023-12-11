import { useQuery } from "@tanstack/react-query";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loader from "../../../../components/shared/Loader";
import { Rating } from "@smastrom/react-rating";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const Allreviews = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: reviews = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["ProductReviewsForAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allReviews");
      return res.data;
    },
  });

  // delete product
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/allReviews/${id}`);
        refetch();
        if (res.data?.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Review has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="pt-16">
        <InnerSectiontitle
          title={"Manage Reviews"}
          subtitle={"Explore and manage all reviews in one place"}
        ></InnerSectiontitle>
      </div>
      <div className="overflow-x-auto py-16">
        <table className="table rounded overflow-hidden text-center">
          {/* head */}
          <thead className="bg-[#cccccc] text-black">
            <tr>
              <th>Product Image</th>
              <th>Title</th>
              <th>Email</th>
              <th>Review</th>
              <th>Star</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reviews?.map((user) => (
              <tr key={user?._id}>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.reviewProductImage} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.reviewtitle}</td>
                <td>{user?.email}</td>
                <td className="max-w-sm">
                  {user?.comment.length > 100
                    ? user.comment.slice(0, 100) + "..."
                    : user.comment}
                </td>
                <td>
                  {" "}
                  <Rating
                    style={{
                      maxWidth: 70,
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    value={user?.value}
                    readOnly
                  />
                </td>
                <td>
                  {new Date(user?.time).toLocaleString(undefined, {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour12: true, // Use 12-hour format
                  })}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="btn rounded btn-sm bg-[#f76b6a] text-white hover:text-black"
                  >
                    <FaRegTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Allreviews;
