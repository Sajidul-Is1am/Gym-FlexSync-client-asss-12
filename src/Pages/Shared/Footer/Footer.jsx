import { Link } from "react-router-dom";
import Container from "../Container";
import { FaFacebookF, FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white">
      <Container>
        <footer className="footer p-10  text-base-content">
          <aside>
            <img
              src="https://i.ibb.co/gmynRFK/Untitled-1-removebg-preview.png"
              className="h-[60px] w-[130px]"
              alt=""
            />
            <p>
              <span className="font-semibold">FlexSync.com</span>
              <br />
              Empowering Innovation with Cutting-Edge Technology Since 1992
            </p>
          </aside>
          <nav>
            <header className="footer-title">Our Services</header>
            <a className="link link-hover">Fitness Plans</a>
            <a className="link link-hover">Nutrition Guidance</a>
            <a className="link link-hover">Workout Programs</a>
            <a className="link link-hover">Health Challenges</a>
          </nav>
          <nav>
            <header className="footer-title">Address</header>
            <p className="address">
              Fitness Tracker HQ <br /> 123 Wellness Street Health <br /> City, Fitland ZIP:
              12345
            </p>
          </nav>
          <nav>
            <header className="footer-title">Contact Us</header>
            <div className="grid grid-flow-col gap-4">
              <Link to={"/"}>
                <FaFacebookF className="text-xl" />
              </Link>
              <Link to={"/"}>
                <FaYoutube className="text-xl" />
              </Link>
              <Link to={"/"}>
                <FaLinkedin className="text-xl" />
              </Link>
              <Link to={"/"}>
                <FaPhone className="text-xl" />
              </Link>
            </div>
          </nav>
        </footer>
      </Container>
      <aside className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2023 - All right reserved by flexsync.com</p>
      </aside>
    </div>
  );
};

export default Footer;
