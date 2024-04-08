import { Helmet } from "react-helmet-async";
import Banner from "../../components/hero/Banner";
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
    </>
  );
}

export default Home;
