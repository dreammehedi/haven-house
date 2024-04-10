import PropTypes from "prop-types";
function TestimonialClient({ client }) {
  const { id, author, position, company, testimonial, authorImg } = client;

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[500px] p-6 space-y-8 shadow-md lg:p-8 bg-gray-50 rounded-3xl transition-all duration-300 ease-linear hover:scale-[1.01]">
      <img
        src={authorImg}
        alt={`client ${id}`}
        className="w-24 h-24 rounded-full bg-gray-500 object-cover"
      />
      <blockquote className="h-auto relative max-w-lg text-lg italic font-medium text-center px-4">
        <span className="text-6xl absolute -top-2 -left-3 font-bold text-gray-500">
          &#8220;
        </span>
        {testimonial}
        <span className="text-6xl absolute -bottom-[40px] ml-3 font-bold text-gray-500">
          &#8221;
        </span>
      </blockquote>

      <div className="text-center text-gray-600">
        <h4 className="font-bold text-lg capitalize">{author}</h4>
        <p className="font-medium font-lato">
          {position} of {company}
        </p>
      </div>
    </div>
  );
}
TestimonialClient.propTypes = {
  client: PropTypes.object.isRequired,
};
export default TestimonialClient;
