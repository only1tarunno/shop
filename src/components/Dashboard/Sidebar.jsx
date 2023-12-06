import { useState } from "react";

import logo from "../../assets/logo.avif";
// Icons
import { AiOutlineMenu } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaHouse, FaStar } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img src={logo} className="w-32" alt="" />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineMenu className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#f76b6a]  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <img
                // className='hidden md:block'
                src={logo}
                alt="logo"
                width="100"
                height="100"
              />
            </div>
          </div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is host */}

            <nav>
              {/* user menu  */}
              <MenuItem
                label="Dashboard"
                address="userDashboard"
                icon={BsGraphUp}
              ></MenuItem>
              <MenuItem
                label={`Profile`}
                address="profile"
                icon={FaUserCircle}
              ></MenuItem>
              <MenuItem
                label={`My Cart(0)`}
                address="cart"
                icon={IoCartOutline}
              ></MenuItem>
              <MenuItem
                label={`Payment History`}
                address="paymentHistory"
                icon={MdOutlinePayment}
              ></MenuItem>
              <MenuItem
                label={`Rating`}
                address="starRating"
                icon={FaStar}
              ></MenuItem>
            </nav>
          </div>
        </div>

        <div>
          <hr />
          <MenuItem label="Home" address="/" icon={FaHouse}></MenuItem>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
