import { Nav } from "../Nav/Nav";
import { useToggler } from "../../hook/useToggler";
import { Cart } from "../../routes/Cart/Cart";

export function Header() {
  const [active, handleActive] = useToggler();

  return (
    <header className="header bg-blue-dark">
      <div className="header-wrapper outline h-full flex justify-between items-center p-5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Every<span className="text-blue-normal">Cart</span>
        </h1>
        <div className="flex items-center text-white">
          <Cart />
          <Button handleActive={handleActive} />
        </div>
        <Nav active={active} handleActive={handleActive} />
      </div>
    </header>
  );
}

/* Components  */
function Button({ handleActive }) {
  return (
    <button
      aria-label="open navigation"
      className="lg:hidden"
      onClick={handleActive}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
