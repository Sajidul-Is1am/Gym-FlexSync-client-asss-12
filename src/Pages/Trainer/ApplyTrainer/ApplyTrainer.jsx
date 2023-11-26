import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import './ApplyTrainer.css'

const ApplyTrainer = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  // const navigate = useNavigate();
  // const axiosSecure = useAxiosSecure();
  const onSubmit = (data) => {
    const userInfo = {
      email: data?.email,
      username: data?.username,
      image: data?.image,
    };
  };
  return (
    <div className="bg-black bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-95% ...">
      <div className="applyBg">
        <h2 className="text-5xl font-bold text-white text-center">
          Be a <span className="text-secondary">Trainer</span>
        </h2>
      </div>
      <div className=" grid justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  px-14 py-8 h-auto glass m-8 w-full"
        >
          <div className="grid grid-cols-2 gap-6">
            <input
              placeholder="Full Name"
              className="input"
              {...register("username")}
            />
            <input
              defaultValue={user?.email}
              readOnly
              className="input"
              {...register("email")}
            />
            <input
              placeholder="Age"
              type="number"
              className="input"
              {...register("age")}
            />
            <input
              placeholder="Profile Image"
              className="input w-full"
              {...register("image")}
            />
            <input
              placeholder="You Skill"
              className="input w-full" // TODO : Need chackbox
              {...register("skill")}
            />
            <input
              placeholder="Available Time in a week"
              className="input w-full"
              {...register("week")}
            />
            <input
              placeholder="Available time in a day"
              className="input w-full"
              {...register("day")}
            />
            <input
              placeholder="others"
              className="input w-full" //TODO:
              {...register("others")}
            />
            <input
              className="input mt-5 cursor-pointer col-span-2"
              type="submit"
              value={"Apply"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyTrainer;
