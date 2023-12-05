import { Link, NavLink } from "react-router-dom";
import Container from "../shared/Container";
import { GrShop } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../assets/logo.avif";
import UpperNavbar from "./UpperNavbar";

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
        <NavLink to="/faq">FAQ</NavLink>
      </li>
    </>
  );
  return (
    <>
      <UpperNavbar></UpperNavbar>
      <div className="bg-white border-b border-[#eaeaea]">
        <Container>
          <div className="drawer">
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
                  <Link to="/login">
                    <button className="px-3 text-sm font-medium shadow-none text-center text-[#333] btn bg-transparent border-none hover:bg-transparent focus:outline-none">
                      <FaRegUserCircle className="w-5 h-5" />
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="relative inline-flex items-center px-0 text-sm font-medium shadow-none text-center text-[#333] btn bg-transparent border-none hover:bg-transparent focus:outline-none "
                  >
                    <GrShop className="w-5 h-5" />
                    <span className="sr-only">Notifications</span>
                    <div className="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-[#f76b6a] rounded-full top-2 -end-1 ">
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
