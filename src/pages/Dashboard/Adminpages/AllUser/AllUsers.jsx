import { useEffect, useState } from "react";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../components/shared/Loader";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentpage] = useState(0);
  const [spin, setSpin] = useState(false);
  const numberOfpages = Math.ceil(count / 5);
  const pages = [...Array(numberOfpages).keys()];
  const {
    data: Users = [],
    status,
    refetch,
  } = useQuery({
    queryKey: ["AdminAllProductsManage"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/admin/allUsers?page=${currentPage}&size=5`
      );
      setCount(res.data.count);
      return res.data.result;
    },
  });
  console.log(Users);

  // pagination

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

  // user make reseller
  const handlemakeReseller = async (user) => {
    const userInfo = {
      role: "reseller",
    };

    const res = await axiosSecure.patch(
      `/admin/userUpdate/${user?.email}`,
      userInfo
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        title: `${user?.name} is Reseller`,
        icon: "success",

        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (status === "pending" || spin) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div className="pt-16">
        <InnerSectiontitle
          title={"User Directory"}
          subtitle={"Explore All Users in One Place"}
        ></InnerSectiontitle>
      </div>
      <div className="overflow-x-auto py-16">
        <table className="table rounded overflow-hidden text-center">
          {/* head */}
          <thead className="bg-[#cccccc] text-black">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {Users?.map((user) => (
              <tr key={user?._id}>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <span className="font-bold text-green-400">Admin</span>
                  ) : user?.role === "reseller" ? (
                    <span className="font-bold text-[#0352e3]">Reseller</span>
                  ) : (
                    <>
                      <button
                        onClick={() => handlemakeReseller(user)}
                        className="btn btn-sm rounded"
                      >
                        Make Reseller
                      </button>
                      <br />
                      {user?.role === "resellerRequest" && (
                        <span className="font-bold text-[#0352e3]">
                          Requested for Reseller
                        </span>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th colSpan="4">
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

export default AllUsers;
