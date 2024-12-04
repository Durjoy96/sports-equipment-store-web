import { NavLink } from "react-router-dom";

const NavPage = ({ page }) => {
  const { path, name } = page;
  return (
    <>
      <li>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `btn bg-transparent border-none shadow-none hover:bg-transparent min-h-8 h-8 lg:min-h-12 lg:h-12 ${
              isActive
                ? "text-primary font-bold hover:text-primary/80"
                : "text-base-content-secondary font-normal hover:text-primary"
            }`
          }
        >
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default NavPage;
