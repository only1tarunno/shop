import { FaSpinner } from "react-icons/fa6";
import Container from "../../components/shared/Container";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/shared/SocialLogin";
const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();
  const [spin, setspin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    setspin(true);
    login(data?.email, data?.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
        setspin(false);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Invalid username or password",
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
              <h1 className="my-3 text-4xl font-bold">Login</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 w-full"
            >
              <div className="space-y-4">
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
                    "Sign In"
                  )}
                </button>
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50 pt-3">
              <div className="divider">OR</div>
              <SocialLogin></SocialLogin>
              <p className="px-6 text-sm text-center text-black">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="hover:underline hover:text-[#f76b6a] text-[#333] font-bold"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
