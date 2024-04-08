import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

function Root() {
  return (
    <>
      <header className="sticky top-0 z-[999999]">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Root;
