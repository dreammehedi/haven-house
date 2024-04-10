import FooterBottom from "./bottom/FooterBottom";
import FooterTop from "./top/FooterTop";
function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900">
      <FooterTop></FooterTop>

      <FooterBottom></FooterBottom>
    </footer>
  );
}

export default Footer;
