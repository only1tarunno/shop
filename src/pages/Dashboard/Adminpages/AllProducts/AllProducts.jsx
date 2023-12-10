import { useEffect, useState } from "react";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/shared/Loader";
import Swal from "sweetalert2";
import ProductsRow from "./ProductsRow";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentpage] = useState(0);
  const [spin, setSpin] = useState(false);
  const numberOfpages = Math.ceil(count / 6);
  const pages = [...Array(numberOfpages).keys()];
  const {
    data: products = [],
    status,
    refetch,
  } = useQuery({
    queryKey: ["AdminAllProductsManage", currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/admin/allProducts?page=${currentPage}&size=6`
      );
      setCount(res.data.count);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/admin/allProducts/${id}`);
        refetch();
        if (res.data?.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  // pagination Controll
  const handleItem = async (page) => {
    setSpin(true);
    setCurrentpage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      await refetch();
      setSpin(false);
    };

    fetchData();
  }, [currentPage, refetch]);

  if (status === "pending" || spin) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="pt-16">
        <InnerSectiontitle
          title={"Manage Products"}
          subtitle={"Streamlining Your Product Management Process"}
        ></InnerSectiontitle>
      </div>
      <div className="overflow-x-auto py-16">
        <table className="table rounded overflow-hidden text-center">
          {/* head */}
          <thead className="bg-[#cccccc] text-black">
            <tr>
              <th>Product Image</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products?.result?.map((product) => (
              <ProductsRow
                key={product?._id}
                handleDelete={handleDelete}
                product={product}
              ></ProductsRow>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th colSpan="10">
                {pages?.map((page) => (
                  <button
                    className={`mx-2 text-center btn btn-sm w-[33px]  rounded-[50%] ${
                      currentPage === page ? "bg-[#bebebe]" : "bg-gray-200"
                    }`}
                    onClick={() => handleItem(page)}
                    key={page}
                  >
                    {page + 1}
                  </button>
                ))}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default AllProducts;
