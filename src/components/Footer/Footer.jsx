import Container from "../shared/Container";
import logo from "../../assets/logo.avif";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import payment from "../../assets/payment-icons.avif";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] pb-8">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
          <div>
            <img src={logo} className="w-24" alt="" />
            <ul className="text-[#555] text-sm space-y-3 pt-4">
              <li> Calista Wise 7292 Dictum Av. Antonio, Italy.</li>
              <li>
                <a href="tel:+8801743821440" className="hover:text-[#f76b6a]">
                  (+880)1743-821440
                </a>
              </li>
              <li>
                <a
                  href="mailto:tarunno281@gmail.com"
                  className="hover:text-[#f76b6a]"
                >
                  tarunno281@gmail.com
                </a>
              </li>
              <li>
                <ul className="flex items-center gap-2 text-xl">
                  <li>
                    <a
                      className="hover:text-[#f76b6a]"
                      href="https://www.facebook.com/only1tarunno"
                    >
                      <FaFacebookF></FaFacebookF>
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#f76b6a]"
                      href="https://www.instagram.com/only1taruno"
                    >
                      <FaInstagram></FaInstagram>
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-[#f76b6a]"
                      href="https://www.linkedin.com/in/only1tarunno"
                    >
                      <FaLinkedinIn></FaLinkedinIn>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-[#333] text-xl">Useful links</h2>
            <ul className="text-[#555] text-sm space-y-3 pt-4">
              <li>
                <Link to={"/"} className="hover:text-[#f76b6a]">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-[#f76b6a]">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-[#f76b6a]">
                  Customer Service
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:text-[#f76b6a]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-[#333] text-xl">Newsletter signup</h2>
            <form className="pt-4 space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="border border-[#999] rounded w-full p-2"
                id=""
              />
              <button className="w-full btn bg-[#f76b6a] text-white">
                Subscribe
              </button>
            </form>
            <img src={payment} alt="payment Logo" className="mt-5" />
          </div>
        </div>
      </Container>
      <div className="pt-8 border-t border-[#e3e3e3]">
        <p className="text-center text-[#2b2b2b]">
          Copyright © 2023 shop | Create by Tarunno
        </p>
      </div>
    </footer>
  );
};

export default Footer;
