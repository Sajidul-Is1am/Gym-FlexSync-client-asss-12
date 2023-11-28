import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import { Link } from "react-router-dom";
import DashTitle from "../DashTitle/DashTitle";
import { HiEye } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

const DashApplyTrainer = () => {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["dashappyed"],
    queryFn: async () => {
      const allAppliedData = axiosSecure.get("/dashboard/appliedtrainer");
      return allAppliedData;
    },
  });

  console.log(data?.data);
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
                  <tr className="grid grid-cols-4 justify-center bg-blue-600 rounded text-white">
                    <th>Name</th>
                    <th>Email </th>
                    <th className="">Age </th>
                    <th className="">Action </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((item, index) => (
                    <tr key={index} className=" grid grid-cols-4 ">
                      <td>{item.fullname}</td>
                      <td className="">{item.email}</td>
                      <td className="">{item.age}</td>
                      <td className=" text-2xl">
                        <HiEye
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                        />
                      </td>
                      <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                          <div className="card card-compact ">
                            <figure>
                              <img
                                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                              />
                            </figure>
                            <div className="card-body">
                              <h2 className="card-title">{item.fullname}</h2>
                              <p>Sill : {item.skill}</p>
                              <p>Age : {item.skill}</p>
                              <div className="card-actions justify-end">
                                <button className="btn btn-primary">
                                  Confirm
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">
                                <IoCloseSharp />
                              </button>
                            </form>
                          </div>
                        </div>
                      </dialog>
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
