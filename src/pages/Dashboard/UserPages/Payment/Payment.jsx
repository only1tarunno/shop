import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import InnerSectiontitle from "../../../../components/Dashboard/InnerSectiontitle";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_payment_api);

const Payment = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <InnerSectiontitle
          subtitle="Confirm Your Payment"
          title="Payment"
        ></InnerSectiontitle>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
