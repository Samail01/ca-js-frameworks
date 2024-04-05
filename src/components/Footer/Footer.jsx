export function Footer() {
  return (
    <footer className="bg-blue-dark text-white p-7">
      <div className="footer-wrapper block-wrapper">
        <div className="flex justify-center text-center">
          <div className="mb-4">
            <h2 className="text-xl font-extrabold text-white tracking-tight p-5">
              Every<span className="text-blue-normal">Cart</span>
            </h2>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Pariatur, molestias?
            </p>
            <div className="mb-4 p-5">
              <p>Bergen, 5162</p>
              <p>Firma@hotmail.com</p>
            </div>
          </div>
        </div>
        <hr className="my-3 border-gray-600" />
        <div className="text-center">
          <p>&copy; 2024 Samail Pugaev. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
