/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryCard = ({ img, title }) => {
  return (
    <Link to="/shop">
      <div className="relative">
        <img
          src={img}
          className="transition-transform duration-300 hover:-translate-y-2 rounded w-full object-cover cursor-pointer"
          alt={title}
        />
        <div className="absolute bottom-3 left-5">
          <h3 className="font-bold text-xl text-[#333]">{title}</h3>
          <Link to="/shop">
            <p className="text-[#999999]">View all</p>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
