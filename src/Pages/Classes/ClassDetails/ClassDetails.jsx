import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import Container from "../../Shared/Container";
import { MdOutlineSchedule } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

const ClassDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["classDetails"],
    queryFn: async () => {
      const classDetails = axiosSecure.get(`/classes/${id}`);
      return classDetails;
    },
  });
  const classDetail = data?.data;
  return (
    <div className="bg-gray-200">
      <Container>
        <div className="grid grid-cols-2 pt-20 gap-8">
          <div>
            <img src={classDetail?.image} alt="" />
            <h4 className="text-3xl font-bold uppercase py-4">
              <span className="text-secondary">Class Name :</span>{" "}
              {classDetail?.name}
            </h4>
            <p className="text-justify">
              <span className="font-bold">Class Description :</span>{" "}
              {classDetail?.description}
            </p>
          </div>
          <div className="bg-slate-300 p-6">
            <h3 className="text-5xl font-bold text-black">About the Class</h3>
            <h5>
              <span className="flex gap-1 font-bold text-xl items-center mt-10">
                Schedule <MdOutlineSchedule /> :
              </span>
              {classDetail?.schedule}
            </h5>
            <h5>
              <span className="flex gap-1 font-bold text-xl items-center mt-10">
                Location <IoLocationSharp /> :
              </span>
              {classDetail?.location},Yoga Studio, Park
            </h5>
            <h5>
              <span className="flex gap-1 font-bold text-xl items-center mt-10">
                Participants <FaPeopleGroup /> :
              </span>
              {classDetail?.participants}
            </h5>
            <h5>
              <span className="flex gap-1 font-bold text-xl items-center mt-10">
                Duration <GiDuration />:
              </span>
              {classDetail?.duration}
            </h5>
            <p className="mt-5">
              {" "}
              <span className="font-bold ">Message : </span>
              Welcome to our exciting fitness class! Whether you're a fitness
              enthusiast or a beginner, our classes cater to all levels. Join us
              for a dynamic and invigorating experience led by our expert
              instructors. Discover a variety of workouts designed to enhance
              your strength, flexibility, and overall well-being. Embrace the
              positive energy and motivation in our state-of-the-art facilities.
            </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <Link
            to={"/trainer"}
            className="btn w-1/4 mt-10 mb-20  bg-secondary text-white"
          >
            Join Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ClassDetails;
