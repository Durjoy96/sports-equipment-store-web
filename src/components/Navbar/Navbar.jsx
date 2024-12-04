import { Link } from "react-router-dom";
import NavPage from "./NavPage";

const Navbar = () => {
  const navbarPages = [
    { path: "/", name: "Home" },
    { path: "/all-sports-equipment", name: "All Sports Equipment" },
    { path: "/add-equipment", name: "Add Equipment" },
    { path: "/my-equipment-list", name: "My Equipment List" },
  ];

  return (
    <>
      <div className="bg-base-100 py-2">
        <div className="navbar max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
              >
                {navbarPages.map((page, idx) => (
                  <NavPage key={idx} page={page}></NavPage>
                ))}
              </ul>
            </div>
            <Link className="text-xl text-primary text-bold">Paraz</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navbarPages.map((page, idx) => (
                <NavPage key={idx} page={page}></NavPage>
              ))}
            </ul>
          </div>
          <div className="navbar-end gap-5">
            <Link
              to="/sign-up"
              className="btn bg-primary text-primary-content border-none shadow-none hover:bg-primary/80"
            >
              Sign Up
            </Link>
            <Link
              to="/sign-in"
              className="btn bg-transparent text-primary border-primary shadow-none hover:bg-primary hover:text-primary-content hover:border-primary"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
