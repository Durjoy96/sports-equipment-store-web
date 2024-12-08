import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="px-5">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
