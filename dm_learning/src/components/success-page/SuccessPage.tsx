"use client";
import { useRouter } from "next/navigation";
import "../../../public/css/payment-pages.css";

const SuccessPage = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <section>
      <div className="dml-container">
        <div className="payment-modal">
            <span><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z"/></svg></span>
          <h1 className="payment-success">Your payment was successful</h1>
          <p>
          Thank you for your payment. we will
          be in contact with more details shortly
          </p>
          <button onClick={handleHomeClick} className="dml-button">
            Go to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
