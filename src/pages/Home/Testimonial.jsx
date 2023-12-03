import Container from "../../components/shared/Container";

const Testimonial = () => {
  return (
    <div className="bg-[#f8f8f8] py-16">
      <Container>
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="flex-1 lg:border-r-2 lg:pr-20 text-center lg:text-start">
            <h3 className="text-base lg:text-lg text-[#333] uppercase font-semibold tracking-widest">
              TESTIMONIALS
            </h3>
            <h2 className="font-bold text-4xl lg:text-7xl w-full  text-[#333] py-4">
              What Our Clients <br /> Say
            </h2>
            <p className="text-[#999]">
              Fast shipping and top-notch quality. I&lsquo;m a satisfied
              customer and will definitely shop here again!
            </p>
          </div>
          <div className="flex-1 text-center">
            <h2 className="text-[200px] font-bold text-[#70798B50] leading-[175px]">
              4.8
            </h2>
            <p className="font-bold text-[#70798B] text-3xl">
              Average Customer Rating
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
