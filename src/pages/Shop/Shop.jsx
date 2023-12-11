import { useEffect, useRef, useState } from "react";
import Container from "../../components/shared/Container";
import InnerPageBanner from "../../components/shared/InnerPageBanner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-web";
import Loader from "../../components/shared/Loader";
import FeaturedImage from "../../components/shared/FeaturedImage";
import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import useUser from "../../hooks/useUser";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [tags, setTags] = useState("");
  const [filterCategory, setfilterCategory] = useState("");
  const [asc, setAsc] = useState("");
  const [lottieload, setLootieLoad] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [categories, categoriesLoader] = useCategories();
  const [isUser, isUserLoading] = useUser();

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/products?search=${search}&tags=${tags}&category=${filterCategory}&sort=${asc}`
      );
      return res.data;
    },
  });

  const handlesearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    const searchtext = e.target.search.value;
    setTags("");
    setfilterCategory("");
    setAsc("");
    setSearch(searchtext);
  };
  // tag filter
  const handleTags = (e) => {
    setIsSearching(true);
    setSearch("");
    setfilterCategory("");
    setAsc("");
    setTags(e.target.value);
  };
  // category filter
  const handleCategory = (e) => {
    setIsSearching(true);
    setSearch("");
    setTags("");
    setAsc("");
    setfilterCategory(e.target.value);
  };
  //   price filter
  const handlePrice = (e) => {
    setIsSearching(true);
    setSearch("");
    setTags("");
    setfilterCategory("");
    setAsc(e.target.value);
  };

  useEffect(() => {
    setIsSearching(true);
    setLootieLoad(true);
    refetch().then(() => {
      setIsSearching(false);
      setLootieLoad(false);
    });
  }, [search, tags, filterCategory, asc, refetch]);

  // for lottie animation
  const animation = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/no-data.json",
    });
  }, [lottieload]);

  if (isLoading || categoriesLoader || isUserLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <InnerPageBanner title="shop" subTitle="shop"></InnerPageBanner>
      <Container>
        <div>
          <div className="flex items-center justify-between flex-col lg:flex-row mt-10 gap-5">
            {/* tags filter  */}
            <div className="w-full md:max-w-xs">
              <select
                value={tags}
                onChange={handleTags}
                className="select select-bordered capitalize w-full md:max-w-xs focus:outline-none"
              >
                <option value={""}>Filter By Tags</option>
                <option value={"Bag"}>Bag</option>
                <option value={"black"}>Black</option>
                <option value={"jacket"}>Jacket</option>
                <option value={"men"}>Men</option>
                <option value={"green"}>Green</option>
              </select>
            </div>
            {/* category filter  */}
            <div className="w-full md:max-w-xs">
              <select
                value={filterCategory}
                onChange={handleCategory}
                className="select select-bordered Uppercase w-full md:max-w-xs focus:outline-none capitalize"
              >
                <option value={""}>Filter By Category</option>
                {categories?.map((item) => (
                  <option key={item?._id}>{item?.category}</option>
                ))}
              </select>
            </div>
            {/* price filter  */}
            <div className="w-full md:max-w-xs">
              <select
                value={asc}
                onChange={handlePrice}
                className="select select-bordered Uppercase w-full md:max-w-xs focus:outline-none"
              >
                <option value={""}>Sort by price</option>
                <option value={"asc"}>Low to high</option>
                <option value={"desc"}>High to low</option>
              </select>
            </div>
            {/* search  */}
            <form
              onSubmit={handlesearch}
              className="w-full md:max-w-xs flex justify-center"
            >
              <div className="join w-full md:max-w-xs justify-center">
                <div className="w-full">
                  <input
                    name="search"
                    className="input input-bordered w-full join-item focus:outline-none"
                    placeholder="Search"
                  />
                </div>
                <div className="indicator">
                  <button className="btn join-item hover:bg-[#f76b6a] hover:border-[#f76b6a] hover:text-white">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* all products  */}
          <div>
            {isSearching ? (
              <Loader></Loader>
            ) : (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 my-10">
                {products?.length > 0 ? (
                  products.map((product, index) => (
                    <div key={`${product._id}_${index}`}>
                      <Link to={`/product/${product._id}`}>
                        <FeaturedImage
                          img1={product?.thumbnail_url}
                          img2={product?.image_url}
                        ></FeaturedImage>
                        <div className="text-[#333] pt-2">
                          <h4>{product?.title}</h4>
                          <p>
                            ${" "}
                            {isUser.role === "reseller" ? (
                              <>
                                <s>{product?.price}.00</s>{" "}
                                {product?.reseller_price}
                              </>
                            ) : (
                              product?.price
                            )}
                            .00
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="pb-14  lg:col-span-4">
                    {!lottieload && (
                      <>
                        <div className="w-80 mx-auto" ref={animation}></div>
                        <h2 className="text-center font-bold text-4xl">
                          No Service Found
                        </h2>
                        <p className="text-xl md:text-2xl font-medium text-center">
                          Whoops...This information in not available for this
                          moment
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
