import { Helmet } from "react-helmet-async";
import Author from "../../components/author/Author";
import SectionTitle from "../../shareComponents/SectionTitle";
import Accordion from "./Accordion";

function Faq() {
  return (
    <>
      <Helmet>
        <title>Haven House | FAQ</title>
      </Helmet>
      <section className="my-6 md:my-8 lg:my-12">
        <div className="container">
          <SectionTitle
            title={"Frequently asked questions"}
            description={
              " An effective FAQ section serves as a valuable resource for users, helping them find answers to their questions quickly and efficiently, while also benefiting the organization by reducing support overhead and enhancing customer satisfaction."
            }
          ></SectionTitle>

          <div className="mt-6 md:mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="lg:col-span-8 border border-gray-50 shadow-md rounded-xl overflow-hidden p-4 h-fit"
            >
              <Accordion></Accordion>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
              className="lg:col-span-4 border border-gray-50 shadow-md rounded-xl overflow-hidden p-4 h-fit text-center"
            >
              <Author></Author>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
