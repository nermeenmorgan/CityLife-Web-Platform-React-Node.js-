import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5253/config")
    .then((res)=>{
      // console.log(res.data.publishableKey)
      setStripePromise(loadStripe(res.data.publishableKey));
    })
  }, []);

  useEffect(() => {
    axios.post("http://localhost:5253/create-payment-intent",JSON.stringify({}))
    .then((res)=>{
      // console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
  }, []);

  return (
    <>
      {/* <h3>Payment</h3> */}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
