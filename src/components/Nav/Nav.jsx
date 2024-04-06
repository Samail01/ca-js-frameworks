import { Link } from "react-router-dom";
import NavLinks from "./Navlinks";

// eslint-disable-next-line react/prop-types
export function Nav({ active, handleActive }) {
  return (
    <nav
      className={`nav fixed top-0 right-0 h-full w-full bg-blue-dark transition-all lg:translate-x-0 lg:w-auto lg:static
       ${active ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="nav-wrapper wrapper w-full h-full flex-col">
        <div className=" h-[5rem] lg:hidden flex justify-end items-center">
          <Button handleActive={handleActive} />
        </div>
        {/* Får ut navlinks */}
        <ul
          className={`bg-blue-normal w-full h-full lg:flex lg:justify-end lg:space-x-28 lg:items-center p-5 ${
            active ? "lg:block" : "hidden"
          }`}
        >
          {NavLinks.map(({ id, path, label }) => (
            <li key={id}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Button({ handleActive }) {
  return (
    <button aria-label="close navigation" onClick={handleActive}>
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
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
