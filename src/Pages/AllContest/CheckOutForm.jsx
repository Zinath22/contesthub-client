import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../Hook/UseAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import useCart from "../../Hook/useCart";
// import ContestDetails from "./ContestDetails";


const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret , setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();
    const {user} = useContext(AuthContext);
    const [cart] = useCart();
    // const price = cart.reduce((total, item) => total + item.price , 0)
    const price = 200

    useEffect( () =>{
     axiosSecure.post('/create-payment-intent', {price: price})
     .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
     })
    }, [axiosSecure, price])

    const handlesubmit = async(event) =>{
          event.preventDefault();

          if(!stripe || !elements){
            return
          }
          const card = elements.getElement(CardElement)

          if(card === null){
            return
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          })

          if(error){
            console.log('payment error', error);
            setError(error.message)
          }
          else{
            console.log('payment method', paymentMethod);
            setError('')
          }

          // confirm payment 
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                 email: user?.email || 'anonymous',
                 name: user?.displayName || 'anonymous'
              }
            }
          })

          if(confirmError){
            console.log('confirm error');
          }
          else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
              console.log('transaction id', paymentIntent.id);
              setTransactionId(paymentIntent.id);

              // save payment in database 
              const payment = {
                email: user.email,
                price: price,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartsIds: cart.map(item => item._id),
                // allContestId: contest.map(item => item._id),
                status: 'pending'
              }

            const res = await  axiosSecure.post('/payments', payment);
            console.log('payment saved',res);
              
            }
          }

    }


    return (
       <form onSubmit={handlesubmit}>
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
      <button className="btn bg-blue-400 my-5" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && <p className="text-green-900">Your Transaction Id: {transactionId}</p>}
       </form>
    );
};

export default CheckOutForm;