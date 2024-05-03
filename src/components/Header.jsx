import { Link } from "react-router-dom";
let logo = "<mm/>";
export function Header() {
  return (
    <div className="flex gap-4 container">
      <Link
        to="/"
        className="text-3xl font-bold text-gray-500 hover:text-black"
      >
        {logo}
      </Link>
      <Link to="/" className="text-xl ml-auto text-gray-500 hover:text-black">
        Home
      </Link>
      <Link to="/" className="text-xl text-gray-500 hover:text-black">
        Explore
      </Link>
    </div>
  );
}
