import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ClickToTop from "../components/clicktop/ClickToTop";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
AOS.init();
function Root() {
  // after location change page is scroll top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
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
