import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";



const useCart = () => {
    // tan stack query 
    const axiosSecure = UseAxiosSecure();
    const {data: cart} = useQuery({
 queryKey: ['cart'],
 queryFn: async () => {
    const res = await axiosSecure.get('/cart')
    return res.data;
 }
    })
    return [cart]
};

export default useCart;