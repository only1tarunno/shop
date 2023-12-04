/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import img from "../../assets/innerBg.webp";

const InnerPageBanner = ({ subTitle, title }) => {
  return (
    <div
      className="error-banner min-h-[200px] flex  justify-center items-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(${img})`,
      }}
    >
      <div className=" z-30 text-center space-y-2">
        <h2 className="font-bold text-3xl max-w-3xl capitalize text-white ">
          {title}
        </h2>
        <p className="text-white font-medium ">
          <Link to="/">Home</Link> | {subTitle}
        </p>
      </div>
    </div>
  );
};

export default InnerPageBanner;
