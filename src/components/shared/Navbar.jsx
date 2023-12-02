import { NavLink } from "react-router-dom";
import Container from "./Container";
import { GrShop } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
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
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#435585]">
      <Container>
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar ">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost text-white"
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
              <div className="flex-1 lg:flex-none lg:w-1/4 px-2 mx-2">
                Navbar Title
              </div>
              <div className="flex-none hidden lg:block lg:flex-1 text-center">
                <ul className="menu menu-horizontal text-white">
                  {/* Navbar menu content here */}
                  {links}
                </ul>
              </div>
              {/* button start here  */}
              <div className="w-1/4 justify-end">
                <button className="p-3 text-sm font-medium shadow-none text-center text-white btn bg-transparent border-none hover:bg-transparent focus:outline-none">
                  <FaRegUserCircle className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center p-3 text-sm font-medium shadow-none text-center text-white btn bg-transparent border-none hover:bg-transparent focus:outline-none "
                >
                  <GrShop className="w-5 h-5" />
                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-[#363062] rounded-full top-2 end-1 ">
                    0
                  </div>
                </button>
              </div>
            </div>
            {/* Page content here */}
            {/* Content */}
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              {links}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
