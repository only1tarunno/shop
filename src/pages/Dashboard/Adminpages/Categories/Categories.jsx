import Swal from "sweetalert2";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import Loader from "../../../../components/shared/Loader";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCategories from "../../../../hooks/useCategories";
import AddCategory from "./AddCategory";
import CategoryTable from "./CategoryTable";

const Categories = () => {
  const [categories, categoriesLoader, catFetch] = useCategories();
  const axiosSecure = useAxiosSecure();

  const handleAddcategory = async (e) => {
    e.preventDefault();
    const categoryInfo = {
      category: e.target.name.value,
      catImage: e.target.photo.value || "null",
    };

    const res = await axiosSecure.post(`/categories`, categoryInfo);
    if (res.data._id) {
      Swal.fire({
        icon: "success",
        title: "Category has been added",
        showConfirmButton: false,
        timer: 1500,
      });
      catFetch();
      e.target.reset();
    }
  };

  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/categories/${id}`);
    if (res.data.deletedCount) {
      Swal.fire({
        icon: "success",
        title: "Category has been delete",
        showConfirmButton: false,
        timer: 1500,
      });
      catFetch();
    }
  };

  if (categoriesLoader) {
    return <Loader></Loader>;
  }
  return (
    <>
      <div className="pt-8 pb-8 lg:pt-16 lg:pb-16">
        <InnerSectiontitle
          title={"Manage Categories"}
          subtitle={"All categories at a glance"}
        ></InnerSectiontitle>
      </div>
      <div className="flex justify-between gap-5 flex-col lg:flex-row">
        <div className="w-full lg:w-[48%] order-1 lg:order-2">
          <h2 className="text-center font-bold text-2xl">All Categories</h2>
          <CategoryTable
            categories={categories}
            handleDelete={handleDelete}
          ></CategoryTable>
        </div>
        <div className="w-full lg:w-[48%] order-2 lg:order-1">
          <h2 className="text-center font-bold text-2xl">Add Category</h2>
          <AddCategory handleAddcategory={handleAddcategory}></AddCategory>
        </div>
      </div>
    </>
  );
};

export default Categories;
