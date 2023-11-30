import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { Link } from "react-router-dom";
import DashTitle from "../DashTitle/DashTitle";
import { HiEye } from "react-icons/hi2";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAllUsers from "../../../Hooks/useAllUsers";

const DashApplyTrainer = () => {
  const axiosSecure = useAxiosSecure();
  const [users] = useAllUsers();
  const { data, refetch } = useQuery({
    queryKey: ["dashappyed"],
    queryFn: async () => {
      const allAppliedData = axiosSecure.get("/dashboard/appliedtrainer");
      return allAppliedData;
    },
  });
  refetch()



  const handleMakeTrainer = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to Make Trainer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Trainer?",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/dashboard/trainer/${email}`).then((res) => {
          console.log(res.data);
          refetch();
          Swal.fire({
            title: "Now She/He Trainer",
            text: "This User Is Trainer",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div>
          <div className="m-8">
            {" "}
            <DashTitle Title={"All Applied Trainer"}></DashTitle>
          </div>
          <div>
            <div className="overflow-x-auto m-8">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="grid grid-cols-5 justify-center bg-blue-600 rounded text-white">
                    <th>Name</th>
                    <th>Email </th>
                    <th className="">Age </th>
                    <th className="">Status </th>
                    <th className="">Action </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((item, index) => (
                    <tr key={index} className=" grid grid-cols-5 ">
                      <td>{item.fullname}</td>
                      <td className="">
                      
                        {item.email}</td>
                      <td className="">{item.age}</td>
                      <td>{item.role?"Trainer":<span>Pending</span>}</td>
                      <td className=" text-2xl">
                        <HiEye onClick={() => handleMakeTrainer(item.email)} />
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

export default DashApplyTrainer;
