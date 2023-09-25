import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
const Header = () => {
  const links = (
    <div className="flex gap-3 flex-col lg:flex-row">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#FF444A] font-bold underline"
            : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/donation"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#FF444A] font-bold underline"
            : ""
        }
      >
        Donation
      </NavLink>

      <NavLink
        to="/statistics"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#FF444A] font-bold underline"
            : ""
        }
      >
        Statistics
      </NavLink>
    </div>
  );
  return (
    <div className="container mx-auto py-3 md:px-5">
      <div className="navbar bg-base-100 bg-opacity-60">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <img className="h-16" src={logo} alt="" />
        </div>
        <div className="navbar-center navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
