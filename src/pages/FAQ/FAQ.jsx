import { Link } from "react-router-dom";
import Container from "../../components/shared/Container";
import InnerPageBanner from "../../components/shared/InnerPageBanner";
import Button from "../../components/shared/Button";

const FAQPage = () => {
  return (
    <div>
      <InnerPageBanner subTitle="FAQ" title="FAQS"></InnerPageBanner>
      <Container>
        <div className="pt-20">
          <h2 className="text-2xl font-bold text-[#333] text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#555] text-center pt-1">
            Last Updated on December 7, 2023
          </p>
        </div>
        <div className="join join-vertical w-full my-20">
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title font-bold text[#333]">
              Who should i to contact if i have question?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-bold text[#333]">
              How can i cancel or change my order?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-bold text[#333]">
              How long will it take to get my package?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-bold text[#333]">
              How can i return a product?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-bold text[#333]">
              What shipping methods are available?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#ececec] rounded py-12 text-center mb-20">
          <h2 className="text-2xl font-bold text-[#333] text-center">
            Still Have Question? Contact Us
          </h2>
          <Link to="/contact" className="inline-block pt-5">
            <Button text={"CONTACT US"}></Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FAQPage;
