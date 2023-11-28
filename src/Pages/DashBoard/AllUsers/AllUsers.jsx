import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import DashTitle from "../DashTitle/DashTitle";
import useAdmin from "../../../Hooks/useAdmin";
import useAllUsers from "../../../Hooks/useAllUsers";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { user } = useAuth()
  const [isAdmin] = useAdmin();
  console.log(isAdmin?.data?.role);
  const axiosSecure = useAxiosSecure();
  const [users, refetch, isPending] = useAllUsers();
  const handleUserRole = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to Make Admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin?",
    }).then((result) => {
      if (result.isConfirmed) {
         axiosSecure.patch(`/dashboard/admin/${email}`).then((res) => {
           console.log(res.data);
           refetch();
           Swal.fire({
             title: "Now She/He Admin",
             text: "This User Is Admin",
             icon: "success",
           });
         });
        
      }
    });
   
  };
  //   const role = isAdmin?.data?.role;
  //   if (role) {
  //     return (
  //       <span className=" text-8xl flex justify-center items-center h-screen mx-auto">
  //         Error
  //       </span>
  //     );
  //   }
  if (isPending) {
    return (
      <span className="loading loading-dots loading-lg text-8xl flex justify-center items-center h-screen mx-auto"></span>
    );
  }
  return (
    <div>
      <div>
        <div>
          <div className="m-8">
            {" "}
            <DashTitle Title={"All Users"}></DashTitle>
          </div>
          <div>
            <div className="overflow-x-auto m-8">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="grid grid-cols-4 justify-center bg-blue-600 rounded text-white">
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email </th>
                    <th className="text-center">Role </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.data?.map((item, index) => (
                    <tr
                      key={index}
                      className=" grid grid-cols-4 justify-center"
                    >
                      <td>
                        <img
                          src={item.image}
                          className="w-10 h-10 rounded-full bg-gray-500"
                          alt=""
                        />
                      </td>
                      <td>{item.username}</td>
                      <td className="">{item.email}</td>
                      <td className="font-bold text-center">
                        {isAdmin?.data?.role === 'admin' && item.email === user.email? (
                          "Admin"
                        ) : (
                          <Link
                            onClick={() => handleUserRole(item.email)}
                            className="py-3 px-4 bg-secondary text-white rounded"
                          >
                            User
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
