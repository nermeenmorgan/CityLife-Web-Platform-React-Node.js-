import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function Payment() {
  // States
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

      
    // Functions
  useEffect(() => {
    axios.get("http://localhost:5253/config")
    .then((res)=>{

      setStripePromise(loadStripe(res.data.publishableKey));
    })
  }, []);

  useEffect(() => {
    axios.post("http://localhost:5253/create-payment-intent",JSON.stringify({}))
    .then((res)=>{

      setClientSecret(res.data.clientSecret)
    })
  }, []);

  return (
    <>

      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
