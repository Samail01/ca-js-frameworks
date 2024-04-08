import { useCart } from "../../hook/useCartContext";
import { useNavigate } from "react-router-dom";

export function CartPage() {
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckoutSuccess = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className="container mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Your Shopping Cart
      </h2>
      <div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 p-4 border-b-2"
            >
              <img
                src={item.image.url}
                alt={item.image.alt}
                className="w-20 h-20 object-cover mr-4"
              />
              <span className="flex-grow">
                {item.title} - ${item.price}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">Your cart is empty.</div>
        )}
      </div>
      <div className="text-right mt-6">
        <div className="text-xl font-semibold">
          Total: ${getCartTotal().toFixed(2)}
        </div>
        <button
          onClick={handleCheckoutSuccess}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
