import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import "./ApplyTrainer.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ApplyTrainer = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    const d = new FormData();
    d.append("image", data.image[0]);

    const res = await axiosPublic.post(image_hosting_api, d);
    console.log(res.data.data.display_url);
    console.log(data);
    const applerInfo = {
      fullname: data.fullname,
      email: user?.email,
      age: data.age,
      image: data.image,
      skill: data.skill,
      day: data.day,
      week: data.week,
      others: data.others,
      };
      

    axiosSecure.post("/user/applytrainer", applerInfo).then((res) => {
      console.log(res.data);
    });
      
      
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
          className="  px-14 py-16 h-auto glass m-8 w-full"
        >
          <div className="grid grid-cols-2 gap-6">
            <input
              placeholder="Full Name"
              className="input"
              {...register("fullname")}
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
              type="file"
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
