import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Container from "../../Shared/Container";
import { MdOutlineSchedule } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";

const TrainerDetails = () => {
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
  const { availableSlots, experience, image, name, _id,description } = data.data;
  return (
    <div>
      <div className="bg-gray-200">
        <Container>
          <div className="grid grid-cols-2 pt-20 gap-8">
            <div>
              <img src={image} alt="" className="h-[500px]" />
              <h4 className="text-3xl font-bold uppercase py-4">
                <span className="text-secondary">Trainer :</span> {name}
              </h4>
              
            </div>
            <div className="bg-slate-300 p-6">
              <h3 className="text-5xl font-bold text-black">About Trainer</h3>
              <h5 className="">
                <span className="flex gap-1 font-bold text-xl items-center mt-10">
                  Experiance <MdOutlineSchedule /> :
                </span>
                {experience} Year's
              </h5>
              <h5>
                <span className="flex gap-1 font-bold text-xl items-center mt-10">
                  Abilable Slot <IoLocationSharp /> :
                </span>
                {availableSlots}
              </h5>
              <h5>
                {/* {participants} */}
              </h5>
              <h5>
                <span className="flex gap-1 font-bold text-xl items-center mt-10">
                  Duration <GiDuration />:

                </span>
                {/* {classDetail?.duration} */}
              </h5>
              <p className="mt-5">
                {" "}
                <span className="font-bold ">Message : </span>
                Welcome to our exciting fitness class! Whether you're a fitness
                enthusiast or a beginner, our classes cater to all levels. Join
                us for a dynamic and invigorating experience led by our expert
                instructors. Discover a variety of workouts designed to enhance
                your strength, flexibility, and overall well-being. Embrace the
                positive energy and motivation in our state-of-the-art
                facilities.
              </p>
            </div>
          </div>
         
        </Container>
      </div>
    </div>
  );
};

export default TrainerDetails;
