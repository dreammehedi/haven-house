import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import TestimonialClient from "./TestimonialClient";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

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
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="color-ring-loading"
          wrapperClass="color-ring-wrapper "
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
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
        modules={[Autoplay, Pagination]}
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
