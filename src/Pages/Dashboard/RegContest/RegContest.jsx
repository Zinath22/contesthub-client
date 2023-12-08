
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import usePayments from "../../../Hook/usePayments";
// import { Helmet } from 'react-helmet-async';

const RegContest = () => {
  const [payments] = usePayments();
  const { user } = useContext(AuthContext);

  // Filter payments based on user email
  const filteredPayments = payments ? payments.filter(payment => payment?.email === user?.email) : [];
  console.log(filteredPayments);

  

  return (
   <div>
    {/* <Helmet></Helmet> */}
     <div className="w-[90%] mx-auto ">
    <h1 className="my-7 text-center text-lg ">Total Data:{filteredPayments.length}</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 ">
    {filteredPayments?.map((items) => {
      console.log(items);
      return (
        <div key={items._id} className=" shadow-xl rounded-lg p-4" >
          {/* <img src={items?.myContest.imgyyy} alt="" /> */}
          <h1 className="text-center py-7">Added By: {user.email}</h1>
          <h1 className="text-teal-500 text-center">Contest Name: {items.tag}</h1>
          <h1 className="text-teal-500 text-center">Prize: {items.prize}</h1>
        </div>
      );
    })}
    </div>
  </div>
   </div>
  

  );
};

export default RegContest;
