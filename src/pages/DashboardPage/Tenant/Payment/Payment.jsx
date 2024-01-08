import React from "react";
import useCart from "../../../../Hooks/useCart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51NqqVXFuox1PcYmePurXvgt6Saxxv1WTLGB6BslIGvnEXckTT3KGAEJR6DDAX6mfTtKROZTdUfUykpjSa8kXNUTY00AOpwN21d')

const Payment = () => {
  const { cart, reset, setReset } = useCart();
  const total = cart?.reduce((sum, item) => sum + item.rent, 0);
  const price = parseFloat(total?.toFixed(2));
  console.log("total: ", total);
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          cart={cart}
          reset={reset}
          setReset={setReset}
          price={total}
          
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
