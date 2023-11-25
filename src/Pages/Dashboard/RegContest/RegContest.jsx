import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../Hook/useCart";
// import UseAxiosSecure from "../../../Hook/UseAxiosSecure";
import { useLoaderData } from "react-router-dom";


const RegContest = () => {
    const [contest] = useCart();
    const {user} = useContext(AuthContext);
    console.log(contest);
    // const axiosSecure = UseAxiosSecure();
    // const filteredContests = contest.filter(item => item.email === user.email);
  
    const details = useLoaderData();

    return (
        <div>
             <div>
           <div className="flex justify-evenly mb-8">
           {/* <h2 className="text-4xl">Register Contest: {contest.contest_name}</h2> */}
           <h2 className="text-4xl">Total Price: </h2>
           
           {/* {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn btn-primary">Pay</button>
                </Link>:
                <button disabled className="btn btn-primary">Pay</button>
                } */}
          

           </div>

           <div className="overflow-x-auto ">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="bg-gray-200">
        <th >
         #
        </th>
        {/* <th>Image</th> */}
        <th>Name</th>
        {/* <th>Price</th> */}
        <th>Registration</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
                 {/* {

                ((item, index) =>  <tr key={item._id}> */}
                    <th>
                     {/* {index + 1} */}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            {/* <img src={item.image} alt="Avatar Tailwind CSS Component" /> */}
                          </div>
                        </div>
                       
                      </div>
                    </td>
                    <td>
                     
                      {/* {details.contest_name} */}
                    </td>
                    {/* <td>${item.price}</td> */}
                    <th>
                     
                    </th>
                  {/* </tr> )
                 } */}

     
   
    </tbody>
  
    
  </table>
</div>

        </div>
        </div>
    );
};

export default RegContest;