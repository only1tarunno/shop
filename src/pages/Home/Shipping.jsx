import Container from "../../components/shared/Container";
import van from "../../assets/van.png";
import support from "../../assets/customer-service.png";
import back from "../../assets/money.png";

const Shipping = () => {
  return (
    <>
      <Container>
        <div className="flex gap-10 flex-wrap sm:flex-nowrap items-center justify-between overflow-x-auto py-16">
          <div className="text-center w-full sm:w-2/6">
            <img src={van} className="w-14 mx-auto pb-2" alt="" />
            <h3 className="text-[#333] font-bold text-lg">Free Shipping</h3>
            <p className="text-[#999999]">Free Shipping for all US order</p>
          </div>
          <div className="text-center w-full sm:w-2/6">
            <img src={support} className="w-14 mx-auto pb-2" alt="" />
            <h3 className="text-[#333] font-bold text-lg">Support 24/7</h3>
            <p className="text-[#999999]">We support 24h a day</p>
          </div>
          <div className="text-center w-full sm:w-2/6">
            <img src={back} className="w-14 mx-auto pb-2" alt="" />
            <h3 className="text-[#333] font-bold text-lg">100% Money Back</h3>
            <p className="text-[#999999]">You have 30 days to Return</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shipping;
