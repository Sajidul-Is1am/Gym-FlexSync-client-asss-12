import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorBg flex justify-center items-center">
      <Link to={'/'} className="btn-accent btn text-4xl font-semibold bg-success rounded-full text-white  ">
        Go Back 
      </Link>
    </div>
  );
};

export default ErrorPage;
