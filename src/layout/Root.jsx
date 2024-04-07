import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div>Root</div>
      <Outlet></Outlet>
    </>
  );
}

export default Root;
