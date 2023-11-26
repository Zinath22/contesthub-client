// import { useContext } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import useCart from "../../../Hook/useCart";
// // import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
// // import { useLoaderData } from "react-router-d6
// import usePayments from "../../../Hook/usePayments";


// const RegContest = () => {
//     const [payments] = usePayments();
//     const {user} = useContext(AuthContext);

//     console.log('asdfghjk',payments,user);
//     const filteredPayments = payments.filter(payment => payment.email === user.email);
//     console.log('ASDFGHJKJHGFDSASDFGH',filteredPayments);
//     // console.log(contest);
//     // const axiosSecure = UseAxiosSecure();
//     // const filteredContests = contest.filter(item => item.email === user.email);

//     // const details = useLoaderData();

//     return (
// //         <div>
// //              <div>
// //            <div className="flex justify-evenly mb-8">
// //            {/* <h2 className="text-4xl">Register Contest: {contest.contest_name}</h2> */}
// //            <h2 className="text-4xl">Total Price: </h2>

// //            {/* {cart.length ? <Link to="/dashboard/payment">
// //                     <button className="btn btn-primary">Pay</button>
// //                 </Link>:
// //                 <button disabled className="btn btn-primary">Pay</button>
// //                 } */}


// //            </div>

// //            <div className="overflow-x-auto ">
// //   <table className="table w-full">
// //     {/* head */}
// //     <thead>
// //       <tr className="bg-gray-200">
// //         <th >
// //          #
// //         </th>
// //         {/* <th>Image</th> */}
// //         <th>Name</th>
// //         {/* <th>Price</th> */}
// //         <th>Registration</th>
// //         <th></th>
// //       </tr>
// //     </thead>
// //     <tbody>

// //                  {/* {

// //                 ((item, index) =>  <tr key={item._id}> */}
// //                     <th>
// //                      {/* {index + 1} */}
// //                     </th>
// //                     <td>
// //                       <div className="flex items-center gap-3">
// //                         <div className="avatar">
// //                           <div className="mask mask-squircle w-12 h-12">
// //                             {/* <img src={item.image} alt="Avatar Tailwind CSS Component" /> */}
// //                           </div>
// //                         </div>

// //                       </div>
// //                     </td>
// //                     <td>

// //                       {/* {details.contest_name} */}
// //                     </td>
// //                     {/* <td>${item.price}</td> */}
// //                     <th>

// //                     </th>
// //                   {/* </tr> )
// //                  } */}



// //     </tbody>


// //   </table>
// // </div>

// //         </div>
// //         </div>
//     );
// };

// export default RegContest;
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import usePayments from "../../../Hook/usePayments";

const RegContest = () => {
  const [payments] = usePayments();
  const { user } = useContext(AuthContext);

  // Filter payments based on user email
  const filteredPayments = payments ? payments.filter(payment => payment?.email === user?.email) : [];
  console.log(filteredPayments);

  return (
    <div className="w-[90%] mx-auto ">
    <h1 className="my-7 text-center text-lg ">Total Data:{filteredPayments.length}</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 ">
    {filteredPayments?.map((items) => {
      console.log(items);
      return (
        <div key={items._id} className=" shadow-xl rounded-lg p-4" >
          {/* <img src={items?.myContest.imgyyy} alt="" /> */}
          <h1 className="text-center py-7">Added By: {user.email}</h1>
          <h1 className="text-teal-500 text-center">Contest Name: {items?.myContest?.contest_name}</h1>
          <h1 className="text-teal-500 text-center">Prize: {items?.myContest?.prize}</h1>
        </div>
      );
    })}
    </div>
  </div>
  

  );
};

export default RegContest;
