import { useQuery } from "@tanstack/react-query";
import SubTable from "./SubTable";
import DashTitle from "../DashTitle/DashTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllSubscribe = () => {
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["allsubscriber"],
    queryFn: async () => {
      const AllSubscribeData = await axiosSecure.get("/dashboard/subscriber");
      return AllSubscribeData;
    },
  });
  return (
    <div>
      <div className="m-8">
        {" "}
        <DashTitle Title={"All Subscribers"}></DashTitle>
      </div>
      <div>
        <div className="overflow-x-auto m-8">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="grid grid-cols-4 justify-center bg-blue-600 rounded">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item, index) => (
                <SubTable key={item._id} item={item} index={index}></SubTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSubscribe;
