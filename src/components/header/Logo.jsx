import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link
      data-aos="fade-left"
      data-aos-delay="400"
      to="/"
      className="font-bold text-2xl md:text-3xl font-lato"
    >
      Haven
      <span className="text-green-500"> House</span>
    </Link>
  );
}

export default Logo;
