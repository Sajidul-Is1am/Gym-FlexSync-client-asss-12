import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const ClassDetails = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams()
     const { data, isLoading } = useQuery({
       queryKey: ["classDetails"],
       queryFn: async () => {
         const classDetails = axiosSecure.get(`/classes/${id}`);
         return classDetails;
         },
        });
        console.log(data.data);
    return (
        <div>
            
        </div>
    );
};

export default ClassDetails;