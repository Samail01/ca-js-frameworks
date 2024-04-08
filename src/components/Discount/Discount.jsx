// eslint-disable-next-line react/prop-types
export function Discount({ originalPrice, discountedPrice }) {
  if (!discountedPrice || originalPrice <= discountedPrice) {
    return null;
  }
  const discountPercentage = Math.round(
    100 - (discountedPrice / originalPrice) * 100
  );

  return (
    <div className="absolute top-0 right-0 bg-red-500 rounded-bl text-white px-2 py-1">
      {discountPercentage}%
    </div>
  );
}
