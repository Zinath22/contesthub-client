

import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";



import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const MyWinning = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: contest = [], refetch } = useQuery({
        queryKey: ['manageContest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments');
            return res.data
        }

    });

    // const itemPerPage = 9;
    // const numberOfPages = Math.ceil(contest / itemPerPage);

    // const pages = []
    //          for(let i = 0; i < numberOfPages; i++){
    //       pages.push(i)
    //  }
    // console.log('pp', pages);

    // const pages = [...Arraay(numberOfPages).keys()];

    console.log('asdfgh', contest);

    const filterContest = contest.filter((submission) => submission.email === user?.email);
    const filterWinningContest = filterContest.filter((filterContest) => filterContest.winner === true);
    console.log(12, filterContest);




    // const handleDeleteItem = (item) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             const res = await axiosSecure.delete(`/contest/${item._id}`);
    //             // console.log(res.data);
    //             if (res.data.deletedCount > 0) {
    //                 // refetch to update the ui
    //                 refetch();
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: `${item.tag} has been deleted`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    //             }


    //         }
    //     });
    // }
    return (
        <div>
            <SectionTitle heading={'My Winning Contest'}></SectionTitle>

            <div className="  grid gap-10 grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
               {
                filterWinningContest.map((submission) => <div key={submission._id}>
                                <div className="card  bg-base-100 shadow-xl image-full">
  <figure><img src="https://img.freepik.com/premium-vector/realistic-golden-trophy-with-gold-laurel-wreath-ribbon_48799-147.jpg" alt="Shoes" /></figure>
  <div className="card-body text-teal-400">
    <h2 className="card-title  text-teal-400">Congratulation</h2>
    <p className=" text-teal-400">{submission.email}</p>
    <p className=" text-teal-400">{submission.tag}</p>
    <div className="">
      {
        submission.winner === true ? " winner" :
        <p className="text-xl text-teal-400">{submission.prize}</p>
      }
    </div>
  </div>
</div>
                </div>)
               }
            </div>

        </div>
    );
};

export default MyWinning;