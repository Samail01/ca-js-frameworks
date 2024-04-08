import { useNavigate } from "react-router-dom";

export function CheckoutSuccessPage() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-green-600 mb-4">
        Checkout Successful!
      </h2>
      <p className="text-2xl">Thank you for your purchase.</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 mt-4 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <button
        onClick={goToHome}
        className="mt-4 bg-blue-500 text-white text-lg font-semibold px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
      >
        Back to Store
      </button>
    </div>
  );
}
