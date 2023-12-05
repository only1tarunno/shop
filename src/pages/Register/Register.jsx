import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/shared/SocialLogin";
import { FaSpinner } from "react-icons/fa6";
import Container from "../../components/shared/Container";

const Register = () => {
  const [spin, setspin] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const pass = data?.password;
    // check password strong
    if (pass.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast 6 Character",
      });
      return;
    } else if (!/(?=.*[A-Z])/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast One Capital Letter",
      });
      return;
    } else if (!/(?=.*[0-9])/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast One Numeric Number",
      });
      return;
    } else if (!/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(pass)) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Atleast One Special Character",
      });
      return;
    }
    setspin(true);
    // create user
    createUser(data?.email, pass)
      .then(() => {
        console.log();
        // set user name and img
        updateUserProfile(data?.name, data?.photo).then(() => {
          // create user in data base
          const userInfo = {
            name: data?.name,
            email: data?.email,
            image: data?.photo,
            premiumTaken: false,
            role: "user",
          };
          axiosPublic.post("/users", userInfo).then(() => {
            Swal.fire({
              icon: "success",
              title: "User created successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
            navigate(from, { replace: true });
            setspin(false);
          });
        });
      })
      .catch((err) => {
        // check if their is an error
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: err.message,
        });
        setspin(false);
      });
  };
  return (
    <>
      <Container>
        <div className=" py-10">
          <div className="mx-auto max-w-xl p-6 rounded-md sm:p-10 border-[#e8e8e8] border-dashed border-2 text-black">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Register</h1>
            </div>
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
                    {...register("name")}
                    required
                    placeholder="Enter Your Name Here"
                    className="w-full px-3 py-2 border rounded-md border-[#e8e8e8] focus:outline-[#e8e8e8] bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Profile PhotoUrl
                  </label>
                  <input
                    type="url"
                    {...register("photo")}
                    placeholder="Enter Your Image URL"
                    required
                    className="w-full px-3 py-2 border rounded-md border-[#e8e8e8] focus:outline-[#e8e8e8] bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter Your Email Here"
                    required
                    className="w-full px-3 py-2 border rounded-md border-[#e8e8e8] focus:outline-[#e8e8e8] bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    {...register("password")}
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-[#e8e8e8] focus:outline-[#e8e8e8] bg-gray-200 text-gray-900"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md py-3 text-white btn bg-[#f76b6a] border-[#f76b6a] px-8  hover:bg-[#4c5161] hover:border-[#4c5161]  font-medium uppercase"
                >
                  {spin ? (
                    <FaSpinner className=" animate-spin m-auto" />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50 pt-3">
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
              <p className="px-6 text-sm text-center text-black">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="hover:underline hover:text-[#f76b6a] text-[#333] font-bold"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
