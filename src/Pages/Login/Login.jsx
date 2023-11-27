import "../Registration/Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();

  const { handleLogin, handleGoogleLogin } = useAuth();
  const handleGoogle = () => {
    handleGoogleLogin();
    toast.success("succesfully Login");
    navigate('/')
  };

  const [isTrue, setTrue] = useState(true);
  const handlePassEye = () => {
    setTrue(!isTrue);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    handleLogin(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
        toast.success("Successfully Login!");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
    console.log(data);
  };
  return (
    <div className="registrationBg grid justify-center items-center lg:h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 formGlass p-16  lg:min-w-[500px]  lg:mt-10"
      >
        <div>
          <img
            src="https://i.ibb.co/gmynRFK/Untitled-1-removebg-preview.png"
            className="h-[70px] w-[160px]"
            alt=""
          />
          <h4 className="text-3xl font-bold text-white">Login</h4>
        </div>
        <label className="text-white mt-3 mb-2">E-mail</label>
        <input className="input" {...register("email")} />
        <label className="text-white mt-3 mb-2">Password</label>
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
          Don't Have Any Accound?{" "}
          <Link to={"/registration"} className="text-secondary">
            Registration
          </Link>
        </h5>
      </form>
      <button
        onClick={handleGoogle}
        className="btn btn-outline btn-accent text-2xl "
      >
        Google <FcGoogle className="text-3xl" />
      </button>
    </div>
  );
};

export default Login;
