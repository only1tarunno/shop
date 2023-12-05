import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import InnerPageBanner from "../../components/shared/InnerPageBanner";
import img from "../../assets/err.avif";
import { Link } from "react-router-dom";
import Button from "../../components/shared/Button";

const Error404 = () => {
  return (
    <>
      <Navbar></Navbar>
      <InnerPageBanner subTitle="Error" title="Error 404"></InnerPageBanner>
      <div className="py-16 text-center">
        <img src={img} alt="error image" className="mb-3 w-44 mx-auto" />
        <h2 className="text-3xl font-bold text-[#333] text-center">
          Oops! That page can&lsquo;t be found.
        </h2>
        <p className="text-sm text-[#555] text-center py-5">
          Sorry, but the page you are looking for is not found. Please, make
          sure you have typed the current URL.
        </p>
        <Link to="/">
          <Button text={"GO TO HOME"}></Button>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Error404;
