import { Link } from "react-router-dom";
import NavLinks from "./Navlinks";
import { CartIcon } from "../Cart/CartIcon";

// eslint-disable-next-line react/prop-types
export function Nav({ active, handleActive }) {
  // Function to close the nav when a link is clicked
  const handleLinkClick = () => {
    handleActive(); // This function toggles the navigation
  };

  return (
    <nav
      className={`nav fixed z-40 top-0 right-0 h-full w-full bg-blue-dark transition-all lg:translate-x-0 lg:w-auto lg:static
       ${active ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="nav-wrapper wrapper w-full h-full flex-col">
        <div className="h-[5rem] lg:hidden flex justify-end items-center p-5">
          <Button handleActive={handleActive} />
        </div>
        <ul
          className={`flex w-full h-full text-2xl lg:flex lg:justify-end lg:items-center p-5 ${
            active ? "flex-col" : "hidden"
          } lg:flex-row lg:space-x-8`}
        >
          {NavLinks.map(({ id, path, label }) => (
            <li key={id} className="p-2">
              <Link
                to={path}
                onClick={handleLinkClick}
                className="text-white hover:text-gray-200"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="p-2 lg:p-5">
            <CartIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ handleActive }) {
  return (
    <button
      aria-label="close navigation"
      onClick={handleActive}
      className="p-2"
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
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
