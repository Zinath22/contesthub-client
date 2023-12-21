

import Marquee from "react-fast-marquee";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";



import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const AllWinner = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: contest = [], refetch } = useQuery({
        queryKey: ['manageContest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments');
            return res.data
        }

    });

  

    console.log('asdfgh', contest);

    const filterContest = contest.filter((submission) => submission.email === user?.email);
    console.log(12, filterContest);




   
    return (
        <div>
            <SectionTitle heading={'All Winner'}></SectionTitle>

            <div className="  grid gap-10 grid-cols-3 md:grid-cols-1 lg:grid-cols-3 " data-aos="flip-left">
               {
                filterContest.map((submission) => <div key={submission._id}>
     <Marquee pauseOnHover={true} speed={100}>
     <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" >
      <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <img className="w-[320px] h-[320px] mx-auto  " src="https://img.freepik.com/premium-vector/realistic-golden-trophy-with-gold-laurel-wreath-ribbon_48799-147.jpg" />
      </div>
      <div className="p-6 text-center">
        <h4 className="mb-2 block font-sans text-purple-500 text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" >
          {submission.email}
        </h4>
        {submission.winner === true ? "winner" : 
         <p>Congratulation</p>
        }
       
      </div>
     
    </div>
     </Marquee>
                </div>)
               }
            </div>

        </div>
    );
};

export default AllWinner;