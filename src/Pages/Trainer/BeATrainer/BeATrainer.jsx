import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Container from "../../Shared/Container";
import "./BeaTrainer.css";
const BeATrainer = () => {
  return (
    <div className="py-10">
      <SectionTitle
        subHeading={"Apply"}
        mainHeading={"Be a Trainer"}
      ></SectionTitle>

      <Container>
        <div className="beATrainer">
          <Link to={"/user/applytrainer"}>
            <h2 className="text-5xl font-bold text-center text-white p-6 outline outline-white max-w-lg mx-auto hover:bg-rose-600 hover:outline-white transition duration-300 ease-in-out cursor-cell">
              Become A <span className="text-secondary">Trainer</span>
            </h2>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default BeATrainer;
