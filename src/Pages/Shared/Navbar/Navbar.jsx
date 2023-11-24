import { NavLink } from "react-router-dom";
import Container from "../Container";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </li>
      <li>
        <NavLink to={"/trainer"}>Trainer</NavLink>
      </li>
      <li>
        <NavLink to={"/classes"}>Classes</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/forums"}>Forums</NavLink>
      </li>
      <li>
        <NavLink to={"/registration"}>Registration</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#1d232a]">
      <Container>
        <div className="navbar text-white py-6 ">
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
                {navItem}
              </ul>
            </div>
            <a className=" text-xl">
              <img
                src="https://i.ibb.co/gmynRFK/Untitled-1-removebg-preview.png"
                className="h-[60px] w-[130px]"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-secondary text-black">Profile</a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
