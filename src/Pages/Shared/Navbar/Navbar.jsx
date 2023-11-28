import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user);
  const navItem = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/gellery"}>Gallery</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/trainer"}>Trainer</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/classes"}>Classes</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to={"/forums"}>Forums</NavLink>
        </li>
      )}
      {user ? (
        <li className="md:flex hidden" onClick={logOut}>
          <Link>LogOut</Link>
        </li>
      ) : (
        <li className="md:flex hidden">
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
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
                className="menu menu-sm dropdown-content mt-3 z-[20] space-y-3 p-2 shadow bg-black rounded-box w-52"
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
            <ul className="menu menu-horizontal px-1 font-semibold">{navItem}</ul>
          </div>
          <div className="hidden md:flex navbar-end">
            <div className="avatar  placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-10">
                <span className="text-xl">
                  {user ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <img
                      src="https://i.ibb.co/kJx1vTN/4068249-200.png"
                      alt=""
                    />
                  )}
                </span>
              </div>
            </div>
          </div>
          {/* mobile resposive bottom */}
          <div className="md:hidden navbar-end">
            {user ? (
              <details className="dropdown">
                <summary className="uppercase">{user?.displayName}</summary>
                <ul className="p-2 shadow menu dropdown-content z-[20] rounded-box w-40 mt-1 grid justify-center -ml-20 ">
                  <li>
                    <div className="avatar  placeholder">
                      <div className="bg-neutral text-neutral-content rounded-full w-10">
                        <span className="text-xl">
                          <img src={user?.photoURL} alt="" />
                        </span>
                      </div>
                    </div>
                  </li>
                  {user ? (
                    <li className="text-secondary" onClick={logOut}>
                      <Link>LogOut</Link>
                    </li>
                  ) : (
                    <li>
                      <NavLink to={"/login"}>Login</NavLink>
                    </li>
                  )}
                </ul>
              </details>
            ) : (
              <li className="text-secondary list-none" onClick={logOut}>
                <NavLink to={'/login'}>Login</NavLink>
              </li>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
