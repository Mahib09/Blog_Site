import TagButton from "../components/TagButton";
import { Link } from "react-router-dom";
export function Explore() {
  return (
    <div className="container">
      <h1 className="text-4xl mt-12 sm:text-7xl dark:text-white">Explore</h1>
      <p className="text-base text-gray-500 mt-2 mb-4 sm:text-xl dark:text-slate-200">
        Navigate through the pages.
      </p>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400">
        EXPLORE BY TAG
      </p>
      <div className="flex gap-2 mt-2">
        <Link to="/">
          <TagButton name="All" />
        </Link>
      </div>
    </div>
  );
}
