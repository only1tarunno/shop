import { useForm } from "react-hook-form";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUser from "../../../../hooks/useUser";
import Swal from "sweetalert2";
import Loader from "../../../../components/shared/Loader";

const Updateprofile = () => {
  const [isUser, isUserLoading] = useUser();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data?.name,
      image: data?.photo,
      phoneNum: data?.phoneNum,
      address: data?.address,
    };
    axiosSecure.patch(`/users/${isUser?.email}`, userInfo).then(() => {
      Swal.fire({
        icon: "success",
        title: "Your profile is updated",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/profile");
    });
  };

  if (isUserLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div className="py-16">
        <InnerSectiontitle
          subtitle="Make Sure Your Information is Current: Update Your Profile"
          title="Update Your Profile"
        ></InnerSectiontitle>
        <div className="flex w-full  justify-center">
          <div className="flex flex-col w-full lg:w-1/2 p-6 rounded-md sm:p-10 text-gray-900">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={isUser?.name}
                    {...register("name")}
                    required
                    placeholder="Enter Your Name Here"
                    className="w-full px-3 py-2 border rounded-md border-[#f76b6a] focus:outline-[#f76b6a] bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Profile PhotoUrl
                  </label>
                  <input
                    type="text"
                    defaultValue={isUser?.image}
                    {...register("photo")}
                    placeholder="Enter Your Image URL"
                    required
                    className="w-full px-3 py-2 border rounded-md border-[#f76b6a] focus:outline-[#f76b6a] bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address not editable
                  </label>
                  <input
                    type="email"
                    defaultValue={isUser?.email}
                    placeholder="Enter Your Email Here"
                    disabled
                    className="w-full px-3 py-2 border rounded-md border-[#f76b6a] focus:outline-[#f76b6a] bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label className="text-sm mb-2">Phone Number</label>
                  </div>
                  <input
                    type="text"
                    {...register("phoneNum")}
                    required
                    defaultValue={isUser?.phoneNum && isUser.phoneNum}
                    placeholder="017XXX-XXXXXX"
                    className="w-full px-3 py-2 border rounded-md border-[#f76b6a] focus:outline-[#f76b6a] bg-gray-200 text-gray-900"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Address
                    </label>
                  </div>
                  <input
                    type="text"
                    {...register("address")}
                    defaultValue={isUser?.address && isUser.address}
                    required
                    placeholder="No data"
                    className="w-full px-3 py-2 border rounded-md border-[#f76b6a] focus:outline-[#f76b6a] bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#f76b6a] w-full rounded-md py-3 text-white"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateprofile;
