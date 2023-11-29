// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useContext, useEffect, useState } from "react";
// import UseAxiosSecure from "../../Hook/UseAxiosSecure";
// import { AuthContext } from "../../providers/AuthProvider";
// import useCart from "../../Hook/useCart";
// import Swal from "sweetalert2";
// import { useLoaderData, useParams } from "react-router-dom";
// // import useAxiosSecure from "../../Hook/UseAxiosSecure";
// import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";
// // import { useNavigate } from "react-router-dom";
// // import ContestDetails from "./ContestDetails";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/UseAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic/useAxiosPublic";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


// const CheckOutForm = () => {
//   const [error, setError] = useState('');
//   const [transactionId, setTransactionId] = useState('');
//   const [clientSecret, setClientSecret] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosSecure = UseAxiosSecure();
//   const { user } = useContext(AuthContext);
//   const [contest] = useCart();
//   const myContest = useLoaderData()
//   console.log(myContest);
//   // const navigate = useNavigate();
//   // const price = cart.reduce((total, item) => total + item.price , 0)
//   const [contestbilling, setContestbilling] = useState();

//   const axiosPublic = useAxiosPublic()
//   const { id } = useParams();

//   console.log('123', id);
//   useEffect(() => {
//     const fetchSurveys = async () => {
//       try {
//         const response = await axiosPublic.get(`/contest/${id}`);
//         // Assuming the survey data is an array, update the state with the fetched data
//         console.log(12345, response);
//         setContestbilling(response.data)
//       } catch (error) {
//         // Handle error if the request fails
//         console.error('Error fetching surveys:', error);
//       }
//     };

//     fetchSurveys(); // Fetch surveys when the component mounts
//   }, [axiosPublic, id]);

//   console.log('billling', contestbilling);
//   const fee = contestbilling?.fee || 0;
//   const price = fee

//   // const price = 200

//   useEffect(() => {
//     axiosSecure.post('/create-payment-intent', { price: price })
//       .then(res => {
//         console.log(res.data.clientSecret);
//         setClientSecret(res.data.clientSecret);
//       })
//       .catch(error => {
//         console.error('Error fetching client secret:', error);
//       });
//   }, [axiosSecure, price]);

//   // useEffect( () =>{
//   //  axiosSecure.post('/create-payment-intent', {price: price})
//   //  .then(res => {
//   //     console.log(res.data.clientSecret);
//   //     setClientSecret(res.data.clientSecret);
//   //  })
//   // }, [axiosSecure, price])

//   const handlesubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return
//     }
//     const card = elements.getElement(CardElement)

//     if (card === null) {
//       return
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card
//     })

//     if (error) {
//       console.log('payment error', error);
//       setError(error.message)
//     }
//     else {
//       console.log('payment method', paymentMethod);
//       setError('')
//     }

//     // confirm payment 
//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: card,
//         billing_details: {
//           email: user?.email || 'anonymous',
//           name: user?.displayName || 'anonymous'
//         }
//       }
//     })

//     if (confirmError) {
//       console.log('confirm error');
//     }
//     else {
//       console.log('payment intent', paymentIntent);
//       if (paymentIntent.status === 'succeeded') {
//         console.log('transaction id', paymentIntent.id);
//         setTransactionId(paymentIntent.id);

//         // save payment in database 
//         const payment = {


//           contest_name: contest.map(item => item.contest_name),
//           contest_creatorName: contest.map(item => item.contest_creatorName),
//           created_by: contest.map(item => item.email),
//           email: user.email,
//           price: price,
//           transactionId: paymentIntent.id,
//           date: new Date(),
//           contestIds: contest.map(item => item._id),
//           allContestIds: contest.map(item => item.contestId),
//           myContest,
//           winner: false,
//           status: 'sucess'
//         }


//         const res = await axiosSecure.post('/payments', payment);
//         // refetch();
//         if (res.data?.paymentResult?.insertedId) {
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Thank you for the payment",
//             showConfirmButton: false,
//             timer: 1500
//           });
//           // navigate('/dashboard/paymentHistory')
//         }


//       }
//     }

//   }


//   return (
//     <form onSubmit={handlesubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button className="btn bg-blue-400 my-5" type="submit" >
//         Pay
//       </button>
//       <p className="text-red-500">{error}</p>
//       {transactionId && <p className="text-green-900">Your Transaction Id: {transactionId}</p>}
//     </form>
//   );
// };

// export default CheckOutForm;

// // disabled={!stripe || !clientSecret}





const CheckOutForm = () => {
  const [contestbilling, setContestbilling] = useState(null);
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    // const [cart, refetch] = UseCart();
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic()
    
  const { id } = useParams();
  
  console.log('123', id);
  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axiosPublic.get(`/contest/${id}`);
        // Assuming the survey data is an array, update the state with the fetched data
        console.log(12345, response);
        setContestbilling(response.data)
      } catch (error) {
        // Handle error if the request fails
        console.error('Error fetching surveys:', error);
      }
    };

    fetchSurveys(); // Fetch surveys when the component mounts
  }, []);

  console.log('billling',contestbilling);
  const fee = contestbilling?.fee || 0 ;
  // const price = fee
    // const totalPrice = cart.reduce((total, item) => total + item.price , 0)
  const totalPrice = fee;
    useEffect( () =>{
      if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent', {price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
      }

    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) =>{
       event.preventDefault();
       
       if(!stripe || !elements){
        return;
       }
       const card = elements.getElement(CardElement)

       if(card == null){
      return;
       }

       const {error, paymentMethod} = await stripe.createPaymentMethod({
         type: 'card',
        card
       });
    
       if(error){
        console.log('payment error', error);
        setError(error.message);
       }
       else{
        console.log('payment method', paymentMethod);
        setError('');
       }

      //  confirm payment 
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
          }
        }
      })

      if(confirmError){
        console.log('confirm error' )
      }
      else{
        console.log('paymentIntent', paymentIntent)
        if(paymentIntent.status === 'succeeded'){
          console.log('transaction id', paymentIntent.id);
          setTransactionId(paymentIntent.id);

          // now save the payment in the database 
          const payment = {
            email: user.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            data: new Date(), //utc data convert. use moment js to 
            // cartIds: cart.map(item => item._id),
            // menuItemIds: cart.map(item => item.menuId),
            contest_id:contestbilling?._id,
            creator_name:contestbilling?.contest_name,

            creator_email:contestbilling?.email,
            fee:contestbilling?.fee,
            tag:contestbilling?.tag,
            prize:contestbilling?.prize,
            deadline:contestbilling?.deadline,
            
            status: 'pending',

            winner: false
          }

          

        // const res = await axiosSecure.post('/payments', payment);
        // const res = await axiosSecure.post('/payments',payment);
        const res = await axiosSecure.post('/payments', payment);
        // console.log('payment saved', res.data);
        // refetch();
        if(res.data?.paymentResult?.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for the payment",
            showConfirmButton: false,
            timer: 1500
        });
        navigate('/')
        }
        
        }
      }
    }

    return (
        <form onSubmit={handleSubmit}>
         <SectionTitle heading={'payment'}></SectionTitle>
         <h1>Fee:${fee}</h1>
           <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
        <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-500">Your  transaction id:{transactionId}</p>}
        </form>
    );
};

export default CheckOutForm;