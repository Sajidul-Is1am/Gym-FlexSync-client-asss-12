import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useAdmin = () => {
  const axiosSecure = useAxiosSecure()
  const { user } = useAuth();
  const {
    data: isAdmin,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["makesureAdmin"],
    queryFn: async () => {
      const  isAdminUser = await  axiosSecure.get(`/dashboard/user/${user?.email}`);
      return isAdminUser;
    },
  });
  return [isAdmin, isPending];
};

export default useAdmin;
