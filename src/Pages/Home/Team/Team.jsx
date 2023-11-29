import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Container from "../../Shared/Container";
import { FaFacebook, FaTwitter, FaPhoneVolume } from "react-icons/fa";
import './Team.css'
import { Link } from "react-router-dom";
const Team = () => {
  return (
    <div className=" text-white pb-20 teamBg">
      <Container>
        <SectionTitle
          subHeading={"our team "}
          mainHeading={"Meet Our Trainers"}
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div data-aos="zoom-out" className="teamCard">
            <img src="https://i.ibb.co/sC3h5nv/Team-01.png" alt="" />
            <div className="overlay">
              <h1 className="text-h1">DAVE WOOD </h1>
              <a className="link-a">Owner & Trainner</a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaFacebook />
                  </Link>
                </div>
              </a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaTwitter />
                  </Link>
                </div>
              </a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaPhoneVolume />
                  </Link>
                </div>
              </a>
            </div>
          </div>
          <div data-aos="zoom-out" className="teamCard">
            <img src="https://i.ibb.co/qpRbv11/Team-02.png" alt="" />
            <div className="overlay">
              <h1 className="text-h1">CATHERINE</h1>
              <a className="link-a">Trainner</a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaFacebook />
                  </Link>
                </div>
              </a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaTwitter />
                  </Link>
                </div>
              </a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaPhoneVolume />
                  </Link>
                </div>
              </a>
            </div>
          </div>
          <div data-aos="zoom-out" className="teamCard">
            <img src="https://i.ibb.co/bJD7sc6/Team-03.png" alt="" />
            <div className="overlay">
              <h1 className="text-h1">DAVE WOOD Owner</h1>
              <a className="link-a">& Trainner</a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaFacebook />
                  </Link>
                </div>
              </a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaTwitter />
                  </Link>
                </div>
              </a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaPhoneVolume />
                  </Link>
                </div>
              </a>
            </div>
          </div>
          <div data-aos="zoom-out" className="teamCard">
            <img src="https://i.ibb.co/VYfytth/Team-04.png" alt="" />
            <div className="overlay">
              <h1 className="text-h1">DAVE WOOD Owner</h1>
              <a className="link-a">& Trainner</a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaFacebook />
                  </Link>
                </div>
              </a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaTwitter />
                  </Link>
                </div>
              </a>
              <a className="link-a text-5xl" href="#">
                {" "}
                <div className="socialHover">
                  <Link to={"/"}>
                    <FaPhoneVolume />
                  </Link>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;

// https://i.ibb.co/sC3h5nv/Team-01.png
