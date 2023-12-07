import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useCart from "../../../../hooks/useCart";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setclientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = 10;
  //   cart.reduce((sum, item) => sum + item.price, 0).toFixed(1);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setclientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("PaymentMethod", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "xa@gmail.com",
            name: user?.displayName || "mr. X",
          },
        },
      });

    if (confirmError) {
      console.log("confirm errro", confirmError);
    } else {
      console.log("sxucess", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("trans id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the panent in database
        const payMent = {
          email: user.email,
          price: parseFloat(totalPrice),
          transactionId: paymentIntent.id,
          date: new Date(), //use moment js to convert date for other country
          cartIds: cart.cartProducts.map((item) => item._id),
          productItemIds: cart.cartProducts.map((item) => item.menuId),
          productQuantity: cart.totalQuantity,
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payMent);

        refetch();
        if (res.data?.message === "success") {
          Swal.fire({
            icon: "success",
            title: "Your payment is success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
    // --------------------------------------------
  };

  return (
    <div className="max-w-xl w-full mx-auto py-16">
      {" "}
      <form className="pt-10" onSubmit={handleSubmit}>
        <div className="border p-2 max-w-xl">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          className="btn w-full mt-3 bg-[#f76b6a] border-[#f76b6a] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="bg-red-600">{error}</p>
        {transactionId && (
          <p className="text-green-400">Your trans Id: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
