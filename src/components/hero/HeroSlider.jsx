import PropTypes from "prop-types";
import Button from "../../shareComponents/Button";
function HeroSlider({
  title1,
  title2,
  title3,
  btnName,
  description,
  bgColorImg,
}) {
  return (
    <div
      data-aos="zoom-in-left"
      data-aos-delay="300"
      data-aos-duration="350"
      style={{
        background: `${bgColorImg}`,
      }}
      className="!bg-no-repeat !bg-cover !bg-center w-full h-full rounded-3xl overflow-hidden"
    >
      <div className="w-full h-full md:max-w-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-3 text-white">
        <h1
          data-aos="zoom-in-left"
          data-aos-delay="300"
          data-aos-duration="350"
          className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-normal lg:leading-[4rem] capitalize"
        >
          {title1} <span className="text-green-500">{title2}</span>
          {title3}
        </h1>
        <p
          data-aos="zoom-in-left"
          data-aos-delay="350"
          data-aos-duration="400"
          className="text-slate-200 text-wrap"
        >
          {description}
        </p>
        <div
          data-aos="zoom-in-left"
          data-aos-delay="300"
          data-aos-duration="450"
        >
          <Button cls={"mr-auto"} name={btnName}></Button>
        </div>
      </div>
    </div>
  );
}
HeroSlider.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  btnName: PropTypes.string,
  description: PropTypes.string,
  bgColorImg: PropTypes.string,
};
export default HeroSlider;
