import { Link } from "react-router-dom";
import author from "../../assets/author.jpg";
function Author() {
  return (
    <div className="space-y-6 md:space-y-8 mt-8">
      <h1
        data-aos="fade-up"
        data-aos-delay={100}
        className="text-xl md:text-2xl lg:text-3xl font-semibold font-lato"
      >
        Author
      </h1>
      <div
        className="flex flex-col space-y-2 justify-center items-center 
    text-center"
      >
        <figure data-aos="fade-up" data-aos-delay={150}>
          <img
            className="rounded-full object-cover w-[200px] h-[200px]"
            src={author}
            alt="Mehedi"
          />
        </figure>
        <h2
          data-aos="fade-up"
          data-aos-delay={200}
          className="font-extrabold text-xl font-lato"
        >
          Mehedi Hassan Miraj
        </h2>
        <span
          data-aos="fade-up"
          data-aos-delay={250}
          className="text-gray-800 font-medium text-sm"
        >
          dreammehedihassan@gmail.com
        </span>
        <h3
          data-aos="fade-up"
          data-aos-delay={300}
          className="text-gray-700 font-medium"
        >
          Front End Developer
        </h3>
        <p data-aos="fade-up" data-aos-delay={350} className="text-gray-400">
          As a frontend developer, you have an exciting journey ahead, working
          on user interfaces and creating engaging experiences for users.
        </p>
        <div
          data-aos="fade-up-right"
          data-aos-delay="100"
          className="flex items-center"
        >
          <span data-aos="fade-up-right" data-aos-delay="100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-400 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span data-aos="fade-up-right" data-aos-delay="150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-400 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span data-aos="fade-up-right" data-aos-delay="200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-400 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span data-aos="fade-up-right" data-aos-delay="250">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-400 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span data-aos="fade-up-right" data-aos-delay="300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-blue-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              ></path>
            </svg>
          </span>
        </div>
        <Link data-aos="fade-up" data-aos-delay="400" to="/contactus">
          <button className="px-3 py-2 rounded-full font-semibold text-[18px] bg-green-500/50 my-4 text-white transition-all duration-300 ease-linear hover:bg-green-500">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Author;
