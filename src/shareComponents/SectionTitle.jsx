import PropTypes from "prop-types";
function SectionTitle({ title, description }) {
  return (
    <div className="container w-full md:max-w-2xl  flex flex-col space-y-3 justify-center items-center text-center my-8 md:my-10">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-2xl md:text-3xl lg:text-4xl font-bold font-nunito text-black leading-normal md:leading-[3rem] lg:leading-[3.5rem]"
      >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="font-normal text-gray-400 text-wrap"
      >
        {description}
      </p>
    </div>
  );
}
SectionTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default SectionTitle;
