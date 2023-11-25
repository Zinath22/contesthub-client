import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";



const useCart = () => {
    // tan stack query 
    const axiosSecure = UseAxiosSecure();
    const {data: contest} = useQuery({
 queryKey: ['contest'],
 queryFn: async () => {
    const res = await axiosSecure.get('/contest')
    return res.data;
 }
    })
    return [contest]
};

export default useCart;