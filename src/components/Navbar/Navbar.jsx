import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "../shared/Container";
import logo from "../../assets/logo.avif";
import UpperNavbar from "./UpperNavbar";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const navigate = useNavigate();
  const [isUser] = useUser();
  const { role } = isUser || {};
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut().then(navigate("/login")).catch();
  };

  return (
    <>
      <UpperNavbar></UpperNavbar>
      <div className="bg-white border-b border-[#eaeaea]">
        <Container>
          <div className="drawer relative z-50">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="w-full px-0 navbar ">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost justify-start"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <div className="flex-1 justify-center lg:justify-start lg:flex-none lg:w-1/4">
                  <img src={logo} alt="logo" className="w-28" />
                </div>
                <div className="flex-none hidden lg:block lg:flex-1 text-center">
                  <ul className="menu menu-horizontal text-[#333]">
                    {/* Navbar menu content here */}
                    {links}
                  </ul>
                </div>
                {/* button start here  */}
                <div className="w-1/4 justify-end">
                  {/* ---------check if user login they see profile------------- */}
                  {user ? (
                    <div>
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-ghost btn-circle avatar hover:border-none hover:bg-transparent"
                        >
                          <div className="w-8 h-8 rounded-[50%] object-cover">
                            <img
                              alt="Tailwind CSS Navbar component"
                              src={user.photoURL}
                            />
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded px-3"
                        >
                          <li>
                            <Link
                              style={{ textTransform: "capitalize" }}
                              to={
                                role === "admin"
                                  ? "/dashboard/adminDashboard"
                                  : "/dashboard/userDashboard"
                              }
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ textTransform: "capitalize" }}
                              to="/dashboard/profile"
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={handleLogOut}
                              className="hover:bg-transparent hover:text-[#f76b6a] rounded-sm"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Link to="/login">
                        <button className="px-3 text-sm font-medium shadow-none text-center text-[#333] btn bg-transparent border-none hover:bg-transparent focus:outline-none">
                          <svg
                            version="1.1"
                            width="26"
                            height="26"
                            viewBox="0 0 17 17"
                          >
                            <path
                              d="M17 16.488c-0.063-2.687-2.778-4.999-6.521-5.609v-1.374c0.492-0.473 0.842-1.207 1.071-1.833 0.332-0.166 0.624-0.536 0.794-1.033 0.238-0.688 0.146-1.323-0.206-1.629 0.028-0.238 0.046-0.481 0.015-0.723-0.079-0.663 0.065-1.038 0.194-1.368 0.106-0.277 0.229-0.591 0.106-0.945-0.442-1.273-1.727-1.974-3.618-1.974l-0.264 0.005c-1.313 0.047-1.707 0.6-1.971 1.115-0.033 0.062-0.077 0.146-0.077 0.151-1.712 0.153-1.697 1.569-1.684 2.707l0.003 0.369c0 0.205 0.009 0.419 0.026 0.639-0.425 0.3-0.504 1.005-0.179 1.737 0.185 0.415 0.452 0.729 0.749 0.892 0.243 0.674 0.625 1.47 1.179 1.965v1.283c-3.798 0.589-6.554 2.907-6.617 5.625l-0.012 0.512h17.023l-0.011-0.512zM1.054 16c0.392-2.094 2.859-3.821 6.122-4.204l0.441-0.052v-2.666l-0.216-0.15c-0.393-0.272-0.791-0.947-1.090-1.851l-0.083-0.281-0.294-0.051c-0.053-0.019-0.208-0.153-0.33-0.428-0.075-0.168-0.104-0.312-0.112-0.415l0.51 0.143-0.096-0.749c-0.042-0.33-0.064-0.651-0.064-0.95l-0.003-0.38c-0.015-1.341 0.051-1.634 0.773-1.699 0.545-0.048 0.752-0.449 0.876-0.689 0.15-0.292 0.28-0.543 1.12-0.574l0.227-0.004c0.829 0 2.279 0.169 2.669 1.282 0 0.043-0.052 0.177-0.090 0.275-0.145 0.374-0.364 0.939-0.254 1.853 0.024 0.188-0.007 0.424-0.040 0.675l-0.089 0.805 0.441-0.048c0.008 0.104-0.004 0.269-0.075 0.472-0.097 0.289-0.242 0.438-0.237 0.454h-0.36l-0.114 0.342c-0.283 0.853-0.65 1.497-1.009 1.768l-0.198 0.15v2.726l0.438 0.055c3.211 0.401 5.641 2.123 6.030 4.192h-14.893z"
                              fill="#000000"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  )}

                  {/* -----------cart icon----------------------------- */}
                  {role !== "admin" && (
                    <div
                      onClick={() => navigate("/dashboard/cart")}
                      className="indicator mr-2"
                    >
                      <span className="indicator-item badge bg-[#f76b6a] text-white top-3 end-0 font-thin cursor-pointer z-0">
                        {user ? cart.totalQuantity : "0"}
                      </span>
                      <button className="px-0 btn shadow-none bg-transparent border-none hover:bg-transparent focus:outline-none">
                        <svg
                          version="1.1"
                          width="30"
                          height="30"
                          viewBox="0 0 17 17"
                          id="svg50"
                        >
                          <path
                            d="m 14.176,12.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z m -8.5,-2.5 c 0.965,0 1.75,0.785 1.75,1.75 0,0.965 -0.785,1.75 -1.75,1.75 -0.965,0 -1.75,-0.785 -1.75,-1.75 0,-0.965 0.785,-1.75 1.75,-1.75 z m 0,2.5 c 0.414,0 0.75,-0.337 0.75,-0.75 0,-0.413 -0.336,-0.75 -0.75,-0.75 -0.414,0 -0.75,0.337 -0.75,0.75 0,0.413 0.336,0.75 0.75,0.75 z M 3.555,2 3.857,4 H 17 l -1.118,8.036 H 3.969 L 2.931,4.573 2.695,3 H -0.074 V 2 Z M 4,5 4.139,6 H 15.713 L 15.852,5 Z M 15.012,11.036 15.573,7 H 4.278 l 0.561,4.036 z"
                            fill="#000000"
                            id="path48"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 relative z-50">
                {/* Sidebar content here */}
                {links}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
