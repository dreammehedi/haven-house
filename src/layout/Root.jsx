import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ClickToTop from "../components/clicktop/ClickToTop";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Root() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ClickToTop></ClickToTop>
    </>
  );
}

export default Root;
