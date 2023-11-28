import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
    const {user} = useAuth()
    const { data } = useQuery({
        queryKey: ['isAdmin', user.email],
        queryFn: async () => {
            
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default useAdmin;