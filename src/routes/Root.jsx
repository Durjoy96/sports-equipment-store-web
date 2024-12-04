import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <header className="">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
