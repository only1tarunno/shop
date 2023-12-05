import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/shared/Loader";
import Container from "../../components/shared/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import cartimg from "../../assets/Safecheckout.png";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["singleproductsDetsils"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Container>
        <div className="text-sm breadcrumbs pt-10 pb-5">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={`/shop`}>Shop</Link>
            </li>
            <li>{product.title}</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-96">
            <div className="relative z-0">
              <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
              >
                <div>
                  <img src={product?.thumbnail_url} />
                </div>
                <div>
                  <img src={product?.image_url} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-3xl text-[#000] pb-1">
              {product?.title}
            </h2>
            <p className="font-bold text-2xl text-[#000]">$ {product?.price}</p>
            <p className="w-full md:max-w-lg text-[#555] py-8">
              {product?.description.slice(0, 200) + "..."}
            </p>
            {/* add to cart button  */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-7 h-full border flex items-center justify-center hover:text-[#f76b6a]"
                >
                  <AiOutlineMinus />
                </button>
                <p className="w-10 h-full border-t border-b flex items-center justify-center">
                  {quantity}
                </p>
                <button
                  onClick={() =>
                    quantity < product?.availability_count &&
                    setQuantity(quantity + 1)
                  }
                  className="w-7 h-full border flex items-center justify-center hover:text-[#f76b6a]"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div>
                <button className="uppercase bg-[#f76b6a] border-[#f76b6a] hover:bg-[#4c5161] hover:border-[#4c5161] text-white btn btn-sm w-full md:max-w-[224px] rounded-sm">
                  ADD TO CART
                </button>
              </div>
            </div>
            {/* meta data  */}
            <div className="my-5 space-y-3">
              <p className="font-normal text-sm">
                <span className="font-bold">SKU:</span> {product?.sku}
              </p>
              <p className="font-normal text-sm">
                <span className="font-bold">Availability:</span>{" "}
                {product?.availability_count == 0 ? "Stock Out" : "In Stock"}
              </p>
              <p className="font-normal text-sm">
                <span className="font-bold">Category:</span>{" "}
                {product?.categories}
              </p>
              <p className="font-normal text-sm">
                <span className="font-bold">Tags:</span>{" "}
                {product?.tags?.map((tag, index) => (
                  <span className="capitalize" key={index}>
                    {tag}
                    {index !== product?.tags.length - 1 && <span>, </span>}
                  </span>
                ))}
              </p>
              {/* cart img  */}
              <div className="w-full md:max-w-xl">
                <img src={cartimg} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* description  */}
        <div className="pt-4 pb-16">
          <h2 className="text-center md:text-center font-semibold text-2xl text-black pb-5">
            Description
          </h2>
          <p className="text-justify whitespace-pre-line">
            {product?.description}
          </p>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
