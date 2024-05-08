import { Home, Telescope } from "lucide-react";
import { Link } from "react-router-dom";
let logo = "<mm/>";
export function Header() {
  return (
    <div className="container">
      <div className="flex gap-4 mt-12">
        <Link
          to="/"
          className="text-lg font-bold text-gray-500 hover:text-black sm:text-2xl dark:text-neutral-400 dark:hover:text-white"
        >
          {logo}
        </Link>
        <Link
          to="/"
          className="text-base ml-auto text-gray-500 hover:text-black sm:text-lg dark:text-neutral-400 dark:hover:text-white"
        >
          <Home
            size={18}
            className="inline mr-1 mb-2 sm:h-[20px] sm:w-[20px]"
          />
          Home
        </Link>
        <Link
          to="/Explore"
          className="text-base text-gray-500 hover:text-black sm:text-lg dark:text-neutral-400 dark:hover:text-white"
        >
          <Telescope
            size={18}
            className="inline mr-1 mb-2 sm:h-[20px] sm:w-[20px]"
          />
          Explore
        </Link>
      </div>
    </div>
  );
}
