import { Link } from "react-router-dom";
import bg from "../../assets/bg.webp";
import Button from "../../components/shared/Button";
const Deals = () => {
  return (
    <div
      className="hero min-h-[550px]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-[#333] text-center">
            Deals of the Week
          </h2>
          <div className="flex items-center gap-10 py-10">
            <div>
              <p className="bg-[#000] text-white w-16 h-16 flex items-center justify-center text-2xl font-bold rounded">
                5
              </p>
              <p className="text-[#333] uppercase text-center font-semibold pt-1">
                days
              </p>
            </div>
            <div>
              <p className="bg-[#000] text-white w-16 h-16 flex items-center justify-center text-2xl font-bold rounded">
                4
              </p>
              <p className="text-[#333] uppercase text-center font-semibold pt-1">
                Hours
              </p>
            </div>
            <div>
              <p className="bg-[#000] text-white w-16 h-16 flex items-center justify-center text-2xl font-bold rounded">
                11
              </p>
              <p className="text-[#333] uppercase text-center font-semibold pt-1">
                Min
              </p>
            </div>
            <div>
              <p className="bg-[#000] text-white w-16 h-16 flex items-center justify-center text-2xl font-bold rounded">
                0
              </p>
              <p className="text-[#333] uppercase text-center font-semibold pt-1">
                secs
              </p>
            </div>
          </div>
          <Link to="/shop">
            {" "}
            <Button text={"shop now"}></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Deals;
