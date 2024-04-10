import { useEffect, useState } from "react";
import TestimonialClient from "./TestimonialClient";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Loader from "../../shareComponents/Loader";
import SectionTitle from "../../shareComponents/SectionTitle";

function Testimonials() {
  // testimonial data calling
  const [testimonials, setTestimonials] = useState([]);
  const [loader, setLoader] = useState(true);

  // data fetching
  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonials(data.testimonials);
        setLoader(false);
      });
  }, []);

  // loader added
  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <>
      {/* testimonial title and description */}
      <SectionTitle
        title={"See What Our Clients Have to Say"}
        description={`Welcome to our testimonials section, where we offer a comprehensive range of solutions tailored to meet your needs. From consultation to execution, our dedicated team is here to provide expertise and support every step of the way.`}
      ></SectionTitle>
      {/* testimonial slider */}
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper !py-3"
      >
        {testimonials.map((client) => {
          return (
            <SwiperSlide key={client.id}>
              <TestimonialClient client={client} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Testimonials;
