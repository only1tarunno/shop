import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/shared/Loader";
import Container from "../../components/shared/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import cartimg from "../../assets/Safecheckout.png";
import Reviewcard from "./Reviewcard";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const ProductDetail = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const [quantity, setQuantity] = useState(1);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["singleproductsDetsils"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res.data;
    },
  });

  const reviews = product?.reviews || [];

  //   handle nan if their is no review of a product
  const totalReviews = reviews.length;
  const sumOfValues = reviews.reduce((sum, review) => {
    if (typeof review.value === "number" && !isNaN(review.value)) {
      return sum + review.value;
    } else {
      return sum;
    }
  }, 0);

  const avgReview = totalReviews > 0 ? sumOfValues / totalReviews : 0;

  // handle add to cart
  const handleAddToCart = (product) => {
    const { _id, price, ...item } = product;

    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        quantity,
        totalPrice: price * quantity,
        email: user.email,
        ...item,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.email) {
          Swal.fire({
            icon: "success",
            title: `${product.title} is added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refect cart  to update cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Login",
        text: "Please Login to purchase this item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
            <li>{product?.product?.title}</li>
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
                  <img src={product?.product?.thumbnail_url} />
                </div>
                <div>
                  <img src={product?.product?.image_url} />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-3xl text-[#000] pb-1">
              {product?.product?.title}
            </h2>
            <p className="font-bold text-2xl text-[#000]">
              $ {product?.product?.price}
            </p>
            {/* average review  */}
            <div className="flex items-center gap-2">
              <Rating style={{ maxWidth: 70 }} value={avgReview} readOnly />
              <span className="text-sm">({`${reviews.length} reviews`})</span>
            </div>
            {/* short description  */}
            <p className="w-full md:max-w-lg text-[#555] py-8">
              {product?.product?.description.slice(0, 200) + "..."}
            </p>
            {/* add to cart button  */}
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  className="w-7 md:h-full border flex items-center justify-center hover:text-[#f76b6a]"
                >
                  <AiOutlineMinus />
                </button>
                <p className="w-10 md:h-full border-t border-b flex items-center justify-center">
                  {quantity}
                </p>
                <button
                  onClick={() =>
                    quantity < product?.product?.availability_count &&
                    setQuantity(quantity + 1)
                  }
                  className="w-7 md:h-full border flex items-center justify-center hover:text-[#f76b6a]"
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart(product?.product)}
                  className="uppercase bg-[#f76b6a] border-[#f76b6a] hover:bg-[#4c5161] hover:border-[#4c5161] text-white btn btn-sm w-full md:max-w-[224px] rounded-sm"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            {/* meta data  */}
            <div className="my-5 space-y-3">
              <p className="font-normal text-sm">
                <span className="font-bold">SKU:</span> {product?.product?.sku}
              </p>
              <p className="font-normal text-sm">
                <span className="font-bold">Availability:</span>{" "}
                {product?.product?.availability_count == 0
                  ? "Stock Out"
                  : "In Stock"}
              </p>
              <p className="font-normal text-sm">
                <span className="font-bold">Category:</span>{" "}
                {product?.product?.categories}
              </p>
              {/* product tags  */}
              <p className="font-normal text-sm">
                <span className="font-bold">Tags:</span>{" "}
                {product?.product?.tags?.map((tag, index) => (
                  <span className="capitalize" key={index}>
                    {tag}
                    {index !== product?.product?.tags.length - 1 && (
                      <span>, </span>
                    )}
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
        {/* description */}

        <div className="pt-4 pb-8">
          <div className="text-center">
            <h2 className="text-center inline-block ps-2 font-semibold text-2xl text-black border-l-4 border-[#f76b6a] mb-5">
              Description
            </h2>
          </div>

          <p className="text-justify whitespace-pre-line">
            {product?.product?.description}
          </p>
        </div>
        {/* review  */}
        <div className=" pb-16">
          <div className="text-center">
            <h2 className="text-center inline-block ps-2 font-semibold text-2xl text-black border-l-4 border-[#f76b6a] mb-5">
              Reviews
            </h2>
          </div>
          <div>
            {reviews.length > 0 ? (
              <div>
                {reviews.map((review) => (
                  <Reviewcard key={review._id} review={review}></Reviewcard>
                ))}
              </div>
            ) : (
              <div className="text-center border py-16">
                <h2 className="text-[#f76b6a] font-bold pb-2">
                  No Reviews Yet
                </h2>
                <p className="font-semibold text-2xl">
                  Be the First to Share Your Thoughts!
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
