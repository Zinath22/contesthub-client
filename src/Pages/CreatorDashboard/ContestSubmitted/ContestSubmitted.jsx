import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hook/UseAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
// import usePayments from "../../../Hook/usePayments";

const ContestSubmitted = () => {
    // const [, refetch ] = usePayments()
  const { id } = useParams();
  const [payments, setPayments] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axiosSecure.get('/payments');
        // Assuming the payment data is an array in the response
        setPayments(response.data);
        
      } catch (error) {
        console.error("Error fetching payments:", error);
      }
    };

    fetchPayments();
  }, [axiosSecure]);


  const filterPayments = payments.filter((item) => item.contest_id === id);
//   const payment = filterPayments[0]._id
  console.log(2345678,filterPayments);

  const handleMakeWinner = submission => {
    axiosSecure.patch(`/payments/winner/${submission._id}`)
        .then(res => {
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                // refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${submission.email} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                })
                location.reload()
            }
        })
}

  return (
    <div>
    <SectionTitle heading={'Submitted Contset'}></SectionTitle>

    <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Select</th>
                                {/* <th>Delete</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterPayments.map((submission, index) => <tr key={submission._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={submission.imageURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {submission.name}
                                    </td>
                                    <td>
                                        {submission.email}
                                    </td>
                                    <td>
                                        {submission.tag}
                                    </td>
                                    {/* <td className="text-right">${item.price}</td> */}
                                    <td>
                                 {submission.winner === true ? "winner"  : <button
                                                onClick={() => handleMakeWinner(submission)}
                                                className=" btn m-3 btn-outline ">

                                Select
                                </button> }
                                    </td>
                                    <td>
                                       
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

export default ContestSubmitted;
