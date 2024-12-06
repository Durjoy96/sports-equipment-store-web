import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="px-5">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;
