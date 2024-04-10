import { Helmet } from "react-helmet-async";
import { BsHouseCheckFill } from "react-icons/bs";
import { FaTengeSign } from "react-icons/fa6";
import { GiBlockHouse, GiHouseKeys, GiSpookyHouse } from "react-icons/gi";
import { PiListChecksFill } from "react-icons/pi";
import Estate from "../../components/estate/Estate";
import Banner from "../../components/hero/Banner";
import Service from "../../components/service/Service";
import Testimonials from "../../components/testimonials/Testimonials";
import SectionTitle from "../../shareComponents/SectionTitle";
function Home() {
  return (
    <>
      <Helmet>
        <title>Haven House | Home</title>
      </Helmet>
      {/* hero slider */}
      <section className="container">
        <Banner></Banner>
      </section>

      {/* our service */}
      <section className="mb-6 md:mb-8 lg:mb-10 bg-green-50 py-8 md:py-10 lg:py-12">
        {/* our service title and description */}
        <SectionTitle
          title={"Explore Our Services"}
          description={`Welcome to our services section, where we offer a comprehensive range of solutions tailored to meet your needs. From consultation to execution, our dedicated team is here to provide expertise and support every step of the way.`}
        ></SectionTitle>
        {/* our service items */}
        <div className="container my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8 md:gap-10">
          <Service delay={1} name=" Renting Services">
            <FaTengeSign className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></FaTengeSign>
          </Service>
          <Service delay={2} name="Saling Services">
            <BsHouseCheckFill className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></BsHouseCheckFill>
          </Service>

          <Service delay={3} name=" Property Listing">
            <PiListChecksFill className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></PiListChecksFill>
          </Service>
          <Service delay={4} name="House Services">
            <GiSpookyHouse className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></GiSpookyHouse>
          </Service>
          <Service delay={5} name="Property Management">
            <GiBlockHouse className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></GiBlockHouse>
          </Service>
          <Service delay={6} name="House Keys">
            <GiHouseKeys className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></GiHouseKeys>
          </Service>
        </div>
      </section>

      {/* estate section */}
      <section className="container my-6 md:my-8 lg:my-10">
        {/* estate title and description */}
        <SectionTitle
          title={"Explore Our Featured Listings"}
          description={`Discover the epitome of modern living with our latest and featured residential properties. From luxurious single-family homes to chic urban apartments, each property is meticulously curated to offer unparalleled comfort, style, and convenience. `}
        ></SectionTitle>

        {/* estate */}
        <Estate></Estate>
      </section>

      {/* testimonial */}
      <section className=" bg-green-50 py-8 md:py-10">
        <div className="container">
          <Testimonials></Testimonials>
        </div>
      </section>
    </>
  );
}

export default Home;
