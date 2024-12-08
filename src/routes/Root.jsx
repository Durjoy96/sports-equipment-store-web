import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Root = () => {
  const { darkMode } = useContext(authContext);
  return (
    <>
      <header className="z-50">
        <Navbar></Navbar>
      </header>
      <main className={`z-10 px-5 ${darkMode ? "dark" : ""}`}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Root;
