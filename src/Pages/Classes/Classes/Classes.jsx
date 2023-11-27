import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Container from "../../Shared/Container";
import "./Classes.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import ClassCard from "../ClassCard/ClassCard";

const Classes = () => {
    const axiosSecure = useAxiosSecure()
    const { data,isLoading } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const allClasses = axiosSecure.get("/classes")
            return allClasses
        }
    })
  return (
    <div>
      <div className="classPageBg">
        <h3 className="text-5xl font-bold text-center text-white">
          Our Specialized <span className="text-secondary">Classes</span>
        </h3>
      </div>
      <SectionTitle mainHeading={"All Classes"}></SectionTitle>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 my-20">
          {data?.data.map((classItem) => (
            <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Classes;
