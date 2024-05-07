import { Link } from "react-router-dom";
let logo = "<mm/>";
export function Header() {
  return (
    <div className="flex gap-4 container mt-5">
      <Link
        to="/"
        className="text-lg font-bold text-gray-500 hover:text-black sm:text-2xl"
      >
        {logo}
      </Link>
      <Link
        to="/"
        className="text-base ml-auto text-gray-500 hover:text-black sm:text-lg"
      >
        Home
      </Link>
      <Link
        to="/Explore"
        className="text-base text-gray-500 hover:text-black sm:text-lg"
      >
        Explore
      </Link>
    </div>
  );
}
