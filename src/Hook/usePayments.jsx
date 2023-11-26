import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";




const usePayments = () => {
    // tan stack query 
    const axiosSecure = UseAxiosSecure();
    const {data: payments} = useQuery({
 queryKey: ['payments'],
 queryFn: async () => {
    const res = await axiosSecure.get('/payments')
    return res.data;
 }
    })
    return [payments]
};

export default usePayments;