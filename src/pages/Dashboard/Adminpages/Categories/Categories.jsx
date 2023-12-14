import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import Loader from "../../../../components/shared/Loader";
import useCategories from "../../../../hooks/useCategories";
import CategoryTable from "./CategoryTable";

const Categories = () => {
  const [categories, categoriesLoader, catFetch] = useCategories();

  const handleDelete = (id) => {
    console.log(id);
  };

  if (categoriesLoader) {
    return <Loader></Loader>;
  }
  return (
    <>
      <div className="pt-16">
        <InnerSectiontitle
          title={"Manage Orders"}
          subtitle={"Add categories"}
        ></InnerSectiontitle>
      </div>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="w-full lg:w-[48%] order-1 lg:order-2">
          <CategoryTable
            categories={categories}
            handleDelete={handleDelete}
          ></CategoryTable>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Categories;
