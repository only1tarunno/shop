/* eslint-disable react/prop-types */
import { useState } from "react";

const FeaturedImage = ({ img1, img2 }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };
  return (
    <div className="relative overflow-hidden w-full">
      <img
        src={hovered ? img2 : img1}
        alt="Product"
        className={`transition-transform duration-1000 ${
          hovered ? "scale-110" : "scale-100"
        } cursor-pointer`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default FeaturedImage;
