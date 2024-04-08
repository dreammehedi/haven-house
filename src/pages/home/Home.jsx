import { Helmet } from "react-helmet-async";
import Estate from "../../components/estate/Estate";
import Banner from "../../components/hero/Banner";
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

      {/* estate section */}
      <section className="container my-6 md:my-8 lg:my-10">
        {/* estate title and description */}
        <SectionTitle
          title={" Explore Our Latest & Featured Residential Properties"}
          description={`Discover the epitome of modern living with our latest and featured residential properties. From luxurious single-family homes to chic urban apartments, each property is meticulously curated to offer unparalleled comfort, style, and convenience. `}
        ></SectionTitle>

        {/* estate */}
        <Estate></Estate>
      </section>
    </>
  );
}

export default Home;
