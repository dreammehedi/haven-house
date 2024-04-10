import FooterSocial from "../FooterSocial";
function FooterBottom() {
  return (
    <div className="container pb-6 flex flex-col lg:flex-row flex-wrap justify-between items-center text-center">
      <p className="font-medium text-gray-900">
        Copyright &copy; {new Date().getFullYear()} Haven House - Design by
        <a
          href="https://www.facebook.com/profile.php?id=61554869056271"
          target="_blank"
        >
          <span className="text-green-500 font-semibold">
            {" "}
            Mehedi Hassan Miraj
          </span>
        </a>
        .
      </p>

      {/* footer bottom */}
      <div className="flex flex-col justify-center pt-6 lg:pt-0">
        <FooterSocial></FooterSocial>
      </div>
    </div>
  );
}

export default FooterBottom;
