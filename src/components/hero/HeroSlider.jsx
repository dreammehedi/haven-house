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
      style={{
        background: `${bgColorImg}`,
      }}
      className="!bg-no-repeat !bg-cover !bg-center w-full h-full rounded-3xl overflow-hidden"
    >
      <div className="w-full h-full md:max-w-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-3 text-white">
        <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl leading-normal lg:leading-[4rem] capitalize">
          {title1} <span className="text-green-500">{title2}</span>
          {title3}
        </h1>
        <p className="text-slate-200 text-wrap">{description}</p>
        <Button cls={"mr-auto"} name={btnName}></Button>
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
