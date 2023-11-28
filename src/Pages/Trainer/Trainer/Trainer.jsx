import "./Trainer.css";
import "../../Home/Team/Team.css";
import Container from "../../Shared/Container";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TrainerCard from "./TrainerCard";
import BeATrainer from "../BeATrainer/BeATrainer";
import useTrainerProfile from "../../../Hooks/useTrainerProfile";
import { Helmet } from "react-helmet";


const Trainer = () => {
  const [data,isLoading,refetch] = useTrainerProfile()
  // const axiosPublic = useAxiosPublic();

  // const { data, isLoading, refetch } = useQuery({
  //   queryKey: ["trainerprofile"],
  //   queryFn: async () => {
  //     try {
  //       const trainerprofileInfo = await axiosPublic.get("/user/trainerprofile");
  //       return trainerprofileInfo;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // });
  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg text-8xl flex justify-center items-center h-screen mx-auto"></span>
    );
  }
  return (
    <div className="bg-gray-200 py-10">
      <Helmet>
        <title>Trainer || FlexSync</title>
      </Helmet>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {data?.data?.map((trainer) => (
            <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>
          ))}
        </div>
        <div>
          <BeATrainer></BeATrainer>
        </div>
      </Container>
    </div>
  );
};

export default Trainer;
