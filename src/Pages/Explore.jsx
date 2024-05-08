import TagButton from "../components/TagButton";
import { Link } from "react-router-dom";
export function Explore() {
  return (
    <div className="container">
      <h1 className="mt-16 dark:text-white">Explore</h1>
      <p className="text-xl text-gray-500 dark:text-neutral-400">
        Navigate through the pages.
      </p>
      <p className="text-sm text-gray-500 dark:text-neutral-400">
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
