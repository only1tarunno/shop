import Container from "../shared/Container";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const UpperNavbar = () => {
  return (
    <div className="bg-[#f76b6a] py-2">
      <Container>
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm text-white">
            Free shipping for all orders of $150
          </h3>
          <ul className="flex items-start justify-end gap-2 text-white">
            <li>
              <a href="">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default UpperNavbar;
