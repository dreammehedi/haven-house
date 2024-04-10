import PropTypes from "prop-types";
function EstateDetailesItem({ children }) {
  return (
    <div className="flex flex-col space-y-2 items-center capitalize bg-green-100 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-linear hover:bg-green-200 hover:ring-1 hover:ring-green-500/50 rounded-xl">
      {children}
    </div>
  );
}
EstateDetailesItem.propTypes = {
  children: PropTypes.node.isRequired,
};
export default EstateDetailesItem;
