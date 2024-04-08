import { Helmet } from "react-helmet-async";
import { BsHouseCheckFill } from "react-icons/bs";
import { FaTengeSign } from "react-icons/fa6";
import { GiBlockHouse } from "react-icons/gi";
import { PiListChecksFill } from "react-icons/pi";
import Estate from "../../components/estate/Estate";
import Banner from "../../components/hero/Banner";
import Service from "../../components/service/Service";
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
        <div className="container my-4 flex flex-wrap justify-around gap-8 md:gap-10">
          <Service name="Saling Services">
            <BsHouseCheckFill className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></BsHouseCheckFill>
          </Service>
          <Service name=" Renting Services">
            <FaTengeSign className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></FaTengeSign>
          </Service>
          <Service name=" Property Listing">
            <PiListChecksFill className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></PiListChecksFill>
          </Service>
          <Service name="Property Management">
            <GiBlockHouse className="text-4xl md:text-5xl lg:text-[4rem] text-green-500 font-bold "></GiBlockHouse>
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
    </>
  );
}

export default Home;
