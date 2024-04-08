import HeroSlider from "./HeroSlider";

import slider1 from "../../assets/slider/slider1.png";
import slider2 from "../../assets/slider/slider2.png";
import slider3 from "../../assets/slider/slider3.png";
import slider4 from "../../assets/slider/slider4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
function Banner() {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="mySwiper h-[400px] md:h-[450px] lg:h-bannerHeight lg:min-h-[450px] rounded-3xl"
      >
        <SwiperSlide>
          <HeroSlider
            bgColorImg={`linear-gradient(50deg, rgba(28, 28, 30, 1), rgba(7, 3, 18, 0.2)),url(${slider1})`}
            title1="Discover Your Dream"
            title2="Single-Family Home"
            description="Welcome to our collection of stunning single-family homes! Whether you
          are a first-time buyer, a growing family, or someone looking to
          downsize, we have the perfect home for you. Our selection features a
          variety of styles, sizes, and locations to meet your needs and
          preferences."
            btnName="Explore Homes"
          ></HeroSlider>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlider
            bgColorImg={`linear-gradient(50deg, rgba(28, 28, 30, 1), rgba(7, 3, 18, 0.2)),url(${slider2})`}
            title1="Discover Your Dream "
            title2="Townhouse Living"
            description="Townhouses offer a unique blend of style, convenience, and community, making them an ideal choice for modern living. Nestled within vibrant neighborhoods or urban settings, these multi-level residences provide the perfect balance of privacy and sociability."
            btnName="Explore Townhouse"
          ></HeroSlider>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlider
            bgColorImg={`linear-gradient(50deg, rgba(28, 28, 30, 1), rgba(7, 3, 18, 0.2)),url(${slider3})`}
            title1="Unlock Your Ultimate "
            title2="Student Living "
            title3="Experience"
            description="Townhouses offer a unique blend of style, convenience, and community, making them an ideal choice for modern living. Nestled within vibrant neighborhoods or urban settings, these multi-level residences provide the perfect balance of privacy and sociability."
            btnName="Explore Student"
          ></HeroSlider>
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlider
            bgColorImg={`linear-gradient(50deg, rgba(28, 28, 30, 1), rgba(7, 3, 18, 0.2)),url(${slider4})`}
            title1="Escape to Your  "
            title2="Perfect Getaway"
            description="Discover the ultimate vacation experience with our exquisite rental properties. Whether you're seeking a beachfront paradise, a cozy mountain retreat, or a vibrant city escape, we have the perfect accommodations to make your dream vacation a reality. Indulge in luxury amenities, breathtaking views, and unparalleled hospitality at every turn."
            btnName="Explore Vacation"
          ></HeroSlider>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
