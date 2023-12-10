import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/shared/Loader";

/* eslint-disable react/prop-types */
const RatingproductCard = ({ product }) => {
  const { _id, thumbnail_url, title } = product || {};
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [rating, setRating] = useState(4);
  const {
    data: reviewData = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["getReviewDatafrom", _id],
    enabled: !!_id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/review/${_id}`);
      return res.data;
    },
  });
  // console.log(product);

  const handleRatings = async (e) => {
    e.preventDefault();

    const review = {
      reviewtitle: title,
      reviewProductImage: thumbnail_url,
      name: user.displayName,
      product_id: _id,
      value: rating,
      email: user.email,
      comment: e.target.feedback.value,
      time: new Date(),
    };

    const res = await axiosSecure.post("/review", review);
    refetch();
    if (res.data.email) {
      Swal.fire({
        icon: "success",
        title: "Thank you for your feedback",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="card lg:card-side bg-base-100  shadow-xl">
        <img
          src={thumbnail_url}
          className="w-full h-full lg:w-[235px] object-cover"
          alt={title}
        />
        <div className="card-body justify-center">
          <h2 className="card-title">{title}</h2>

          {reviewData.success ? (
            <div>
              <p className="italic">Your review:</p>
              <p>{reviewData.foundReview.comment}</p>

              <Rating
                style={{ maxWidth: 120 }}
                value={reviewData.foundReview.value}
                readOnly
              />
            </div>
          ) : (
            <form onSubmit={handleRatings}>
              <Rating
                style={{ maxWidth: 180 }}
                value={rating}
                onChange={setRating}
                isRequired
              />
              <textarea
                placeholder="Message"
                required
                name="feedback"
                className="border border-[#999] rounded p-2 w-full my-5"
                id=""
                rows="4"
              ></textarea>
              <button className="btn bg-[#f76b6a] border-[#f76b6a] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase">
                Rate
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default RatingproductCard;
