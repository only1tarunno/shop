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
    const publisherInfo = {
      category: e.target.value.name,
      catImage: e.target.value.photo,
    };

    const res = await axiosSecure.post(`/publisher`, publisherInfo);
    console.log(res);
    if (res.data._id) {
      Swal.fire({
        icon: "success",
        title: "Category has been added",
        showConfirmButton: false,
        timer: 1500,
      });
      catFetch();
      e.reset();
    }
  };

  const handleDelete = (id) => {
    console.log(id);
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
