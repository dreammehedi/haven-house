import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
function FooterSocial() {
  return (
    <div className="flex justify-center space-x-4">
      <a
        data-aos="fade-left"
        data-aos-delay="1000"
        data-aos-anchor="#footer-bottom"
        href="https://www.facebook.com/profile.php?id=61554869056271"
        target="_blank"
        title="Facebook"
        className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-green-200 text-black  transition-colors duration-300 ease-linear hover:bg-green-500 hover:text-white "
      >
        <FaFacebook></FaFacebook>
      </a>
      <a
        data-aos="fade-left"
        data-aos-delay="800"
        data-aos-anchor="#footer-bottom"
        href="https://github.com/dreammehedi"
        target="_blank"
        title="Github"
        className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-green-200 text-black  transition-colors duration-300 ease-linear hover:bg-green-500 hover:text-white "
      >
        <FaGithub></FaGithub>
      </a>
      <a
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-anchor="#footer-bottom"
        href="https://www.instagram.com/"
        target="_blank"
        title="Instagram"
        className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-green-200 text-black  transition-colors duration-300 ease-linear hover:bg-green-500 hover:text-white "
      >
        <FaInstagram></FaInstagram>
      </a>
      <a
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-anchor="#footer-bottom"
        href="https://twitter.com/"
        target="_blank"
        title="Twitter"
        className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-green-200 text-black  transition-colors duration-300 ease-linear hover:bg-green-500 hover:text-white"
      >
        <FaTwitter></FaTwitter>
      </a>
    </div>
  );
}

export default FooterSocial;
