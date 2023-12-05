import Container from "../../components/shared/Container";
import InnerPageBanner from "../../components/shared/InnerPageBanner";

const Contact = () => {
  return (
    <div>
      <InnerPageBanner subTitle="contact" title="Contact Us"></InnerPageBanner>
      <Container>
        <div className="py-20 grid md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div>
              <h2 className="text-4xl font-bold text-[#333] text-start">
                Contact Info.
              </h2>
              <p className=" text-[#2b2b2b] pt-3 text-start">
                Some information that you may want to know
              </p>
            </div>
            <div className="border-b border-[#f3f3f3] py-7">
              <h3 className="font-medium text-xs pb-2">PHONE NUMBER</h3>
              <p>
                <a href="tel:+8801569130064" className="hover:text-[#f76b6a]">
                  01569130064
                </a>
              </p>
            </div>
            <div className="border-b border-[#f3f3f3] py-7">
              <h3 className="font-medium text-xs pb-2">ADDRESS</h3>
              <p>Dhaka, Bangldesh.</p>
            </div>
            <div className="border-b border-[#f3f3f3] py-7">
              <h3 className="font-medium text-xs pb-2">EMAIL</h3>
              <p>
                <a
                  href="mailto:tarunno281@gmail.com"
                  className="hover:text-[#f76b6a]"
                >
                  tarunno281@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl font-bold text-[#333] text-start">
              Leave Your Message
            </h2>
            <p className=" text-[#2b2b2b] pt-3 text-start">
              Feel free to contact with us by using the form below
            </p>
            <form className="pt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full border border-[#999] rounded p-2"
                  id=""
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full border border-[#999] rounded p-2"
                  id=""
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="border border-[#999] rounded p-2 w-full my-5"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="w-full btn bg-[#f76b6a] text-white">
                Send Us
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
