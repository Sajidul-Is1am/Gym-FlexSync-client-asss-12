import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./Booked.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import PackageCard from "./PackageCard";
import Container from "../../Shared/Container";

const Booked = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const packages = axiosSecure.get("/user/packages");
      return packages;
    },
  });
  console.log(data?.data);
  return (
    <div className="">
      <div className="bookedBg">
        <h2 className="text-white font-bold text-5xl text-center">
          Trainer <span className="text-secondary">Booked</span>
        </h2>
      </div>
      <SectionTitle
        mainHeading={"Our Package"}
        subHeading={"Get Plans"}
      ></SectionTitle>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-10">
          {data?.data.map((pack) => (
            <PackageCard key={pack._id} pack={pack}></PackageCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Booked;
