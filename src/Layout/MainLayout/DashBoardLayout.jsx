import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const DashBoardLayout = () => {
  const [isAdmin, isAdminLoading, refetch] = useAdmin();

  // const role = isAdmin?.data?.role;

  // if (isAdminLoading) {
  //   <span className="loading loading-dots loading-lg text-8xl flex justify-center items-center h-screen mx-auto"></span>;
  // }
  // if (!role) {
  //   return (
  //     <span className="loading loading-dots loading-lg text-8xl flex justify-center items-center h-screen mx-auto"></span>
  //   );
  // }



  return (
    <div className="">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-3 bg-base-200">
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
                {/* Sidebar content here */}
                {isAdmin?.data?.role === "admin" ? (
                  <>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard"}>Admin Home</Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard/allusers"}>All User</Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard/allsubscriber"}>
                        All subscribers
                      </Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard/alltrainer"}>All Trainer</Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard/appliedtrainer"}>Applied Trainer</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard"}>Trainer Home</Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard/allsubscriber"}>
                        All subscribers
                      </Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard/alltrainer"}>Manage Slots</Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard"}> Manage member</Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard"}> Add new Forum</Link>
                    </li>
                    <li className="bg-gray-300 rounded">
                      <Link to={"/dashboard"}> Add new Class</Link>
                    </li>
                  </>
                )}
                <div className="divider"></div>
                <li className="bg-gray-300 rounded">
                  <Link to={"/"}>Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-9 bg-gray-300">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
