import { Link } from "react-router-dom";
import "./Registration.css";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Registration = () => {
  const [isTrue, setTrue] = useState(true);
  const handlePassEye = () => {
      setTrue(!isTrue);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="registrationBg grid justify-center items-center lg:h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 formGlass px-14 py-8 lg:min-w-[500px] h-auto"
      >
        <div>
          <img
            src="https://i.ibb.co/gmynRFK/Untitled-1-removebg-preview.png"
            className="h-[70px] w-[160px]"
            alt=""
          />
          <h4 className="text-3xl font-bold text-white">Registration</h4>
        </div>
        <label className="text-white mt-3 mb-1">User Name</label>
        <input className="input" {...register("username")} />
        <label className="text-white mt-3 mb-1">Upload Photo</label>
        <input className="input" {...register("image")} />
        <label className="text-white mt-3 mb-1">E-mail</label>
        <input className="input" {...register("email")} />
        <label className="text-white mt-3 mb-1">Password</label>
        <div className="relative">
          <input
            type={isTrue ? "password" : "text"}
            className="input w-full"
            {...register("password")}
          />
          <div
            className="absolute right-[15px] top-[15px]"
            onClick={handlePassEye}
          >
            {isTrue ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <input className="input mt-5" type="submit" />
        <h5 className="text-xl text-white mt-2">
          Alreay Have Accound?{" "}
          <Link to={"/login"} className="text-secondary">
            Login
          </Link>
        </h5>
      </form>
    </div>
  );
};

export default Registration;
