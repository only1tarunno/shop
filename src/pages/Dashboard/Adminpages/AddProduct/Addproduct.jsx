import { useForm } from "react-hook-form";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import Select from "react-select";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import useCategories from "../../../../hooks/useCategories";
import Loader from "../../../../components/shared/Loader";

const options = [
  { value: "Bag", label: "Bag" },
  { value: "black", label: "black" },
  { value: "jacket", label: "jacket" },
  { value: "men", label: "men" },
  { value: "green", label: "green" },
];

const Addproduct = () => {
  const {
    register,
    handleSubmit,
    reset,
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
      tags: selectedOption?.map(({ value }) => value),
      description: data?.description,
      price: data?.price,
      reseller_price: data?.reseller_price,
      sku: data?.sku,
      availability_count: data?.qunatity,
    };

    await axiosSecure.post("/admin/allProducts", productInfo);
    Swal.fire({
      icon: "success",
      title: "Product has been Added",
      showConfirmButton: false,
      timer: 1500,
    });
    reset();
  };

  if (categoriesLoader) {
    return <Loader></Loader>;
  }

  return (
    <>
      {" "}
      <div className="py-16">
        <InnerSectiontitle
          title={"Add A Product"}
          subtitle={"Fill the form to add products"}
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
                defaultValue={"T-Shirts"}
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
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti
                required
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
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
