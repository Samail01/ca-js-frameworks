import NavLinks from "./Navlinks";
import { Link } from "react-router-dom";

export function Nav({ active, handleActive }) {
  function close() {
    handleActive();
  }

  console.log(active, " in nav");

  console.log(active, handleActive);
  return (
    <nav
      className={`nav fixed top-0 right-0 h-full w-full bg-orange-400 
       ${active ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="nav-wrapper wrapper bg-purple-400 w-full h-full flex-col">
        <div className="bg-white h-[5rem] lg:hidden flex justify-end items-center">
          <Button handleActive={handleActive} />
        </div>
        {/* Får ut navlinks */}
        <ul className="bg-pink-400 w-full h-full">
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
  console.log(handleActive, " btn");
  return (
    <button onClick={handleActive} aria-label="close navigation">
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
