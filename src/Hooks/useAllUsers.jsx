import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const userAllData = axiosSecure.get("/dashboard/users");
      return userAllData;
    },
  });
  return [users, refetch, isPending];
};

export default useAllUsers;
