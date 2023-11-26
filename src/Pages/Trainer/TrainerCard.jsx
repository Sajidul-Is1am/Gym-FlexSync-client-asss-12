/* eslint-disable react/prop-types */
import { FaFacebook, FaPhoneVolume, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Trainer.css";
import "../Home/Team/Team.css";
import { GiSkills } from "react-icons/gi";

const TrainerCard = ({ trainer }) => {
    const { availableSlots, experience, image ,name} = trainer;
  return (
    <div>
      <div>
        <div className="teamCard relative">
          <img src="https://i.ibb.co/sC3h5nv/Team-01.png" alt="" />
          <div className="overlay">
            <h1 className="text-h1">{name} </h1>
            <h1 className="absolute top-0 right-0 bg-secondary p-2">
              <span className="font-bold flex items-center gap-1">
                <GiSkills className="text-secondary" />
                exp:
              </span>
              {experience}Year's
            </h1>
            <a className="link-a">Owner & Trainner</a>

            <a className="link-a text-5xl">
              {" "}
              <div className="socialHover">
                <Link to={"/"}>
                  <FaFacebook />
                </Link>
              </div>
            </a>
            <a className="link-a text-5xl">
              {" "}
              <div className="socialHover">
                <Link to={"/"}>
                  <FaTwitter />
                </Link>
              </div>
            </a>
            <a className="link-a text-5xl">
              {" "}
              <div className="socialHover mb-4">
                <Link to={"/"}>
                  <FaPhoneVolume />
                </Link>
              </div>
            </a>
            <div className="absolute overflow-ellipsis">
              <h4 className="text-2xl   font-bold p-2 bg-blue-950 rounded  text-white">
                Avilable Slot : {availableSlots}
              </h4>
            </div>
          </div>
        </div>
        <Link className="cursor-pointer" to={"/"}>
          <div className="trainerBottomInfo cursor-pointer">
            <h4 className="text-2xl font-bold w-full bg-secondary rounded text-center btn text-white">
              Know More
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrainerCard;
