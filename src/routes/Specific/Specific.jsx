import { useParams } from "react-router-dom";
import { useProduct } from "../../hook/useProduct";
import { Discount } from "../../components/Discount/Discount";
import { useCart } from "../../hook/useCartContext";

export function Specific() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center justify-center p-6">
          <div className="relative md:w-1/2 lg:w-1/3">
            {product.discountedPrice && (
              <Discount
                originalPrice={product.price}
                discountedPrice={product.discountedPrice}
              />
            )}
            <img
              src={product.image.url}
              alt={product.image.alt}
              className="w-full h-auto object-contain bg-white p-6"
            />
          </div>
          <div className="md:w-1/2 lg:w-2/3 md:ml-6">
            <h1 className="text-2xl font-bold mt-4 md:mt-0">{product.title}</h1>
            <div className="text-lg mt-2">{product.description}</div>
            <div className="flex items-center my-4">
              {product.discountedPrice ? (
                <>
                  <div className="text-md text-gray-500 line-through">
                    {product.price.toFixed(2)} kr
                  </div>
                  <div className="text-xl text-red-600 ml-4">
                    {product.discountedPrice.toFixed(2)} kr
                  </div>
                </>
              ) : (
                <div className="text-xl font-semibold">
                  {product.price.toFixed(2)} kr
                </div>
              )}
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-black text-white py-3 px-6 m-5 rounded-lg mt-6 hover:bg-gray-900 transition-colors duration-300"
            >
              Add to Cart
            </button>
            <p className="bg-gray-200 text-gray-600 py-2 px-4 inline-block rounded-full text-xs">
              {product.rating} ★
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
