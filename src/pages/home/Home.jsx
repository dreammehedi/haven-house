import { Helmet } from "react-helmet-async";
import HeroSlider from "../../components/hero/HeroSlider";
function Home() {
  return (
    <>
      <Helmet>
        <title>Haven House | Home</title>
      </Helmet>
      {/* hero slider */}
      <section className="container h-[400px] md:h-[450px] lg:h-bannerHeight">
        <HeroSlider></HeroSlider>
      </section>
    </>
  );
}

export default Home;
