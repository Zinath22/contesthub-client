import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { useState } from "react";


const ManageContest = () => {
    // const {creator} = useLoaderData()
    const axiosSecure = UseAxiosSecure();
    const { data: contest = [], refetch } = useQuery({
        queryKey: ['manageContest'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contest');
            return res.data
        }

    });

    // const [itemPerPage, setItemPerPage] = useState(9);

    const itemPerPage = 9;
    const numberOfPages = Math.ceil(contest / itemPerPage);

    const pages = []
             for(let i = 0; i < numberOfPages; i++){
          pages.push(i)
     }
    console.log('pp', pages);

    // const pages = [...Array(numberOfPages).keys()];

    console.log('asdfgh',contest);

    // const handleItemsPerPage = e => {
    //     const val = parseInt(e.target.value);
    //     setItemsPerPage(val);
    //     setCurrentPage(0);
    // }

    // const handlePrevPage = () => {
    //     if (currentPage > 0) {
    //         setCurrentPage(currentPage - 1);
    //     }
    // }

    // const handleNextPage = () => {
    //     if (currentPage < pages.length - 1) {
    //         setCurrentPage(currentPage + 1);
    //     }
    // }
   
    const handleMakeContest = item => {
        axiosSecure.patch(`/contest/creator/${item._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.tag} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


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
            <SectionTitle heading={'Manage Contset'}></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>

                                <th>Contest Type</th>
                                {/* <th>Fee</th> */}
                                <th>Prize</th>
                                <th>Approve</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contest.map((item, index) => <tr key={item._id}>
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
                                        {item.tag}
                                    </td>
                                    {/* <td className="text-right">${item.fee}</td> */}
                                    <td className="text-right">${item.prize}</td>
                                    <td>

                                        {/* {contest.status === 'accepted' ? 'accepted' :
                                            <button
                                                onClick={() => handleMakeContest(item)}
                                                className=" btn m-3 font-semibold underline ">


                                                sdasdf {contest.status}

                                            </button>} */}
                                            <button
                                                onClick={() => handleMakeContest(item)}
                                                className=" btn btn-outline ">


                                                {item.status}

                                            </button>

                                        <Link to={`/dashboard/updateContest/${item._id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-teal-500">
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
            {/* <div className='pagination'>
                <p>Current page: {currentPage}</p>
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select value={itemPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div> */}
        </div>
    );
};

export default ManageContest;