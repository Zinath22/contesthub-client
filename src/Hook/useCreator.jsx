import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";


const useCreator = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
   const {data: isCreator, isPending: isCreatorLoading} = useQuery({
   queryKey: [user?.email, 'isCreator'],
   queryFn: async() => {
   const res = await axiosSecure.get(`/users/creator/${user.email}`);
   console.log(res.data);
   return res.data?.creator;
   }
   })
   return [isCreator, isCreatorLoading]
};

export default useCreator;