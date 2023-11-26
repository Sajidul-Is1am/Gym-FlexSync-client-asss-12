import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const TrainerDetails =  () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ["trainerprofile"],
    queryFn: async () => {
      try {
        const trainerDetails = await axiosPublic.get(
          `/user/trainerprofile/${id}`
        );
        return trainerDetails;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isLoading) {
      return (
          <span className="loading loading-dots loading-lg text-8xl flex justify-center items-center h-screen mx-auto"></span>
          );
        }
        const { availableSlots, experience, image, name, _id } = data.data;
  return (
    <div>
          <p>{name}</p>
          <img src={ image} alt="" />
    </div>
  );
};

export default TrainerDetails;
