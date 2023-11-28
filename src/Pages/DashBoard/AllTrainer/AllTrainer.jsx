import { Link } from "react-router-dom";
import useTrainerProfile from "../../../Hooks/useTrainerProfile";
import DashTitle from "../DashTitle/DashTitle";

const AllTrainer = () => {
    const [data,isLoading,refetch] = useTrainerProfile()
    return (
      <div>
        <div>
          <div className="m-8">
            {" "}
            <DashTitle Title={"All Trainer"}></DashTitle>
          </div>
          <div>
            <div className="overflow-x-auto m-8">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="grid grid-cols-5 justify-center bg-blue-600 rounded text-white">
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Aviable Slot </th>
                    <th>Status </th>
                    <th>Payment </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.map((item, index) => (
                    <tr
                      key={index}
                      className=" grid grid-cols-5 justify-center"
                    >
                      <td>
                        <img
                          src={item.image}
                          className="w-10 h-10 rounded-full bg-gray-500"
                          alt=""
                        />
                      </td>
                      <td>{item.name}</td>
                      <td className="">{item.availableSlots}</td>
                      <td className="font-bold">
                        Pending
                      </td>
                      <td>
                        <Link
                          to={"/"}
                          className="px-4 py-3 bg-blue-500 text-white font-bold transition-transform duration-300 transform hover:scale-105 hover:bg-secondary"
                        >
                          {" "}
                          Pay
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllTrainer;