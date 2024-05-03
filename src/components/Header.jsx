import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex gap-4 container">
      <Link to="/" className="text-2xl text-gray-500 hover:text-black">
        mm
      </Link>
      <Link to="/" className="text-xl ml-auto text-gray-500 hover:text-black">
        Home
      </Link>
      <Link to="/Explore" className="text-xl text-gray-500 hover:text-black">
        Explore
      </Link>
    </div>
  );
}
