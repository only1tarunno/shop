/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Reviewcard = ({ review }) => {
  const { name, value, comment, time } = review || {};
  return (
    <div className="space-y-3 pb-8">
      <div className="lowercase ps-1 pr-3  py-1 rounded-full flex items-center">
        <p className="bg-gray-500 w-8 h-8 flex items-center justify-center rounded-[50%] mr-2 text-white uppercase">
          {name.slice(0, 1)}
        </p>
        {name}
      </div>
      <div className="flex items-center gap-2">
        <Rating style={{ maxWidth: 70 }} value={value} readOnly />
        <span className="text-xs">
          {new Date(time).toLocaleString(undefined, {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour12: true, // Use 12-hour format
          })}
        </span>
      </div>
      <p className="text-sm text-[#555]">{comment}</p>
    </div>
  );
};

export default Reviewcard;
