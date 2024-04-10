import PropTypes from "prop-types";
function ContactInfoCart({
  delay,
  contactIcon,
  contactProvider,
  contactAddress1,
  contactAddress2,
}) {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay={delay}
      data-aos-duration={delay * 2}
      className="border border-gray-300 p-4 md:p-6 lg:p-8 flex flex-col space-y-4 justify-center items-center text-center font-nunito rounded-3xl group transition-all duration-300 ease-linear  hover:shadow-md"
    >
      <div className="w-[130px] h-[130px] text-green-500/50 transition-all duration-300 ease-linear group-hover:ring-1 group-hover:ring-green-500/80 rounded-full p-2 flex justify-center items-center">
        {contactIcon}
      </div>

      <h3 className="text-2xl md:text-3xl font-bold font-lato">
        {contactProvider}
      </h3>
      <address className="text-gray-700 font-semibold space-y-2">
        <p>{contactAddress1} </p>
        <p>{contactAddress2}</p>
      </address>
    </div>
  );
}
ContactInfoCart.propTypes = {
  delay: PropTypes.number.isRequired,
  contactIcon: PropTypes.node.isRequired,
  contactProvider: PropTypes.string.isRequired,
  contactAddress1: PropTypes.string.isRequired,
  contactAddress2: PropTypes.string.isRequired,
};
export default ContactInfoCart;
