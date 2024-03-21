import { Nav } from "../Nav/Nav";
import logo from "../../assets/homepage/logo.png";

function Button() {
  return (
    <button aria-label="open navigation" className="lg:hidden">
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

export function Header() {
  return (
    <header className="header bg-red-400">
      <div className="header-wrapper outline h-full flex justify-between items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <Button />
        <Nav />
      </div>
    </header>
  );
}
