import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../components/PaymentForm";

const PUBLIC_KEY =
  "pk_test_51IMgafGkwSJ9Px2FczS4aNCSXXca66sIGeK26nujzm3UN0zVRAyjbMSZZQiDC3YWkXTY88OkJMSZIXYQviME5oAp00Lh1iwOCQ";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
