import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

function Root() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </>
  );
}

export default Root;
