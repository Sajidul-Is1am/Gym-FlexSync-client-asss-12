import { FaFacebook, FaPhoneVolume, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Trainer.css";
import "../Home/Team/Team.css";
import Container from "../Shared/Container";
const Trainer = () => {
    
  return (
    <div className="bg-gray-200 py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div>
            <div className="teamCard relative">
              <img src="https://i.ibb.co/sC3h5nv/Team-01.png" alt="" />
              <div className="overlay">
                <h1 className="text-h1">DAVE WOOD </h1>
                <h1 className="absolute top-0 right-0 bg-orange-400 p-2">
                  <span className="font-bold">exp:</span>
                  <br />5 Year's
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
                    Avilable Slot :
                  </h4>
                </div>
              </div>
            </div>
            <Link className="cursor-pointer" to={"/"}>
              <div className="trainerBottomInfo cursor-pointer">
                <h4 className="text-2xl font-bold w-full bg-orange-400 rounded text-center btn text-white">
                  Know More
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Trainer;
