import { useEffect } from "react";
import { useFetch } from "../../hook/usefetch";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://v2.api.noroff.dev/online-shop");

  useEffect(() => {
    if (products) {
      console.log(products, "data here");
    }
  }, [products]);

  /* For specific page */
  const handleViewProduct = (id) => {
    navigate(`/specific/${id}`);
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return (
      <div className="text-center text-red-500">
        Error fetching data: {error.message}
      </div>
    );

  if (!products) return null;

  return (
    <>
      <div className="relative">
        <h3 className="text-7xl  top-1/3 flex flex-wrap justify-center absolute w-full text-white">
          <span className="mr-4">Welcome To Our </span>
          <span className="text-blue-normal"> Online Shop</span>
        </h3>
        <img
          className="w-[100%] h-[30rem] object-cover"
          src="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      {/* Products list */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Recent Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col border rounded overflow-hidden shadow-lg h-full"
            >
              <div className="flex-shrink-0">
                <img
                  className="w-full h-48 object-cover"
                  src={product.image.url}
                  alt={product.image.alt}
                />
              </div>
              <div className="p-4 flex-grow">
                <h2 className="font-bold text-lg mb-2">{product.title}</h2>
                <p className="text-gray-700 text-base mb-4">
                  {product.description}
                </p>
                <p className="text-gray-900 font-semibold">${product.price}</p>
                {product.discountedPrice && (
                  <p className="text-gray-600 text-sm line-through">
                    Was ${product.discountedPrice}
                  </p>
                )}
                <p className="text-yellow-500 text-xs">
                  Rating: {product.rating}
                </p>
              </div>
              <div className="mt-auto">
                <button
                  className="flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 w-full"
                  onClick={() => handleViewProduct(product.id)}
                >
                  View
                </button>
                <button className="flex justify-center items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
