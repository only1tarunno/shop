import { useForm } from "react-hook-form";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import Select from "react-select";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCategories from "../../../../hooks/useCategories";
import Loader from "../../../../components/shared/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useState } from "react";

const options = [
  { value: "Bag", label: "Bag" },
  { value: "black", label: "black" },
  { value: "jacket", label: "jacket" },
  { value: "men", label: "men" },
  { value: "green", label: "green" },
];

const UpdateProduct = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: singleProduct = {}, isLoading } = useQuery({
    queryKey: ["updateProduct", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${id}`);
      return res?.data?.product;
    },
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const [categories, categoriesLoader] = useCategories();
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = async (data) => {
    const productInfo = {
      title: data?.title,
      image_url: data?.image,
      thumbnail_url: data?.thumbnail,
      categories: data?.category,
      tags: selectedOption?.map(({ value }) => value) || singleProduct?.tags,
      description: data?.description,
      price: data?.price,
      reseller_price: data?.reseller_price,
      sku: data?.sku,
      availability_count: data?.qunatity,
    };
    await axiosSecure.patch(`/admin/allProducts/${id}`, productInfo);
    Swal.fire({
      icon: "success",
      title: "Product has been Updated",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(-1);
  };

  if (categoriesLoader || isLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      {" "}
      <div className="py-16">
        <InnerSectiontitle
          title={"Update prtoduct"}
          subtitle={"Fill the form to update product"}
        ></InnerSectiontitle>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 w-full lg:w-2/3 mx-auto"
        >
          <div>
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              defaultValue={singleProduct?.title}
              className="input input-bordered w-full ps-5 h-10 rounded-[3px] focus:outline-none"
              required
              {...register("title")}
            />
          </div>
          <div className="flex items-center flex-col md:flex-row justify-between w-full">
            <div className="form-control w-full md:w-[49%]">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="url"
                placeholder="https://i.ibb.co/CBwpdWy/people-3.png"
                required
                defaultValue={singleProduct?.image_url}
                {...register("image")}
                className="input input-bordered w-full ps-5 h-10 rounded-[3px] focus:outline-none"
              />
            </div>
            <div className="form-control w-full md:w-[49%]">
              <label className="label">
                <span className="label-text">Thumbnail Image URL</span>
              </label>
              <input
                type="url"
                defaultValue={singleProduct?.thumbnail_url}
                placeholder="https://i.ibb.co/CBwpdWy/people-3.png"
                required
                {...register("thumbnail")}
                className="input input-bordered w-full ps-5 h-10 rounded-[3px] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-[49%]">
              <label className="label">
                <span className="label-text">Categories</span>
                {errors.publisher && (
                  <span className="text-red-600">Select a Categories</span>
                )}
              </label>
              <select
                className="input input-bordered w-full uppercase ps-5 h-10 rounded-[3px] focus:outline-none"
                required
                defaultValue={singleProduct?.categories}
                {...register("category", { required: true })}
              >
                {categories?.map((category) => (
                  <option key={category._id} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full md:w-[49%]">
              <label className="label">
                <span className="label-text">Tags</span>
              </label>
              <Select
                onChange={setSelectedOption}
                options={options}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row justify-between w-full">
            <div className="form-control w-full md:w-[24%]">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                defaultValue={singleProduct?.price}
                placeholder="$200"
                required
                {...register("price")}
                className="input input-bordered w-full ps-5 h-10 rounded-[3px] focus:outline-none"
              />
            </div>
            <div className="form-control w-full md:w-[24%]">
              <label className="label">
                <span className="label-text">Reseller Price</span>
              </label>
              <input
                type="number"
                defaultValue={singleProduct?.reseller_price}
                placeholder="$150"
                required
                {...register("reseller_price")}
                className="input input-bordered w-full ps-5 h-10 rounded-[3px] focus:outline-none"
              />
            </div>
            <div className="form-control w-full md:w-[24%]">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="50"
                defaultValue={singleProduct?.availability_count}
                required
                {...register("qunatity")}
                className="input input-bordered w-full ps-5 h-10 rounded-[3px] focus:outline-none"
              />
            </div>
            <div className="form-control w-full md:w-[24%]">
              <label className="label">
                <span className="label-text">SKU</span>
              </label>
              <input
                type="text"
                defaultValue={singleProduct?.sku}
                placeholder="sku012456"
                required
                {...register("sku")}
                className="input input-bordered w-full ps-5 h-10 rounded-[3px] focus:outline-none"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              defaultValue={singleProduct?.description}
              className="textarea textarea-bordered h-24 rounded-[3px] focus:outline-none"
              placeholder="Description"
              required
              {...register("description")}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#f76b6a] border-[#f76b6a] rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium"
          >
            Update Product
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
