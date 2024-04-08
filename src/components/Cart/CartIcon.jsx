import { useNavigate } from "react-router-dom";
import { useCart } from "../../hook/useCartContext";

export function CartIcon() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <button onClick={goToCart} className="relative lg:relative lg:m-5 lg:z-50">
      {/* Badge showing number of items in cart */}
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-2 py-1">
          {cartItems.length}
        </span>
      )}

      {/* SVG for the cart icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 011.5 2.625V18a3 3 0 01-3 3h-9m0-3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </button>
  );
}
