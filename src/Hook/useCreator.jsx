import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "./useAxiosPublic/useAxiosPublic";



const useCreator = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: isCreator, isPending: isCreatorLoading } = useQuery({
        queryKey: [user?.email, 'isCreator'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/creator/${user.email}`);
            console.log(res.data);
            return res.data?.creator;
        }
    })
    return [isCreator, isCreatorLoading]
};

export default useCreator;