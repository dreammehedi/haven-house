import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

function Root() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <header className="sticky top-0 z-[9999]">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Root;
