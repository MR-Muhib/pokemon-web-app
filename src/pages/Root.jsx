import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <>
      <div className="sticky top-0 z-20 ">
        <Navbar />
      </div>

      <div className="">
        <Outlet />
      </div>

      <div>{/* <Footer /> */}</div>
    </>
  );
};

export default Root;
