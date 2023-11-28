import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTrainerProfile = () => {
     const axiosPublic = useAxiosPublic();
     const { data, isLoading, refetch } = useQuery({
       queryKey: ["trainerprofile"],
       queryFn: async () => {
         try {
           const trainerprofileInfo = await axiosPublic.get(
             "/user/trainerprofile"
           );
           return trainerprofileInfo;
         } catch (error) {
           console.log(error);
         }
       },
     });
    return [data,isLoading,refetch]
};

export default useTrainerProfile;