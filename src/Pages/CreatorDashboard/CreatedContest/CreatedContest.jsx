

import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const CreatedContest = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const { data: contest = [], refetch } = useQuery({
        queryKey: ['manageContest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contest');
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

    const filterContest = contest.filter((item) => item.email === user?.email);
    console.log(12, filterContest);

   


    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/contest/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.tag} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }
    return (
        <div>
            <SectionTitle heading={'Created Contset'}></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>

                                <th></th>
                                <th>Contest Type</th>
                                <th>Prize</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Approve</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterContest.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">

                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {item.contest_name}
                                    </td>
                                    {/* <td className="text-right">${item.fee}</td> */}

                                    <td className="text-right">${item.prize}</td>

                                    <td >
                                       
                                            {item.status === 'accepted'? <h1 className="text-green-500">{item.status}</h1> : <h1 className="text-orange-500">{item.status}</h1> }
                                       
                                    </td>

                                    <td>
                                        {
                                            item.status === "accepted" ? 
                                            <Link to={`/dashboard/updateContest/${item._id}`}>
                                            <button
                                                className="btn btn-ghost  bg-teal-500" disabled>
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link> 

                                        : 
                                        <Link to={`/dashboard/updateContest/${item._id}`}>
                                            <button
                                                className="btn btn-info ">
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link> 
                                        }
                                    </td>
                                    <td>
                                         {
                                            item.status === "accepted" ? 
                                            <button
                                            className="btn btn-ghost  bg-teal-500" disabled>
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                        : 
                                        <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                        
                                        }
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/submittedContest/${item._id}`}><button className="btn bg-teal-500">Submission</button></Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                   
                </div>
            </div>
        </div>
    );
};

export default CreatedContest;