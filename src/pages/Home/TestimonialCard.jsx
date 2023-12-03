import Container from "../../components/shared/Container";
import img1 from "../../assets/person.jpg";

const TestimonialCard = () => {
  return (
    <div className="py-16 testimonialcard">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-10 bg-white shadow-xl rounded-xl">
            <h2 className="text-2xl font-medium text-[#999] pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
            </h2>
            <div className="flex gap-3 items-center">
              <img src={img1} className="w-24 h-24" alt="" />
              <div>
                <h3 className="text-xl font-bold">John Kim </h3>
                <p className="text-[#999]">Designer</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-white shadow-xl rounded-xl">
            <h2 className="text-2xl font-medium text-[#999] pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
            </h2>
            <div className="flex gap-3 items-center">
              <img src={img1} className="w-24 h-24" alt="" />
              <div>
                <h3 className="text-xl font-bold">John Kim </h3>
                <p className="text-[#999]">Designer</p>
              </div>
            </div>
          </div>
          <div className="p-10 bg-white shadow-xl rounded-xl">
            <h2 className="text-2xl font-medium text-[#999] pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo..
            </h2>
            <div className="flex gap-3 items-center">
              <img src={img1} className="w-24 h-24" alt="" />
              <div>
                <h3 className="text-xl font-bold">John Kim </h3>
                <p className="text-[#999]">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialCard;
