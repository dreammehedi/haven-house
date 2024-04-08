import PropTypes from "prop-types";
function Button({ cls, name }) {
  return (
    <button
      className={`${
        cls && cls
      } bg-green-500 text-white font-semibold text-base md:text-[18px] px-4 py-2 md:px-6 md:py-3 rounded-md cursor-pointer font-poppins ring-1 ring-green-500 capitalize hover:bg-green-500/50`}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  cls: PropTypes.string,
  name: PropTypes.string,
};
export default Button;